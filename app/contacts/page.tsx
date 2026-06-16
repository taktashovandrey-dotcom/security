import type { Metadata } from "next";
import { Shield, MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакти — залишити заявку",
  description:
    "Зв'яжіться зі Службою Безпеки. Телефон: +38 (063) 239-06-93. Залишити заявку на охорону об'єкта.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Адреса",
    // TODO: Вкажіть реальну адресу
    value: "TODO: м. Місто, вул. Вулиця, буд. 00, офіс 000",
    href: null,
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+38 (063) 239-06-93",
    href: "tel:+380632390693",
  },
  {
    icon: Mail,
    label: "Email",
    // TODO: Вкажіть реальний email
    value: "TODO: info@example.com",
    href: "mailto:info@example.com",
  },
  {
    icon: Clock,
    label: "Режим роботи",
    // TODO: Вкажіть реальний режим роботи
    value: "TODO: Пн–Пт 9:00–18:00 / Черговий 24/7",
    href: null,
  },
];

export default function ContactsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4" />
            Зв'яжіться з нами
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакти</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            {/* TODO: Замініть підзаголовок */}
            TODO: Залиште заявку і ми зв'яжемося з вами протягом X хвилин. Безкоштовний виїзд фахівця.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-gray-50">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Залишити заявку</h2>
                  <p className="text-gray-500 text-sm">
                    {/* TODO: Замініть опис форми */}
                    TODO: Заповніть форму і наш фахівець зв'яжеться з вами для обговорення умов охорони.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact Info */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Наші реквізити</h2>
                <ul className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href}
                              className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-gray-900">{item.value}</p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* Legal info */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Реквізити організації</h3>
                  <div className="space-y-1.5 text-xs text-gray-500">
                    {/* TODO: Замініть на реальні реквізити */}
                    <p><span className="text-gray-400">Повна назва:</span> TODO: ТОВ «Назва»</p>
                    <p><span className="text-gray-400">ЄДРПОУ:</span> TODO: 00000000</p>
                    <p><span className="text-gray-400">Юридична адреса:</span> TODO: юридична адреса</p>
                  </div>
                </div>
              </div>

              {/* Quick call CTA */}
              <div className="bg-blue-600 rounded-3xl p-6 text-white">
                <Shield className="w-10 h-10 text-yellow-300 mb-4" />
                <h3 className="font-bold text-lg mb-2">Терміновий виклик</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Якщо потрібна негайна допомога — телефонуйте на наш цілодобовий номер.
                </p>
                <a href="tel:+380632390693"
                  className="block text-center bg-yellow-400 text-gray-900 font-bold text-lg px-6 py-3 rounded-xl hover:bg-yellow-500 transition-colors">
                  +38 (063) 239-06-93
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ми на карті</h2>
          {/*
            TODO: Замініть плейсхолдер на реальний iframe Google Maps.
            Приклад:
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_EMBED_ID"
              width="100%" height="450" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl w-full"
            />
          */}
          <div className="bg-gray-100 rounded-2xl h-80 flex flex-col items-center justify-center gap-3 text-gray-400">
            <MapPin className="w-10 h-10" />
            <p className="font-medium">Карта (TODO: вставити iframe Google Maps)</p>
            <p className="text-sm">TODO: м. Місто, вул. Вулиця, буд. 00</p>
          </div>
        </div>
      </section>
    </>
  );
}
