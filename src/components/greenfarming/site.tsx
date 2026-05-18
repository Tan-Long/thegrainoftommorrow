"use client";

import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Globe2,
  Home,
  Layers3,
  Lock,
  Mail,
  Menu,
  Microscope,
  Phone,
  Search,
  Target,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  architectureSections,
  assets,
  chartLineClasses,
  commonText,
  districts,
  emissionsNarratives,
  experts,
  faqItems,
  features,
  feedbackSteps,
  homeHero,
  homeIntro,
  navItems,
  partnerCards,
  sponsors,
  text,
} from "@/lib/greenfarming-data";
import { publicAsset } from "@/lib/public-path";
import { cn } from "@/lib/utils";
import type {
  ExpertCard,
  FeedbackField,
  Locale,
  LocalizedText,
  LogoCard,
  TextSection,
} from "@/types/greenfarming";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
    window.localStorage.setItem("greenfarming-locale", nextLocale);
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LanguageProvider");
  }
  return context;
}

function t(value: LocalizedText, locale: Locale) {
  return text(value, locale);
}

function MultilineText({ value, className }: { value: string; className?: string }) {
  return (
    <>
      {value.split("\n").map((line) => (
        <span key={line} className={cn("block", className)}>
          {line}
        </span>
      ))}
    </>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-[#666666]">
        <Header />
        {children}
      </div>
    </LanguageProvider>
  );
}

function Header() {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[104px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.18)] lg:h-32">
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-6 lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-4 text-primary-green lg:gap-5"
          onClick={() => setOpen(false)}
        >
          <Image
            src={assets.logo}
            width={72}
            height={72}
            alt="logo"
            className="h-14 w-14 lg:h-[72px] lg:w-[72px]"
            priority
          />
          <span className="brand-wordmark text-[26px] leading-[0.98] lg:text-4xl">
            CARBON
            <br />
            FARMING
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 text-[17px] font-bold text-[#666666] xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "max-w-[118px] leading-[1.45] transition-colors hover:text-primary-green",
                pathname === item.href && "text-primary-green",
              )}
            >
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>

        <div className="ml-7 hidden items-center gap-3 xl:flex">
          <Link className="auth-link" href="/login">
            {t(commonText.login, locale)}
          </Link>
          <Link className="auth-link auth-link-primary" href="/signup">
            {t(commonText.signup, locale)}
          </Link>
        </div>

        <label className="absolute right-0 top-1 flex h-6 items-center gap-1 text-[10px] text-[#555555] lg:right-0">
          <Image
            src={locale === "vi" ? assets.flagVi : assets.flagEn}
            width={24}
            height={16}
            alt="language translation"
            className="h-4 w-6 object-cover"
          />
          <select
            aria-label="Language"
            className="language-select"
            value={locale}
            onChange={(event) => setLocale(event.target.value as Locale)}
          >
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
          </select>
        </label>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto flex h-6 w-6 items-center justify-center text-[#161616] xl:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-y-0 left-0 z-[60] w-72 bg-white px-8 py-12 shadow-xl xl:hidden">
          <button
            aria-label="Close menu"
            className="absolute left-5 top-2 text-[#161616]"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
          <nav className="mt-4 flex h-full flex-col justify-between">
            <div className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-base font-medium text-[#161616]"
                  onClick={() => setOpen(false)}
                >
                  {t(item.label, locale)}
                </Link>
              ))}
            </div>
            <div className="space-y-4 pb-8">
              <Link
                className="mobile-auth-link"
                href="/login"
                onClick={() => setOpen(false)}
              >
                {t(commonText.login, locale)}
              </Link>
              <Link
                className="mobile-auth-link mobile-auth-link-primary"
                href="/signup"
                onClick={() => setOpen(false)}
              >
                {t(commonText.signup, locale)}
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function HomePage() {
  const { locale } = useLocale();

  return (
    <main>
      <section className="home-hero">
        <Image
          src={assets.hero}
          fill
          alt=""
          className="hero-image"
          priority
          sizes="100vw"
        />
        <div className="hero-gradient" />
        <div className="site-container relative z-10 flex min-h-[900px] items-start pt-24 md:min-h-[1000px] md:pt-32 lg:min-h-[765px] lg:pt-32">
          <div className="max-w-[690px]">
            <h1 className="text-[40px] font-extrabold uppercase leading-[1.4] text-primary-green md:text-[48px] lg:text-[52px]">
              <MultilineText value={t(homeHero.title, locale)} />
            </h1>
            <p className="mt-8 max-w-[660px] text-[16px] font-semibold leading-[1.45] text-[#686868]">
              {t(homeHero.description, locale)}
            </p>
            <a href="#map" className="primary-cta mt-20">
              {t(homeHero.cta, locale)}
            </a>
          </div>
        </div>
      </section>
      <FeatureGrid />
      <StatisticsSections />
    </main>
  );
}

