"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
import Link from "next/link"
import {
  FileText,
  Clock,
  CalendarCheck,
  Check,
  ChevronDown,
  Pill,
  PillIcon as Capsule,
  AlertCircle,
  Phone,
} from "lucide-react"

export default function FirstVisitPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "かゆみ止めの薬はありますか？",
      answer: "はい、症状に応じて適切な外用薬や内服薬を処方いたします。かゆみの原因を調べて根本的な治療を行います。",
    },
    {
      question: "ほくろは取れますか？",
      answer:
        "ほくろの状態を診察させていただき、必要に応じて切除手術や液体窒素治療を行います。悪性の可能性がある場合は詳しく検査いたします。",
    },
    {
      question: "子どもも診てもらえますか？",
      answer:
        "はい、小児皮膚科も行っております。おむつかぶれ、とびひ、水いぼ、アトピーなどお子様の肌トラブルもお任せください。",
    },
    {
      question: "駐車場はありますか？",
      answer:
        "はい、クリニック前に3台分の駐車場をご用意しております。満車の場合は近隣のコインパーキングをご利用ください。",
    },
    {
      question: "予約は必要ですか？",
      answer:
        "基本的に予約は不要です。受付順に診察いたします。混雑時はお待ちいただく場合がございますが、急患の方は随時対応いたします。",
    },
    {
      question: "保険は使えますか？",
      answer: "はい、各種健康保険をご利用いただけます。初診時は保険証を必ずお持ちください。",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">初診の方へ</h1>
            <p className="text-xl text-gray-600 leading-relaxed">初めてご来院される方へのご案内とよくあるご質問</p>
          </div>
        </div>
      </section>

      {/* 初診案内セクション */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">初めて受診される方へ</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">持参するもの</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    健康保険証
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    お薬手帳
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    診察券（再診の方）
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    紹介状（他院からの方）
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">診察の流れ</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      1
                    </span>
                    <span>受付で問診票記入</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      2
                    </span>
                    <span>待合室でお待ちください</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      3
                    </span>
                    <span>診察室でお名前をお呼び</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      4
                    </span>
                    <span>診察・治療・お会計</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CalendarCheck className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">予約について</h3>
                <div className="text-gray-600 space-y-3">
                  <p className="text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      基本的に予約不要
                    </span>
                  </p>
                  <p className="text-center">受付順に診察いたします</p>
                  <p className="text-center text-sm">混雑時はお待ちいただく場合がございます</p>
                  <p className="text-center text-sm font-semibold text-red-600">急患は随時受付</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">よくあるご質問</h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transform transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* お薬についてセクション */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">お薬について</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Pill className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">塗り薬の使い方</h3>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>・清潔な手で薄く塗る</li>
                  <li>・指示された回数を守る</li>
                  <li>・症状が改善しても完治まで継続</li>
                  <li>・使用期限を確認する</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Capsule className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">飲み薬の注意点</h3>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>・指示された時間に服用</li>
                  <li>・水またはぬるま湯で飲む</li>
                  <li>・食前・食後の指示を守る</li>
                  <li>・他の薬との飲み合わせに注意</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <AlertCircle className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">副作用について</h3>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>・異常を感じたら使用中止</li>
                  <li>・すぐに当院へご連絡ください</li>
                  <li>・アレルギー症状に注意</li>
                  <li>・妊娠中の方は事前にご相談</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">ご不明な点がございましたらお気軽にお電話ください</h2>
            <p className="text-xl text-green-100 mb-8">スタッフが丁寧にお答えいたします</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03-1234-5678"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                03-1234-5678
              </a>
              <Link
                href="/access"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
              >
                アクセス情報
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
