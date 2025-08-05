"use client"

import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  CalendarCheck,
  Train,
  Clock,
  Hand,
  Eye,
  HeartPulse,
  Footprints,
} from "lucide-react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "/images/clinic-exterior-sakura.jpg", // 提供していただいた桜のクリニック画像
    "https://readdy.ai/api/search-image?query=Clean%20modern%20medical%20clinic%20interior%20with%20comfortable%20waiting%20area%2C%20soft%20lighting%2C%20white%20and%20blue%20color%20scheme%2C%20professional%20dermatology%20office%2C%20peaceful%20atmosphere%2C%20Japanese%20medical%20facility%20interior%20design&width=1400&height=600&seq=clinic-hero-2&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Professional%20dermatologist%20examining%20patient%20skin%20with%20modern%20medical%20equipment%2C%20clean%20medical%20environment%2C%20caring%20healthcare%20professional%2C%20Japanese%20medical%20clinic%20setting%2C%20soft%20professional%20lighting&width=1400&height=600&seq=clinic-hero-3&orientation=landscape",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[600px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-white">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    お肌のお悩み、
                    <br />
                    お気軽にご相談ください
                  </h1>
                  <p className="text-2xl mb-10">皮膚科専門医による丁寧な診察で、患者様一人ひとりに寄り添います</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:03-1234-5678"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-xl font-medium cursor-pointer whitespace-nowrap text-center transition-colors"
                    >
                      📞 電話予約：03-1234-5678
                    </a>
                    <div className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg">
                      基本的に予約不要・受付順診察
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* スライドインジケーター */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        {/* 左右ナビゲーション */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* こんな症状はありませんか？ */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">こんな症状はありませんか？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mx-auto mb-4">
                <Hand className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">湿疹・かゆみ・ニキビ</h3>
              <p className="text-sm text-gray-600">アトピー性皮膚炎、接触性皮膚炎、思春期・大人ニキビなど</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                <Eye className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ほくろ・いぼ・しみ</h3>
              <p className="text-sm text-gray-600">良性腫瘍の診断、液体窒素治療、切除手術など</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <HeartPulse className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">アトピー・乾燥肌</h3>
              <p className="text-sm text-gray-600">アレルギー検査、スキンケア指導、外用薬治療など</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <Footprints className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">水虫・爪の病気</h3>
              <p className="text-sm text-gray-600">足・手の水虫、爪水虫の診断・治療など</p>
            </div>
          </div>
        </div>
      </section>

      {/* 当院の特徴 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">当院の特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                <Stethoscope className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">丁寧な診察・説明</h3>
              <p className="text-gray-600">皮膚科専門医による詳しい診察と、わかりやすい説明を心がけています</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
                <CalendarCheck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">土曜日も診療</h3>
              <p className="text-gray-600">平日お忙しいときでも、土曜日に診療を行っています</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-6">
                <Clock className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">早朝受付</h3>
              <p className="text-gray-600">8時から受付開始し、早朝の予約も受け付けています</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-6">
                <Train className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">アクセスが便利</h3>
              <p className="text-gray-600">電車やバスからのアクセスが良好で、駅から徒歩5分です</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
