import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Camera, Users, Lock, Truck, Phone,
  MessageSquare, BellRing, Wifi, ArrowRight, CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Послуги охоронної компанії",
  description:
    "Повний спектр охоронних послуг від Служби Безпеки: фізична охорона, відеоспостереження, пультова охорона, особиста охорона, інкасація.",
};

const services = [
  {
    id: "physical-guard",
    icon: Shield,
    title: "Фізична охорона об'єктів",
    description:
      "Охорона офісних будівель, торгових об'єктів, складських комплексів та промислових підприємств силами атестованих охоронців.",
    features: [
      "TODO: Особливість послуги 1 (напр., цілодобовий пост охорони)",
      "TODO: Особливість послуги 2 (напр., озброєні охоронці)",
      "TODO: Особливість послуги 3",
      "TODO: Особливість послуги 4",
    ],
    badge: "Популярна послуга",
  },
  {
    id: "cctv",
    icon: Camera,
    title: "Встановлення систем відеоспостереження",
    description:
      "Проєктування, постачання, монтаж та технічне обслуговування систем відеоспостереження будь-якої складності для об'єктів усіх типів.",
    features: [
      "TODO: Особливість 1 (напр., IP-камери 4K)",
      "TODO: Особливість 2 (напр., віддалений доступ з телефону)",
      "TODO: Особливість 3",
      "TODO: Особливість 4",
    ],
    badge: null,
  },
  {
    id: "alarm",
    icon: BellRing,
    title: "Охоронна та пожежна сигналізація",
    description:
      "Проєктування й монтаж охоронно-пожежної сигналізації, інтеграція з пультом централізованого спостереження.",
    features: [
      "TODO: Особливість 1",
      "TODO: Особливість 2",
      "TODO: Особливість 3",
      "TODO: Особливість 4",
    ],
    badge: null,
  },
  {
    id: "pco",
    icon: Wifi,
    title: "Пультова охорона",
    description:
      "Підключення об'єкта до пульту централізованого спостереження (ПЦС), цілодобовий моніторинг та оперативне реагування групи швидкого реагування (ГШР).",
    features: [
      "TODO: Особливість 1 (напр., ГШР — час реагування 10 хв)",
      "TODO: Особливість 2",
      "TODO: Особливість 3",
      "TODO: Особливість 4",
    ],
    badge: "Рекомендуємо",
  },
  {
    id: "personal",
    icon: Users,
    title: "Особиста охорона (VIP)",
    description:
      "Персональний захист і супровід керівників, публічних осіб та членів їхніх родин. Професійні охоронці з досвідом у силових структурах.",
    features: [
      "TODO: Особливість 1",
      "TODO: Особливість 2",
      "TODO: Особливість 3",
      "TODO: Особливість 4",
    ],
    badge: null,
  },
  {
    id: "cash",
    icon: Truck,
    title: "Інкасація та перевезення цінностей",
    description:
      "Безпечне перевезення грошових коштів, цінних паперів та іншого майна спеціалізованим бронеавтомобілем зі збройним супроводом.",
    features: [
      "TODO: Особливість 1",
      "TODO: Особливість 2",
      "TODO: Особливість 3",
      "TODO: Особливість 4",
    ],
    badge: null,
  },
  {
    id: "access",
    icon: Lock,
    title: "Системи контролю доступу (СКУД)",
    description:
      "Встановлення та налаштування систем контролю й управління доступом: турнікети, електромагнітні замки, зчитувачі карток, біометрія.",
    features: [
      "TODO: Особливість 1",
      "TODO: Особливість 2",
      "TODO: Особливість 3",
      "TODO: Особливість 4",
    ],
    badge: null,
  },
  {
    id: "consulting",
    icon: MessageSquare,
    title: "Консультації з безпеки",
    description:
      "Професійний аудит безпеки об'єкта, розробка концепції безпеки, рекомендації щодо технічних засобів захисту.",
    features: [
      "TODO: Особливість 1",
      "TODO: Особливість 2",
      "TODO: Особливість 3",
      "TODO: Особливість 4",
    ],
    badge: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Повний спектр охоронних послуг
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наші послуги</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Служба Безпеки надає повний спектр охоронних послуг для бізнесу та приватних осіб.
            Індивідуальний підхід до кожного об'єкта.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} id={service.id} className="card relative overflow-hidden group">
                  {service.badge && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                      {service.badge}
                    </div>
                  )}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mt-2">{service.title}</h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contacts"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:gap-2.5 transition-all">
                    Замовити послугу <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container-content">
          <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-white text-center">
            <Phone className="w-14 h-14 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Не знайшли потрібну послугу?
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
              Зв'яжіться з нами — ми розробимо індивідуальне рішення для вашого об'єкта.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacts"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2">
                Залишити заявку <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+380632390693"
                className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2">
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
