import Link from 'next/link';
import { AlertCircle, Info, ChevronRight, Activity } from 'lucide-react';

export default function SymptomsPage() {
  const symptoms = [
    {
      name: '扁平足',
      description: '土踏まずが低い、または無い状態。多くの子どもに見られます。',
      severity: 'low',
      commonAge: '3-6歳',
    },
    {
      name: '外反母趾',
      description: '親指が外側に曲がる状態。靴の選び方が原因になることも。',
      severity: 'medium',
      commonAge: '10歳以降',
    },
    {
      name: 'シーバー病（踵の痛み）',
      description: '成長期の踵の骨端症。スポーツをする子どもに多く見られます。',
      severity: 'medium',
      commonAge: '8-15歳',
    },
    {
      name: '成長痛',
      description: '夜間に膝や足が痛む症状。成長期特有の痛みです。',
      severity: 'low',
      commonAge: '3-12歳',
    },
    {
      name: 'オスグッド病',
      description: '膝のお皿の下が痛む症状。スポーツをする成長期の子どもに多い。',
      severity: 'medium',
      commonAge: '10-15歳',
    },
    {
      name: '疲労骨折',
      description: '繰り返しの負荷による骨折。早期発見・治療が重要です。',
      severity: 'high',
      commonAge: '12歳以降',
    },
    {
      name: '足底筋膜炎',
      description: '足の裏、特に踵付近の痛み。過度の運動が原因になることも。',
      severity: 'medium',
      commonAge: '10歳以降',
    },
    {
      name: '巻き爪',
      description: '爪が皮膚に食い込む状態。適切な爪切りで予防可能です。',
      severity: 'low',
      commonAge: '全年齢',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-600';
      case 'medium':
        return 'bg-orange-100 text-orange-600';
      case 'low':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'high':
        return '要注意';
      case 'medium':
        return '注意';
      case 'low':
        return '軽度';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            よくある足の症状について
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            子どもの足に現れる様々な症状について、原因や対処法をご紹介します。
            気になる症状がある場合は、早めに専門医にご相談ください。
          </p>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-red-900 mb-2">受診をおすすめする症状</h3>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• 激しい痛みが続く場合</li>
                  <li>• 腫れや熱感を伴う場合</li>
                  <li>• 歩行が困難な場合</li>
                  <li>• 症状が1週間以上改善しない場合</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {symptoms.map((symptom) => (
              <div
                key={symptom.name}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{symptom.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(
                      symptom.severity
                    )}`}
                  >
                    {getSeverityLabel(symptom.severity)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{symptom.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    よく見られる年齢: <span className="font-medium">{symptom.commonAge}</span>
                  </span>
                  <Link
                    href={`/symptoms/${symptom.name.toLowerCase().replace(/[()（）]/g, '').replace(/\s+/g, '-')}`}
                    className="text-primary hover:text-blue-600 font-medium flex items-center"
                  >
                    詳しく見る
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start">
            <Info className="w-8 h-8 text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">症状の早期発見のために</h2>
              <p className="text-gray-600 mb-4">
                子どもは痛みや不快感をうまく表現できないことがあります。
                以下のような変化に注意して、早期発見につなげましょう。
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                  歩き方の変化（びっこを引く、つま先歩きなど）
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                  運動を嫌がるようになった
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                  靴を履くのを嫌がる
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                  足を触られるのを嫌がる
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Activity className="w-12 h-12 text-danger mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">緊急時の対応</h2>
          <p className="text-gray-600 mb-6">
            急な痛みや怪我の際の応急処置方法をまとめています
          </p>
          <Link
            href="/emergency"
            className="inline-flex items-center justify-center px-6 py-3 bg-danger text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            緊急時対応ガイドを見る
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}