import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Search, FileText, MessageSquare,
  ShieldCheck, FileSearch, Database, Building2, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter,
  BarChart3, BookOpen, Coins, Calendar, Inbox,
} from "lucide-react";
import { Navbar } from "@/components/ppid/Navbar";
import { BatikMotif } from "@/components/ppid/BatikMotif";
import { useReveal, useCounter } from "@/components/ppid/hooks";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import regent from "@/assets/regent-portrait.jpg";
import kutimLogo from "@/assets/kutim-logo.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "PPID Kutai Timur — Portal Informasi Publik Resmi" },
      { name: "description", content: "Portal resmi Pejabat Pengelola Informasi dan Dokumentasi Kabupaten Kutai Timur. Akses dokumen, berita, dan layanan informasi dari 40+ OPD." },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Ticker />
      <RegentMessage />
      <NewsSlider />
      <Services />
      <DataSnapshot />
      <OpdDirectory />
      <Footer />
    </div>
  );
}

/* ===================== SECTION 1 — HERO ===================== */
function Hero() {
  const a = useCounter(42);
  const b = useCounter(3128);
  const c = useCounter(98);
  return (
    <section className="relative flex items-end overflow-hidden pt-14 min-h-[88vh]">
      <div className="absolute inset-0 mesh-aura opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/35 to-white" />
      <div className="absolute -top-8 right-0 w-[320px] h-[320px] text-mesh-emerald" style={{ opacity: 0.2 }}>
        <BatikMotif className="h-full w-full" />
      </div>
      <div className="absolute -bottom-8 right-8 w-[240px] h-[240px] text-mesh-purple" style={{ opacity: 0.18 }}>
        <BatikMotif className="h-full w-full" flip />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-14 pt-8 grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-end">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-forest-soft">
            <img src={kutimLogo} alt="" className="h-6 w-auto" />
            <span className="h-px w-6 bg-forest-soft/50" /> Pemerintah Kabupaten Kutai Timur
          </div>
          <h1 className="mt-5 font-serif text-[32px] leading-[1.08] sm:text-[42px] lg:text-[52px] text-forest">
            Informasi publik <br />
            yang <em className="not-italic font-normal text-mesh italic">terbuka, akurat,</em> <br />
            untuk seluruh masyarakat.
          </h1>
          <p className="mt-5 max-w-lg text-[14px] sm:text-[15px] text-forest-soft leading-relaxed">
            Portal resmi PPID Kabupaten Kutai Timur — gerbang tunggal menuju dokumen, berita, dan layanan informasi dari 40+ instansi pemerintah daerah.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a href="#permohonan" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[13px] font-semibold text-gold-foreground shadow-sm hover:shadow-lg transition-shadow">
              Ajukan Permohonan Informasi <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#data" className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/60 backdrop-blur px-5 py-3 text-[13px] font-semibold text-forest hover:border-forest/50">
              Telusuri Dokumen
            </a>
          </div>
        </div>

        <div className="space-y-6 lg:pl-10 lg:border-l border-border">
          <Stat reff={a.ref} value={a.val} suffix="+" label="Instansi (OPD/SKPD) terhubung" />
          <Stat reff={b.ref} value={b.val} label="Dokumen publik tersedia" />
          <Stat reff={c.ref} value={c.val} suffix="%" label="Tingkat respons permohonan" highlight />
        </div>
      </div>
    </section>
  );
}

function Stat({ reff, value, suffix = "", label, highlight = false }: { reff: any; value: number; suffix?: string; label: string; highlight?: boolean }) {
  return (
    <div ref={reff}>
      <div className={`font-serif font-light leading-none text-[44px] sm:text-[56px] tracking-tight ${highlight ? "text-gold" : "text-forest"}`}>
        {value.toLocaleString("id-ID")}{suffix}
      </div>
      <div className="mt-1.5 text-[13px] text-forest-soft max-w-[14rem]">{label}</div>
    </div>
  );
}

