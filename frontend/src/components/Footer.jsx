import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const footerLinks = [
  { label: 'Home', route: '/' },
  { label: 'Tentang Kami', route: '/' },
  { label: 'Produk', route: '/' },
  { label: 'Layanan', route: '/' },
  { label: 'Brand', route: '/' },
  { label: 'Artikel', route: '/' },
  { label: 'Kontak', route: '/' },
];

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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-[#171A20] text-white font-['Inter']"
    >
      {/* Top hairline accent */}
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <span className="font-['Bricolage_Grotesque'] text-2xl font-extrabold tracking-tight text-white">
                PT. Rinjani Medika Bersama
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#B9BDC3]">
              Distributor Alat Kesehatan Instrument dan Implan Orthopedic
              Terpercaya di Indonesia — berdiri sejak 2019.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/rimeb54_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @rimeb54_"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#B9BDC3] transition-all duration-300 hover:border-white/40 hover:text-white active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5"
                  width="18"
                  height="18"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#8E8E8E]">
                @rimeb54_
              </span>
            </div>
          </div>

          {/* Navigation column */}
          <div className="lg:col-span-2">
            <h3 className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#8E8E8E]">
              Navigasi
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.route}
                    className="text-sm font-medium text-[#B9BDC3] transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <h3 className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#8E8E8E]">
              Layanan Produk
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-[#B9BDC3]">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <h3 className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#8E8E8E]">
              Hubungi Kami
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0A4FA3]" strokeWidth={2} />
                <div className="space-y-1 text-sm text-[#B9BDC3]">
                  <a href="tel:085282234301" className="block transition-colors duration-200 hover:text-white">
                    Admin 1 (Cella): 0852-8223-4301
                  </a>
                  <a href="tel:087785402216" className="block transition-colors duration-200 hover:text-white">
                    Admin 2 (Kartika): 0877-8540-2216
                  </a>
                  <a href="tel:02122949473" className="block transition-colors duration-200 hover:text-white">
                    021 – 22949473
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0A4FA3]" strokeWidth={2} />
                <a
                  href="mailto:rinjanimedikabersama@gmail.com"
                  className="break-all text-sm text-[#B9BDC3] transition-colors duration-200 hover:text-white"
                >
                  rinjanimedikabersama@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0A4FA3]" strokeWidth={2} />
                <p className="text-sm leading-relaxed text-[#B9BDC3]">
                  Perumahan Citra Indah City, Cluster Bougenville Blok.AI.01
                  No.11, Kel. Singajaya, Kec. Jonggol, Bogor – Jawa Barat,
                  Indonesia 16830
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#0A4FA3]" strokeWidth={2} />
                <p className="text-sm text-[#B9BDC3]">Senin – Jumat, 08.00 – 17.00 WIB</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-[#8E8E8E]">
            © {year} PT. Rinjani Medika Bersama. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs text-[#8E8E8E]">
            Instrument Alat Bedah &amp; Implan Orthopedic · Stainless Steel
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
