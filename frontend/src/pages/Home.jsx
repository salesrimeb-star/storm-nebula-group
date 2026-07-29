import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TentangKamiSection from '../components/TentangKamiSection';
import ProductCategoriesGrid from '../components/ProductCategoriesGrid';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import FeaturedProductsGrid from '../components/FeaturedProductsGrid';
import DownloadCatalogSection from '../components/DownloadCatalogSection';
import ContactSection from '../components/ContactSection';
import ProductSearchAndFilter from '../components/ProductSearchAndFilter';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';

import surgicalImg from '../assets/surgical_instruments_set.jpg';
import implantImg from '../assets/orthopedic_implant_plate_screw.jpg';
import hospitalImg from '../assets/modern_hospital_exterior.jpg';

const services = [
  'Instrument Set Orthopedic',
  'Instrument Set Kebidanan',
  'Instrument Set THT',
  'Instrument Set Fess',
  'Instrument set Mayor',
  'Instrument Set Laparatomy',
  'Instrument Set Palatoplasty',
  'Instrument Set Vascular',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="bg-white font-['Inter']">
      <Seo
        title="PT. Rinjani Medika Bersama | Distributor Alat Kesehatan Terpercaya"
        description="Distributor alat kesehatan instrument dan implan orthopedic terpercaya di Indonesia. Kualitas stainless steel, buatan Pakistan, terpercaya sejak 2019."
        canonical="https://healthcare-distributor-hq.preview.imagine.bo/"
      />

      <Header />
      <HeroSection />

      {/* LEAD / MAGAZINE PARAGRAPH */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="py-24 md:py-32 px-8 md:px-16 bg-white"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <span className="text-sm uppercase tracking-[0.2em] text-[#0A4FA3] font-semibold font-['Inter']">
              Sejak {`2019`}
            </span>
          </div>
          <div className="md:col-span-9">
            <p className="font-['Bricolage_Grotesque'] text-2xl md:text-4xl leading-snug text-[#171A20] font-bold">
              <span className="text-[#0A4FA3]">PT. Rinjani Medika Bersama</span> hadir sebagai
              distributor alat kesehatan instrument dan implan orthopedic terpercaya di Indonesia —
              menghubungkan rumah sakit, klinik, dan tenaga medis dengan produk berkualitas stainless
              steel, buatan Pakistan, untuk mendukung setiap tindakan bedah dengan presisi.
            </p>
          </div>
        </div>
      </motion.section>

      <TentangKamiSection />

      {/* FEATURE ESSAY — asymmetric image + text blocks */}
      <section className="bg-[#F3F8FC] py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto space-y-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid md:grid-cols-12 gap-10 items-center"
          >
            <div className="md:col-span-7 md:col-start-1 -mt-6 md:-mt-16 relative z-10">
              <img
                src={surgicalImg}
                alt="Instrument bedah stainless steel"
                loading="lazy"
                className="w-full h-[380px] md:h-[460px] object-cover rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              />
            </div>
            <div className="md:col-span-5 md:col-start-8 md:pl-4">
              <h3 className="font-['Bricolage_Grotesque'] text-3xl md:text-4xl font-extrabold text-[#171A20] mb-4">
                Presisi dari Setiap Instrumen
              </h3>
              <p className="text-[#393C41] leading-relaxed text-base md:text-lg">
                Setiap instrument set kami — dari Orthopedic hingga Vascular — dibuat dari material
                stainless steel dengan standar produksi Pakistan yang telah diandalkan oleh tenaga
                medis di seluruh Indonesia. Ketahanan, sterilitas, dan akurasi adalah prioritas utama
                kami di setiap pengiriman.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid md:grid-cols-12 gap-10 items-center"
          >
            <div className="md:col-span-5 md:order-2 relative z-10 md:mt-16">
              <img
                src={implantImg}
                alt="Implan orthopedic plate dan screw"
                loading="lazy"
                className="w-full h-[380px] md:h-[460px] object-cover rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              />
            </div>
            <div className="md:col-span-6 md:order-1 md:pr-4">
              <h3 className="font-['Bricolage_Grotesque'] text-3xl md:text-4xl font-extrabold text-[#171A20] mb-4">
                Implan Orthopedic Berkualitas
              </h3>
              <p className="text-[#393C41] leading-relaxed text-base md:text-lg">
                Sebagai produk unggulan kami, implan orthopedic — plate, screw, dan perangkat
                pendukung lainnya — dirancang untuk kompatibilitas tinggi dan hasil klinis yang
                optimal, didukung oleh layanan distribusi yang cepat ke seluruh wilayah Indonesia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ProductCategoriesGrid />
      <WhyChooseUsSection />

      {/* EDITORIAL INDEX OF SERVICES */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white py-24 md:py-32 px-8 md:px-16"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="text-sm uppercase tracking-[0.2em] text-[#0A4FA3] font-semibold">
              Layanan Kami
            </span>
            <h2 className="font-['Bricolage_Grotesque'] text-3xl md:text-5xl font-extrabold text-[#171A20] mt-3">
              Instrument Set yang Kami Sediakan
            </h2>
          </div>
          <ol className="divide-y divide-[#EEEEEE] border-t border-b border-[#EEEEEE]">
            {services.map((service, i) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                className="flex items-baseline gap-6 py-6 group"
              >
                <span className="font-['Bricolage_Grotesque'] text-2xl md:text-3xl font-extrabold text-[#0A4FA3] w-14 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg md:text-2xl font-['Bricolage_Grotesque'] font-semibold text-[#171A20] group-hover:text-[#0A4FA3] transition-colors duration-300">
                  {service}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-8 md:px-16 bg-[#F3F8FC] pt-16"
      >
        <ProductSearchAndFilter />
      </motion.section>

      <FeaturedProductsGrid />

      {/* full-bleed image break */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={hospitalImg}
          alt="Modern hospital exterior"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 md:px-16">
          <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-2">Berdiri sejak 2019</p>
          <h3 className="font-['Bricolage_Grotesque'] text-3xl md:text-5xl font-extrabold text-white max-w-2xl">
            Mendukung Fasilitas Kesehatan di Seluruh Indonesia
          </h3>
        </div>
      </section>

      <DownloadCatalogSection />

      {/* UNDERSTATED CTA WITH HAIRLINE */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white px-8 md:px-16 py-20"
      >
        <div className="max-w-5xl mx-auto border-t border-[#EEEEEE] pt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h4 className="font-['Bricolage_Grotesque'] text-2xl md:text-3xl font-bold text-[#171A20] max-w-xl">
            Butuh instrument atau implan orthopedic untuk fasilitas Anda?
          </h4>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className="inline-block px-8 py-4 rounded-full bg-[#0A4FA3] text-white font-semibold shrink-0"
          >
            Hubungi Kami
          </motion.a>
        </div>
      </motion.section>

      <div id="contact">
        <ContactSection />
      </div>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
