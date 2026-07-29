import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, ChevronDown, Package } from 'lucide-react';

import surgicalImg from '../assets/surgical_instruments_set.jpg';
import orthopedicImg from '../assets/orthopedic_implant_plate_screw.jpg';
import equipmentImg from '../assets/medical_equipment_closeup.jpg';

const CATEGORIES = [
  'Semua Produk',
  'Instrument Set Orthopedic',
  'Instrument Set Kebidanan',
  'Instrument Set THT',
  'Instrument Set Fess',
  'Instrument set Mayor',
  'Instrument Set Laparatomy',
  'Instrument Set Palatoplasty',
  'Instrument Set Vascular',
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Instrument Set Orthopedic',
    category: 'Instrument Set Orthopedic',
    description: 'Set lengkap instrument bedah orthopedic berbahan Stainless Steel, made in Pakistan.',
    image: orthopedicImg,
  },
  {
    id: 2,
    name: 'Instrument Set Kebidanan',
    category: 'Instrument Set Kebidanan',
    description: 'Instrument kebidanan presisi tinggi untuk kebutuhan klinik dan rumah sakit.',
    image: surgicalImg,
  },
  {
    id: 3,
    name: 'Instrument Set THT',
    category: 'Instrument Set THT',
    description: 'Set instrument THT stainless steel dengan standar kualitas medis internasional.',
    image: equipmentImg,
  },
  {
    id: 4,
    name: 'Instrument Set Fess',
    category: 'Instrument Set Fess',
    description: 'Functional Endoscopic Sinus Surgery set dengan kelengkapan instrumen presisi.',
    image: surgicalImg,
  },
  {
    id: 5,
    name: 'Instrument set Mayor',
    category: 'Instrument set Mayor',
    description: 'Set instrument operasi mayor lengkap untuk kebutuhan kamar operasi.',
    image: equipmentImg,
  },
  {
    id: 6,
    name: 'Instrument Set Laparatomy',
    category: 'Instrument Set Laparatomy',
    description: 'Instrument laparotomi stainless steel berkualitas, tahan lama dan mudah disterilkan.',
    image: orthopedicImg,
  },
  {
    id: 7,
    name: 'Instrument Set Palatoplasty',
    category: 'Instrument Set Palatoplasty',
    description: 'Set instrument palatoplasti untuk prosedur bedah langit-langit mulut.',
    image: surgicalImg,
  },
  {
    id: 8,
    name: 'Instrument Set Vascular',
    category: 'Instrument Set Vascular',
    description: 'Instrument bedah vaskular presisi untuk prosedur pembuluh darah.',
    image: equipmentImg,
  },
];

export default function ProductSearchAndFilter() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua Produk');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        activeCategory === 'Semua Produk' || p.category === activeCategory;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const clearAll = () => {
    setQuery('');
    setActiveCategory('Semua Produk');
  };

  const hasActiveFilters = query.trim() !== '' || activeCategory !== 'Semua Produk';

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white py-16 md:py-24"
      id="produk"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#0A4FA3] mb-3">
            Katalog Produk
          </p>
          <h2 className="font-['Bricolage Grotesque'] text-3xl md:text-5xl font-extrabold text-[#171A20] leading-tight">
            Cari Instrument &amp; Implan
          </h2>
          <p className="font-['Inter'] text-base text-[#5C5E62] mt-4 max-w-2xl leading-relaxed">
            Temukan instrument alat bedah &amp; implan orthopedic berbahan stainless steel
            berkualitas — dibuat di Pakistan dengan standar medis internasional.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E8E] pointer-events-none"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari instrument, kategori, atau deskripsi…"
              className="w-full rounded-[16px] border border-[#D0D1D2] bg-[#F3F8FC] py-3.5 pl-11 pr-10 font-['Inter'] text-sm text-[#171A20] placeholder-[#8E8E8E] outline-none transition-all duration-300 focus:border-[#0A4FA3] focus:bg-white focus:ring-2 focus:ring-[#0A4FA3]/20"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Hapus pencarian"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#8E8E8E] hover:text-[#171A20] hover:bg-[#EEEEEE] transition-colors duration-200"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="sm:hidden inline-flex items-center justify-center gap-2 rounded-[16px] border border-[#D0D1D2] bg-white px-5 py-3.5 font-['Inter'] text-sm font-medium text-[#393C41] transition-all duration-300 active:scale-95"
          >
            <SlidersHorizontal size={16} />
            Filter Kategori
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${mobileFiltersOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Category pills — desktop always visible, mobile collapsible */}
        <AnimatePresence initial={false}>
          {(mobileFiltersOpen || true) && (
            <motion.div
              key="filters"
              className={`flex-wrap gap-2 mb-8 ${mobileFiltersOpen ? 'flex' : 'hidden sm:flex'}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {CATEGORIES.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-4 py-2 font-['Inter'] text-xs font-semibold tracking-wide transition-all duration-300 border ${
                      active
                        ? 'bg-[#0A4FA3] text-white border-[#0A4FA3] shadow-[0_4px_12px_rgba(10,79,163,0.25)]'
                        : 'bg-white text-[#393C41] border-[#D0D1D2] hover:border-[#0A4FA3] hover:text-[#0A4FA3]'
                    }`}
                  >
                    {cat}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result meta */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-['Inter'] text-sm text-[#5C5E62]">
            Menampilkan{' '}
            <span className="font-semibold text-[#171A20]">{filtered.length}</span>{' '}
            produk
            {activeCategory !== 'Semua Produk' && (
              <>
                {' '}dalam{' '}
                <span className="font-semibold text-[#0A4FA3]">{activeCategory}</span>
              </>
            )}
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="font-['Inter'] text-xs font-semibold text-[#0A4FA3] hover:underline transition-colors duration-200"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* Results grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col overflow-hidden rounded-[16px] bg-white border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                >
                  <div className="relative h-44 overflow-hidden bg-[#F3F8FC]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-2 inline-block w-fit rounded-full bg-[#F3F8FC] px-3 py-1 font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0A4FA3]">
                      {product.category}
                    </span>
                    <h3 className="font-['Bricolage Grotesque'] text-base font-bold text-[#171A20] leading-snug">
                      {product.name}
                    </h3>
                    <p className="mt-2 font-['Inter'] text-sm text-[#5C5E62] leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 pt-2">
                      <span className="font-['Inter'] text-[11px] font-medium text-[#8E8E8E]">
                        Stainless Steel · Made in Pakistan
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center rounded-[16px] border border-dashed border-[#D0D1D2] bg-[#F3F8FC] py-16 px-6 text-center"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
              <Package size={24} className="text-[#8E8E8E]" />
            </div>
            <h3 className="font-['Bricolage Grotesque'] text-lg font-bold text-[#171A20]">
              Tidak ada produk ditemukan
            </h3>
            <p className="mt-2 max-w-sm font-['Inter'] text-sm text-[#5C5E62] leading-relaxed">
              Coba kata kunci lain atau reset filter untuk melihat seluruh katalog instrument kami.
            </p>
            <button
              onClick={clearAll}
              className="mt-6 rounded-[16px] bg-[#0A4FA3] px-8 py-3 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              Reset Filter
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
