"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { Building2, MapPin, Phone, Clock, Calendar, AlertCircle } from "lucide-react"

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">アクセス・診療時間</h1>
            <p className="text-xl text-gray-600 leading-relaxed">駅から徒歩3分、駐車場完備で通院に便利です</p>
          </div>
        </div>
      </section>

      {/* アクセスマップ（大きく） */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">アクセスマップ</h2>
            <p className="text-center text-gray-600 mb-12">
              JR山手線 原宿駅 徒歩3分 / 地下鉄 明治神宮前駅 徒歩5分 / 駐車場3台完備
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.047181175975!2d139.7024404!3d35.6691636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9901daaaab%3A0x83959d1c4b6a44e5!2z5pel5pys44CB44CSMTUwLTAwMDEg5p2x5Lqs6YO95riL6LC35Yy655We5a6u5YmNMeKIkjLiiJIz!5e0!3m2!1sja!2sjp!4v1647925947823!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* クリニック情報と診療時間 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* クリニック基本情報 */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                  クリニック情報
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building2 className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">さくら皮膚科クリニック</p>
                      <p className="text-gray-600">院長：佐藤 健一</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-800">〒150-0001</p>
                      <p className="text-gray-800">東京都渋谷区神宮前1-2-3</p>
                      <p className="text-gray-800">メディカルビル2F</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-600 mr-3" />
                    <a
                      href="tel:03-1234-5678"
                      className="text-blue-600 font-semibold hover:text-blue-800 cursor-pointer"
                    >
                      03-1234-5678
                    </a>
                  </div>
                </div>
              </div>

              {/* 診療時間 */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-green-600 mr-3" />
                  診療時間
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">曜日</th>
                        <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-800">
                          午前
                        </th>
                        <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-800">
                          午後
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 font-medium">月曜日</td>
                        <td className="border border-gray-200 px-4 py-3 text-center">9:00-12:00</td>
                        <td className="border border-gray-200 px-4 py-3 text-center">15:00-18:00</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium">火曜日</td>
                        <td className="border border-gray-200 px-4 py-3 text-center">9:00-12:00</td>
                        <td className="border border-gray-200 px-4 py-3 text-center">15:00-18:00</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 font-medium">水曜日</td>
                        <td className="border border-gray-200 px-4 py-3 text-center">9:00-12:00</td>
                        <td className="border border-gray-200 px-4 py-3 text-center">15:00-18:00</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium">木曜日</td>
                        <td className="border border-gray-200 px-4 py-3 text-center">9:00-12:00</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-red-600 font-semibold">
                          休診
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium">金曜日</td>
                        <td className="border border-gray-200 px-4 py-3 text-center">9:00-12:00</td>
                        <td className="border border-gray-200 px-4 py-3 text-center">15:00-18:00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium">土曜日</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-blue-600 font-semibold">
                          9:00-13:00
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-red-600 font-semibold">
                          休診
                        </td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium">日・祝日</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-red-600 font-semibold">
                          休診
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-red-600 font-semibold">
                          休診
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>※受付は診療終了の30分前までです</p>
                  <p>※土曜日の午後は休診です</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 受診についてセクション */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">受診について</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">お電話での受付</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">03-1234-5678</p>
                <p className="text-sm text-gray-600">診療時間内にお電話ください</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">予約について</h3>
                <p className="text-lg font-bold text-green-600 mb-2">基本的に予約不要</p>
                <p className="text-sm text-gray-600">受付順に診察いたします</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">待ち時間</h3>
                <p className="text-lg font-bold text-orange-600 mb-2">混雑時はお待ち頂く場合があります</p>
                <p className="text-sm text-gray-600">お時間に余裕をもってお越しください</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">急患対応</h3>
                <p className="text-lg font-bold text-red-600 mb-2">随時受付</p>
                <p className="text-sm text-gray-600">緊急の場合はお電話ください</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">お肌の症状でお困りの方はお気軽にご来院ください</h2>
            <p className="text-xl text-purple-100 mb-8">皮膚科専門医が丁寧に診察いたします</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03-1234-5678"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                お電話での受付：03-1234-5678
              </a>
              <Link
                href="/"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
              >
                ホームに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
