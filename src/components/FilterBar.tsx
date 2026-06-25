import { Calendar, Download, FileText, Table2 } from 'lucide-react';

interface FilterBarProps {
  filters: {
    dateRange: string;
    branch: string;
    region: string;
    unit: string;
    accountOfficer: string;
    product: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

export default function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  const filterFields = [
    { key: 'dateRange', label: 'Periode', value: filters.dateRange },
    { key: 'branch', label: 'Cabang', value: filters.branch },
    { key: 'region', label: 'Wilayah', value: filters.region },
    { key: 'unit', label: 'Unit', value: filters.unit },
    { key: 'accountOfficer', label: 'Account Officer', value: filters.accountOfficer },
    { key: 'product', label: 'Produk', value: filters.product },
  ];

  return (
    <div className="bg-white rounded-xl premium-shadow p-4 mb-6">
      <div className="flex flex-wrap items-center gap-3">
        {filterFields.map((field) => (
          <div key={field.key} className="relative">
            <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              {field.label}
            </label>
            <select
              value={field.value}
              onChange={(e) => onFilterChange(field.key, e.target.value)}
              className="px-3 py-2 pr-8 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px] appearance-none cursor-pointer"
            >
              <option>All</option>
              <option>{field.value}</option>
            </select>
            <svg className="absolute bottom-3 right-2.5 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        ))}

        <div className="ml-auto flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
            <FileText size={16} />
            <span>Export PDF</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
            <Table2 size={16} />
            <span>Export Excel</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-900 transition-colors shadow-md">
            <Download size={16} />
            <span>Download</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 shadow-md">
            <Calendar size={16} />
            <span>Refresh Data</span>
          </button>
        </div>
      </div>
    </div>
  );
}
