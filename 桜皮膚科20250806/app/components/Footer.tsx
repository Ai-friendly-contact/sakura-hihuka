import { Phone, MapPin, Train, Car } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-['Pacifico'] text-blue-600 mb-4">さくら皮膚科クリニック</div>
            <p className="text-gray-600 text-sm">
              お肌のお悩み、お気軽にご相談ください。
              <br />
              皮膚科専門医による丁寧な診察で、
              <br />
              地域の皆様の健康をサポートします。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">診療時間</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>平日：9:00-12:00、15:00-18:00</div>
              <div>土曜：9:00-13:00</div>
              <div>休診：日曜・祝日・木曜午後</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">お問い合わせ</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                03-1234-5678
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                東京都渋谷区桜丘町1-2-3
              </div>
              <div className="flex items-center">
                <Train className="w-4 h-4 mr-2" />
                渋谷駅徒歩3分
              </div>
              <div className="flex items-center">
                <Car className="w-4 h-4 mr-2" />
                駐車場3台完備
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; 2024 さくら皮膚科クリニック. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
