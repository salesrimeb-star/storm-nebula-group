import { motion } from 'framer-motion';
import { ArrowRight, Award, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import orthopedicImg from '../assets/orthopedic_implant_plate_screw.jpg';
import surgicalImg from '../assets/surgical_instruments_set.jpg';
import equipmentImg from '../assets/medical_equipment_closeup.jpg';
import clinicImg from '../assets/clinic_entrance.jpg';

const products = [
  {
    id: 1,
    name: 'Instrument Set Orthopedic',
    category: 'Best Seller',
    description: 'Set instrumen bedah orthopedic lengkap untuk prosedur fiksasi dan rekonstruksi tulang.',
    image: orthopedicImg,
    badge: 'Terlaris',
    material: 'Stainless Steel',
  },
  {
    id: 2,
    name: 'Instrument Set Mayor',
    category: 'Premium',
    description: 'Instrumen set mayor presisi tinggi untuk operasi besar dengan standar sterilisasi internasional.',
    image: surgicalImg,
    badge: 'Premium',
    material: 'Stainless Steel',
  },
  {
    id: 3,
    name: 'Instrument Set Laparatomy',
    category: 'New Arrival',
    description: 'Set laparatomi ergonomis dengan desain modern untuk efisiensi maksimal di ruang operasi.',
    image: equipmentImg,
    badge: 'Baru',
    material: 'Stainless Steel',
  },
  {
    id: 4,
    name: 'Instrument Set Vascular',
    category: 'Specialty',
    description: 'Instrumen vaskular mikro-presisi untuk prosedur bedah pembuluh darah yang kompleks.',
    image: clinicImg,
    badge: 'Spesialis',
    material: 'Stainless Steel',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
};

export default function FeaturedProductsGrid() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-['Inter'] text-sm font-semibold uppercase tracking-[0.08em] text-[#0A4FA3]">
            Produk Unggulan
          </span>
          <h2 className="mt-4 font-['Bricolage Grotesque'] text-3xl font-extrabold tracking-tight text-[#171A20] sm:text-4xl lg:text-5xl">
            Instrument &amp; Implan Terpercaya
          </h2>
          <p className="mt-4 font-['Inter'] text-base leading-relaxed text-[#6C757D] sm:text-lg">
            Pilihan terbaik dari katalog kami — instrument bedah dan implan orthopedic
            berkualitas tinggi dengan material Stainless Steel standar medis.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] ring-1 ring-[#EEEEEE] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F8FC]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-[#0A4FA3] px-3 py-1 font-['Inter'] text-xs font-semibold text-white shadow-sm">
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#0A4FA3]" />
                  <span className="font-['Inter'] text-xs font-medium uppercase tracking-wide text-[#6C757D]">
                    {product.category}
                  </span>
                </div>

                <h3 className="mt-3 font-['Bricolage Grotesque'] text-lg font-bold text-[#171A20]">
                  {product.name}
                </h3>

                <p className="mt-2 flex-1 font-['Inter'] text-sm leading-relaxed text-[#6C757D]">
                  {product.description}
                </p>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-4 border-t border-[#EEEEEE] pt-4">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#0A4FA3]" />
                    <span className="font-['Inter'] text-xs font-medium text-[#393C41]">
                      {product.material}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-[#0A4FA3] text-[#0A4FA3]" />
                    <span className="font-['Inter'] text-xs font-medium text-[#393C41]">
                      Terjamin
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A4FA3] px-5 py-2.5 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  Lihat Detail
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-[#D0D1D2] bg-white px-8 py-3 font-['Inter'] text-sm font-semibold text-[#0A4FA3] transition-all duration-300 hover:bg-[#F3F8FC] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] active:scale-95"
          >
            Lihat Semua Produk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
