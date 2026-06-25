import { useState } from 'react';
import {
  Users,
  TrendingUp,
  TrendingDown,
  Minus,
  Target,
  PieChart as PieChartIcon,
  Info,
  Award,
  Activity,
  AlertCircle,
  Sparkles,
  BarChart3,
  FileText,
  Trophy,
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
  Area,
  AreaChart,
} from 'recharts';

import FilterBar from '../components/FilterBar';

import {
  PRODUCT_PORTFOLIO,
  MARKETING_PERFORMANCE,
  SALES_FUNNEL,
  DISBURSEMENT_PLAN,
  PERFORMANCE_TREND,
  AO_LIST,
  BRANCH_PERFORMANCE,
  KPI_MANAGEMENT,
  EXECUTIVE_INSIGHTS,
  formatCompactCurrency,
} from '../data/mockData';

interface MainDashboardProps {
  onAOClick: (aoId: string) => void;
}

const getTrendColor = (trend: string) => {
  if (trend === 'up') return 'text-emerald-600';
  if (trend === 'down') return 'text-red-600';
  return 'text-slate-500';
};

const getTrendIcon = (trend: string) => {
  if (trend === 'up') return <TrendingUp size={16} />;
  if (trend === 'down') return <TrendingDown size={16} />;
  return <Minus size={16} />;
};

const getAchievementColor = (value: number) => {
  if (value >= 90) return 'text-emerald-600 bg-emerald-50';
  if (value >= 75) return 'text-amber-600 bg-amber-50';
  return 'text-red-600 bg-red-50';
};

const getAchievementDot = (value: number) => {
  if (value >= 90) return 'bg-emerald-500';
  if (value >= 75) return 'bg-amber-500';
  return 'bg-red-500';
};

const STATUS_STYLES: Record<string, string> = {
  Excellent: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Good: 'bg-blue-100 text-blue-700 border-blue-200',
  Average: 'bg-amber-100 text-amber-700 border-amber-200',
  'Below Target': 'bg-red-100 text-red-700 border-red-200',
};

