import {
  ArrowLeft,
  Users,
  Target,
  Award,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  FileText,
  Trophy,
  Activity,
  User,
  Building2,
  MapPin,
  Briefcase,
  Badge,
  BarChart3,
} from 'lucide-react';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  AO_LIST,
  PRODUCT_PORTFOLIO,
  formatCompactCurrency,
} from '../data/mockData';

interface AODetailProps {
  aoId: string;
  onBack: () => void;
}

export default function AODetail({ aoId, onBack }: AODetailProps) {
  const ao = AO_LIST.find((a) => a.id === aoId) || AO_LIST[0];

  // Mock individual data
  const aoKPIs = [
    { label: 'Sosialisasi', actual: ao.socialization, target: Math.round(ao.socialization / 0.92), achievement: 92.4, icon: Users, color: 'blue' },
    { label: 'Survei', actual: ao.survey, target: Math.round(ao.survey / 0.85), achievement: 85.2, icon: Target, color: 'emerald' },
    { label: 'Approved Survey', actual: ao.approvedSurvey, target: Math.round(ao.approvedSurvey / 0.80), achievement: 80.1, icon: CheckCircle2, color: 'purple' },
    { label: 'Disbursement', actual: ao.disbursement, target: Math.round(ao.disbursement / 0.78), achievement: 78.5, icon: DollarSign, color: 'amber' },
    { label: 'Total NoA', actual: ao.noa, target: Math.round(ao.noa / 0.88), achievement: 88.3, icon: FileText, color: 'cyan' },
    { label: 'Outstanding', actual: ao.outstanding, target: Math.round(ao.outstanding / 0.90), achievement: 90.2, icon: TrendingUp, color: 'rose' },
    { label: 'Loan Ceiling', actual: ao.ceiling, target: Math.round(ao.ceiling / 0.92), achievement: 92.0, icon: BarChart3, color: 'indigo' },
    { label: 'Conversion Rate', actual: ao.conversionRate, target: 60, achievement: (ao.conversionRate / 60) * 100, icon: Activity, color: 'teal' },
  ];

  const aoTrend = [
    { month: 'Nov 2023', socialization: 95, survey: 62, approved: 50, disbursement: 28 },
    { month: 'Des 2023', socialization: 110, survey: 72, approved: 58, disbursement: 32 },
    { month: 'Jan 2024', socialization: 125, survey: 81, approved: 65, disbursement: 36 },
    { month: 'Feb 2024', socialization: 140, survey: 90, approved: 72, disbursement: 40 },
    { month: 'Mar 2024', socialization: 155, survey: 100, approved: 80, disbursement: 45 },
    { month: 'Apr 2024', socialization: 170, survey: 110, approved: 88, disbursement: 50 },
    { month: 'Mei 2024', socialization: ao.socialization, survey: ao.survey, approved: ao.approvedSurvey, disbursement: ao.disbursement },
  ];

  const aoSalesFunnel = [
    { stage: 'Sosialisasi', value: ao.socialization, rate: 100 },
    { stage: 'Survei', value: ao.survey, rate: (ao.survey / ao.socialization) * 100 },
    { stage: 'Approved Survey', value: ao.approvedSurvey, rate: (ao.approvedSurvey / ao.socialization) * 100 },
    { stage: 'Disbursement', value: ao.disbursement, rate: (ao.disbursement / ao.socialization) * 100 },
  ];

  const benchmarkingData = [
    { kpi: 'Sosialisasi', selectedAO: ao.socialization, unitAvg: 135, branchAvg: 128, topAO: 210 },
    { kpi: 'Survei', selectedAO: ao.survey, unitAvg: 88, branchAvg: 82, topAO: 145 },
    { kpi: 'Approved Survey', selectedAO: ao.approvedSurvey, unitAvg: 68, branchAvg: 64, topAO: 115 },
    { kpi: 'Disbursement', selectedAO: ao.disbursement, unitAvg: 36, branchAvg: 34, topAO: 58 },
    { kpi: 'Outstanding', selectedAO: Math.round(ao.outstanding / 1000000), unitAvg: 88, branchAvg: 82, topAO: 145 },
    { kpi: 'Achievement %', selectedAO: ao.achievement, unitAvg: 78.5, branchAvg: 75.2, topAO: 95.8 },
  ];

  const getStatusColor = (value: number) => {
    if (value >= 90) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (value >= 75) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (value >= 60) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getInsight = () => {
    return {
      executive: `AO ${ao.name} berhasil mencapai ${ao.achievement}% dari target bulanan. Total outstanding mencapai ${formatCompactCurrency(ao.outstanding)} dengan pertumbuhan yang positif.`,
      strengths: [
        `Tingkat approval survei mencapai ${((ao.approvedSurvey / ao.survey) * 100).toFixed(1)}%, melebihi rata-rata unit`,
        'Konversi dari approved survey ke pencairan efektif',
        'Konsistensi performa di atas rata-rata tim',
      ],
      weaknesses: [
        'Sosialisasi masih bisa ditingkatkan untuk memperluas jangkauan',
        'Waktu respons survei perlu dipercepat',
      ],
      risks: [
        'Tingkat kompetisi di area meningkat',
        'Potensi kehilangan nasabah ke kompetitor',
      ],
      opportunities: [
        'Cross-selling ke nasabah existing',
        'Ekspansi ke segmen Channeling',
      ],
      recommendations: [
        'Tingkatkan kunjungan ke 5 calon nasabah potensial',
        'Manfaatkan program referral untuk menambah lead',
        'Fokus pada nasabah dengan skor kredit tinggi',
      ],
    };
  };

  const insight = getInsight();

  return (
    <div className="space-y-6">
      {/* Breadcrumb & Back */}
      <div className="flex items-center gap-2 text-sm">
        <button onClick={onBack} className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 font-medium">
          <ArrowLeft size={14} />
          Dashboard
        </button>
        <span className="text-slate-300">/</span>
        <span className="text-slate-500">Analisis AO</span>
        <span className="text-slate-300">/</span>
        <span className="font-semibold text-blue-600">{ao.name}</span>
      </div>

      {/* AO Header */}
      <div className="bg-white rounded-xl premium-shadow p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <User size={32} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{ao.name}</h1>
                {ao.rank <= 3 && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 border border-amber-200 rounded-md text-xs font-semibold text-amber-700">
                    <Trophy size={12} />
                    Rank #{ao.rank}
                  </div>
                )}
              </div>
              <div className="text-sm text-slate-500">Employee ID: <span className="font-semibold text-slate-700">{ao.id}</span></div>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <Building2 size={13} />
                  <span className="font-medium">{ao.branch}</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-600">
                  <MapPin size={13} />
                  <span className="font-medium">{ao.region}</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-600">
                  <Briefcase size={13} />
                  <span className="font-medium">{ao.unit}</span>
                </span>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold border ${getStatusColor(ao.achievement)}`}>
                  <Badge size={12} />
                  {ao.status}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Achievement</div>
            <div className={`text-4xl font-bold ${ao.achievement >= 90 ? 'text-emerald-600' : ao.achievement >= 75 ? 'text-blue-600' : 'text-amber-600'}`}>
              {ao.achievement}%
            </div>
            <div className="text-xs text-slate-500 mt-1">Ranking <span className="font-bold text-slate-700">#{ao.rank}</span> dari 15 AO</div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {aoKPIs.map((kpi) => {
          const Icon = kpi.icon;
          const colorMap: Record<string, string> = {
            blue: 'bg-blue-100 text-blue-600',
            emerald: 'bg-emerald-100 text-emerald-600',
            purple: 'bg-purple-100 text-purple-600',
            amber: 'bg-amber-100 text-amber-600',
            cyan: 'bg-cyan-100 text-cyan-600',
            rose: 'bg-rose-100 text-rose-600',
            indigo: 'bg-indigo-100 text-indigo-600',
            teal: 'bg-teal-100 text-teal-600',
          };
          return (
            <div key={kpi.label} className="bg-white rounded-xl premium-shadow p-4 card-hover">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${colorMap[kpi.color]} mb-2`}>
                <Icon size={18} />
              </div>
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{kpi.label}</div>
              <div className="text-xl font-bold text-slate-900 mt-1">
                {typeof kpi.actual === 'number' && kpi.actual > 10000 ? formatCompactCurrency(kpi.actual) : kpi.actual}
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-500">Target: {typeof kpi.target === 'number' && kpi.target > 10000 ? formatCompactCurrency(kpi.target) : kpi.target}</span>
                  <span className={`font-bold ${kpi.achievement >= 90 ? 'text-emerald-600' : kpi.achievement >= 75 ? 'text-blue-600' : kpi.achievement >= 60 ? 'text-amber-600' : 'text-red-600'}`}>
                    {kpi.achievement.toFixed(1)}%
                  </span>
                </div>
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden mt-1">
                  <div
                    className={`h-full rounded-full ${kpi.achievement >= 90 ? 'bg-emerald-500' : kpi.achievement >= 75 ? 'bg-blue-500' : kpi.achievement >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(kpi.achievement, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Row: Sales Funnel + Portfolio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AO Sales Funnel */}
        <div className="bg-white rounded-xl premium-shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Sales Funnel - {ao.name}</h3>
          </div>
          <div className="space-y-3">
            {aoSalesFunnel.map((stage, i) => {
              const width = (stage.value / aoSalesFunnel[0].value) * 100;
              const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];
              return (
                <div key={stage.stage}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-700">{stage.stage}</span>
                    <span className="text-xs font-bold text-slate-900">{stage.value} ({stage.rate.toFixed(1)}%)</span>
                  </div>
                  <div className="relative h-9 bg-slate-100 rounded-lg overflow-hidden">
                    <div
                      className="funnel-bar absolute inset-y-0 left-0 rounded-lg flex items-center px-3 text-white text-xs font-semibold"
                      style={{ width: `${width}%`, backgroundColor: colors[i] }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-[10px] text-slate-500">Conversion Rate</div>
              <div className="text-sm font-bold text-emerald-600">
                {((ao.disbursement / ao.socialization) * 100).toFixed(1)}%
              </div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500">Success Rate</div>
              <div className="text-sm font-bold text-blue-600">
                {((ao.approvedSurvey / ao.survey) * 100).toFixed(1)}%
              </div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500">Drop-off</div>
              <div className="text-sm font-bold text-red-600">
                {(100 - (ao.disbursement / ao.socialization) * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Composition */}
        <div className="bg-white rounded-xl premium-shadow p-5">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Komposisi Portofolio AO</h3>
          </div>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie
                  data={PRODUCT_PORTFOLIO}
                  dataKey="contribution"
                  nameKey="name"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  stroke="none"
                >
                  {PRODUCT_PORTFOLIO.map((p, i) => (
                    <Cell key={i} fill={p.color} />
                  ))}
                </Pie>
                <text x="90" y="75" textAnchor="middle" className="text-lg font-bold" fill="#0F172A">
                  {formatCompactCurrency(ao.outstanding)}
                </text>
                <text x="90" y="95" textAnchor="middle" className="text-[10px]" fill="#64748B">Outstanding (Rp)</text>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2.5">
              {PRODUCT_PORTFOLIO.map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: p.color }} />
                  <span className="text-xs text-slate-700 flex-1">{p.name}</span>
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-900">{p.contribution}%</div>
                    <div className="text-[10px] text-slate-500">{Math.round((ao.noa * p.contribution) / 100)} NoA</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Trend */}
      <div className="bg-white rounded-xl premium-shadow p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Performance Trend - 12 Bulan Terakhir</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">{ao.name}</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-blue-500" /><span className="text-slate-600">Sosialisasi</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-600">Survei</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-600">Approved</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-purple-500" /><span className="text-slate-600">Disbursement</span></div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={aoTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748B' }} />
            <YAxis tick={{ fontSize: 11, fill: '#64748B' }} />
            <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }} />
            <Legend wrapperStyle={{ fontSize: '11px' }} />
            <Bar dataKey="socialization" fill="#3B82F6" name="Sosialisasi" radius={[4, 4, 0, 0]} barSize={18} />
            <Bar dataKey="survey" fill="#10B981" name="Survei" radius={[4, 4, 0, 0]} barSize={18} />
            <Line type="monotone" dataKey="approved" stroke="#F59E0B" strokeWidth={2.5} dot={{ r: 3 }} name="Approved" />
            <Line type="monotone" dataKey="disbursement" stroke="#8B5CF6" strokeWidth={2.5} dot={{ r: 3 }} name="Disbursement" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Benchmarking */}
      <div className="bg-white rounded-xl premium-shadow p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">AO Benchmarking</h3>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span className="font-semibold text-blue-600">■</span> Selected AO
            <span className="font-semibold text-emerald-600 ml-2">■</span> Top AO
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left px-3 py-2.5 text-[11px] font-bold text-slate-500 uppercase">KPI</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-blue-700 uppercase bg-blue-50/50">Selected AO</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-slate-600 uppercase">Unit Avg</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-slate-600 uppercase">Branch Avg</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-emerald-700 uppercase bg-emerald-50/50">Top AO</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-slate-600 uppercase">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {benchmarkingData.map((row) => {
                const performance = ((row.selectedAO / row.topAO) * 100);
                return (
                  <tr key={row.kpi} className="hover:bg-slate-50/50">
                    <td className="px-3 py-3 font-semibold text-slate-800">{row.kpi}</td>
                    <td className="px-3 py-3 text-right font-bold text-blue-700 bg-blue-50/30">{row.selectedAO}</td>
                    <td className="px-3 py-3 text-right text-slate-700">{row.unitAvg}</td>
                    <td className="px-3 py-3 text-right text-slate-700">{row.branchAvg}</td>
                    <td className="px-3 py-3 text-right font-bold text-emerald-700 bg-emerald-50/30">{row.topAO}</td>
                    <td className="px-3 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${performance >= 90 ? 'bg-emerald-500' : performance >= 75 ? 'bg-blue-500' : 'bg-amber-500'}`}
                            style={{ width: `${Math.min(performance, 100)}%` }}
                          />
                        </div>
                        <span className={`text-xs font-bold ${performance >= 90 ? 'text-emerald-600' : performance >= 75 ? 'text-blue-600' : 'text-amber-600'}`}>
                          {performance.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Executive Insight */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl premium-shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <h3 className="text-sm font-bold uppercase tracking-wide">AI Executive Insight</h3>
          </div>
          <div className="text-[10px] px-2 py-1 bg-white/20 rounded-full font-semibold">Powered by AI</div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-4 border border-white/20">
          <div className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mb-1">Executive Summary</div>
          <p className="text-sm text-white/95 leading-relaxed">{insight.executive}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-emerald-500/20 backdrop-blur rounded-lg p-4 border border-emerald-400/30">
            <div className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Award size={11} /> Strengths
            </div>
            <ul className="space-y-1 text-xs text-white/95">
              {insight.strengths.map((s, i) => (
                <li key={i} className="flex gap-1.5"><span className="text-emerald-300">✓</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-500/20 backdrop-blur rounded-lg p-4 border border-amber-400/30">
            <div className="text-[10px] font-bold text-amber-200 uppercase tracking-wider mb-2 flex items-center gap-1">
              <AlertCircle size={11} /> Weaknesses
            </div>
            <ul className="space-y-1 text-xs text-white/95">
              {insight.weaknesses.map((w, i) => (
                <li key={i} className="flex gap-1.5"><span className="text-amber-300">•</span>{w}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-500/20 backdrop-blur rounded-lg p-4 border border-red-400/30">
            <div className="text-[10px] font-bold text-red-200 uppercase tracking-wider mb-2 flex items-center gap-1">
              <AlertCircle size={11} /> Risks
            </div>
            <ul className="space-y-1 text-xs text-white/95">
              {insight.risks.map((r, i) => (
                <li key={i} className="flex gap-1.5"><span className="text-red-300">⚠</span>{r}</li>
              ))}
            </ul>
          </div>
          <div className="bg-purple-500/20 backdrop-blur rounded-lg p-4 border border-purple-400/30">
            <div className="text-[10px] font-bold text-purple-200 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Sparkles size={11} /> Opportunities
            </div>
            <ul className="space-y-1 text-xs text-white/95">
              {insight.opportunities.map((o, i) => (
                <li key={i} className="flex gap-1.5"><span className="text-purple-300">★</span>{o}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
          <div className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mb-2">Recommended Actions</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {insight.recommendations.map((r, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-white/95 bg-white/5 rounded-md p-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                  {i + 1}
                </div>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
