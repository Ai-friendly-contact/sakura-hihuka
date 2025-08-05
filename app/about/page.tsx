"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { Heart, Microscope, Users } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">院長・クリニック紹介</h1>
          <p className="text-xl text-gray-600">皮膚科専門医として、地域の皆様の健康をサポートします</p>
        </div>
      </section>

      {/* 院長挨拶 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20male%20dermatologist%20doctor%20in%20white%20coat%2C%20kind%20smile%2C%20medical%20stethoscope%2C%20clean%20medical%20clinic%20background%2C%20professional%20headshot%20portrait%2C%20trustworthy%20appearance%2C%20age%2045-50%2C%20wearing%20glasses&width=500&height=600&seq=doctor-portrait-2&orientation=portrait"
                alt="院長 佐藤健一"
                className="w-full h-96 lg:h-[500px] object-cover object-center rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">院長挨拶</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  この度は、さくら皮膚科クリニックのホームページをご覧いただき、ありがとうございます。
                  院長の田中太郎と申します。
                </p>
                <p>
                  皮膚は私たちの体を外界から守る大切な器官です。皮膚のトラブルは見た目の問題だけでなく、
                  かゆみや痛みによって日常生活の質を大きく左下させることがあります。
                </p>
                <p>
                  当院では、患者様一人ひとりのお悩みに真摯に向き合い、丁寧な診察と分かりやすい説明を
                  心がけております。どんな小さなお悩みでも、お気軽にご相談ください。
                </p>
                <p>地域の皆様の「かかりつけ皮膚科」として、安心して通えるクリニックを目指してまいります。</p>
                <div className="pt-4">
                  <p className="font-semibold">さくら皮膚科クリニック 院長</p>
                  <p className="text-2xl font-bold text-blue-600">田中 太郎</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 院長プロフィール */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">院長プロフィール</h2>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">経歴</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <div className="font-medium">1985年</div>
                    <div>東京医科大学医学部 卒業</div>
                  </div>
                  <div>
                    <div className="font-medium">1985年</div>
                    <div>東京医科大学病院 皮膚科入局</div>
                  </div>
                  <div>
                    <div className="font-medium">1990年</div>
                    <div>皮膚科専門医取得</div>
                  </div>
                  <div>
                    <div className="font-medium">1995年</div>
                    <div>東京医科大学病院 皮膚科医長</div>
                  </div>
                  <div>
                    <div className="font-medium">2010年</div>
                    <div>さくら皮膚科クリニック 開院</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">資格</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• 日本皮膚科学会認定 皮膚科専門医</div>
                  <div>• 医学博士</div>
                  <div>• 日本皮膚科学会指導医</div>
                  <div>• 日本アレルギー学会専門医</div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">所属学会</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• 日本皮膚科学会</div>
                  <div>• 日本アレルギー学会</div>
                  <div>• 日本皮膚アレルギー・接触皮膚炎学会</div>
                  <div>• 日本臨床皮膚科医会</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* クリニックについて */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">クリニックについて</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20clean%20dermatology%20clinic%20interior%2C%20bright%20waiting%20room%20with%20comfortable%20chairs%2C%20professional%20medical%20facility%20design%2C%20white%20walls%20with%20natural%20lighting%2C%20peaceful%20healthcare%20environment%2C%20Japanese%20medical%20clinic%20interior%20design&width=600&height=400&seq=clinic-interior-1&orientation=landscape"
                alt="クリニック内観"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <img
                src="https://readdy.ai/api/search-image?query=Medical%20examination%20room%20in%20dermatology%20clinic%2C%20clean%20white%20examination%20table%2C%20modern%20medical%20equipment%2C%20professional%20healthcare%20facility%20interior%2C%20bright%20and%20sterile%20medical%20room%20design&width=600&height=400&seq=clinic-room-1&orientation=landscape"
                alt="診察室"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">開院への想い</h3>
                  <p className="text-gray-700">
                    2010年の開院以来、「患者様に寄り添う医療」を理念として診療を続けてまいりました。
                    皮膚のお悩みは人それぞれ異なり、同じ症状でも患者様によって最適な治療法は変わります。
                    一人ひとりのライフスタイルや体質を考慮した、オーダーメイドの治療を提供いたします。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">清潔で落ち着いた院内</h3>
                  <p className="text-gray-700">
                    患者様がリラックスして受診できるよう、清潔で明るい院内環境を整えています。
                    待合室は広々とした空間で、プライバシーにも配慮しています。
                    また、バリアフリー設計により、車椅子やベビーカーの方も安心してお越しいただけます。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">患者様に寄り添う医療</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>丁寧な問診で症状の原因を究明</div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>分かりやすい説明と治療選択肢の提示</div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>日常生活での注意点やスキンケアの指導</div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>治療後のフォローアップ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 診療方針 */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">当院の診療方針</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">患者様第一</h3>
              <p className="text-gray-600 text-sm">
                患者様の立場に立った診療を心がけ、不安や疑問にしっかりとお答えします
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <Microscope className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">科学的根拠</h3>
              <p className="text-gray-600 text-sm">最新の医学的知見に基づいた、エビデンスのある治療を提供いたします</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">チーム医療</h3>
              <p className="text-gray-600 text-sm">
                医師・看護師・受付スタッフが連携し、質の高い医療サービスを提供します
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