/* ===================== SECTION 2 — TICKER ===================== */
function Ticker() {
  const items = [
    "Pengumuman: Layanan PPID buka pukul 08.00–16.00 WITA",
    "Permohonan informasi APBD 2025 kini tersedia online",
    "Sosialisasi keterbukaan informasi di 18 kecamatan",
    "PPID Kutim raih predikat Informatif tingkat nasional 2025",
    "Jadwal uji konsekuensi informasi: 22 Mei 2026",
  ];
  const loop = [...items, ...items];
  return (
    <section style={{ background: "var(--cream)" }} className="border-y border-cream-border overflow-hidden">
      <div className="mx-auto max-w-[1280px] flex items-center gap-6 px-6 py-3.5">
        <span className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground">
          • Terkini
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-marquee" style={{ width: "max-content" }}>
            {loop.map((t, i) => (
              <span key={i} className="text-sm text-forest/80">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== SECTION 3 — REGENT'S MESSAGE ===================== */
function RegentMessage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="reveal py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="relative max-w-sm mx-auto lg:max-w-none">
          <CornerBrackets />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={regent} alt="Bupati Kutai Timur" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-5 -right-4 sm:-right-8 bg-white border border-border rounded-xl px-4 py-3 shadow-[0_18px_40px_-22px_rgba(10,35,24,0.25)]">
            <div className="text-[10px] uppercase tracking-widest text-forest-soft">Bupati Kutai Timur</div>
            <div className="mt-0.5 font-serif text-base text-forest">H. Ardiansyah Sulaiman</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-forest-soft">
            <span className="h-px w-6 bg-forest-soft/50" /> Sambutan Bupati
          </div>
          <blockquote className="mt-4 font-serif text-[22px] sm:text-[28px] leading-[1.25] text-forest italic font-light">
            “Keterbukaan informasi adalah <span className="text-mesh not-italic">fondasi kepercayaan</span> antara pemerintah dan masyarakat Kutai Timur.”
          </blockquote>
          <p className="mt-5 text-[14px] text-forest-soft leading-relaxed">
            Melalui PPID, kami berkomitmen menghadirkan layanan informasi yang cepat, mudah diakses, dan dapat dipertanggungjawabkan. Setiap dokumen yang dibuka adalah langkah menuju tata kelola yang lebih baik.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="font-serif italic text-xl text-forest">Ardiansyah</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-[11px] text-forest-soft">Bupati Kutai Timur</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerBrackets() {
  const grad = "linear-gradient(135deg, var(--mesh-emerald), var(--mesh-sky), var(--mesh-purple))";
  return (
    <>
      {[
        { pos: "top-0 left-0", b: "border-t-2 border-l-2 -translate-x-3 -translate-y-3" },
        { pos: "top-0 right-0", b: "border-t-2 border-r-2 translate-x-3 -translate-y-3" },
        { pos: "bottom-0 left-0", b: "border-b-2 border-l-2 -translate-x-3 translate-y-3" },
        { pos: "bottom-0 right-0", b: "border-b-2 border-r-2 translate-x-3 translate-y-3" },
      ].map((c, i) => (
        <span key={i} className={`absolute ${c.pos} w-10 h-10 ${c.b} z-10`} style={{ borderImage: grad, borderImageSlice: 1 }} />
      ))}
    </>
  );
}

/* ===================== SECTION 4 — NEWS SLIDER ===================== */
function NewsSlider() {
  const slides = [
    {
      featured: { img: news1, tag: "Setda", tagColor: "bg-mesh-emerald", title: "Kutai Timur perkuat ekosistem keterbukaan informasi di 18 kecamatan", date: "12 Mei 2026", excerpt: "Program ini menargetkan akses informasi publik yang merata hingga ke pelosok wilayah." },
      side: [
        { img: news2, tag: "BPKAD", tagColor: "bg-mesh-sky", title: "Realisasi APBD Triwulan I capai 28,4%", date: "9 Mei 2026" },
        { img: news3, tag: "Diskominfo", tagColor: "bg-mesh-purple", title: "Layanan PPID keliling jangkau 14 desa", date: "5 Mei 2026" },
      ],
    },
    {
      featured: { img: news2, tag: "Bappeda", tagColor: "bg-mesh-sky", title: "Forum Konsultasi Publik RKPD 2027 resmi dibuka", date: "2 Mei 2026", excerpt: "Pemerintah daerah membuka ruang dialog dengan masyarakat dan pemangku kepentingan." },
      side: [
        { img: news1, tag: "Dinkes", tagColor: "bg-mesh-emerald", title: "Inovasi Posyandu digital diadopsi 32 desa", date: "28 Apr 2026" },
        { img: news3, tag: "Disdikbud", tagColor: "bg-mesh-purple", title: "Beasiswa anak Kutim 2026 dibuka pendaftarannya", date: "24 Apr 2026" },
      ],
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);
  const cur = slides[idx];
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="reveal py-24 sm:py-32" style={{ background: "#f8f8f8" }}>
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-forest-soft">Berita lintas OPD</div>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-forest leading-tight max-w-xl">Kabar terbaru dari <em className="not-italic text-mesh">40+ instansi</em></h2>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)} className="h-11 w-11 grid place-items-center rounded-full border border-border bg-white hover:bg-cream"><ChevronLeft className="h-4 w-4" /></button>
            <button onClick={() => setIdx((i) => (i + 1) % slides.length)} className="h-11 w-11 grid place-items-center rounded-full border border-border bg-white hover:bg-cream"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Featured */}
          <article className="hover-glow group rounded-2xl bg-white border border-border overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={cur.featured.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
              <span className={`absolute top-4 left-4 ${cur.featured.tagColor} text-white text-[11px] font-semibold rounded-full px-3 py-1`}>{cur.featured.tag}</span>
            </div>
            <div className="p-7">
              <div className="text-xs text-forest-soft inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {cur.featured.date}</div>
              <h3 className="mt-3 font-serif text-2xl sm:text-3xl text-forest leading-snug">{cur.featured.title}</h3>
              <p className="mt-3 text-forest-soft leading-relaxed">{cur.featured.excerpt}</p>
            </div>
          </article>

          {/* Side */}
          <div className="grid grid-rows-2 gap-6">
            {cur.side.map((s, i) => (
              <article key={i} className="hover-glow group rounded-2xl bg-white border border-border overflow-hidden grid grid-cols-[40%_1fr]">
                <div className="relative overflow-hidden">
                  <img src={s.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
                  <span className={`absolute top-3 left-3 ${s.tagColor} text-white text-[10px] font-semibold rounded-full px-2.5 py-0.5`}>{s.tag}</span>
                </div>
                <div className="p-5 flex flex-col justify-between">
                  <h3 className="font-serif text-lg text-forest leading-snug">{s.title}</h3>
                  <div className="text-xs text-forest-soft inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {s.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-forest" : "w-2 bg-forest/25"}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== SECTION 5 — SERVICES ===================== */
function Services() {
  const items = [
    { icon: FileText, name: "Permohonan Informasi", desc: "Ajukan permintaan dokumen atau data publik secara daring dengan mudah." },
    { icon: MessageSquare, name: "Pengaduan & Keberatan", desc: "Sampaikan keberatan apabila layanan informasi belum sesuai harapan." },
    { icon: ShieldCheck, name: "Sengketa Informasi", desc: "Mekanisme penyelesaian sengketa informasi sesuai UU KIP No. 14/2008." },
    { icon: FileSearch, name: "Pencarian Dokumen", desc: "Telusuri ribuan dokumen publik dari seluruh OPD di Kutai Timur." },
    { icon: BookOpen, name: "Daftar Informasi Publik", desc: "Lihat daftar informasi yang wajib disediakan dan diumumkan." },
    { icon: Inbox, name: "Konsultasi PPID", desc: "Bertanya seputar prosedur dan jenis informasi yang dapat diakses." },
  ];
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="reveal relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 batik-tile text-forest" style={{ opacity: 0.04 }} />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="text-[11px] uppercase tracking-[0.22em] text-forest-soft">Layanan Utama</div>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-forest leading-tight max-w-2xl">Enam pintu menuju <em className="not-italic text-mesh">informasi publik</em></h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => (
            <a key={s.name} href="#" className="gradient-bottom group relative bg-white border border-border rounded-2xl p-7 overflow-hidden">
              <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-forest-soft group-hover:text-forest transition-colors" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cream text-forest group-hover:text-mesh-emerald transition-colors">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-serif text-xl text-forest">{s.name}</h3>
              <p className="mt-2 text-sm text-forest-soft leading-relaxed">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== SECTION 6 — DATA SNAPSHOT (mesh) ===================== */
function DataSnapshot() {
  const cats = [
    { icon: Calendar, name: "Informasi Berkala", count: "1.248 dokumen" },
    { icon: Inbox, name: "Serta Merta", count: "86 dokumen" },
    { icon: Database, name: "Setiap Saat", count: "1.504 dokumen" },
    { icon: ShieldCheck, name: "Dikecualikan", count: "42 kategori" },
    { icon: Coins, name: "Laporan Keuangan", count: "248 dokumen" },
  ];
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="data" className="reveal relative py-24 sm:py-32 mesh-full text-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">PPID dalam angka</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl leading-tight">Ribuan dokumen, <em className="not-italic">satu pintu akses.</em></h2>
          <p className="mt-5 max-w-md text-white/70 leading-relaxed text-[15px]">
            Seluruh informasi publik Kabupaten Kutai Timur telah diklasifikasikan sesuai standar Komisi Informasi — siap untuk Anda telusuri kapan saja.
          </p>
          <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-forest transition-colors">
            Telusuri Semua Data <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {cats.map((c, i) => (
            <a key={c.name} href="#" className={`glass group rounded-2xl p-6 transition-all hover:bg-white/20 ${i === 0 ? "sm:col-span-2" : ""}`}>
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 border border-white/20"><c.icon className="h-5 w-5" /></span>
                <ArrowUpRight className="h-5 w-5 text-white/70 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-6 font-serif text-2xl">{c.name}</div>
              <div className="mt-1 text-sm text-white/70">{c.count}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== SECTION 7 — OPD DIRECTORY ===================== */
function OpdDirectory() {
  const opds = [
    "Sekretariat Daerah", "BPKAD", "Bappeda", "Diskominfo",
    "Dinas Kesehatan", "Dinas Pendidikan", "Dinas PUPR", "RSUD Kudungga",
  ];
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="reveal py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-forest-soft">Direktori Instansi</div>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-forest leading-tight max-w-xl">40+ OPD <em className="not-italic text-mesh">di ujung jari Anda</em></h2>
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-forest-soft" />
            <input placeholder="Cari nama instansi…" className="w-full rounded-full border border-border bg-cream pl-11 pr-4 py-3 text-sm focus:bg-white outline-none focus:border-forest/40" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {opds.map((o, i) => (
            <a key={o} href="#" className="hover-glow group rounded-2xl bg-white border border-border p-5 flex items-center gap-4 transition-transform hover:scale-[1.02]">
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-white font-semibold text-sm"
                style={{ background: ["var(--mesh-emerald)","var(--mesh-sky)","var(--mesh-purple)","var(--forest)"][i % 4] }}
              >
                {o.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </span>
              <span className="text-sm font-medium text-forest leading-snug">{o}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-6 py-3.5 text-sm font-semibold text-forest hover:border-forest">
            Lihat Semua OPD <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===================== SECTION 8 — FOOTER ===================== */
function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={{ background: "#0a2318" }}>
      <div className="absolute inset-0 batik-tile" style={{ color: "#e8d8b8", opacity: 0.07 }} />
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--mesh-emerald), var(--mesh-sky), var(--mesh-purple), transparent)" }} />
      <div className="relative mx-auto max-w-[1280px] px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-forest font-serif">P</span>
              <span className="font-serif text-xl">PPID Kutai Timur</span>
            </div>
            <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-sm">
              Pejabat Pengelola Informasi dan Dokumentasi Kabupaten Kutai Timur — gerbang resmi menuju informasi publik yang transparan dan akuntabel.
            </p>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Youtube, Twitter].map((I, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-forest transition-colors"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>

          <FooterCol title="Layanan" items={["Permohonan Informasi","Pengaduan & Keberatan","Sengketa Informasi","Konsultasi PPID"]} />
          <FooterCol title="Tautan" items={["Profil PPID","Visi & Misi","Struktur Organisasi","Standar Layanan","Laporan Tahunan"]} />
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-white/55">Kontak</div>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-mesh-emerald" /> Komplek Perkantoran Bukit Pelangi, Sangatta, Kutai Timur 75683</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-mesh-emerald" /> (0549) 21000</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-mesh-emerald" /> ppid@kutaitimurkab.go.id</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/55">
          <span>© {new Date().getFullYear()} PPID Kabupaten Kutai Timur. Hak cipta dilindungi.</span>
          <span>Berdasarkan <a href="#" className="underline-offset-2 hover:underline text-white/80">UU No. 14 Tahun 2008</a> tentang Keterbukaan Informasi Publik</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.22em] text-white/55">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i}><a href="#" className="text-white/75 hover:text-white transition-colors">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}
