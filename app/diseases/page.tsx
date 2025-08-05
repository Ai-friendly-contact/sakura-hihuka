"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { HeartPulse, Droplet, Snowflake, AlertCircle, Baby, Bug, Droplets, Sun } from "lucide-react"

export default function Diseases() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">皮膚の病気・症状</h1>
          <p className="text-xl text-gray-600">当院で診療している主な皮膚疾患と症状について説明いたします</p>
        </div>
      </section>

      {/* よくある皮膚の病気 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">よくある皮膚の病気</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Medical%20illustration%20of%20eczema%20dermatitis%20on%20skin%2C%20close-up%20view%20showing%20red%20inflamed%20patches%2C%20clinical%20dermatology%20reference%20image%2C%20clean%20white%20medical%20background%2C%20professional%20medical%20photography%20style%20suitable%20for%20healthcare%20website&width=400&height=300&seq=eczema-1&orientation=landscape"
                  alt="湿疹・皮膚炎"
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">湿疹・皮膚炎</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">アトピー性皮膚炎</h4>
                  <p className="text-gray-600 text-sm">
                    慢性的なかゆみと湿疹を繰り返す疾患。適切なスキンケアと薬物療法で改善します。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">接触性皮膚炎</h4>
                  <p className="text-gray-600 text-sm">
                    化粧品や金属などによるかぶれ。原因の特定とパッチテストを行います。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Medical%20close-up%20of%20acne%20on%20facial%20skin%2C%20dermatological%20condition%20showing%20pimples%20and%20comedones%2C%20clinical%20photography%20for%20healthcare%20education%2C%20clean%20professional%20medical%20background&width=400&height=300&seq=acne-1&orientation=landscape"
                  alt="ニキビ"
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">ニキビ</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">思春期ニキビ</h4>
                  <p className="text-gray-600 text-sm">
                    ホルモンバランスの変化により生じます。適切なスキンケアと治療で改善できます。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">大人ニキビ</h4>
                  <p className="text-gray-600 text-sm">
                    ストレスや生活習慣が原因。個人に合わせた治療法をご提案します。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Medical%20illustration%20of%20athlete%20foot%20fungal%20infection%20on%20toes%2C%20dermatological%20condition%20showing%20affected%20skin%20between%20toes%2C%20clinical%20reference%20image%20for%20healthcare%20professional%20medical%20photography&width=400&height=300&seq=fungus-1&orientation=landscape"
                  alt="水虫・爪水虫"
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">水虫・爪水虫</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">足・手の水虫</h4>
                  <p className="text-gray-600 text-sm">真菌感染症の一種。顕微鏡検査で診断し、抗真菌薬で治療します。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">爪水虫（爪白癬）</h4>
                  <p className="text-gray-600 text-sm">
                    爪が厚くなり変色する疾患。内服薬による根気強い治療が必要です。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Medical%20dermatology%20image%20showing%20moles%20and%20warts%20on%20skin%2C%20close-up%20dermatological%20examination%2C%20benign%20skin%20lesions%20for%20medical%20reference%2C%20professional%20clinical%20photography%20background&width=400&height=300&seq=moles-1&orientation=landscape"
                  alt="ほくろ・いぼ"
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">ほくろ・いぼ</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">良性腫瘍の診断</h4>
                  <p className="text-gray-600 text-sm">
                    ダーモスコープを使用した詳細な診断を行います。必要に応じて切除も可能です。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">いぼ（疣贅）</h4>
                  <p className="text-gray-600 text-sm">ウイルス性の良性腫瘍。液体窒素治療で除去します。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 症状別の治療 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">症状別の治療</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mx-auto mb-4">
                <HeartPulse className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">かゆみ・赤み</h3>
              <p className="text-gray-600 text-sm">抗ヒスタミン薬、ステロイド外用薬などで症状を和らげます</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                <Droplet className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">ぶつぶつ・発疹</h3>
              <p className="text-gray-600 text-sm">原因を特定し、適切な外用薬や内服薬で治療します</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <Snowflake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">カサカサ・乾燥</h3>
              <p className="text-gray-600 text-sm">保湿剤の処方とスキンケア指導を行います</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">痛み・腫れ</h3>
              <p className="text-gray-600 text-sm">感染症の可能性も考慮し、抗生剤などで治療します</p>
            </div>
          </div>
        </div>
      </section>

      {/* 子どもによくある症状 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">子どもによくある症状</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-100">
              <div className="w-12 h-12 flex items-center justify-center bg-pink-200 rounded-full mb-4">
                <Baby className="w-6 h-6 text-pink-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">おむつかぶれ</h3>
              <p className="text-gray-600 text-sm">おむつによる皮膚炎。適切なスキンケア方法をお教えします。</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="w-12 h-12 flex items-center justify-center bg-green-200 rounded-full mb-4">
                <Bug className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">とびひ</h3>
              <p className="text-gray-600 text-sm">細菌感染による皮膚疾患。抗生剤で治療し、感染拡大を防ぎます。</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-200 rounded-full mb-4">
                <Droplets className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">水いぼ</h3>
              <p className="text-gray-600 text-sm">ウイルス性の良性腫瘍。自然治癒を待つか除去治療を選択できます。</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-200 rounded-full mb-4">
                <Sun className="w-6 h-6 text-yellow-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">あせも・虫刺され</h3>
              <p className="text-gray-600 text-sm">夏場に多い皮膚トラブル。かゆみ止めと予防方法をご指導します。</p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">小児皮膚科について</h3>
            <p className="text-gray-700 mb-4">
              お子様の肌はデリケートで、大人とは異なる特徴があります。当院では小児皮膚科も専門的に診療しており、
              お子様が安心して受診できる環境を整えています。
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>年齢に応じた優しい診察</li>
              <li>お子様向けの外用薬処方</li>
              <li>保護者の方への詳しいスキンケア指導</li>
              <li>学校生活での注意点アドバイス</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
