// Mock data for BPR Executive Dashboard

export const KPIS = {
  totalAO: { value: 15, unit: 'Orang', growth: 8.5, trend: 'up' },
  totalCM: { value: 100, unit: 'Orang', growth: 12.3, trend: 'up' },
  totalNoA: { value: 1150, unit: 'Ots', growth: 15.2, trend: 'up' },
  totalOutstanding: { value: 1025346002, unit: 'Rupiah', growth: 18.7, trend: 'up' },
  totalCeiling: { value: 1279500000, unit: 'Rupiah', growth: 22.1, trend: 'up' },
  achievement: { value: 82.4, unit: '%', growth: 5.3, trend: 'up' },
};

export const PRODUCT_PORTFOLIO = [
  { name: 'Regular', noa: 321, outstanding: 512546465, ceiling: 620000000, contribution: 50.0, color: '#2563EB' },
  { name: 'Channeling', noa: 251, outstanding: 300505613, ceiling: 360000000, contribution: 29.3, color: '#10B981' },
  { name: 'Restructuring', noa: 385, outstanding: 150003424, ceiling: 180000000, contribution: 14.6, color: '#F59E0B' },
  { name: 'Write Off', noa: 193, outstanding: 62290500, ceiling: 75000000, contribution: 6.1, color: '#A855F7' },
];

export const MARKETING_PERFORMANCE = [
  { name: 'Sosialisasi', actual: 1550, target: 2000, achievement: 78, color: '#3B82F6' },
  { name: 'Survei', actual: 1009, target: 2000, achievement: 50, color: '#10B981' },
  { name: 'Survei Lolos', actual: 853, target: 1000, achievement: 85, color: '#F59E0B' },
  { name: 'Survei Gagal', actual: 156, target: 1000, achievement: 16, color: '#8B5CF6' },
];

export const SALES_FUNNEL = [
  { stage: 'Sosialisasi', value: 1550, rate: 100, dropOff: 0 },
  { stage: 'Survei', value: 1009, rate: 65.1, dropOff: 34.9 },
  { stage: 'Survei Lolos', value: 853, rate: 55.0, dropOff: 10.1 },
  { stage: 'Pencairan', value: 445, rate: 28.7, dropOff: 26.3 },
];

export const DISBURSEMENT_PLAN = [
  { product: 'Reguler', noa: 553, ceiling: 829500000, contribution: 64.8 },
  { product: 'Channeling', noa: 300, ceiling: 450000000, contribution: 35.2 },
];

export const PERFORMANCE_TREND = [
  { month: 'Jun 2024', noa: 650, outstanding: 580, ceiling: 720 },
  { month: 'Jul 2024', noa: 720, outstanding: 640, ceiling: 780 },
  { month: 'Agu 2024', noa: 810, outstanding: 710, ceiling: 850 },
  { month: 'Sep 2024', noa: 920, outstanding: 840, ceiling: 960 },
  { month: 'Okt 2024', noa: 1030, outstanding: 950, ceiling: 1080 },
  { month: 'Nov 2024', noa: 1150, outstanding: 1025, ceiling: 1279 },
];

