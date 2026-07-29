import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Check, Clock, ChevronDown } from 'lucide-react';
import clinicImg from '../assets/clinic_entrance.jpg';

const PHONES = [
  { label: 'Admin 1 (Cella)', value: '0852-8223-4301', href: 'tel:+6285282234301' },
  { label: 'Admin 2 (Kartika)', value: '0877-8540-2216', href: 'tel:+6287785402216' },
  { label: 'Telepon Kantor', value: '021 – 22949473', href: 'tel:+622122949473' },
];

const EMAIL = 'rinjanimedikabersama@gmail.com';
const ADDRESS =
  'Perumahan Citra Indah City, Cluster Bougenville Blok.AI.01 No.11, Kel. Singajaya, Kec. Jonggol, Bogor – Jawa Barat Indonesia 16830.';

const SUBJECTS = [
  'Instrument Set Orthopedic',
  'Instrument Set Kebidanan',
  'Instrument Set THT',
  'Instrument Set Fess',
  'Instrument set Mayor',
  'Instrument Set Laparatomy',
  'Instrument Set Palatoplasty',
  'Instrument Set Vascular',
  'Permintaan Katalog',
  'Lainnya',
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const inputClass =
  'w-full rounded-[16px] border border-[#D0D1D2] bg-white px-4 py-3 font-[\'Inter\'] text-sm text-[#171A20] placeholder-[#8E8E8E] outline-none transition-all duration-300 focus:border-[#0A4FA3] focus:ring-2 focus:ring-[#0A4FA3]/15';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Nama wajib diisi';
    if (!form.email.trim()) er.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = 'Format email tidak valid';
    if (!form.message.trim()) er.message = 'Pesan wajib diisi';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Editorial header — hairline rule + kicker */}
        <motion.div {...fadeUp} className="mb-14">
          <div className="mb-6 h-px w-full bg-[#EEEEEE]" />
          <p className="mb-3 font-['Inter'] text-xs font-semibold uppercase tracking-[0.14em] text-[#0A4FA3]">
            Kontak
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl font-['Bricolage Grotesque'] text-4xl font-extrabold leading-[1.1] text-[#171A20] md:text-5xl">
              Mari Bicara Tentang Kebutuhan Alat Medis Anda
            </h2>
            <p className="max-w-md font-['Inter'] text-sm leading-relaxed text-[#5C5E62]">
              Tim kami siap membantu kebutuhan instrument alat bedah &amp; implan orthopedic untuk rumah sakit,
              klinik, dan fasilitas kesehatan Anda.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left — contact channels */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="lg:col-span-2">
            <div className="overflow-hidden rounded-[16px] border border-[#EEEEEE] bg-[#F3F8FC] shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
              <div className="relative h-44">
                <img
                  src={clinicImg}
                  alt="PT. Rinjani Medika Bersama"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A20]/70 via-[#171A20]/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="font-['Bricolage Grotesque'] text-lg font-bold text-white">
                    PT. Rinjani Medika Bersama
                  </p>
                  <p className="font-['Inter'] text-xs text-white/80">Berdiri sejak 2019 · Bogor, Jawa Barat</p>
                </div>
              </div>

              <div className="space-y-6 p-6">
                {/* Phones */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#0A4FA3]" />
                    <span className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#5C5E62]">
                      Telepon / WhatsApp
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {PHONES.map((p) => (
                      <li key={p.value}>
                        <a
                          href={p.href}
                          className="group flex items-center justify-between rounded-[12px] px-3 py-2 transition-colors duration-200 hover:bg-white"
                        >
                          <span className="font-['Inter'] text-sm text-[#5C5E62]">{p.label}</span>
                          <span className="font-['Inter'] text-sm font-semibold text-[#171A20] transition-colors duration-200 group-hover:text-[#0A4FA3]">
                            {p.value}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Email */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#0A4FA3]" />
                    <span className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#5C5E62]">
                      Email
                    </span>
                  </div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="block break-all rounded-[12px] px-3 py-2 font-['Inter'] text-sm font-medium text-[#171A20] transition-colors duration-200 hover:bg-white hover:text-[#0A4FA3]"
                  >
                    {EMAIL}
                  </a>
                </div>

                {/* Address */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#0A4FA3]" />
                    <span className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#5C5E62]">
                      Alamat
                    </span>
                  </div>
                  <p className="px-3 font-['Inter'] text-sm leading-relaxed text-[#393C41]">{ADDRESS}</p>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2 border-t border-[#EEEEEE] pt-4">
                  <Clock className="h-4 w-4 text-[#0A4FA3]" />
                  <p className="font-['Inter'] text-xs text-[#5C5E62]">
                    Senin – Jumat, 08.00 – 17.00 WIB · Sabtu, 08.00 – 13.00 WIB
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — inquiry form */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="lg:col-span-3">
            <div className="h-full rounded-[16px] border border-[#EEEEEE] bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A4FA3]/10">
                    <Check className="h-8 w-8 text-[#0A4FA3]" />
                  </div>
                  <h3 className="mb-2 font-['Bricolage Grotesque'] text-2xl font-bold text-[#171A20]">
                    Pesan Terkirim
                  </h3>
                  <p className="mb-8 max-w-sm font-['Inter'] text-sm leading-relaxed text-[#5C5E62]">
                    Terima kasih, {form.name.split(' ')[0] || 'Anda'}. Tim kami akan menghubungi Anda kembali
                    melalui email atau telepon dalam 1×24 jam kerja.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', org: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="rounded-[16px] border border-[#D0D1D2] bg-transparent px-8 py-3 font-['Inter'] text-sm font-semibold text-[#0A4FA3] transition-all duration-300 hover:bg-[#0A4FA3]/10 active:scale-95"
                  >
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="mb-1 font-['Bricolage Grotesque'] text-2xl font-bold text-[#171A20]">
                    Kirim Pertanyaan
                  </h3>
                  <p className="mb-7 font-['Inter'] text-sm text-[#5C5E62]">
                    Isi formulir di bawah — kami balas dalam 1×24 jam kerja.
                  </p>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="cs-name" className="mb-1.5 block font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#5C5E62]">
                        Nama Lengkap *
                      </label>
                      <input
                        id="cs-name"
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Nama Anda"
                        className={inputClass}
                      />
                      {errors.name && <p className="mt-1.5 font-['Inter'] text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="cs-org" className="mb-1.5 block font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#5C5E62]">
                        Instansi / Rumah Sakit
                      </label>
                      <input
                        id="cs-org"
                        type="text"
                        value={form.org}
                        onChange={update('org')}
                        placeholder="Nama fasilitas kesehatan"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="cs-email" className="mb-1.5 block font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#5C5E62]">
                        Email *
                      </label>
                      <input
                        id="cs-email"
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="nama@email.com"
                        className={inputClass}
                      />
                      {errors.email && <p className="mt-1.5 font-['Inter'] text-xs text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="cs-phone" className="mb-1.5 block font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#5C5E62]">
                        No. Telepon
                      </label>
                      <input
                        id="cs-phone"
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="08xx-xxxx-xxxx"
                        className={inputClass}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="cs-subject" className="mb-1.5 block font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#5C5E62]">
                        Kategori Kebutuhan
                      </label>
                      <div className="relative">
                        <select
                          id="cs-subject"
                          value={form.subject}
                          onChange={update('subject')}
                          className={`${inputClass} appearance-none pr-10 ${form.subject ? '' : 'text-[#8E8E8E]'}`}
                        >
                          <option value="" disabled>
                            Pilih kategori produk
                          </option>
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8E8E8E]" />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="cs-message" className="mb-1.5 block font-['Inter'] text-xs font-semibold uppercase tracking-[0.08em] text-[#5C5E62]">
                        Pesan *
                      </label>
                      <textarea
                        id="cs-message"
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Jelaskan kebutuhan instrument atau implan orthopedic Anda…"
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 font-['Inter'] text-xs text-red-600">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <p className="font-['Inter'] text-xs leading-relaxed text-[#8E8E8E]">
                      * Wajib diisi. Data Anda hanya digunakan untuk menindaklanjuti pertanyaan.
                    </p>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="inline-flex items-center gap-2 rounded-[16px] bg-[#0A4FA3] px-8 py-3 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:brightness-105 hover:shadow-[0_8px_24px_rgba(10,79,163,0.25)]"
                    >
                      Kirim Pesan
                      <Send className="h-4 w-4" />
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
