# Portfolio Website

Next.js と Tailwind CSS で構築されたモダンなポートフォリオサイトです。

## 🚀 特徴

- **レスポンシブデザイン**: あらゆるデバイスで美しく表示
- **モダンUI**: 白背景とモノトーンで統一された洗練されたデザイン
- **アニメーション**: Framer Motionによるスムーズなページ遷移とスクロールアニメーション
- **お問い合わせフォーム**: Resend APIを使用したメール送信機能
- **AIチャットボット**: 将来のAI統合に向けたプレースホルダー実装

## 📁 ページ構成

- **トップページ** (`/`): Hero セクション、スキル概要、最新プロジェクト
- **プロジェクト** (`/projects`): フィルタリング可能なプロジェクト一覧
- **研究** (`/research`): 学術・産業・個人研究の紹介
- **自己紹介** (`/about`): 経歴タイムライン、スキル、個人的興味
- **お問い合わせ** (`/contact`): メール送信フォーム

## 🛠️ 技術スタック

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Email**: Resend API
- **Language**: TypeScript
- **Icons**: Lucide React

## 📦 セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example` を `.env.local` にコピーして、実際の値を設定してください：

```bash
cp .env.example .env.local
```

`.env.local` を編集：

```env
RESEND_API_KEY=your_actual_resend_api_key
RESEND_DOMAIN=your_verified_domain
```

### 3. Resend API の設定

1. [Resend](https://resend.com/) でアカウントを作成
2. API キーを取得
3. ドメインを認証（または resend の初期ドメインを使用）

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 🚀 デプロイ

### Vercel での自動デプロイ

1. GitHub にプロジェクトをプッシュ
2. [Vercel](https://vercel.com/) でインポート
3. 環境変数を設定
4. デプロイ完了

### 環境変数の設定 (Vercel)

Vercel ダッシュボードで以下の環境変数を設定：

- `RESEND_API_KEY`: Resend API キー
- `RESEND_DOMAIN`: 認証済みドメイン

## 📝 カスタマイズ

### プロジェクト情報の更新

- `src/pages/projects.tsx`: プロジェクト一覧の更新
- `src/pages/research.tsx`: 研究内容の更新
- `src/pages/about.tsx`: 個人情報とスキルの更新

### スタイルの変更

- `tailwind.config.ts`: カスタムカラーやアニメーションの追加
- `src/styles/globals.css`: グローバルスタイルの調整

### AIチャットボットの有効化

`src/components/AIWidget.tsx` を編集して、実際のAI APIと接続してください。

## 🔧 スクリプト

```bash
npm run dev      # 開発サーバー起動
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLint チェック
```

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

プルリクエストやイシューは歓迎します！

---

**Note**: このプロジェクトは個人ポートフォリオサイトのテンプレートとして作成されています。個人情報やプロジェクト内容は適宜更新してください。 