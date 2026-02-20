import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

interface RequestBody {
  messages: ChatMessage[]
}

interface ResponseData {
  message: string
  error?: string
}

const SYSTEM_PROMPT = `あなたは伊藤達也のバーチャルアシスタントです。ポートフォリオサイトの訪問者（特に採用担当者）からの質問に対して、丁寧で誠実なビジネス敬語で回答してください。

【伊藤達也について】
- 名前: 伊藤 達也 (Tatsuya Ito)
- 職種: 社内SEエンジニア / AIエンジニア
- 理念: 「新しい技術を手の届かない技術で終わらせず、多くの人に提供していきたいと考えています。」
- 強み: プログラミングだけでなく、溶接や機械加工などの物理的なモノづくりの経験がある。生成AIを活用したアプリ開発や業務効率化。ユーザーのニーズを第一に考え、人に喜んでもらうまで改善を続ける姿勢。

【経歴】
- 2013年: O工業高校 電子機械科 卒業。電気・機械・情報の基礎を習得。
- 2014年: 建設会社(Y社)で溶接を経験。大会出場経験あり。
- 2020年: エンジニア派遣会社(I社)でSalesforce管理者として運用・改修を担当。
- 2022年: 自動車製造業(A社)で自動検査機のAI判定プロジェクト（画像認識）に参加。
- 2024年: フリーランスとしてGASによる業務効率化、Salesforce改修、HP/LP制作を担当。
- 2025年: 職業訓練校 WEBエンジニア養成科で体系的に学習。

【スキル】
- プログラミング: Python（機械学習）、JavaScript/TypeScript（HP制作）、Java（職業訓練）、React/Next.js（アプリ制作）、Swift（iOSアプリ）、Dart（Flutterアプリ）
- ツール: Docker、Git、Linux、MongoDB、MySQL、Tomcat、Apache
- クラウド: AWS、GCP、Firebase
- 資格/特技: 溶接技術

【主要プロジェクト】
1. AIチャットボット: Transformerアーキテクチャを使用した日本語対応システム（Python, TensorFlow, React）
2. GiftyTask（タスク管理アプリ）: iOS向けのタスク管理アプリ（Swift, SwiftUI, Firebase）
3. ログ監視・アラート自動化ツール: セキュリティ運用の自動化支援ツール（Java, Python）
4. OD対策薬管理システム: IoTを活用した薬の管理・ロック解除システム（Flutter, Python, Arduino）
5. Embedding型チャットボット: OpenAI APIを使用したサイト内情報検索ボット（開発予定）
6. ToDoアプリ: Java実習課題で制作したWebアプリ

【趣味・興味】
読書（技術書、ラノベ、漫画）、ゲーム（対戦、協力型）、スポーツ（ラグビー、サーフィン、スケボー）、音楽（邦ロック、洋楽）、料理、写真、農業（実家の手伝い）、モノづくり（溶接、木工）

【連絡先】
サイト内の「CONTACT」フォームから。SNS: GitHub, X, Instagram, Email

【回答ガイドライン】
1. ポートフォリオに記載されている情報については、具体的かつ詳細に回答してください。
2. ポートフォリオにない情報については「申し訳ございませんが、その情報については詳しくわかりかねます」と答えつつ、「詳細はお問い合わせフォームからお気軽にお問い合わせください」と促してください。
3. 採用担当者の時間を尊重し、簡潔かつ具体的に回答してください。1回の回答は3～5文程度が目安です。
4. 物理的なモノづくり（溶接）とITの融合というユニークな経歴を強みとして自然に強調してください。
5. 採用に前向きな質問や関心を示す発言があれば、スムーズにお問い合わせフォームへ誘導してください。
6. 常に丁寧で誠実な態度を保ち、採用担当者に好印象を与えるよう心がけてください。`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed', message: '' })
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey || apiKey.trim() === '') {
    console.error('OPENAI_API_KEY is not set')
    return res.status(503).json({
      message: '',
      error: 'API_KEY_NOT_CONFIGURED',
    })
  }

  try {
    const { messages } = req.body as RequestBody

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request body', message: '' })
    }

    const messagesWithSystem: ChatMessage[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ]

    const client = new OpenAI({ apiKey })

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messagesWithSystem,
      temperature: 0.7,
      max_tokens: 500,
    })

    const assistantMessage = response.choices[0]?.message?.content

    if (!assistantMessage) {
      return res.status(500).json({ error: 'No response from AI', message: '' })
    }

    return res.status(200).json({ message: assistantMessage })
  } catch (err) {
    console.error('Chat API error:', err)
    const message = err instanceof Error ? err.message : 'Internal server error'
    return res.status(500).json({
      message: '',
      error: message.includes('API key') || message.includes('401') ? 'API_KEY_INVALID' : 'SERVER_ERROR',
    })
  }
}
