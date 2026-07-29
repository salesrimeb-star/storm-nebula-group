import { motion } from 'framer-motion';
import { Eye, Target, BadgeCheck, MapPin } from 'lucide-react';
import clinicImg from '../assets/clinic_entrance.jpg';
import instrumentsImg from '../assets/surgical_instruments_set.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

export default function TentangKamiSection() {
  return (
    <section id="tentang-kami" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow + heading */}
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#0A4FA3]">
            Tentang Kami
          </span>
          <h2 className="mt-3 font-['Bricolage Grotesque'] text-4xl font-extrabold leading-tight text-[#171A20] md:text-5xl">
            PT. Rinjani Medika Bersama
          </h2>
          <p className="mt-4 font-['Inter'] text-lg font-medium text-[#0A4FA3]">
            Distributor Alat Kesehatan Instrument dan Implan Orthopedic Terpercaya di Indonesia
          </p>
        </motion.div>

        {/* Editorial lead: multi-column paragraph */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-10 grid gap-8 md:grid-cols-12"
        >
          <p className="font-['Inter'] text-base leading-relaxed text-[#393C41] md:col-span-7 md:text-lg">
            <span className="font-['Bricolage Grotesque'] text-2xl font-bold text-[#171A20]">
              Berdiri sejak 2019,
            </span>{' '}
            PT. Rinjani Medika Bersama adalah distributor alat kesehatan yang berfokus pada
            penyediaan instrument alat bedah dan implan orthopedic berkualitas tinggi bagi
            rumah sakit, klinik, dan fasilitas layanan kesehatan di seluruh Indonesia.
          </p>
          <p className="font-['Inter'] text-base leading-relaxed text-[#5C5E62] md:col-span-5">
            Seluruh produk kami diproduksi di Pakistan menggunakan material Stainless Steel
            pilihan yang memenuhi standar medis internasional — presisi, daya tahan, dan
            keamanan dalam setiap instrumen yang kami distribusikan.
          </p>
        </motion.div>

        {/* Asymmetric image + fact strip */}
        <div className="mt-16 grid items-start gap-8 md:grid-cols-12">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="md:col-span-7"
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <img
                src={clinicImg}
                alt="Fasilitas layanan kesehatan mitra PT. Rinjani Medika Bersama"
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-96"
              />
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="md:col-span-5 md:-mt-6"
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <img
                src={instrumentsImg}
                alt="Instrument alat bedah Stainless Steel"
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-64"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { value: '2019', label: 'Berdiri' },
                { value: 'Pakistan', label: 'Made In' },
                { value: 'Stainless Steel', label: 'Material' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl bg-[#F3F8FC] px-4 py-5 text-center"
                >
                  <p className="font-['Bricolage Grotesque'] text-lg font-bold text-[#0A4FA3]">
                    {fact.value}
                  </p>
                  <p className="mt-1 font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#5C5E62]">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vision / Mission / Profile cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Eye,
              title: 'Visi',
              body: 'Menjadi distributor alat kesehatan instrument dan implan orthopedic terpercaya yang mendukung kemajuan layanan medis di Indonesia.',
            },
            {
              icon: Target,
              title: 'Misi',
              body: 'Menyediakan instrument alat bedah dan implan orthopedic berkualitas internasional dengan layanan responsif, harga kompetitif, dan distribusi yang menjangkau seluruh Indonesia.',
            },
            {
              icon: BadgeCheck,
              title: 'Profil Produk',
              body: 'Instrument Alat Bedah & Implan Orthopedic — instrument set orthopedic, kebidanan, THT, hingga vascular, terbuat dari Stainless Steel standar medis.',
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-[#EEEEEE] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F8FC]">
                  <Icon className="h-6 w-6 text-[#0A4FA3]" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-['Bricolage Grotesque'] text-xl font-bold text-[#171A20]">
                  {card.title}
                </h3>
                <p className="mt-3 font-['Inter'] text-sm leading-relaxed text-[#5C5E62]">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Location strip */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-12 flex items-start gap-4 rounded-2xl bg-[#F3F8FC] p-6 md:items-center"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0A4FA3]">
            <MapPin className="h-5 w-5 text-white" strokeWidth={1.8} />
          </div>
          <div>
            <p className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#0A4FA3]">
              Kantor Kami
            </p>
            <p className="mt-1 font-['Inter'] text-sm leading-relaxed text-[#393C41]">
              Perumahan Citra Indah City, Cluster Bougenville Blok.AI.01 No.11, Kel. Singajaya,
              Kec. Jonggol, Bogor – Jawa Barat, Indonesia 16830.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
