import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MainDashboard from './pages/MainDashboard';
import AODetail from './pages/AODetail';

// Wrapper ajaib biar prop onAOClick di MainDashboard nyambung ke router
function DashboardWrapper() {
  const navigate = useNavigate();
  return <MainDashboard onAOClick={(id) => navigate(`/ao-analysis/${id}`)} />;
}

// Wrapper ajaib biar AODetail bisa nangkep ID dari URL URL 
function AODetailWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <AODetail aoId={id || ''} onBack={() => navigate(-1)} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Induk yang manggil Layout */}
        <Route path="/" element={<DashboardLayout />}>
          
          {/* Kalau user buka web pertama kali, langsung tendang ke menu executive */}
          <Route index element={<Navigate to="/executive" replace />} />
          
          {/* Ini daftar halaman lu, masukin ke sini semua */}
          <Route path="executive" element={<DashboardWrapper />} />
          <Route path="ao-analysis/:id" element={<AODetailWrapper />} />
          
          {/* Nanti kalau lu bikin page baru, misal Marketing, tinggal tambahin gini: */}
          {/* <Route path="marketing" element={<MarketingPage />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}