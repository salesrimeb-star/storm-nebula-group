import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumb — location awareness in the navigation hierarchy.
 *
 * Renders a horizontal trail: Home > Section > Current Page.
 * - Accepts an optional `items` prop: [{ label, route }] to override the trail.
 * - Without props, derives a sensible trail from the current pathname
 *   (single-page app, so it defaults to "Home" + optional section label).
 * - Self-contained, null-safe, and styled with the Tesla-inspired light theme.
 */
export default function Breadcrumb({ items }) {
  const location = useLocation();

  // Build the trail. Null-safe: items may be undefined/null.
  const trail = (() => {
    if (Array.isArray(items) && items.length > 0) {
      return items.map((it) => ({
        label: it?.label ?? 'Untitled',
        route: it?.route ?? null,
      }));
    }
    // Default: derive from pathname segments.
    const segments = (location?.pathname ?? '/')
      .split('/')
      .filter(Boolean);
    const derived = [{ label: 'Home', route: '/' }];
    segments.forEach((seg, i) => {
      const path = '/' + segments.slice(0, i + 1).join('/');
      derived.push({
        label: decodeURIComponent(seg)
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        route: i === segments.length - 1 ? null : path,
      });
    });
    return derived;
  })();

  // Nothing meaningful to show for a bare root with no items.
  if (!trail || trail.length === 0) return null;

  return (
    <motion.nav
      aria-label="Breadcrumb"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm font-['Inter']">
        {trail.map((item, idx) => {
          const isLast = idx === trail.length - 1;
          const isFirst = idx === 0;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight
                  size={14}
                  strokeWidth={2}
                  className="text-[#D0D1D2] shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast || !item.route ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={`inline-flex items-center gap-1.5 font-medium transition-colors duration-200 ${
                    isLast ? 'text-[#171A20]' : 'text-[#5C5E62]'
                  }`}
                >
                  {isFirst && (
                    <Home size={14} strokeWidth={2} className="shrink-0" aria-hidden="true" />
                  )}
                  <span className="truncate max-w-[200px]">{item.label}</span>
                </span>
              ) : (
                <Link
                  to={item.route}
                  className="inline-flex items-center gap-1.5 text-[#5C5E62] hover:text-[#0A4FA3] font-medium transition-colors duration-200 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A4FA3]"
                >
                  {isFirst && (
                    <Home size={14} strokeWidth={2} className="shrink-0" aria-hidden="true" />
                  )}
                  <span className="truncate max-w-[200px]">{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
