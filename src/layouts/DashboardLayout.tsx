import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeMenu = location.pathname.split('/')[1] || 'executive';

  const handleMenuChange = (menu: string) => {
    navigate(`/${menu}`);
    setIsSidebarOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Overlay Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        activeMenu={activeMenu} 
        onMenuChange={handleMenuChange} 
        onLogoClick={handleLogoClick}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      {/* max-w-full dan overflow-x-hidden biar ga nembus ke kanan */}
      <main className="flex-1 min-h-screen transition-all duration-300 md:ml-72 w-full max-w-full overflow-x-hidden">
        <div className="bg-white border-b border-slate-200 sticky top-0 z-30 px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 rounded-lg hover:bg-slate-100 text-slate-600 md:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
              <span className="font-semibold text-slate-700 hidden sm:inline">BPR Dashboard</span>
              <span className="text-slate-300 hidden sm:inline">/</span>
              <span className="capitalize">{activeMenu.replace('-', ' ')}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-500 hidden sm:block">
              <span>Last synced: </span>
              <span className="font-semibold text-slate-700">just now</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:shadow-md transition">
              EX
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 w-full max-w-full">
          <Outlet />
        </div>
        
        <div className="mt-8 pb-6 text-center text-xs text-slate-500">
          <div className="font-semibold text-slate-700">© 2024 BPR - Bank Perkreditan Rakyat</div>
          <div className="mt-1">Executive Management Dashboard v1.0 | Jangan lupa napas bang</div>
        </div>
      </main>
    </div>
  );
}