export default function MainDashboard({ onAOClick }: MainDashboardProps) {

  const [filters, setFilters] = useState({
    dateRange: 'Mei 2024',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    accountOfficer: 'All',
    product: 'All',
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      {/* FILTER BAR IS BACK BABY! */}
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />

      {/* Page Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Summary</h1>
          <p className="text-sm text-slate-500 mt-0.5">Dashboard Kinerja Bank Perkreditan Rakyat</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Live Data</span>
          </div>
          <span className="text-slate-400">Periode: <span className="font-semibold text-slate-700">{filters.dateRange}</span></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4 w-full">
        {[
          { label: 'Jumlah AO', value: '15', unit: 'Orang', growth: 8.5, trend: 'up', icon: Users, color: 'from-blue-500 to-blue-600', iconBg: 'bg-blue-100' },
          { label: 'Jumlah CM', value: '100', unit: 'Orang', growth: 12.3, trend: 'up', icon: Users, color: 'from-emerald-500 to-emerald-600', iconBg: 'bg-emerald-100' },
          { label: 'Total NoA', value: '1.150', unit: 'Ots', growth: 15.2, trend: 'up', icon: Target, color: 'from-amber-500 to-amber-600', iconBg: 'bg-amber-100' },
          { label: 'Total Outstanding', value: '1.025.346.002', unit: 'Rupiah', growth: 18.7, trend: 'up', icon: PieChartIcon, color: 'from-purple-500 to-purple-600', iconBg: 'bg-purple-100' },
          { label: 'Total Plafond', value: '1.279.500.000', unit: 'Rupiah', growth: 22.1, trend: 'up', icon: BarChart3, color: 'from-cyan-500 to-cyan-600', iconBg: 'bg-cyan-100' },
          { label: 'Achievement', value: '82.4', unit: '%', growth: 5.3, trend: 'up', icon: Award, color: 'from-rose-500 to-rose-600', iconBg: 'bg-rose-100' },
        ].map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            /* Tambahin min-w-0 di sini biar flexbox-nya ngizinin teks buat nge-truncate */
            <div key={i} className="bg-white rounded-xl premium-shadow p-4 card-hover min-w-0">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg ${kpi.iconBg} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5 text-slate-700" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-semibold ${getTrendColor(kpi.trend)} whitespace-nowrap`}>
                  {getTrendIcon(kpi.trend)}
                  <span>{kpi.growth}%</span>
                </div>
              </div>
              
              <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider truncate">
                {kpi.label}
              </div>
              
              <div 
                className="text-xl xl:text-2xl font-bold text-slate-900 mt-1 tracking-tight truncate" 
                title={kpi.value}
              >
                {kpi.value}
              </div>
              
              <div className="text-xs text-slate-400 mt-0.5 truncate">
                {kpi.unit}
              </div>
            </div>
          );
        })}
      </div>

      {/* Row 2: Performance by Product + Marketing Performance + Achievement */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Disbursement by Product */}
        <div className="bg-white rounded-xl premium-shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Kinerja Pencairan Berdasarkan Produk</h3>
            </div>
            <FileText size={16} className="text-slate-400" />
          </div>
          <div className="space-y-3">
            {PRODUCT_PORTFOLIO.map((p) => (
              <div key={p.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-800">{p.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-slate-900">{p.noa}</div>
                  <div className="text-[11px] text-slate-500">Rp {formatCompactCurrency(p.outstanding)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Performance Chart */}
        <div className="bg-white rounded-xl premium-shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Kinerja Pencapaian Bulanan</h3>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <ComposedChart data={MARKETING_PERFORMANCE}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748B' }} />
              <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#64748B' }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: '#64748B' }} />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }} />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              <Bar yAxisId="left" dataKey="actual" fill="#3B82F6" name="Jumlah" radius={[6, 6, 0, 0]} barSize={20} />
              <Bar yAxisId="left" dataKey="target" fill="#CBD5E1" name="Target" radius={[6, 6, 0, 0]} barSize={20} />
              <Line yAxisId="right" type="monotone" dataKey="achievement" stroke="#F59E0B" strokeWidth={2.5} dot={{ r: 4 }} name="Pencapaian (%)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Achievement Donut + Performance */}
        <div className="bg-white rounded-xl premium-shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Kinerja Pencapaian</h3>
          </div>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie
                  data={MARKETING_PERFORMANCE.map((m) => ({ name: m.name, value: m.achievement, color: m.color }))}
                  dataKey="value"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={2}
                  stroke="none"
                >
                  {MARKETING_PERFORMANCE.map((m, i) => (
                    <Cell key={i} fill={m.color} />
                  ))}
                </Pie>
                <text x="80" y="75" textAnchor="middle" className="text-3xl font-bold" fill="#0F172A">62%</text>
                <text x="80" y="95" textAnchor="middle" className="text-[10px]" fill="#64748B">Rata-rata</text>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2.5">
              {MARKETING_PERFORMANCE.map((m) => (
                <div key={m.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: m.color }} />
                  <span className="text-xs text-slate-700 flex-1">{m.name}</span>
                  <span className="text-sm font-bold text-slate-900">{m.achievement}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Portfolio + Funnel + Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Portfolio Composition */}
        <div className="bg-white rounded-xl premium-shadow p-5">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Komposisi Plafond</h3>
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
                <text x="90" y="75" textAnchor="middle" className="text-xl font-bold" fill="#0F172A">1,03 M</text>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2.5">
              {PRODUCT_PORTFOLIO.map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: p.color }} />
                  <span className="text-xs text-slate-700 flex-1">{p.name}</span>
                  <span className="text-sm font-bold text-slate-900">{p.contribution}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sales Funnel */}
        <div className="bg-white rounded-xl premium-shadow p-5">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Sales Funnel</h3>
          </div>
          <div className="space-y-3">
            {SALES_FUNNEL.map((stage, i) => {
              const width = (stage.value / SALES_FUNNEL[0].value) * 100;
              const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];
              return (
                <div key={stage.stage}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-700">{stage.stage}</span>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-slate-900">{stage.value}</span>
                    </div>
                  </div>
                  <div className="relative h-9 bg-slate-100 rounded-lg overflow-hidden">
                    <div
                      className="funnel-bar absolute inset-y-0 left-0 rounded-lg flex items-center px-3 text-white text-xs font-semibold"
                      style={{ width: `${width}%`, backgroundColor: colors[i] }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disbursement Plan - UDAH FIX OVERFLOW */}
        <div className="bg-white rounded-xl premium-shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Rencana Pencairan</h3>
            <Target size={18} className="text-blue-600" />
          </div>
          <div className="overflow-x-auto w-full rounded-lg border border-slate-200">
            <table className="w-full min-w-[300px] text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-3 py-2.5 text-[11px] font-semibold text-slate-600 uppercase">Produk</th>
                  <th className="text-right px-3 py-2.5 text-[11px] font-semibold text-slate-600 uppercase">NoA</th>
                  <th className="text-right px-3 py-2.5 text-[11px] font-semibold text-slate-600 uppercase">Plafond (Rp)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {DISBURSEMENT_PLAN.map((p) => (
                  <tr key={p.product} className="hover:bg-slate-50/50">
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="font-medium text-slate-800">{p.product}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right font-semibold text-slate-900">{p.noa}</td>
                    <td className="px-3 py-2.5 text-right font-semibold text-slate-900">{formatCompactCurrency(p.ceiling)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Row 4: Trend + Executive Insight */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Trend Chart */}
        <div className="bg-white rounded-xl premium-shadow p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Trend Kinerja 6 Bulan</h3>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={PERFORMANCE_TREND}>
              <defs>
                <linearGradient id="noaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="ceilingGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748B' }} />
              <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#64748B' }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: '#64748B' }} />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }} />
              <Area yAxisId="left" type="monotone" dataKey="noa" stroke="#3B82F6" strokeWidth={2.5} fill="url(#noaGradient)" name="NoA" />
              <Area yAxisId="right" type="monotone" dataKey="ceiling" stroke="#10B981" strokeWidth={2.5} fill="url(#ceilingGradient)" name="Plafond" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Executive Insight Panel */}
        <div className="bg-white rounded-xl premium-shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Executive Insight</h3>
            </div>
          </div>
          <div className="space-y-3 text-xs">
            <div>
              <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Info size={11} /> Key Findings
              </div>
              <ul className="space-y-1 text-slate-700">
                {EXECUTIVE_INSIGHTS.findings.slice(0, 2).map((f, i) => (
                  <li key={i} className="flex gap-1.5"><span className="text-blue-500">•</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="pt-2 border-t border-slate-100">
              <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                <AlertCircle size={11} /> Alerts
              </div>
              <ul className="space-y-1 text-slate-700">
                {EXECUTIVE_INSIGHTS.alerts.slice(0, 2).map((a, i) => (
                  <li key={i} className="flex gap-1.5"><span className="text-amber-500">•</span>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AO Leaderboard - UDAH FIX OVERFLOW */}
      <div className="bg-white rounded-xl premium-shadow p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Trophy size={18} className="text-amber-500" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">AO Leaderboard - Top Performers</h3>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">Click nama AO untuk drill-down</div>
        </div>
        <div className="overflow-x-auto w-full rounded-lg border border-slate-200">
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left px-3 py-2.5 text-[11px] font-bold text-slate-500 uppercase">#</th>
                <th className="text-left px-3 py-2.5 text-[11px] font-bold text-slate-500 uppercase">AO Name</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-slate-500 uppercase">Socialization</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-slate-500 uppercase">Survey</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-slate-500 uppercase">Approved</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-slate-500 uppercase">Disbursement</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-slate-500 uppercase">Outstanding</th>
                <th className="text-right px-3 py-2.5 text-[11px] font-bold text-slate-500 uppercase">Achievement</th>
                <th className="text-center px-3 py-2.5 text-[11px] font-bold text-slate-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {AO_LIST.map((ao) => (
                <tr key={ao.id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-3 py-3">
                    {ao.rank <= 3 ? (
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        ao.rank === 1 ? 'bg-gradient-to-br from-amber-400 to-amber-500' :
                        ao.rank === 2 ? 'bg-gradient-to-br from-slate-400 to-slate-500' :
                        'bg-gradient-to-br from-orange-400 to-orange-500'
                      }`}>{ao.rank}</div>
                    ) : (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-slate-500 bg-slate-100">{ao.rank}</div>
                    )}
                  </td>
                  <td className="px-3 py-3">
                    <div>
                      <button onClick={() => onAOClick(ao.id)} className="ao-link text-left">
                        {ao.name}
                      </button>
                      <div className="text-[10px] text-slate-400">{ao.id} • {ao.unit}</div>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-right font-semibold text-slate-800">{ao.socialization}</td>
                  <td className="px-3 py-3 text-right font-semibold text-slate-800">{ao.survey}</td>
                  <td className="px-3 py-3 text-right font-semibold text-slate-800">{ao.approvedSurvey}</td>
                  <td className="px-3 py-3 text-right font-semibold text-slate-800">{ao.disbursement}</td>
                  <td className="px-3 py-3 text-right font-semibold text-slate-800">{formatCompactCurrency(ao.outstanding)}</td>
                  <td className="px-3 py-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${getAchievementDot(ao.achievement)}`} />
                      <span className={`text-sm font-bold ${getAchievementColor(ao.achievement).split(' ')[0]}`}>{ao.achievement}%</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className={`inline-block px-2 py-1 rounded-md text-[10px] font-semibold border ${STATUS_STYLES[ao.status]}`}>
                      {ao.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}