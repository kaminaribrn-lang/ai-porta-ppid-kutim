import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, FileText, Database, Building2, Newspaper, Search, FileSearch, ShieldCheck, Inbox, MessageSquare, Calendar, Filter, ArrowUpRight } from "lucide-react";

type MenuKey = "layanan" | "data" | "opd" | "berita" | null;

const NAV = [
  { key: "layanan" as const, label: "Layanan PPID" },
  { key: "data" as const, label: "Data & Dokumen" },
  { key: "opd" as const, label: "Direktori OPD" },
  { key: "berita" as const, label: "Berita" },
  { key: null, label: "Tentang", href: "#tentang" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-white/85 backdrop-blur-xl border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-forest text-white font-serif text-lg">P</span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[13px] font-semibold tracking-wide text-forest">PPID</span>
              <span className="text-[11px] text-forest-soft">Kutai Timur</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) =>
              item.key ? (
                <button
                  key={item.label}
                  onMouseEnter={() => setOpen(item.key)}
                  onFocus={() => setOpen(item.key)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    open === item.key ? "text-forest" : "text-forest/80 hover:text-forest"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setOpen(null)}
                  className="px-4 py-2 text-sm font-medium text-forest/80 hover:text-forest"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#permohonan"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm hover:shadow-md transition-shadow"
            >
              Ajukan Permohonan
              <ChevronRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-md text-forest hover:bg-cream"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mega menu popup */}
        {open && (
          <div
            className="absolute inset-x-0 top-16 origin-top animate-fade-scale"
            style={{ animation: "fade-scale 0.2s ease-out both" }}
          >
            <div className="mx-auto max-w-[1280px] px-6 pb-6">
              <div className="rounded-2xl border border-border bg-white shadow-[0_24px_60px_-30px_rgba(10,35,24,0.25)] overflow-hidden">
                {open === "layanan" && <LayananPopup />}
                {open === "data" && <DataPopup />}
                {open === "opd" && <OpdPopup />}
                {open === "berita" && <BeritaPopup />}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop dim */}
      {open && (
        <div
          className="fixed inset-0 top-16 z-40 bg-forest/30 backdrop-blur-[2px]"
          onMouseEnter={() => setOpen(null)}
          aria-hidden
        />
      )}

      {/* Mobile drawer */}
      {mobileOpen && <MobileDrawer onClose={() => setMobileOpen(false)} />}
    </>
  );
}

/* ---------------- Mega menu contents ---------------- */

function LayananPopup() {
  const services = [
    { icon: FileText, name: "Permohonan Informasi", desc: "Ajukan permintaan dokumen publik secara online dengan respons terjamin." },
    { icon: MessageSquare, name: "Pengaduan & Keberatan", desc: "Sampaikan keberatan atas layanan informasi yang Anda terima." },
    { icon: ShieldCheck, name: "Sengketa Informasi", desc: "Mekanisme penyelesaian sengketa sesuai UU KIP No. 14 Tahun 2008." },
    { icon: FileSearch, name: "Pencarian Dokumen", desc: "Telusuri ribuan dokumen publik dari 40+ instansi di Kutai Timur." },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]">
      <div className="p-8">
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-forest-soft">Layanan PPID</div>
        <div className="mt-5 grid gap-2">
          {services.map((s) => (
            <a key={s.name} href="#" className="group flex gap-4 rounded-xl p-4 hover:bg-cream transition-colors">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cream text-forest group-hover:bg-white">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block text-[15px] font-semibold text-forest">{s.name}</span>
                <span className="mt-0.5 block text-[13px] text-forest-soft leading-snug">{s.desc}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-forest-soft opacity-0 group-hover:opacity-100 transition-opacity self-center" />
            </a>
          ))}
        </div>
      </div>
      <div className="relative m-3 rounded-xl mesh-full p-8 text-white overflow-hidden">
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">Akses cepat</div>
        <h4 className="mt-4 font-serif text-[26px] leading-tight">Butuh dokumen <em className="not-italic text-mesh font-medium" style={{filter:"brightness(2.5)"}}>publik?</em></h4>
        <p className="mt-3 text-sm text-white/75 leading-relaxed">Ajukan permohonan informasi resmi dalam 3 langkah. Respons maksimal 10 hari kerja.</p>
        <a href="#permohonan" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground">
          Mulai Permohonan <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function DataPopup() {
  const cats = ["Berkala", "Serta Merta", "Setiap Saat", "Dikecualikan", "Laporan Keuangan"];
  const docs = [
    "LKPJ Bupati Tahun 2024",
    "APBD Kutai Timur 2025",
    "Renstra OPD 2024–2029",
    "Laporan PPID Triwulan III",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-8 gap-8">
      <div>
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-forest-soft">Kategori Informasi</div>
        <ul className="mt-5 space-y-1.5">
          {cats.map((c) => (
            <li key={c}>
              <a href="#" className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-forest hover:bg-cream">
                <span>Informasi {c}</span>
                <ChevronRight className="h-4 w-4 text-forest-soft" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-forest-soft">Paling Diakses</div>
        <ul className="mt-5 space-y-3">
          {docs.map((d, i) => (
            <li key={d}>
              <a href="#" className="group flex gap-3 rounded-lg p-2 -mx-2 hover:bg-cream">
                <span className="font-serif text-2xl text-forest-soft/60 group-hover:text-mesh-emerald w-6">0{i + 1}</span>
                <span className="text-sm text-forest leading-snug">{d}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-forest-soft">Filter Cepat</div>
        <div className="mt-5 space-y-3">
          <label className="block">
            <span className="block text-xs text-forest-soft mb-1.5">Tahun</span>
            <select className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm">
              <option>2025</option><option>2024</option><option>2023</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-xs text-forest-soft mb-1.5">OPD / Instansi</span>
            <select className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm">
              <option>Semua OPD</option>
              <option>Sekretariat Daerah</option>
              <option>BPKAD</option>
              <option>Dinas Kesehatan</option>
            </select>
          </label>
          <button className="w-full rounded-lg bg-forest text-white text-sm py-2.5 inline-flex items-center justify-center gap-2">
            <Filter className="h-4 w-4" /> Terapkan Filter
          </button>
        </div>
      </div>
    </div>
  );
}

function OpdPopup() {
  const groups = [
    { title: "Sekretariat", items: ["Setda", "Setwan", "Inspektorat"] },
    { title: "Dinas", items: ["Kesehatan", "Pendidikan", "Pekerjaan Umum", "Perhubungan", "Sosial", "Pertanian"] },
    { title: "Badan", items: ["BPKAD", "Bappeda", "BKPSDM", "Kesbangpol"] },
    { title: "RSUD & Kecamatan", items: ["RSUD Kudungga", "Kec. Sangatta Utara", "Kec. Sangatta Selatan", "Kec. Bengalon"] },
  ];
  return (
    <div className="p-8">
      <div className="flex items-center justify-between gap-6">
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-forest-soft">Direktori 40+ OPD</div>
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-forest-soft" />
          <input placeholder="Cari instansi…" className="w-full rounded-full border border-border bg-cream pl-9 pr-4 py-2 text-sm focus:bg-white outline-none focus:border-forest/40" />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {groups.map((g) => (
          <div key={g.title}>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-forest mb-3">{g.title}</div>
            <ul className="space-y-2.5">
              {g.items.map((i) => (
                <li key={i}>
                  <a href="#" className="flex items-center gap-3 group">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-cream text-[11px] font-semibold text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                      {i.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="text-sm text-forest-soft group-hover:text-forest">{i}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeritaPopup() {
  const news = [
    { tag: "Diskominfo", title: "PPID Kutim raih predikat Informatif tingkat nasional", date: "12 Mei 2026" },
    { tag: "BPKAD", title: "Realisasi APBD Triwulan I capai 28,4%", date: "9 Mei 2026" },
    { tag: "Dinkes", title: "Layanan kesehatan keliling jangkau 14 desa", date: "5 Mei 2026" },
  ];
  const opds = ["Setda", "BPKAD", "Dinkes", "Disdikbud", "DPUPR", "Bappeda"];
  const cats = ["Pengumuman", "Kebijakan", "Kegiatan", "Prestasi"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] p-8 gap-8">
      <div>
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-forest-soft">Berita Terbaru</div>
        <ul className="mt-5 space-y-3">
          {news.map((n) => (
            <li key={n.title}>
              <a href="#" className="flex gap-4 rounded-xl p-3 hover:bg-cream group">
                <div className="h-16 w-20 rounded-lg mesh-aura shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[11px] text-forest-soft">
                    <span className="text-forest font-semibold">{n.tag}</span>
                    <span>•</span>
                    <Calendar className="h-3 w-3" /> <span>{n.date}</span>
                  </div>
                  <div className="mt-1 text-sm font-medium text-forest leading-snug group-hover:text-mesh-emerald">{n.title}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-forest-soft">Saring berdasarkan</div>
        <div className="mt-5">
          <div className="text-xs text-forest-soft mb-2">OPD</div>
          <div className="flex flex-wrap gap-2">
            {opds.map((o) => (
              <button key={o} className="rounded-full border border-border bg-cream px-3 py-1.5 text-xs text-forest hover:bg-forest hover:text-white transition-colors">{o}</button>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="text-xs text-forest-soft mb-2">Kategori</div>
          <div className="flex flex-wrap gap-2">
            {cats.map((o) => (
              <button key={o} className="rounded-full border border-border bg-white px-3 py-1.5 text-xs text-forest hover:border-forest">{o}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Mobile drawer ---------------- */

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const sections = [
    { label: "Layanan PPID", items: ["Permohonan Informasi", "Pengaduan & Keberatan", "Sengketa Informasi"] },
    { label: "Data & Dokumen", items: ["Informasi Berkala", "Serta Merta", "Setiap Saat", "Laporan Keuangan"] },
    { label: "Direktori OPD", items: ["Sekretariat", "Dinas", "Badan", "Kecamatan"] },
    { label: "Berita", items: ["Pengumuman", "Kebijakan", "Kegiatan"] },
    { label: "Tentang", items: ["Profil PPID", "Visi Misi", "Struktur Organisasi"] },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="fixed inset-0 z-[60] flex">
      <div className="relative w-[88%] max-w-sm bg-white h-full overflow-y-auto p-6 shadow-2xl">
        <div className="absolute top-0 right-0 w-40 h-40 batik-tile text-forest" style={{ opacity: 0.04 }} />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-forest text-white font-serif text-base">P</span>
            <span className="font-semibold text-forest text-sm">PPID Kutai Timur</span>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-md hover:bg-cream"><X className="h-5 w-5" /></button>
        </div>
        <div className="mt-8 space-y-1">
          {sections.map((s, i) => (
            <div key={s.label} className="border-b border-border">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-4 text-left text-forest font-medium"
              >
                <span>{s.label}</span>
                <ChevronRight className={`h-4 w-4 transition-transform ${openIdx === i ? "rotate-90" : ""}`} />
              </button>
              {openIdx === i && (
                <ul className="pb-4 pl-2 space-y-2">
                  {s.items.map((it) => (
                    <li key={it}><a href="#" className="block py-1.5 text-sm text-forest-soft">{it}</a></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <a href="#permohonan" className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground">
          Ajukan Permohonan <ChevronRight className="h-4 w-4" />
        </a>
      </div>
      <div className="flex-1 bg-forest/40 backdrop-blur-sm" onClick={onClose} />
    </div>
  );
}
