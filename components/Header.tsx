"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { LogoIcon } from "@/components/LogoBadge";

const navLinks = [
  { href: "/",         label: "Головна"      },
  { href: "/services", label: "Послуги"       },
  { href: "/about",    label: "Про компанію"  },
  { href: "/contacts", label: "Контакти"      },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      {/* Ukrainian flag top accent bar */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-600 to-yellow-400" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <LogoIcon size={40} />
            <div className="leading-tight">
              <span className="block font-bold text-lg text-gray-900 tracking-tight">
                Служба Безпеки
              </span>
              <span className="block text-xs text-blue-600 font-medium tracking-wide uppercase">
                Охоронна компанія
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone + CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+380632390693"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+38 (063) 239-06-93</span>
            </a>
            <Link
              href="/contacts"
              className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
            >
              Залишити заявку
            </Link>
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Меню"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-2 space-y-2">
            <a
              href="tel:+380632390693"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              +38 (063) 239-06-93
            </a>
            <Link
              href="/contacts"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-sm py-3 text-center"
            >
              Залишити заявку
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
