import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Youtube, Send } from "lucide-react";
import { LogoIcon } from "@/components/LogoBadge";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Ukrainian flag accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-600 to-yellow-400" />

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <LogoIcon size={40} />
              <div className="leading-tight">
                <span className="block font-bold text-lg text-white">Служба Безпеки</span>
                <span className="block text-xs text-blue-400 font-medium uppercase tracking-wide">
                  Охоронна компанія
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {/* TODO: Додайте короткий опис компанії */}
              TODO: Короткий опис компанії — ліцензована охоронна організація, що забезпечує захист об'єктів та безпеку людей.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-5">
              {/* TODO: Замініть # на реальні посилання на соціальні мережі */}
              <a href="#" aria-label="Instagram"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Telegram"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Навігація
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/",         label: "Головна"     },
                { href: "/services", label: "Послуги"      },
                { href: "/about",    label: "Про компанію" },
                { href: "/contacts", label: "Контакти"     },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Послуги
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                "Фізична охорона",
                "Відеоспостереження",
                "Пультова охорона",
                "Особиста охорона",
                "Інкасація",
                "Консультації",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Контакти
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                {/* TODO: Вкажіть реальну адресу */}
                <span>TODO: м. Місто, вул. Вулиця, буд. 0</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+380632390693" className="hover:text-white transition-colors">
                  +38 (063) 239-06-93
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                {/* TODO: Вкажіть реальний email */}
                <a href="mailto:info@example.com" className="hover:text-white transition-colors">
                  TODO: info@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          {/* TODO: Вкажіть рік і повну назву */}
          <p>© {new Date().getFullYear()} Служба Безпеки. Усі права захищені.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Політика конфіденційності
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Угода користувача
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
