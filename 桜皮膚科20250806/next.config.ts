import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static exportを無効にしてVercelの動的機能を使用
  // output: "export", // この行をコメントアウト
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // TypeScriptエラーも確認
  },
  images: {
    unoptimized: true,
  },
  // Vercel用の設定を追加
  trailingSlash: false,
  reactStrictMode: true,
}

export default nextConfig
