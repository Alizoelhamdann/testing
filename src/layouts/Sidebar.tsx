import {
  LayoutDashboard,
  Target,
  Trophy,
  DollarSign,
  Users,
  Building2,
  PieChart,
  Activity,
  FileText,
  ChevronLeft,
} from 'lucide-react';

interface SidebarProps {
  activeMenu: string;
  onMenuChange: (menu: string) => void;
  onLogoClick: () => void;
}

const MENU_ITEMS = [
  { id: 'executive', label: 'Executive Summary', icon: LayoutDashboard },
  { id: 'marketing', label: 'Marketing Performance', icon: Target },
  { id: 'achievement', label: 'Achievement Dashboard', icon: Trophy },
  { id: 'disbursement', label: 'Loan Disbursement Plan', icon: DollarSign },
  { id: 'ao-analysis', label: 'Analisis AO', icon: Users },
  { id: 'branch-analysis', label: 'Branch Analysis', icon: Building2 },
  { id: 'portfolio', label: 'Portfolio Analysis', icon: PieChart },
  { id: 'kpi', label: 'KPI Monitoring', icon: Activity },
  { id: 'reports', label: 'Reports', icon: FileText },
];

export default function Sidebar({ activeMenu, onMenuChange, onLogoClick }: SidebarProps) {
  return (
    <aside className="sidebar-gradient w-72 min-h-screen flex flex-col fixed left-0 top-0 z-40 text-white">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <button onClick={onLogoClick} className="flex items-center gap-3 w-full hover:opacity-90 transition-opacity">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-xl font-bold tracking-tight">BPR</div>
            <div className="text-[10px] text-blue-200/70 tracking-wider">BANK PERKREDITAN RAKYAT</div>
          </div>
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 py-5 overflow-y-auto">
        <div className="px-6 mb-3 text-[10px] font-semibold text-blue-200/50 tracking-wider uppercase">
          Menu Navigasi
        </div>
        <nav className="px-3 space-y-1">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onMenuChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600/90 text-white shadow-lg shadow-blue-900/30'
                    : 'text-blue-100/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-4.5 h-4.5" size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Unit Info */}
      <div className="mx-4 mb-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
        <div className="text-[10px] font-semibold text-blue-200/60 tracking-wider uppercase mb-3">
          Informasi Unit Kerja
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-blue-200/70">Cabang</span>
            <span className="font-medium">JAKARTA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200/70">Wilayah</span>
            <span className="font-medium">JAKARTA SELATAN</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200/70">Unit</span>
            <span className="font-medium">PIK</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200/70">Jumlah AO</span>
            <span className="font-medium">15</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/10 text-xs text-blue-200/50 flex items-center gap-2">
        <ChevronLeft className="w-4 h-4" />
        <span>Data per 31 Mei 2024</span>
      </div>
    </aside>
  );
}
