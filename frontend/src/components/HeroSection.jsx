import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck, Award, Truck } from 'lucide-react';
import heroImg from '../assets/surgical_instruments_set.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#171A20]">
      {/* Full-bleed cinematic imagery */}
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={heroImg}
          alt="Instrument alat bedah stainless steel PT. Rinjani Medika Bersama"
          className="h-full w-full object-cover"
        />
        {/* Dark gradient overlay — keeps type legible, no decorative color */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#171A20]/70 via-[#171A20]/35 to-[#171A20]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171A20]/55 via-transparent to-transparent" />
      </motion.div>

      {/* Content — editorial magazine-cover composition */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-6 pb-28 pt-36 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          {/* Kicker / eyebrow */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-3 font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80"
          >
            <span className="inline-block h-px w-10 bg-[#F3F8FC]/60" aria-hidden="true" />
            Distributor Alat Kesehatan — Sejak 2019
          </motion.p>

          {/* Display headline — breaks the baseline grid */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-['Bricolage_Grotesque'] text-[13vw] font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]"
          >
            Instrument Bedah
            <span className="block text-[#F3F8FC]/90">&amp; Implan</span>
            <span className="block">
              Orthopedic<span className="text-[#0A4FA3]">.</span>
            </span>
          </motion.h1>

          {/* Lead line */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-xl font-['Inter'] text-base font-normal leading-relaxed text-white/75 sm:text-lg"
          >
            Distributor Alat Kesehatan Instrument dan Implan Orthopedic
            Terpercaya di Indonesia — material Stainless Steel presisi untuk
            standar operasi tertinggi.
          </motion.p>

          {/* CTAs — Tesla discipline: one solid blue primary, one ghost */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={() => scrollToId('produk')}
              className="group inline-flex items-center justify-center gap-2 rounded-[16px] bg-[#0A4FA3] px-8 py-3.5 font-['Inter'] text-sm font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171A20] active:scale-95"
            >
              Lihat Produk Kami
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              onClick={() => scrollToId('kontak')}
              className="inline-flex items-center justify-center rounded-[16px] border border-white/40 bg-transparent px-8 py-3.5 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:border-white/70 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171A20] active:scale-95"
            >
              Hubungi Kami
            </button>
          </motion.div>
        </div>

        {/* Trust strip — understated, hairline-separated */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/15 pt-6"
        >
          {[
            { Icon: ShieldCheck, label: 'Material Stainless Steel' },
            { Icon: Award, label: 'Terpercaya Sejak 2019' },
            { Icon: Truck, label: 'Pengiriman Seluruh Indonesia' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2.5 font-['Inter'] text-[13px] font-medium text-white/70"
            >
              <Icon className="h-4 w-4 text-[#F3F8FC]/80" aria-hidden="true" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollToId('tentang-kami')}
        aria-label="Gulir ke bawah"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-white/60 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" aria-hidden="true" />
        </motion.span>
      </motion.button>
    </section>
  );
}