export const AO_LIST = [
  {
    id: 'AO-001',
    name: 'Ahmad Fauzi',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    socialization: 185,
    survey: 120,
    approvedSurvey: 95,
    disbursement: 52,
    noa: 52,
    outstanding: 125000000,
    ceiling: 140000000,
    achievement: 92.4,
    rank: 1,
    conversionRate: 55.0,
    status: 'Excellent',
  },
  {
    id: 'AO-002',
    name: 'Siti Nurhaliza',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    socialization: 178,
    survey: 115,
    approvedSurvey: 90,
    disbursement: 48,
    noa: 48,
    outstanding: 118000000,
    ceiling: 135000000,
    achievement: 88.7,
    rank: 2,
    conversionRate: 52.6,
    status: 'Excellent',
  },
  {
    id: 'AO-003',
    name: 'Budi Santoso',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    socialization: 165,
    survey: 108,
    approvedSurvey: 82,
    disbursement: 44,
    noa: 44,
    outstanding: 110000000,
    ceiling: 125000000,
    achievement: 85.2,
    rank: 3,
    conversionRate: 53.6,
    status: 'Good',
  },
  {
    id: 'AO-004',
    name: 'Dewi Kartika',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    socialization: 158,
    survey: 102,
    approvedSurvey: 78,
    disbursement: 41,
    noa: 41,
    outstanding: 105000000,
    ceiling: 120000000,
    achievement: 82.1,
    rank: 4,
    conversionRate: 51.9,
    status: 'Good',
  },
  {
    id: 'AO-005',
    name: 'Rizki Pratama',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    socialization: 152,
    survey: 98,
    approvedSurvey: 75,
    disbursement: 39,
    noa: 39,
    outstanding: 98000000,
    ceiling: 115000000,
    achievement: 79.8,
    rank: 5,
    conversionRate: 51.3,
    status: 'Good',
  },
  {
    id: 'AO-006',
    name: 'Linda Wijaya',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    socialization: 145,
    survey: 92,
    approvedSurvey: 70,
    disbursement: 36,
    noa: 36,
    outstanding: 92000000,
    ceiling: 108000000,
    achievement: 76.5,
    rank: 6,
    conversionRate: 50.7,
    status: 'Average',
  },
  {
    id: 'AO-007',
    name: 'Hendra Gunawan',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    socialization: 138,
    survey: 88,
    approvedSurvey: 65,
    disbursement: 33,
    noa: 33,
    outstanding: 87000000,
    ceiling: 102000000,
    achievement: 73.2,
    rank: 7,
    conversionRate: 50.0,
    status: 'Average',
  },
  {
    id: 'AO-008',
    name: 'Maya Sari',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    socialization: 132,
    survey: 84,
    approvedSurvey: 62,
    disbursement: 31,
    noa: 31,
    outstanding: 82000000,
    ceiling: 98000000,
    achievement: 70.8,
    rank: 8,
    conversionRate: 49.2,
    status: 'Average',
  },
  {
    id: 'AO-009',
    name: 'Agus Setiawan',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    socialization: 125,
    survey: 79,
    approvedSurvey: 58,
    disbursement: 28,
    noa: 28,
    outstanding: 76000000,
    ceiling: 92000000,
    achievement: 68.4,
    rank: 9,
    conversionRate: 48.3,
    status: 'Below Target',
  },
  {
    id: 'AO-010',
    name: 'Rina Susanti',
    branch: 'JAKARTA',
    region: 'JAKARTA SELATAN',
    unit: 'PIK',
    socialization: 118,
    survey: 75,
    approvedSurvey: 54,
    disbursement: 26,
    noa: 26,
    outstanding: 71000000,
    ceiling: 88000000,
    achievement: 65.1,
    rank: 10,
    conversionRate: 47.3,
    status: 'Below Target',
  },
];

export const BRANCH_PERFORMANCE = [
  { branch: 'Jakarta Selatan', noa: 485, outstanding: 425000000, achievement: 92.4, growth: 18.5, status: 'green' },
  { branch: 'Jakarta Pusat', noa: 425, outstanding: 380000000, achievement: 85.7, growth: 15.2, status: 'green' },
  { branch: 'Jakarta Barat', noa: 395, outstanding: 340000000, achievement: 78.3, growth: 12.8, status: 'yellow' },
  { branch: 'Jakarta Timur', noa: 365, outstanding: 310000000, achievement: 71.5, growth: 9.5, status: 'yellow' },
  { branch: 'Jakarta Utara', noa: 335, outstanding: 285000000, achievement: 65.8, growth: 7.2, status: 'red' },
];

export const KPI_MANAGEMENT = {
  productivity: { value: 82.5, target: 85, unit: '%' },
  portfolio: { value: 78.3, target: 80, unit: '%' },
  conversion: { value: 65.2, target: 70, unit: '%' },
  achievement: { value: 88.7, target: 90, unit: '%' },
  risk: { value: 92.1, target: 90, unit: '%' },
};

export const EXECUTIVE_INSIGHTS = {
  findings: [
    'Total outstanding mencapai Rp 1.02 Miliar dengan pertumbuhan 18.7% MoM',
    'Achievement rate mencapai 82.4%, tertinggi dalam 6 bulan terakhir',
    'Konversi dari survei ke pencairan mencapai 28.7%',
    '15 Account Officers aktif berkontribusi pada pencapaian target',
  ],
  alerts: [
    'Conversion rate turun 2.3% dari bulan lalu',
    '3 AO berada di bawah target pencapaian 70%',
    'Survei gagal meningkat 8% perlu perhatian',
  ],
  risks: [
    'Rasio NPL meningkat 0.5% pada segmen Restructuring',
    'Konsentrasi portofolio 50% pada produk Regular',
    'Tingkat approval survei di bawah target 5%',
  ],
  opportunities: [
    'Segment Channeling menunjukkan pertumbuhan 22%',
    'Potensi cross-selling 350 nasabah existing',
    'Ekspansi ke 3 cabang baru di Q4 2024',
  ],
  recommendations: [
    'Tingkatkan pelatihan AO pada tahap konversi survei',
    'Implementasi program incentive untuk top performer',
    'Review proses approval untuk mempercepat TAT',
    'Diversifikasi produk untuk mengurangi risiko konsentrasi',
  ],
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID').format(value);
};

export const formatCompactCurrency = (value: number) => {
  if (value >= 1000000000) return `${(value / 1000000000).toFixed(2)} M`;
  if (value >= 1000000) return `${(value / 1000000).toFixed(2)} Jt`;
  return new Intl.NumberFormat('id-ID').format(value);
};
