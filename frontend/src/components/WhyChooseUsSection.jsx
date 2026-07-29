import { motion } from 'framer-motion';
import { ShieldCheck, Award, Truck, Users, Wrench, BadgeCheck } from 'lucide-react';
import surgicalImg from '../assets/surgical_instruments_set.jpg';
import orthopedicImg from '../assets/orthopedic_implant_plate_screw.jpg';

const strengths = [
  {
    icon: ShieldCheck,
    num: '01',
    title: 'Material Stainless Steel Berkualitas',
    desc: 'Seluruh instrument bedah dan implan orthopedic kami terbuat dari stainless steel pilihan yang tahan korosi, presisi, dan aman untuk prosedur medis.',
  },
  {
    icon: BadgeCheck,
    num: '02',
    title: 'Distributor Terpercaya Sejak 2019',
    desc: 'PT. Rinjani Medika Bersama telah melayani kebutuhan alat kesehatan di Indonesia sejak 2019 dengan rekam jejak yang konsisten dan amanah.',
  },
  {
    icon: Wrench,
    num: '03',
    title: 'Instrument Set Lengkap',
    desc: 'Tersedia beragam instrument set — Orthopedic, Kebidanan, THT, Fess, Mayor, Laparatomy, Palatoplasty, hingga Vascular — dalam satu pintu.',
  },
  {
    icon: Truck,
    num: '04',
    title: 'Pengiriman ke Seluruh Indonesia',
    desc: 'Berkantor di Bogor, Jawa Barat, kami melayani pemesanan dan pengiriman alat kesehatan ke rumah sakit dan klinik di seluruh Indonesia.',
  },
  {
    icon: Users,
    num: '05',
    title: 'Layanan Admin Responsif',
    desc: 'Tim admin kami siap membantu kebutuhan Anda secara langsung — Admin 1 (Cella) dan Admin 2 (Kartika) dapat dihubungi setiap hari kerja.',
  },
  {
    icon: Award,
    num: '06',
    title: 'Standar Manufaktur Internasional',
    desc: 'Produk instrument dan implan orthopedic kami diproduksi dengan standar manufaktur internasional untuk menjamin mutu setiap unit.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUsSection() {
  return (
    <section id="keunggulan" className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Editorial header — asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 md:mb-20">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.18em] text-[#0A4FA3]">
              Mengapa Memilih Kami
            </span>
            <h2 className="mt-4 font-['Bricolage Grotesque'] text-4xl md:text-5xl font-extrabold leading-[1.08] text-[#171A20]">
              Keunggulan yang Menjadi{' '}
              <span className="text-[#0A4FA3]">Standar Kami</span>
            </h2>
          </motion.div>
          <motion.p
            className="lg:col-span-5 font-['Inter'] text-base md:text-lg leading-relaxed text-[#5C5E62]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sebagai distributor alat kesehatan instrument dan implan orthopedic terpercaya di
            Indonesia, kami berkomitmen menghadirkan produk presisi dengan layanan yang dapat
            diandalkan setiap hari.
          </motion.p>
        </div>

        {/* Feature essay row — image breaks the grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 md:mb-28">
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <img
                src={surgicalImg}
                alt="Instrument set bedah stainless steel PT. Rinjani Medika Bersama"
                className="w-full h-[320px] md:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            <motion.div
              className="absolute -bottom-8 -right-4 md:-right-8 w-40 md:w-56 rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={orthopedicImg}
                alt="Implan orthopedic plate dan screw"
                className="w-full h-28 md:h-36 object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="font-['Inter'] text-lg md:text-xl leading-relaxed text-[#393C41]">
              <span className="font-['Bricolage Grotesque'] text-2xl md:text-3xl font-bold text-[#0A4FA3]">
                Presisi bukan pilihan —
              </span>{' '}
              melainkan syarat mutlak dalam setiap instrument yang kami distribusikan. Dari ruang
              operasi rumah sakit hingga klinik spesialis, produk kami hadir untuk mendukung tenaga
              medis bekerja dengan percaya diri.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-['Bricolage Grotesque'] text-3xl md:text-4xl font-extrabold text-[#171A20]">
                  2019
                </p>
                <p className="mt-1 font-['Inter'] text-sm font-medium text-[#5C5E62]">
                  Berdiri &amp; melayani
                </p>
              </div>
              <div>
                <p className="font-['Bricolage Grotesque'] text-3xl md:text-4xl font-extrabold text-[#171A20]">
                  10+
                </p>
                <p className="mt-1 font-['Inter'] text-sm font-medium text-[#5C5E62]">
                  Kategori instrument set
                </p>
              </div>
              <div>
                <p className="font-['Bricolage Grotesque'] text-3xl md:text-4xl font-extrabold text-[#171A20]">
                  100%
                </p>
                <p className="mt-1 font-['Inter'] text-sm font-medium text-[#5C5E62]">
                  Stainless steel berkualitas
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Numbered editorial index of strengths */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {(strengths ?? []).map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.num}
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative rounded-2xl bg-[#F3F8FC] p-8 border border-[#E4EEF7] shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(10,79,163,0.12)] transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#0A4FA3] shadow-[0_1px_3px_rgba(0,0,0,0.08)] group-hover:bg-[#0A4FA3] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <span className="font-['Bricolage Grotesque'] text-sm font-bold tracking-widest text-[#0A4FA3]/40">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-6 font-['Bricolage Grotesque'] text-xl font-bold leading-snug text-[#171A20]">
                  {s.title}
                </h3>
                <p className="mt-3 font-['Inter'] text-sm leading-relaxed text-[#5C5E62]">
                  {s.desc}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
