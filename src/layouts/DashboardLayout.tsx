import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'; // Pastiin Sidebar udah lu pindahin ke folder layouts ya!

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Ngebaca URL sekarang buat nentuin menu mana yang lagi nyala di sidebar
  const activeMenu = location.pathname.split('/')[1] || 'executive';

  const handleMenuChange = (menu: string) => {
    navigate(`/${menu}`);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar 
        activeMenu={activeMenu} 
        onMenuChange={handleMenuChange} 
        onLogoClick={handleLogoClick} 
      />
      
      <main className="ml-72 min-h-screen">
        {/* Top Bar gw taruh di layout biar lu ga usah copas-copas lagi di tiap page baru */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">BPR Dashboard</span>
            <span className="text-slate-300">/</span>
            <span className="capitalize">{activeMenu.replace('-', ' ')}</span>
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

        {/* Nah, <Outlet /> ini tuh bolongan/portal buat masukin halaman dari folder pages/ lu */}
        <div className="p-6">
          <Outlet />
        </div>
        
        {/* Footer */}
        <div className="mt-8 pb-6 text-center text-xs text-slate-500">
          <div className="font-semibold text-slate-700">© 2024 BPR - Bank Perkreditan Rakyat</div>
          <div className="mt-1">Executive Management Dashboard v1.0 | Lu jangan lupa ngopi</div>
        </div>
      </main>
    </div>
  );
}