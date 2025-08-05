"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import {
  Building2,
  Heart,
  TestTube,
  Microscope,
  Snowflake,
  Scissors,
  FlaskRoundIcon as Flask,
  Pill,
  Phone,
} from "lucide-react"

export default function TreatmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">診療内容・治療について</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              皮膚科専門医による丁寧な診療で、お肌のお悩みを解決いたします
            </p>
          </div>
        </div>
      </section>

      {/* 保険診療セクション */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">保険診療</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">一般皮膚科</h3>
                <p className="text-gray-600 text-center">湿疹、皮膚炎、ニキビ、水虫など日常的な皮膚疾患の診療</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">小児皮膚科</h3>
                <p className="text-gray-600 text-center">お子様の肌トラブル、アトピー、おむつかぶれなどの診療</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <TestTube className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">アレルギー検査</h3>
                <p className="text-gray-600 text-center">血液検査やパッチテストによるアレルギー原因の特定</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Microscope className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">皮膚生検</h3>
                <p className="text-gray-600 text-center">皮膚の組織検査による正確な診断・治療方針の決定</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 処置・治療セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">処置・治療</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Snowflake className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">液体窒素治療</h3>
                      <p className="text-gray-600">
                        いぼ、魚の目、老人性いぼなどを液体窒素で凍結除去します。効果的で安全な治療法です。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Scissors className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">切除手術</h3>
                      <p className="text-gray-600">
                        小さなできもの、粉瘤、脂肪腫などの日帰り手術を行います。局所麻酔で痛みを軽減します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Flask className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">パッチテスト</h3>
                      <p className="text-gray-600">
                        接触性皮膚炎の原因物質を特定するため、背中に試薬を貼り付けて反応を調べます。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Pill className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">外用薬指導</h3>
                      <p className="text-gray-600">
                        塗り薬の正しい使い方、量、頻度について丁寧に指導いたします。効果を最大化します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使用機器セクション */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">使用機器</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Medical%20dermatoscope%20equipment%20in%20modern%20clinic%2C%20professional%20medical%20device%20for%20skin%20examination%2C%20white%20background%2C%20clean%20and%20sterile%20environment%2C%20high-tech%20medical%20instrument%20used%20by%20dermatologist%20for%20precise%20skin%20diagnosis%20and%20mole%20examination&width=400&height=300&seq=dermoscope-1&orientation=landscape"
                    alt="ダーモスコープ"
                    className="w-full h-48 object-cover object-center rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">ダーモスコープ</h3>
                <p className="text-gray-600">皮膚を拡大して観察する機器。ほくろや皮膚がんの早期発見に役立ちます。</p>
              </div>

              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Liquid%20nitrogen%20cryotherapy%20equipment%20in%20dermatology%20clinic%2C%20medical%20cryogenic%20treatment%20device%2C%20professional%20medical%20apparatus%20for%20wart%20and%20lesion%20removal%2C%20sterile%20clinical%20environment%2C%20modern%20healthcare%20technology&width=400&height=300&seq=nitrogen-1&orientation=landscape"
                    alt="液体窒素装置"
                    className="w-full h-48 object-cover object-center rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">液体窒素装置</h3>
                <p className="text-gray-600">いぼや良性腫瘍の治療に使用する冷凍治療装置です。</p>
              </div>

              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=UV%20light%20therapy%20equipment%20in%20dermatology%20clinic%2C%20ultraviolet%20phototherapy%20device%2C%20professional%20medical%20lamp%20for%20skin%20treatment%2C%20modern%20medical%20facility%20with%20advanced%20therapeutic%20technology%20for%20skin%20conditions&width=400&height=300&seq=uv-therapy-1&orientation=landscape"
                    alt="紫外線治療器"
                    className="w-full h-48 object-cover object-center rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">紫外線治療器</h3>
                <p className="text-gray-600">アトピー性皮膚炎や乾癬などの治療に使用する光線療法装置です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">お肌のお悩み、お気軽にご相談ください</h2>
            <p className="text-xl text-blue-100 mb-8">皮膚科専門医が丁寧に診察いたします</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03-1234-5678"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                03-1234-5678
              </a>
              <Link
                href="/first-visit"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
              >
                初診の方へ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