function FeatureGrid() {
  const { locale } = useLocale();

  return (
    <section className="bg-[#f4f6f3] py-20 lg:py-24">
      <div className="site-container grid gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title.vi}
            className="mx-auto max-w-[410px] text-center transition-transform duration-200 hover:-translate-y-2"
          >
            <Image
              src={feature.icon}
              width={80}
              height={80}
              alt={feature.alt}
              className="mx-auto h-20 w-20"
            />
            <h2 className="mt-6 text-xl font-extrabold text-primary-green">
              {t(feature.title, locale)}
            </h2>
            <p className="mt-5 text-base font-semibold leading-[1.45] text-[#666666]">
              {t(feature.description, locale)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function StatisticsSections() {
  const { locale } = useLocale();

  return (
    <section id="map" className="site-container py-24">
      <h2 className="section-title">{t(homeIntro.title, locale)}</h2>
      <p className="mt-8 text-[17px] font-semibold leading-[1.5] text-[#666666]">
        {t(homeIntro.body[0], locale)}
      </p>

      <h2 className="mt-10 text-3xl font-extrabold text-[#161616]">
        {locale === "vi"
          ? "Bản đồ thống kê phát thải theo huyện"
          : "Emissions Statistics map by District"}
      </h2>
      <MapToolbar />
      <EmissionMap />

      <section className="stat-band mt-8 grid gap-10 lg:grid-cols-2">
        <PieChart variant="gas" />
        <NarrativeBlock section={emissionsNarratives[0]} />
      </section>

      <AlternatingCharts />
    </section>
  );
}

function MapToolbar() {
  const { locale } = useLocale();

  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
      <div className="flex flex-wrap gap-2">
        <button className="outline-green-button">
          {locale === "vi" ? "View comparison result" : "View comparison result"}
        </button>
        <button className="outline-green-button">
          {locale === "vi" ? "Farming Simulation" : "Farming Simulation"}
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button className="light-control">
          {locale === "vi" ? "All Districts" : "All Districts"}
        </button>
        <button className="light-control">
          {locale === "vi" ? "Next District" : "Next District"}
        </button>
        <select className="light-control">
          <option>Total Emissions</option>
          <option>Plant Emissions</option>
          <option>Animal Emissions</option>
        </select>
        <div className="flex overflow-hidden rounded-md border border-[#e4e4e4] bg-white">
          <input
            className="h-12 w-[190px] px-3 text-sm outline-none"
            placeholder={locale === "vi" ? "Tìm tên nông trại" : "Search farm name"}
          />
          <button className="flex h-12 w-12 items-center justify-center bg-primary-green text-white">
            <Search size={20} />
          </button>
        </div>
        <button className="light-control h-12 w-12 px-0">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

function EmissionMap() {
  const { locale } = useLocale();
  const tileRows = [
    ["tile-9-225-404.jpg", "tile-9-225-405.jpg", "tile-9-225-406.jpg", "tile-9-225-407.jpg"],
    ["tile-9-226-404.jpg", "tile-9-226-405.jpg", "tile-9-226-406.jpg", "tile-9-226-407.jpg"],
    ["tile-9-227-404.jpg", "tile-9-227-405.jpg", "tile-9-227-406.jpg", "tile-9-227-407.jpg"],
  ];

  return (
    <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_290px]">
      <div className="relative min-h-[360px] overflow-hidden bg-[#d1d1d1] lg:min-h-[610px]">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
          {tileRows.flat().map((tile) => (
            <Image
              key={tile}
              src={publicAsset(`/images/greenfarming/${tile}`)}
              width={256}
              height={256}
              alt=""
              loading="eager"
              unoptimized
              className="h-full w-full object-cover"
            />
          ))}
        </div>
        <div className="province province-a" />
        <div className="province province-b" />
        <div className="province province-c" />
        <div className="province province-d" />
        <div className="province province-e" />
        <div className="map-popup">
          <button className="absolute right-2 top-1 text-[#777777]">×</button>
          <h3 className="text-sm font-bold text-[#666666]">Bá Thước</h3>
          <p>Total Emissions CO2: 184.598 tấn</p>
          <p>Area: 888.99km2</p>
          <p className="mt-3 font-bold text-primary-green">CO2 Emissions</p>
          <div className="mini-bars">
            <span className="bar-h-50" />
            <span className="bar-h-47" />
            <span className="bar-h-48" />
            <span className="bar-h-49" />
            <span className="bar-h-46" />
            <span className="bar-h-48" />
          </div>
        </div>
        <div className="map-legend">
          {["CO2", "(ton)", "420K", "385K", "350K", "315K", "280K", "245K", "210K", "175K", "140K", "105K", "70K", "35K"].map(
            (label) => (
              <span key={label}>{label}</span>
            ),
          )}
        </div>
        <div className="timeline">
          <span className="year-bubble">2023</span>
        </div>
        <span className="leaflet-label">Leaflet</span>
      </div>

      <aside className="max-h-[610px] overflow-y-auto bg-[#f4f6f3] p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold">Sort by</span>
          <select className="rounded-md bg-white px-4 py-2 text-sm">
            <option>Name</option>
            <option>Area</option>
            <option>Emission</option>
          </select>
        </div>
        <div className="space-y-4">
          {districts.map((district, index) => (
            <article
              key={district.name}
              className={cn(
                "rounded-md border border-[#e4e4e4] bg-white p-4 shadow-sm",
                index === 0 && "border-primary-green bg-primary-green text-white",
              )}
            >
              <h3 className="text-lg font-extrabold">{district.name}</h3>
              <dl className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
                <dt>{locale === "vi" ? "Total Emissions" : "Total Emissions"}</dt>
                <dd className="text-right">{district.emissions}</dd>
                <dt>Area</dt>
                <dd className="text-right">{district.area}</dd>
              </dl>
              <button className="mt-3 flex items-center gap-1 text-sm">
                <Layers3 size={16} /> {t(commonText.compare, locale)}
              </button>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
}

function NarrativeBlock({ section }: { section: TextSection }) {
  const { locale } = useLocale();

  return (
    <div>
      <h2 className="section-title">{t(section.title, locale)}</h2>
      <div className="mt-8 space-y-4 text-[17px] font-semibold leading-[1.55]">
        {section.body.map((body) => (
          <p key={t(body, locale)}>{t(body, locale)}</p>
        ))}
      </div>
    </div>
  );
}

function PieChart({ variant }: { variant: "gas" | "plants" }) {
  const labels =
    variant === "gas"
      ? [
          ["CH4", "bg-[#4d50bd]"],
          ["N2O", "bg-[#55d19f]"],
        ]
      : [
          ["Lúa", "bg-[#4d50bd]"],
          ["Trâu", "bg-[#55d19f]"],
          ["Bò", "bg-[#ffbd83]"],
          ["Lợn", "bg-[#c9c4ff]"],
          ["Gà", "bg-[#ffc928]"],
          ["Dê", "bg-[#52631e]"],
        ];

  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center">
      <div className={cn("pie", variant === "plants" && "pie-plants")}>
        <span className="pie-label-main">{variant === "gas" ? "90%" : "80%"}</span>
        <span className="pie-label-side">{variant === "gas" ? "10%" : "9%"}</span>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {labels.map(([label, klass]) => (
          <span key={label} className="flex items-center gap-1 text-base font-semibold">
            <span className={cn("h-3 w-3 rounded-full", klass)} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function AlternatingCharts() {
  return (
    <div className="mt-24 space-y-24">
      <ChartRow section={emissionsNarratives[1]} chart={<LineChart mode="co2" />} />
      <ChartRow section={emissionsNarratives[2]} chart={<LineChart mode="global" />} reverse band />
      <ChartRow section={emissionsNarratives[3]} chart={<LineChart mode="capita" />} />
      <ChartRow section={emissionsNarratives[4]} chart={<AnimalChart />} />
      <ChartRow section={emissionsNarratives[5]} chart={<PieChart variant="plants" />} />
      <section className="stat-band">
        <NarrativeBlock section={emissionsNarratives[6]} />
        <RankingCharts />
      </section>
    </div>
  );
}

function ChartRow({
  section,
  chart,
  reverse = false,
  band = false,
}: {
  section: TextSection;
  chart: ReactNode;
  reverse?: boolean;
  band?: boolean;
}) {
  return (
    <section
      className={cn(
        "grid items-center gap-12 lg:grid-cols-2",
        band && "stat-band",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <NarrativeBlock section={section} />
      {chart}
    </section>
  );
}

function LineChart({ mode }: { mode: "co2" | "global" | "capita" }) {
  const labels = mode === "co2" ? ["5.05", "4.90", "4.75", "4.60", "4.45", "4.29"] : mode === "capita" ? ["1.34", "1.30", "1.26", "1.22", "1.18", "1.14"] : ["0.0138", "0.0134", "0.0130", "0.0126", "0.0122", "0.0117"];

  return (
    <div className="chart-card">
      <ChartTools />
      <svg className="line-chart" viewBox="0 0 560 330" role="img">
        <title>Line chart</title>
        {Array.from({ length: 8 }).map((_, index) => (
          <line
            key={`v-${index}`}
            className="chart-grid-line"
            x1={55 + index * 68}
            y1="24"
            x2={55 + index * 68}
            y2="282"
          />
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <line
            key={`h-${index}`}
            className="chart-grid-line"
            x1="55"
            y1={24 + index * 52}
            x2="530"
            y2={24 + index * 52}
          />
        ))}
        <polyline
          className="chart-line"
          points="55,55 123,100 191,135 259,150 327,178 395,258 463,178 530,168"
        />
        {chartLineClasses.map((klass) => (
          <circle key={klass} className={cn("chart-dot", klass)} r="4" />
        ))}
        {labels.map((label, index) => (
          <text key={label} x="18" y={29 + index * 52} className="chart-axis">
            {label}
          </text>
        ))}
        {["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"].map((label, index) => (
          <text key={label} x={46 + index * 68} y="310" className="chart-axis">
            {label}
          </text>
        ))}
      </svg>
      <p className="chart-caption">
        {mode === "co2"
          ? "The yearly CO2 emissions chart indicates a gradual increase after minor fluctuations."
          : mode === "capita"
            ? "Per capita emissions show a gradual rise with a clear dip in 2023."
            : "Thanh Hoa contribution remains below 1% with small month-to-month variation."}
      </p>
    </div>
  );
}

function AnimalChart() {
  return (
    <div className="chart-card">
      <ChartTools />
      <svg className="line-chart" viewBox="0 0 560 330" role="img">
        <title>Animal emissions</title>
        {Array.from({ length: 8 }).map((_, index) => (
          <line
            key={`v-${index}`}
            className="chart-grid-line"
            x1={55 + index * 68}
            y1="24"
            x2={55 + index * 68}
            y2="282"
          />
        ))}
        {Array.from({ length: 7 }).map((_, index) => (
          <line
            key={`h-${index}`}
            className="chart-grid-line"
            x1="55"
            y1={24 + index * 43}
            x2="530"
            y2={24 + index * 43}
          />
        ))}
        <polyline className="chart-line animal-blue" points="55,56 123,64 191,62 259,102 327,132 395,116 463,110 530,110" />
        <polyline className="chart-line animal-green" points="55,60 123,58 191,55 259,58 327,64 395,55 463,48 530,43" />
        <polyline className="chart-line animal-yellow" points="55,208 123,232 191,209 259,207 327,202 395,198 463,196 530,195" />
        <polyline className="chart-line animal-red" points="55,244 123,246 191,245 259,245 327,244 395,243 463,242 530,243" />
        <text x="210" y="316" className="chart-axis">Buffalo</text>
        <text x="280" y="316" className="chart-axis">Cow</text>
        <text x="330" y="316" className="chart-axis">Pig</text>
        <text x="370" y="316" className="chart-axis">Goat</text>
      </svg>
      <p className="chart-caption">Based on data 2018 to 2022, buffalo have the highest emissions among animal species.</p>
    </div>
  );
}

function ChartTools() {
  return (
    <div className="mb-2 flex justify-end gap-1 text-[#8296a8]">
      <CircleDot size={14} />
      <CircleDot size={14} />
      <Search size={14} />
      <Home size={14} />
      <Menu size={14} />
    </div>
  );
}

function RankingCharts() {
  const emissions = ["Yên Định", "Triệu Sơn", "Nông Cống", "Thọ Xuân", "Thiệu Hóa", "Hoằng Hóa", "Quảng Xương", "Nghi Sơn", "Thạch Thành", "Vĩnh Lộc"];
  const sequestrations = ["Quan Hóa", "Quan Sơn", "Thường Xuân", "Mường Lát", "Bá Thước", "Như Xuân", "Lang Chánh", "Như Thanh", "Thạch Thành", "Ngọc Lặc"];

  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-2">
      <HorizontalBars title="Emssions in Thanh Hoa 2024" labels={emissions} />
      <HorizontalBars title="Sequestrations in Thanh Hoa 2024" labels={sequestrations} flip />
    </div>
  );
}

function HorizontalBars({ title, labels, flip = false }: { title: string; labels: string[]; flip?: boolean }) {
  return (
    <div>
      <h3 className="text-center text-3xl font-light text-[#666666]">{title}</h3>
      <div className="mt-6 space-y-3">
        {labels.map((label, index) => (
          <div key={label} className="grid grid-cols-[130px_1fr] items-center gap-3 text-sm">
            <span className="text-right">{label}</span>
            <div className="bar-track">
              <span className={cn("bar-negative", flip ? "bar-n-wide" : "bar-n-small")} />
              <span className={cn("bar-positive", `bar-p-${(index % 5) + 1}`)} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-8 text-sm">
        <span className="legend-item green">Removals</span>
        <span className="legend-item teal">Emissions</span>
      </div>
    </div>
  );
}

export function AboutPage() {
  const { locale } = useLocale();

  return (
    <main>
      <PageHero
        title={{ vi: "Về Chúng Tôi", en: "About Us" }}
        subtitle={{
          vi: "Liên minh đa quốc gia hàng đầu trong lĩnh vực nông nghiệp sinh thái và quản lý carbon",
          en: "A leading multinational alliance in ecological agriculture and carbon management",
        }}
        badges={[
          { icon: Globe2, text: { vi: "6 Đối tác chiến lược", en: "6 Strategic partners" } },
          { icon: Users, text: { vi: "20+ Chuyên gia hàng đầu", en: "20+ Leading experts" } },
          { icon: Calendar, text: { vi: "4+ Năm hợp tác", en: "4+ Years cooperating" } },
        ]}
      />
      <section className="site-container py-16">
        <h2 className="center-title">{locale === "vi" ? "Tài trợ & Đối tác" : "Sponsors & Partners"}</h2>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:divide-x lg:divide-[#d1d5db]">
          {sponsors.map((group) => (
            <div key={t(group.label, locale)} className="flex flex-col items-center gap-6 px-8">
              <p className="text-lg font-bold uppercase text-[#777777]">{t(group.label, locale)}</p>
              <div className="flex flex-wrap items-center justify-center gap-10">
                {group.images.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    width={260}
                    height={120}
                    alt=""
                    className="max-h-[100px] w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="site-container py-16">
        <h2 className="center-title">{locale === "vi" ? "Các Đơn Vị Tham Gia" : "Participating Organizations"}</h2>
        <p className="center-subtitle">
          {locale === "vi"
            ? "Liên minh mạnh mẽ giữa các tổ chức học thuật hàng đầu, cơ quan chính phủ và công ty công nghệ tiên tiến"
            : "A strong alliance between leading academic institutions, government agencies and technology companies"}
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {partnerCards.map((card) => (
            <LogoPanel key={card.name} card={card} />
          ))}
        </div>
      </section>
      <section className="bg-[#f7f8f9] py-16">
        <div className="site-container">
          <h2 className="center-title">{locale === "vi" ? "Đội Ngũ Chuyên Gia" : "Expert Team"}</h2>
          <p className="center-subtitle">
            {locale === "vi"
              ? "Các nhà nghiên cứu và chuyên gia hàng đầu từ các tổ chức đối tác"
              : "Leading researchers and experts from partner organizations"}
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {experts.map((expert) => (
              <ExpertPanel key={expert.name} expert={expert} />
            ))}
          </div>
        </div>
      </section>
      <section className="site-container py-20 text-center">
        <h2 className="center-title">{locale === "vi" ? "Tầm Nhìn & Tác Động" : "Vision & Impact"}</h2>
        <p className="mx-auto mt-5 max-w-[850px] text-xl font-medium leading-[1.5]">
          {locale === "vi"
            ? "Chúng tôi cam kết xây dựng một hệ sinh thái nông nghiệp bền vững, thông minh và hiệu quả thông qua việc ứng dụng công nghệ tiên tiến và quản lý carbon khoa học."
            : "We are committed to building a sustainable, smart and effective agricultural ecosystem through advanced technology and scientific carbon management."}
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <ImpactItem icon={<Target />} title={{ vi: "Mục Tiêu", en: "Goal" }} body={{ vi: "Nâng cao năng suất nông nghiệp và giảm thiểu tác động môi trường thông qua công nghệ AI", en: "Improve agricultural productivity and reduce environmental impact through AI technology" }} />
          <ImpactItem icon={<CheckCircle2 />} title={{ vi: "Thành Tựu", en: "Achievements" }} body={{ vi: "Kết nối thành công 50+ hợp tác xã và phát triển nền tảng quản lý carbon tiên tiến", en: "Connected 50+ cooperatives and developed an advanced carbon management platform" }} />
          <ImpactItem icon={<Globe2 />} title={{ vi: "Tương Lai", en: "Future" }} body={{ vi: "Mở rộng mô hình ra toàn quốc và trở thành tiêu chuẩn cho nông nghiệp bền vững", en: "Scale the model nationally and become a standard for sustainable agriculture" }} />
        </div>
      </section>
    </main>
  );
}

function PageHero({
  title,
  subtitle,
  badges,
}: {
  title: LocalizedText;
  subtitle: LocalizedText;
  badges: { icon: typeof Globe2; text: LocalizedText }[];
}) {
  const { locale } = useLocale();

  return (
    <section className="page-hero">
      <Image
        src={assets.hero}
        fill
        alt=""
        className="hero-image"
        priority
        sizes="100vw"
      />
      <div className="page-hero-gradient" />
      <div className="site-container relative z-10 py-20">
        <h1 className="text-[52px] font-extrabold leading-tight text-[#11a048] drop-shadow-md">
          {t(title, locale)}
        </h1>
        <p className="mt-6 max-w-[700px] text-[28px] font-medium leading-[1.25] text-[#0f8a3d]">
          {t(subtitle, locale)}
        </p>
        <div className="mt-9 flex flex-wrap gap-6">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <span key={t(badge.text, locale)} className="hero-badge">
                <Icon size={18} /> {t(badge.text, locale)}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LogoPanel({ card }: { card: LogoCard }) {
  const { locale } = useLocale();

  return (
    <article className="info-card p-6">
      <div className="flex h-48 items-center justify-center rounded bg-[#f1f1f3]">
        <Image src={card.image} width={330} height={180} alt={card.name} className="max-h-40 w-auto object-contain" />
      </div>
      <span className="mt-5 inline-flex rounded-full border border-primary-green px-4 py-1 text-sm font-bold text-primary-green">
        {t(card.tag, locale)}
      </span>
      <h3 className="mt-4 text-2xl font-extrabold text-[#666666]">{card.name}</h3>
      <p className="mt-4 min-h-[72px] text-lg font-medium leading-[1.45]">{t(card.description, locale)}</p>
      <div className="mt-6 border-t border-[#dfe4ea] pt-5">
        <h4 className="font-extrabold text-[#111827]">{t(commonText.roleInProject, locale)}</h4>
        <p className="mt-2 text-lg font-medium leading-[1.45]">{t(card.role, locale)}</p>
      </div>
    </article>
  );
}

function ExpertPanel({ expert }: { expert: ExpertCard }) {
  const { locale } = useLocale();

  return (
    <article className="info-card p-8">
      <Image
        src={expert.image}
        width={150}
        height={150}
        alt={expert.name}
        className="mx-auto h-36 w-36 rounded-full object-cover"
      />
      <h3 className="mt-10 text-3xl font-extrabold text-[#111827]">{expert.name}</h3>
      <p className="mt-4 text-xl font-extrabold text-[#0ca542]">{t(expert.role, locale)}</p>
      <span className="mx-auto mt-6 block w-fit rounded-full border border-[#cfd7df] px-8 py-2 font-medium text-[#344155]">
        {t(expert.organization, locale)}
      </span>
      <p className="mt-8 text-lg font-medium leading-[1.55] text-[#465568]">
        {t(expert.description, locale)}
      </p>
    </article>
  );
}

function ImpactItem({ icon, title, body }: { icon: ReactNode; title: LocalizedText; body: LocalizedText }) {
  const { locale } = useLocale();

  return (
    <article className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d9ffe4] text-[#0aa345]">
        {icon}
      </div>
      <h3 className="mt-6 text-2xl font-extrabold text-[#666666]">{t(title, locale)}</h3>
      <p className="mt-4 text-lg font-medium leading-[1.4]">{t(body, locale)}</p>
    </article>
  );
}

export function ArchitecturePage() {
  const { locale } = useLocale();

  return (
    <main>
      <PageHero
        title={architectureSections.hero.title}
        subtitle={architectureSections.hero.subtitle}
        badges={architectureSections.hero.stats.map((stat) => ({
          icon: stat.value === "IoT & AI" ? Microscope : stat.value === "50" ? Users : Layers3,
          text: { vi: `${stat.value} ${stat.label.vi}`, en: `${stat.value} ${stat.label.en}` },
        }))}
      />
      <section className="site-container py-16">
        <h2 className="center-title">{t(architectureSections.overview.title, locale)}</h2>
        <p className="mx-auto mt-6 max-w-[900px] text-center text-lg font-medium leading-[1.55]">
          {t(architectureSections.overview.body, locale)}
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {architectureSections.overview.cards.map((card) => (
            <article key={t(card.title, locale)} className="info-card p-8 text-center">
              <h3 className="text-2xl font-extrabold text-primary-green">{t(card.title, locale)}</h3>
              <p className="mt-4 text-lg font-medium leading-[1.45]">{t(card.body, locale)}</p>
            </article>
          ))}
        </div>
      </section>
      <SystemSection
        title={{ vi: "Hệ Thống Giám Sát Carbon Tuân Thủ Quốc Gia", en: "National Compliance Carbon Monitoring System" }}
        subtitle={{
          vi: "Triển khai rộng rãi tại hai huyện Hoằng Hóa và Hà Trung, hợp tác với 50 hợp tác xã để mở rộng đa dạng cây trồng và sử dụng dữ liệu thống kê cùng vệ tinh",
          en: "Broad deployment in Hoang Hoa and Ha Trung, working with 50 cooperatives and combining statistics, satellite and drone data",
        }}
        image={assets.architecture.national}
        cards={[
          { title: { vi: "Quản lý thông tin", en: "Information management" }, body: { vi: "Dữ liệu nông nghiệp được nhập và lưu trữ có hệ thống, bao gồm diện tích, loại cây trồng, dữ liệu chăn nuôi, dữ liệu rừng", en: "Agricultural data is entered and stored systematically, including area, crop, livestock and forest data" } },
          { title: { vi: "Hỗ trợ giám sát carbon", en: "Carbon monitoring support" }, body: { vi: "Tạo báo cáo về tình trạng canh tác, phát thải và hấp thụ, phục vụ phân tích khí nhà kính và đánh giá tác động môi trường", en: "Generates reports on farming status, emissions and sequestration for GHG analysis and impact assessment" } },
          { title: { vi: "Tìm kiếm và phân tích", en: "Search and analysis" }, body: { vi: "Hỗ trợ tìm kiếm và trích xuất thông tin nhanh chóng thay vì quản lý dữ liệu bằng phương pháp giấy tờ truyền thống", en: "Supports quick information search and extraction instead of paper-based data management" } },
          { title: { vi: "Trực quan hóa dữ liệu", en: "Data visualization" }, body: { vi: "Tạo biểu đồ trực quan giúp người dùng dễ dàng xác định xu hướng và mối quan hệ trong dữ liệu nông nghiệp", en: "Creates visual charts so users can identify trends and relationships in agricultural data" } },
        ]}
      />
      <SystemSection
        title={{ vi: "Hệ Thống Giám Sát Carbon Tại Chỗ cho Canh Tác Lúa", en: "On-Site Carbon Monitoring System for Rice Farming" }}
        subtitle={{
          vi: "Triển khai tại 10 hộ trồng lúa với cảm biến IoT, cung cấp khuyến nghị thực hành nông nghiệp nhằm giảm phát thải và tính toán hệ số phát thải địa phương",
          en: "Deployed with 10 rice households using IoT sensors, providing recommendations to reduce emissions and compute local emission factors",
        }}
        image={assets.architecture.onsite}
        cards={[
          { title: { vi: "Cảm biến mực nước", en: "Water level sensor" }, body: { vi: "Lắp đặt tại ruộng lúa để giám sát mực nước, hỗ trợ tính toán hệ số phát thải CH₄", en: "Installed in rice fields to monitor water level and support CH₄ emission factor calculation" } },
          { title: { vi: "Cảm biến đất", en: "Soil sensor" }, body: { vi: "Thu thập các chỉ số như nhiệt độ, độ ẩm, độ dẫn điện, pH, NPK trong đất", en: "Collects soil temperature, moisture, conductivity, pH and NPK indicators" } },
          { title: { vi: "Hiệu chuẩn dữ liệu", en: "Data calibration" }, body: { vi: "Xác minh và hiệu chuẩn dữ liệu cảm biến dựa trên mẫu đất thực tế", en: "Verifies and calibrates sensor data using real soil samples" } },
        ]}
      />
      <section className="site-container py-16">
        <h2 className="center-title">{locale === "vi" ? "Tích Hợp Hai Hệ Thống" : "Integration of Two Systems"}</h2>
        <p className="center-subtitle">
          {locale === "vi"
            ? "Hai hệ thống con hoạt động song song, bổ sung và hỗ trợ lẫn nhau để tạo ra giải pháp giám sát carbon mạnh mẽ và có thể mở rộng"
            : "The two subsystems run in parallel and support each other to create a robust, scalable carbon monitoring solution"}
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <IntegrationCard title={{ vi: "Hệ Thống Tuân Thủ Quốc Gia", en: "National Compliance System" }} items={["Sử dụng dữ liệu vệ tinh và drone", "Áp dụng hệ số phát thải quốc gia", "Giám sát 50 hợp tác xã", "Cung cấp tổng quan chi phí hiệu quả"]} />
          <IntegrationCard title={{ vi: "Hệ Thống Giám Sát Tại Chỗ", en: "On-Site Monitoring System" }} items={["Sử dụng cảm biến IoT chuyên dụng", "Phát triển hệ số phát thải địa phương", "Giám sát 10 hộ trồng lúa", "Xác minh và tinh chỉnh ước tính rộng hơn"]} />
        </div>
      </section>
    </main>
  );
}

function SystemSection({
  title,
  subtitle,
  image,
  cards,
}: {
  title: LocalizedText;
  subtitle: LocalizedText;
  image: string;
  cards: { title: LocalizedText; body: LocalizedText }[];
}) {
  const { locale } = useLocale();

  return (
    <section className="site-container py-16">
      <h2 className="center-title">{t(title, locale)}</h2>
      <p className="center-subtitle">{t(subtitle, locale)}</p>
      <Image src={image} width={1180} height={620} alt="" className="mx-auto mt-10 rounded-lg border border-[#e5e7eb]" />
      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        {cards.map((card) => (
          <article key={t(card.title, locale)} className="info-card p-6">
            <h3 className="text-xl font-extrabold text-primary-green">{t(card.title, locale)}</h3>
            <p className="mt-3 font-medium leading-[1.5]">{t(card.body, locale)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function IntegrationCard({ title, items }: { title: LocalizedText; items: string[] }) {
  const { locale } = useLocale();

  return (
    <article className="info-card p-8">
      <h3 className="text-2xl font-extrabold text-primary-green">{t(title, locale)}</h3>
      <ul className="mt-5 space-y-3 text-lg font-medium">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2 className="mt-1 shrink-0 text-primary-green" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function FaqPage() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(0);

  return (
    <main className="min-h-[calc(100vh-128px)] bg-[#f7f8f9]">
      <section className="site-container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-lg font-extrabold uppercase text-primary-green">FAQ</p>
            <h1 className="mt-2 text-[44px] font-extrabold uppercase leading-tight text-[#111827]">
              {locale === "vi" ? "CÁC CÂU HỎI THƯỜNG GẶP" : "FREQUENTLY ASKED QUESTIONS"}
            </h1>
            <p className="mt-6 text-lg font-medium">
              {locale === "vi"
                ? "Các câu hỏi thường gặp sẽ được trả lời ở dưới đây."
                : "Common questions are answered below."}
            </p>
            <div className="mt-8 flex gap-3">
              <button className="outline-green-button">
                {locale === "vi" ? "Câu hỏi thường gặp" : "FAQ"}
              </button>
              <button className="outline-green-button">
                {locale === "vi" ? "Đặt câu hỏi" : "Ask a question"}
              </button>
            </div>
          </div>
          <div className="info-card p-8">
            <p className="mb-6 text-lg font-medium">
              {locale === "vi"
                ? "Chào mừng đến trang hỏi đáp của Carbon Farming, dưới đây là các câu hỏi thường gặp khi bắt đầu."
                : "Welcome to Carbon Farming Q&A. Below are common questions when getting started."}
            </p>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={t(item.question, locale)} className="rounded-lg border border-[#e5e7eb] bg-white">
                  <button
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-extrabold text-[#111827]"
                    onClick={() => setOpen(open === index ? -1 : index)}
                  >
                    {t(item.question, locale)}
                    <ChevronDown className={cn("transition-transform", open === index && "rotate-180")} />
                  </button>
                  {open === index ? (
                    <p className="border-t border-[#e5e7eb] px-5 py-4 text-base font-medium leading-[1.55]">
                      {t(item.answer, locale)}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function FeedbackPage() {
  const { locale } = useLocale();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const active = feedbackSteps[step];

  return (
    <main className="min-h-[calc(100vh-128px)] bg-[#f4f6f3] py-12">
      <section className="mx-auto max-w-[720px] px-4">
        <h1 className="text-4xl font-extrabold text-primary-green">
          {locale === "vi" ? "Góp ý sản phẩm" : "Product feedback"}
        </h1>
        <p className="mt-3 text-lg font-medium leading-[1.45]">
          {locale === "vi"
            ? "Form gồm 7 phần. Bạn có thể gửi ẩn danh; nếu đã đăng nhập, hệ thống sẽ ghi nhận tài khoản của bạn."
            : "The form has 7 sections. You can submit anonymously; if logged in, the system will record your account."}
        </p>
        <div className="mt-2 rounded-lg border border-[#e4e4e4] bg-white px-8 py-3">
          <div className="stepper">
            {feedbackSteps.map((item, index) => (
              <button
                key={t(item.title, locale)}
                className="step-button"
                onClick={() => setStep(index)}
              >
                <span className={cn("step-dot", index <= step && "step-dot-active")}>{index + 1}</span>
                <span>{t(item.title, locale)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="info-card mt-6 p-8">
          {submitted ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="mx-auto text-primary-green" size={56} />
              <h2 className="mt-5 text-2xl font-extrabold text-[#111827]">
                {locale === "vi" ? "Cảm ơn bạn đã góp ý" : "Thank you for your feedback"}
              </h2>
              <p className="mt-3 text-lg font-medium">
                {locale === "vi"
                  ? "Thông tin đã được ghi nhận trong bản mô phỏng."
                  : "Your information has been recorded in this mock flow."}
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-extrabold text-[#111827]">{t(active.title, locale)}</h2>
              <p className="mt-2 text-base font-medium">{t(active.description, locale)}</p>
              <div className="mt-6 space-y-5">
                {active.fields.map((field) => (
                  <FeedbackControl key={t(field.label, locale)} field={field} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            className="feedback-secondary"
            disabled={step === 0 || submitted}
            onClick={() => setStep((value) => Math.max(0, value - 1))}
          >
            {t(commonText.back, locale)}
          </button>
          <button
            className="feedback-primary"
            onClick={() => {
              if (step === feedbackSteps.length - 1) {
                setSubmitted(true);
              } else {
                setStep((value) => Math.min(feedbackSteps.length - 1, value + 1));
              }
            }}
          >
            {step === feedbackSteps.length - 1 ? t(commonText.submit, locale) : t(commonText.next, locale)}
          </button>
        </div>
      </section>
    </main>
  );
}

function FeedbackControl({ field }: { field: FeedbackField }) {
  const { locale } = useLocale();
  const label = t(field.label, locale);

  return (
    <label className="block">
      <span className="font-extrabold text-[#111827]">
        {label} {field.required ? <span className="text-red-500">*</span> : null}
      </span>
      {field.type === "select" ? (
        <select className="feedback-input mt-2">
          <option>{locale === "vi" ? "— Chọn —" : "— Select —"}</option>
          {field.options?.map((option) => (
            <option key={t(option, locale)}>{t(option, locale)}</option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <>
          <textarea className="feedback-input mt-2 min-h-16 resize-y" />
          <span className="mt-1 block text-sm">0/512</span>
        </>
      ) : field.type === "radio" || field.type === "checkbox" ? (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {field.options?.map((option) => (
            <span key={t(option, locale)} className="option-pill">
              <input type={field.type} name={label} /> {t(option, locale)}
            </span>
          ))}
        </div>
      ) : (
        <input className="feedback-input mt-2" />
      )}
    </label>
  );
}

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";

  return (
    <LanguageProvider>
      <main className="auth-page">
        <Link href="/" className="mt-2 flex flex-col items-center text-primary-green">
          <Image src={assets.logo} width={128} height={128} alt="logo" className="h-32 w-32" priority />
          <span className="brand-wordmark mt-2 text-xl">CARBON FARMING</span>
        </Link>
        <form className={cn("auth-card", !isLogin && "auth-card-signup")}>
          <h1 className="text-center text-3xl font-medium text-[#111827]">
            {isLogin ? "Đăng nhập tài khoản" : "Register New Account"}
          </h1>
          <div className="mt-10 space-y-6">
            <AuthField icon={<User size={18} />} label={isLogin ? "Tên đăng nhập" : "Username"} placeholder="john.doe1432" />
            <AuthField icon={<Lock size={18} />} label="Password" placeholder="Must have at least 6 characters" type="password" />
            {!isLogin ? (
              <>
                <AuthField icon={<Lock size={18} />} label="Password Confimations" placeholder="Confirm your password" type="password" />
                <AuthField icon={<Phone size={18} />} label="Phone Number" placeholder="Ex: 091 234 5678" type="tel" />
                <AuthField icon={<Mail size={18} />} label="Email" placeholder="Ex: john.doe1432@gmail.com" type="email" />
              </>
            ) : null}
          </div>
          <button type="button" className="mt-10 h-12 w-full rounded-md bg-[#24c864] font-extrabold text-white">
            {isLogin ? "Đăng nhập" : "Create New Account"}
          </button>
          <p className="mt-7 text-center text-base font-medium">
            {isLogin ? "Chưa có tài khoản? " : "Already have an account? "}
            <Link className="font-extrabold text-primary-green" href={isLogin ? "/signup" : "/login"}>
              {isLogin ? "Đăng ký" : "Login Here"}
            </Link>
          </p>
        </form>
        <p className="mt-auto pb-5 text-sm font-medium">
          Copyright©Carbon Farming Data Hub {isLogin ? "2024" : "2023"}. All rights reserved.
        </p>
      </main>
    </LanguageProvider>
  );
}

function AuthField({
  icon,
  label,
  placeholder,
  type = "text",
}: {
  icon: ReactNode;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="font-medium">{label}</span>
      <span className="mt-2 flex h-11 items-center gap-3 rounded-md border border-[#d7dde5] px-5 text-[#9aa3b2]">
        <span className="text-primary-green">{icon}</span>
        <input type={type} placeholder={placeholder} className="w-full bg-transparent font-semibold outline-none" />
      </span>
    </label>
  );
}

export function AppDashboardPage() {
  const { locale } = useLocale();

  return (
    <main className="bg-[#f4f6f3] py-10">
      <section className="site-container">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold uppercase text-primary-green">Carbon Farming App</p>
            <h1 className="text-4xl font-extrabold text-[#111827]">
              {locale === "vi" ? "Bảng điều khiển nông trại" : "Farm dashboard"}
            </h1>
          </div>
          <button className="primary-cta mt-0">
            {locale === "vi" ? "Thêm nông trại" : "Add farm"}
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            ["50", locale === "vi" ? "Hợp tác xã" : "Cooperatives"],
            ["18", locale === "vi" ? "Huyện theo dõi" : "Districts tracked"],
            ["420K", "CO₂ (ton)"],
            ["2024", locale === "vi" ? "Năm dữ liệu" : "Data year"],
          ].map(([value, label]) => (
            <article key={label} className="info-card p-6">
              <p className="text-4xl font-extrabold text-primary-green">{value}</p>
              <p className="mt-2 font-bold">{label}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="info-card p-6">
            <h2 className="text-2xl font-extrabold text-[#111827]">
              {locale === "vi" ? "Bản đồ nông trại mô phỏng" : "Mock farm map"}
            </h2>
            <div className="mt-5">
              <EmissionMap />
            </div>
          </div>
          <div className="space-y-6">
            {features.slice(0, 4).map((feature) => (
              <article key={feature.title.vi} className="info-card flex gap-4 p-5">
                <Image src={feature.icon} width={56} height={56} alt={feature.alt} className="h-14 w-14" />
                <div>
                  <h3 className="font-extrabold text-primary-green">{t(feature.title, locale)}</h3>
                  <p className="mt-1 text-sm font-medium leading-[1.4]">{t(feature.description, locale)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
