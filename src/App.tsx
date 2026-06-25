import { useState } from 'react';
import Sidebar from './components/Sidebar';
import FilterBar from './components/FilterBar';
import MainDashboard from './components/MainDashboard';
import AODetail from './components/AODetail';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('executive');
  const [selectedAO, setSelectedAO] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    dateRange: 'Mei 2024',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    accountOfficer: 'All',
    product: 'All',
  });

  const handleAOClick = (aoId: string) => {
    setSelectedAO(aoId);
    setActiveMenu('ao-analysis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedAO(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} onLogoClick={handleBack} />

      {/* Main Content */}
      <main className="ml-72 min-h-screen">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">BPR Dashboard</span>
            <span className="text-slate-300">/</span>
            <span className="capitalize">{activeMenu.replace('-', ' ')}</span>
            {selectedAO && (
              <>
                <span className="text-slate-300">/</span>
                <span className="font-semibold text-blue-600">AO Detail</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-500">
              <span className="hidden md:inline">Last synced: </span>
              <span className="font-semibold text-slate-700">just now</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold">
              EX
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!selectedAO && <FilterBar filters={filters} onFilterChange={handleFilterChange} />}

          {selectedAO ? (
            <AODetail aoId={selectedAO} onBack={handleBack} />
          ) : (
            <MainDashboard onAOClick={handleAOClick} />
          )}

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
            <div className="font-semibold text-slate-700">© 2024 BPR - Bank Perkreditan Rakyat</div>
            <div className="mt-1">Executive Management Dashboard v1.0 | All data confidential and proprietary</div>
          </div>
        </div>
      </main>
    </div>
  );
}
