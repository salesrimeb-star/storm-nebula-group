import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import surgicalInstruments from '../assets/surgical_instruments_set.jpg';
import orthopedicImplant from '../assets/orthopedic_implant_plate_screw.jpg';
import medicalEquipment from '../assets/medical_equipment_closeup.jpg';
import hospitalExterior from '../assets/modern_hospital_exterior.jpg';

const PRIMARY = '#0A4FA3';
const CARBON = '#171A20';
const GRAPHITE = '#393C41';
const PEWTER = '#5C5E62';
const ASH = '#F4F4F4';
const PALE = '#F3F8FC';

const CATEGORIES = [
  {
    number: '01',
    name: 'Instrument Set Orthopedic',
    description:
      'Set instrumen bedah orthopedic lengkap dari stainless steel berkualitas tinggi untuk prosedur tulang dan sendi.',
    image: surgicalInstruments,
    tag: 'Instrument Set',
  },
  {
    number: '02',
    name: 'Implan Orthopedic',
    description:
      'Plate, screw, dan sistem implan orthopedic presisi — material stainless steel, manufaktur Pakistan.',
    image: orthopedicImplant,
    tag: 'Implan',
  },
  {
    number: '03',
    name: 'Instrument Set Kebidanan',
    description:
      'Instrumen kebidanan dan kandungan yang steril, ergonomis, dan siap pakai untuk fasilitas kesehatan.',
    image: medicalEquipment,
    tag: 'Instrument Set',
  },
  {
    number: '04',
    name: 'Instrument Set THT & Fess',
    description:
      'Set instrumen THT dan FESS (Functional Endoscopic Sinus Surgery) untuk prosedur telinga, hidung, dan tenggorokan.',
    image: hospitalExterior,
    tag: 'Instrument Set',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function scrollToProducts() {
  const el = document.getElementById('produk');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export default function ProductCategoriesGrid() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="kategori-produk"
      ref={sectionRef}
      className="relative w-full bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Editorial section header — kicker + oversized headline + side note */}
        <div className="mb-14 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-12 md:items-end">
          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="mb-4 font-['Inter'] text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: PRIMARY }}
            >
              Kategori Produk
            </p>
            <h2
              className="font-['Bricolage Grotesque'] text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
              style={{ color: CARBON }}
            >
              Instrument Alat Bedah
              <br />
              <span style={{ color: PRIMARY }}>&amp; Implan Orthopedic</span>
            </h2>
          </motion.div>
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="font-['Inter'] text-sm leading-relaxed md:text-base"
              style={{ color: PEWTER }}
            >
              Empat kategori utama produk kami — diproduksi dari material
              stainless steel, dibuat di Pakistan, dan dipercaya fasilitas
              kesehatan di seluruh Indonesia sejak 2019.
            </p>
            <div
              className="mt-6 h-px w-full"
              style={{ backgroundColor: '#EEEEEE' }}
            />
          </motion.div>
        </div>

        {/* Asymmetric editorial grid — first card spans wide, rest stagger */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {CATEGORIES.map((cat, i) => {
            const isWide = i === 0;
            const spanClass = isWide
              ? 'md:col-span-7'
              : i === 1
              ? 'md:col-span-5'
              : i === 2
              ? 'md:col-span-5'
              : 'md:col-span-7';

            return (
              <motion.article
                key={cat.number}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                onClick={scrollToProducts}
                className={`group relative cursor-pointer overflow-hidden ${spanClass}`}
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              >
                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden md:h-96">
                  <motion.img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Gradient overlay for legibility */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(23,26,32,0.82) 0%, rgba(23,26,32,0.28) 45%, rgba(23,26,32,0.05) 100%)',
                    }}
                  />

                  {/* Number — editorial index */}
                  <span
                    className="absolute right-5 top-5 font-['Bricolage Grotesque'] text-sm font-bold tracking-widest text-white/70"
                    aria-hidden="true"
                  >
                    {cat.number}
                  </span>

                  {/* Tag chip */}
                  <span
                    className="absolute left-5 top-5 rounded-full px-3.5 py-1.5 font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.16)',
                      border: '1px solid rgba(255,255,255,0.28)',
                    }}
                  >
                    {cat.tag}
                  </span>

                  {/* Card content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <h3 className="mb-2 font-['Bricolage Grotesque'] text-2xl font-bold leading-tight text-white md:text-3xl">
                      {cat.name}
                    </h3>
                    <p className="mb-5 max-w-md font-['Inter'] text-sm leading-relaxed text-white/80">
                      {cat.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3"
                      style={{ color: '#FFFFFF' }}
                    >
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300"
                        style={{ backgroundColor: PRIMARY }}
                      >
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </span>
                      Lihat Produk
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Understated full-width CTA row with hairline rule */}
        <motion.div
          className="mt-14 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="mb-8 h-px w-full"
            style={{ backgroundColor: '#EEEEEE' }}
          />
          <div
            className="flex flex-col items-start justify-between gap-6 rounded-2xl p-8 md:flex-row md:items-center md:p-10"
            style={{ backgroundColor: PALE, borderRadius: '16px' }}
          >
            <div>
              <h3
                className="mb-1 font-['Bricolage Grotesque'] text-xl font-bold md:text-2xl"
                style={{ color: CARBON }}
              >
                Butuh instrument set lainnya?
              </h3>
              <p
                className="font-['Inter'] text-sm md:text-base"
                style={{ color: GRAPHITE }}
              >
                Kami juga menyediakan Instrument Set Mayor, Laparatomy,
                Palatoplasty, dan Vascular.
              </p>
            </div>
            <motion.button
              type="button"
              onClick={scrollToProducts}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 px-8 py-3 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                backgroundColor: PRIMARY,
                borderRadius: '9999px',
                boxShadow: '0 4px 12px rgba(10,79,163,0.25)',
              }}
            >
              Jelajahi Semua Produk
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
