import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle, Package, Layers, Award } from 'lucide-react';
import catalogImg from '../assets/surgical_instruments_set.jpg';

const highlights = [
  {
    icon: Package,
    title: 'Instrument Alat Bedah',
    desc: 'Set lengkap instrument bedah dari material Stainless Steel berkualitas tinggi.',
  },
  {
    icon: Layers,
    title: 'Implan Orthopedic',
    desc: 'Plate, screw, dan implan orthopedic presisi untuk kebutuhan operasi.',
  },
  {
    icon: Award,
    title: 'Standar Internasional',
    desc: 'Produk made in Pakistan dengan standar manufaktur medis internasional.',
  },
];

export default function DownloadCatalogSection() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    // Backend not deployed yet — pure frontend confirmation state.
    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Hairline rule above — editorial CTA composition */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="h-px w-full bg-[#EEEEEE]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left: image breaking the column grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <img
                src={catalogImg}
                alt="Katalog instrument alat bedah PT. Rinjani Medika Bersama"
                className="h-[320px] w-full object-cover transition-transform duration-700 ease-out hover:scale-105 sm:h-[420px] lg:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171A20]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                  <FileText className="h-5 w-5 text-[#0A4FA3]" />
                </span>
                <div>
                  <p className="font-['Bricolage_Grotesque'] text-sm font-bold text-white">
                    Katalog Produk {new Date().getFullYear()}
                  </p>
                  <p className="font-['Inter'] text-xs font-medium text-white/80">
                    PDF · Instrument &amp; Implan Orthopedic
                  </p>
                </div>
              </div>
            </div>

            {/* Offset accent card overlapping the image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
              className="absolute -bottom-6 -right-2 hidden rounded-[16px] border border-[#EEEEEE] bg-white px-6 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:block lg:-right-8"
            >
              <p className="font-['Bricolage_Grotesque'] text-3xl font-extrabold text-[#0A4FA3]">
                2019
              </p>
              <p className="mt-1 font-['Inter'] text-xs font-medium uppercase tracking-[0.08em] text-[#6C757D]">
                Terpercaya sejak
              </p>
            </motion.div>
          </motion.div>

          {/* Right: copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 lg:pl-6"
          >
            <p className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#0A4FA3]">
              Unduh Katalog
            </p>
            <h2 className="mt-4 font-['Bricolage_Grotesque'] text-4xl font-extrabold leading-[1.1] text-[#171A20] sm:text-5xl">
              Jelajahi Katalog Lengkap Kami
            </h2>
            <p className="mt-5 max-w-xl font-['Inter'] text-base font-normal leading-relaxed text-[#393C41]">
              Dapatkan katalog PDF lengkap berisi seluruh rangkaian instrument alat
              bedah dan implan orthopedic dari PT. Rinjani Medika Bersama —
              distributor alat kesehatan instrument dan implan orthopedic
              terpercaya di Indonesia.
            </p>

            <ul className="mt-9 space-y-5">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[16px] bg-[#F3F8FC]">
                      <Icon className="h-5 w-5 text-[#0A4FA3]" />
                    </span>
                    <div>
                      <p className="font-['Bricolage_Grotesque'] text-base font-bold text-[#171A20]">
                        {item.title}
                      </p>
                      <p className="mt-0.5 font-['Inter'] text-sm leading-relaxed text-[#6C757D]">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.button
                type="button"
                onClick={handleDownload}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-flex items-center justify-center gap-2.5 rounded-[16px] bg-[#0A4FA3] px-8 py-3 font-['Inter'] text-sm font-semibold text-white shadow-[0_4px_12px_rgba(10,79,163,0.3)] transition-all duration-300 hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4FA3] focus-visible:ring-offset-2 active:scale-95"
              >
                {downloaded ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Katalog Siap Diunduh
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5" />
                    Unduh Katalog PDF
                  </>
                )}
              </motion.button>
              <p className="font-['Inter'] text-xs font-medium text-[#6C757D]">
                {downloaded
                  ? 'Unduhan akan tersedia segera. Hubungi kami untuk info lebih lanjut.'
                  : 'Gratis · Tanpa perlu mendaftar · Format PDF'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
