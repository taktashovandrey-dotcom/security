import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Lock,
  Camera,
  CheckCircle,
  Users,
  Building2,
  Award,
  Clock,
  ArrowRight,
  ChevronRight,
  Phone,
} from "lucide-react";
import { LogoBadgeFull } from "@/components/LogoBadge";

export const metadata: Metadata = {
  title: "Надійна охорона вашого об'єкту та бізнесу",
};

const advantages = [
  {
    icon: Shield,
    title: "Професійний захист",
    description:
      "Досвідчені охоронці, які пройшли спеціальну підготовку та мають державні ліцензії на охоронну діяльність.",
  },
  {
    icon: Clock,
    title: "Цілодобова робота",
    description:
      "Охорона об'єктів 24/7 без вихідних. Оперативне реагування на сигнал тривоги — група швидкого реагування.",
  },
  {
    icon: Award,
    title: "Ліцензії та сертифікати",
    description:
      "Усі необхідні державні ліцензії та сертифікати. Страхування відповідальності охоронців і майна клієнтів.",
  },
  {
    icon: Lock,
    title: "Сучасні технології",
    description:
      "Використовуємо сучасне охоронне обладнання: IP-відеоспостереження, СКУД, централізований моніторинг.",
  },
];

const servicesPreview = [
  {
    icon: Shield,
    title: "Фізична охорона об'єктів",
    description:
      "Охорона офісів, складів, торгових центрів та промислових підприємств силами атестованих охоронців.",
  },
  {
    icon: Camera,
    title: "Відеоспостереження та сигналізація",
    description:
      "Проектування, монтаж та обслуговування систем відеоспостереження й охоронної сигналізації під ключ.",
  },
  {
    icon: Users,
    title: "Особиста охорона (VIP)",
    description:
      "Персональний захист і супровід керівників, публічних осіб та членів їхніх родин.",
  },
];

const stats = [
  { value: "TODO+", label: "років на ринку",         icon: Award    },
  { value: "TODO+", label: "об'єктів під охороною",  icon: Building2 },
  { value: "TODO+", label: "співробітників",          icon: Users    },
  { value: "24/7",  label: "режим роботи",            icon: Clock    },
];

const whyUs = [
  "TODO: Ключова перевага 1 (наприклад: власна група швидкого реагування)",
  "TODO: Ключова перевага 2 (наприклад: сертифіковані охоронці з досвідом у силових структурах)",
  "TODO: Ключова перевага 3",
  "TODO: Ключова перевага 4",
  "TODO: Ключова перевага 5",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <Shield className="w-4 h-4" />
              Ліцензована охоронна компанія
            </div>
            {/* TODO: Замініть на головний заголовок компанії */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Об&apos;єкт під охороною —{" "}
              <span className="text-yellow-400">Служба Безпеки</span>
            </h1>
            {/* TODO: Замініть на реальний підзаголовок */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              TODO: Підзаголовок — коротко про ваші ключові послуги та переваги для клієнта.
              Ліцензована охорона, відеоспостереження, пультова охорона 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacts" className="btn-primary text-base px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                Залишити заявку
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+380632390693"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-medium rounded-xl px-8 py-4 hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5" />
                +38 (063) 239-06-93
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Переваги ──────────────────────────────────────────────────── */}
      <section className="section bg-gray-50">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="section-title">Чому обирають нас</h2>
            <p className="section-subtitle mx-auto">
              {/* TODO: Додайте підзаголовок блоку переваг */}
              TODO: Короткий опис розділу — головні переваги компанії перед конкурентами.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card text-center group">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Послуги (прев'ю) ─────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="section-title mb-2">Наші послуги</h2>
              <p className="text-gray-500 max-w-xl">
                Повний спектр охоронних послуг для бізнесу та приватних осіб.
              </p>
            </div>
            <Link href="/services" className="btn-outline shrink-0 self-start md:self-auto">
              Усі послуги
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesPreview.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} href="/services" className="card group cursor-pointer">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium">
                    Детальніше <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Цифри ────────────────────────────────────────────────────── */}
      <section className="section bg-blue-600 text-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Цифри говорять самі за себе</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              {/* TODO: Замініть підзаголовок та цифри на реальні */}
              TODO: Досвід та масштаб компанії в цифрах.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-yellow-300" />
                  </div>
                  {/* TODO: Замініть TODO на реальні числа */}
                  <div className="text-4xl font-bold mb-2 text-yellow-300">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Чому ми ──────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">
                {/* TODO: Замініть заголовок */}
                TODO: Заголовок блоку «Чому ми»
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {/* TODO: Замініть на опис компанії */}
                TODO: Розширений опис компанії та підходу до охоронної діяльності.
              </p>
              <ul className="space-y-4">
                {whyUs.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo / visual */}
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl p-10 flex flex-col items-center justify-center">
                <LogoBadgeFull size={200} />
                <p className="text-blue-700 font-semibold text-lg text-center mt-6">
                  Об&apos;єкт під охороною
                </p>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Статус</div>
                  <div className="text-sm font-semibold text-gray-900">Ліцензовано</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Режим охорони</div>
                  <div className="text-sm font-semibold text-gray-900">24 / 7 / 365</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Фінальний CTA ────────────────────────────────────────────── */}
      <section className="section bg-gray-900 text-white">
        <div className="container-content text-center">
          <div className="max-w-2xl mx-auto">
            <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Захистіть свій об&apos;єкт вже сьогодні
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              {/* TODO: Додайте опис — що отримає клієнт після заявки */}
              TODO: Безкоштовний виїзд спеціаліста, консультація та оцінка об'єкту.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacts"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors">
                Залишити заявку
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+380632390693"
                className="btn-outline border-white/30 text-white hover:bg-white/10 text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                +38 (063) 239-06-93
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
