import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', route: '/' },
  { label: 'Tentang Kami', route: '/' },
  { label: 'Produk', route: '/' },
  { label: 'Layanan', route: '/' },
  { label: 'Brand', route: '/' },
  { label: 'Artikel', route: '/' },
  { label: 'Kontak', route: '/' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      {/* Top utility bar */}
      <div className="hidden md:block border-b border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-9">
          <p className="font-['Inter'] text-xs text-[#6C757D] tracking-wide">
            Distributor Alat Kesehatan Instrument dan Implan Orthopedic Terpercaya di Indonesia
          </p>
          <a
            href="tel:02122949473"
            className="font-['Inter'] text-xs font-medium text-[#0A4FA3] hover:text-[#0A4FA3]/80 transition-colors duration-200 flex items-center gap-1.5"
          >
            <Phone size={12} strokeWidth={2} />
            021 – 22949473
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="font-['Bricolage_Grotesque'] text-lg lg:text-xl font-bold text-[#171A20] tracking-tight hover:text-[#0A4FA3] transition-colors duration-200"
          >
            PT. Rinjani Medika Bersama
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.route && link.route === '/';
              return (
                <Link
                  key={link.label}
                  to={link.route}
                  className={`font-['Inter'] text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#0A4FA3]'
                      : 'text-[#393C41] hover:text-[#171A20]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A4FA3] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="tel:085282234301"
              className="inline-flex items-center gap-2 font-['Inter'] text-sm font-semibold text-white bg-[#0A4FA3] rounded-full px-6 py-2.5 transition-all duration-300 hover:brightness-110 active:scale-95 shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
            >
              <Phone size={14} strokeWidth={2} />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#171A20] hover:bg-[#F4F4F4] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#0A4FA3]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#EEEEEE]"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link
                    to={link.route}
                    onClick={() => setMobileOpen(false)}
                    className="block font-['Inter'] text-sm font-medium text-[#393C41] hover:text-[#0A4FA3] hover:bg-[#F3F8FC] rounded-lg px-4 py-3 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04, duration: 0.25 }}
                className="pt-3 mt-2 border-t border-[#EEEEEE]"
              >
                <a
                  href="tel:085282234301"
                  className="flex items-center justify-center gap-2 font-['Inter'] text-sm font-semibold text-white bg-[#0A4FA3] rounded-full px-6 py-3 transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  <Phone size={14} strokeWidth={2} />
                  Hubungi Kami
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
