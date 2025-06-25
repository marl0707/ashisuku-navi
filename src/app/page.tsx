import Link from 'next/link';
import { 
  ArrowRight, 
  Baby, 
  Users, 
  Footprints, 
  AlertCircle,
  BookOpen,
  Activity,
  HeartHandshake,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const quickAccessItems = [
    {
      title: '症状について',
      description: 'よくある足の症状を確認',
      icon: AlertCircle,
      href: '/symptoms',
      color: 'bg-red-50 text-red-600',
    },
    {
      title: '年齢別ガイド',
      description: 'お子様の年齢に合わせた情報',
      icon: Baby,
      href: '/age-guide',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: '靴選びガイド',
      description: '成長期の適切な靴選び',
      icon: Footprints,
      href: '/practice/shoes',
      color: 'bg-green-50 text-green-600',
    },
    {
      title: '緊急時対応',
      description: '急な痛みや怪我の対処法',
      icon: Activity,
      href: '/emergency',
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const ageGuides = [
    { age: '0-3歳', label: 'ファーストシューズ', href: '/age-guide/0-3' },
    { age: '3-6歳', label: 'プレゴールデンエイジ', href: '/age-guide/3-6' },
    { age: '6-12歳', label: 'ゴールデンエイジ', href: '/age-guide/6-12' },
    { age: '12-18歳', label: '部活動期', href: '/age-guide/12-18' },
  ];

  const sportsGuides = [
    { name: 'ラグビー', href: '/sports/rugby' },
    { name: 'サッカー', href: '/sports/soccer' },
    { name: '野球', href: '/sports/baseball' },
    { name: 'その他', href: '/sports' },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            子どもの足の健康は、一生の財産です。
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            0歳から18歳までの成長期における足のケア、靴選び、スポーツ障害予防に関する
            お役立ち情報を提供しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/age-guide"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              年齢別ガイドを見る
            </Link>
            <Link
              href="/symptoms"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-blue-50 transition-colors"
            >
              足の健康情報を見る
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">クイックアクセス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-lg ${item.color} mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Age Guide */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">年齢別ガイド</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ageGuides.map((guide) => (
              <Link
                key={guide.age}
                href={guide.href}
                className="flex items-center justify-between p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div>
                  <div className="font-bold text-lg">{guide.age}</div>
                  <div className="text-sm text-gray-600">{guide.label}</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">スポーツ別対策</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sportsGuides.map((sport) => (
              <Link
                key={sport.name}
                href={sport.href}
                className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:border-primary hover:bg-blue-50 transition-all"
              >
                <div className="text-lg font-semibold">{sport.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="text-center mb-8">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">高齢者の方へ</h2>
              <p className="text-lg text-gray-600">
                歩くことの大切さ ｜ 転倒予防のために
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/senior"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-lg hover:bg-green-600 transition-colors text-lg"
              >
                高齢者向けページへ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">お知らせ・新着情報</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="text-sm text-gray-500 mb-1">2024.12.01</div>
                <div className="font-semibold">サイトをオープンしました</div>
              </div>
              <div className="border-b pb-4">
                <div className="text-sm text-gray-500 mb-1">2024.12.01</div>
                <div className="font-semibold">冬の足のケアについての記事を公開</div>
              </div>
              <div className="pb-4">
                <div className="text-sm text-gray-500 mb-1">2024.12.01</div>
                <div className="font-semibold">高齢者向けコンテンツを追加しました</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            専門的な情報で、家族の足の健康を守りましょう
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            正しい知識と適切なケアで、子どもたちの健やかな成長をサポートします
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            サイトについて詳しく見る
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}