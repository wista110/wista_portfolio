import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
}

const createEmailTemplate = (data: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>新しいお問い合わせ</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">新しいお問い合わせが届きました</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #667eea;">
        <h2 style="color: #495057; margin-top: 0;">お問い合わせ詳細</h2>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #495057;">お名前:</strong><br>
          <span style="font-size: 16px;">${data.name}</span>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #495057;">メールアドレス:</strong><br>
          <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #495057;">件名:</strong><br>
          <span style="font-size: 16px;">${data.subject}</span>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #495057;">メッセージ:</strong><br>
          <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 8px; white-space: pre-wrap; border: 1px solid #dee2e6;">${data.message}</div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 14px; color: #6c757d;">
          <p>受信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
          <p>このメールはポートフォリオサイトのお問い合わせフォームから送信されました。</p>
        </div>
      </div>
      
      <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #6c757d;">
        <p>Portfolio Website Contact Form</p>
      </div>
    </body>
    </html>
  `
}

const createAutoReplyTemplate = (data: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>お問い合わせありがとうございます</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">お問い合わせありがとうございます</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 25px; border-radius: 8px;">
        <p style="font-size: 16px; margin-bottom: 20px;">${data.name} 様</p>
        
        <p>この度は、私のポートフォリオサイトよりお問い合わせいただき、誠にありがとうございます。</p>
        
        <p>以下の内容でお問い合わせを承りました：</p>
        
        <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border: 1px solid #dee2e6;">
          <p><strong>件名:</strong> ${data.subject}</p>
          <p><strong>お問い合わせ内容:</strong></p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message}</div>
        </div>
        
        <p>通常、24時間以内にご返信させていただきます。お急ぎの場合は、直接メールアドレス（contact@example.com）までご連絡ください。</p>
        
        <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 8px;">
          <h3 style="color: #495057; margin-top: 0;">今後ともよろしくお願いいたします</h3>
          <p style="margin-bottom: 0;">AI・機械学習・自然言語処理に関するプロジェクトや研究について、お気軽にご相談ください。</p>
        </div>
      </div>
      
      <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #6c757d;">
        <p>Portfolio Website</p>
        <p>このメールは自動送信されています。</p>
      </div>
    </body>
    </html>
  `
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, subject, message }: ContactFormData = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'すべての必須フィールドを入力してください' })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: '有効なメールアドレスを入力してください' })
    }

    if (message.length < 10) {
      return res.status(400).json({ error: 'メッセージは10文字以上で入力してください' })
    }

    // Sanitize input
    const sanitizedData: ContactFormData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return res.status(500).json({ error: 'メール送信サービスが設定されていません' })
    }

    const fromEmail = process.env.RESEND_DOMAIN 
      ? `contact@${process.env.RESEND_DOMAIN}` 
      : 'contact@example.com'

    // Send notification email to yourself
    const notificationEmailResult = await resend.emails.send({
      from: fromEmail,
      to: ['contact@example.com'], // Replace with your actual email
      subject: `新しいお問い合わせ: ${sanitizedData.subject}`,
      html: createEmailTemplate(sanitizedData),
      text: `
新しいお問い合わせが届きました

お名前: ${sanitizedData.name}
メールアドレス: ${sanitizedData.email}
件名: ${sanitizedData.subject}

メッセージ:
${sanitizedData.message}

---
受信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
      `,
      reply_to: sanitizedData.email,
    })

    if (notificationEmailResult.error) {
      console.error('Notification email error:', notificationEmailResult.error)
      throw new Error('通知メールの送信に失敗しました')
    }

    // Send auto-reply email to the user
    const autoReplyResult = await resend.emails.send({
      from: fromEmail,
      to: [sanitizedData.email],
      subject: 'お問い合わせありがとうございます - Portfolio',
      html: createAutoReplyTemplate(sanitizedData),
      text: `
${sanitizedData.name} 様

この度は、私のポートフォリオサイトよりお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを承りました：

件名: ${sanitizedData.subject}

お問い合わせ内容:
${sanitizedData.message}

通常、24時間以内にご返信させていただきます。
お急ぎの場合は、直接メールアドレス（contact@example.com）までご連絡ください。

今後ともよろしくお願いいたします。

Portfolio Website
      `,
    })

    if (autoReplyResult.error) {
      console.error('Auto-reply email error:', autoReplyResult.error)
      // Don't throw error for auto-reply failure, just log it
    }

    console.log('Contact form submission successful:', {
      notificationId: notificationEmailResult.data?.id,
      autoReplyId: autoReplyResult.data?.id,
      timestamp: new Date().toISOString(),
    })

    return res.status(200).json({ 
      message: 'メッセージを送信しました。ご返信をお待ちください。',
      id: notificationEmailResult.data?.id 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    return res.status(500).json({ 
      error: 'メッセージの送信に失敗しました。時間をおいて再度お試しください。' 
    })
  }
} 