import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Award, Users, Target, Eye,
  FileText, CheckCircle, ArrowRight,
} from "lucide-react";
import { LogoBadgeFull } from "@/components/LogoBadge";

export const metadata: Metadata = {
  title: "Про компанію",
  description:
    "Служба Безпеки — ліцензована охоронна компанія. Історія, місія, ліцензії та команда.",
};

const milestones = [
  {
    year: "TODO",
    title: "TODO: Подія 1 — Заснування компанії",
    description: "TODO: Опис — коли і ким заснована компанія, перші об'єкти під охороною.",
  },
  {
    year: "TODO",
    title: "TODO: Подія 2",
    description: "TODO: Наступний етап розвитку — розширення штату, нові послуги.",
  },
  {
    year: "TODO",
    title: "TODO: Подія 3",
    description: "TODO: Отримання нових ліцензій, вихід у нові регіони.",
  },
  {
    year: "TODO",
    title: "TODO: Сьогодні",
    description: "TODO: Поточний стан компанії — кількість об'єктів, регіони присутності.",
  },
];

const licenses = [
  {
    icon: FileText,
    title: "TODO: Ліцензія 1",
    number: "TODO: № ліцензії",
    issuer: "TODO: Орган, що видав ліцензію",
    valid:  "TODO: Термін дії",
  },
  {
    icon: Award,
    title: "TODO: Ліцензія / Сертифікат 2",
    number: "TODO: № документа",
    issuer: "TODO: Орган / організація",
    valid:  "TODO: Дата / безстроково",
  },
  {
    icon: Shield,
    title: "TODO: Сертифікат 3",
    number: "TODO: № сертифіката",
    issuer: "TODO: Орган / організація",
    valid:  "TODO: Термін дії",
  },
];

const teamMembers = [
  { name: "TODO: ПІБ керівника",    role: "TODO: Посада (напр., Генеральний директор)", bio: "TODO: Коротка біографія." },
  { name: "TODO: ПІБ співробітника", role: "TODO: Посада",                               bio: "TODO: Коротка біографія." },
  { name: "TODO: ПІБ співробітника", role: "TODO: Посада",                               bio: "TODO: Коротка біографія." },
  { name: "TODO: ПІБ співробітника", role: "TODO: Посада",                               bio: "TODO: Коротка біографія." },
];

const values = [
  { icon: Shield,  title: "Надійність",       description: "TODO: Опис цінності «Надійність»"       },
  { icon: Eye,     title: "Прозорість",        description: "TODO: Опис цінності «Прозорість»"        },
  { icon: Target,  title: "Професіоналізм",    description: "TODO: Опис цінності «Профессіоналізм»"   },
  { icon: Users,   title: "Командна робота",   description: "TODO: Опис цінності «Командна робота»"   },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Про нас
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Про компанію</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            {/* TODO: Замініть підзаголовок */}
            TODO: Вступне речення про компанію — хто ви, скільки років на ринку, місія.
          </p>
        </div>
      </section>

      {/* Mission & History */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title">
                {/* TODO: Замініть заголовок */}
                TODO: Заголовок розділу «Історія та місія»
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>TODO: Перший абзац — коли і ким заснована компанія, початкова діяльність.</p>
                <p>TODO: Другий абзац — етапи розвитку, розширення послуг.</p>
                <p>TODO: Третій абзац — поточне становище, досягнення, плани.</p>
              </div>

              <div className="mt-10 space-y-4">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Місія</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    TODO: Місія компанії — коротке ємне твердження про те, навіщо існує компанія.
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="w-5 h-5 text-yellow-600" />
                    <h3 className="font-semibold text-gray-900">Бачення</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    TODO: Бачення компанії — якою компанія хоче стати в майбутньому.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-8">Історія компанії</h3>
              <div className="relative">
                <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-blue-100" />
                <div className="space-y-8">
                  {milestones.map((m, i) => (
                    <div key={i} className="flex gap-6 relative">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 z-10">
                        {m.year}
                      </div>
                      <div className="pb-2">
                        <h4 className="font-semibold text-gray-900 mb-1">{m.title}</h4>
                        <p className="text-sm text-gray-500">{m.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="section-title">Наші цінності</h2>
            <p className="section-subtitle mx-auto">
              TODO: Підзаголовок розділу цінностей компанії.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="section-title">Ліцензії та сертифікати</h2>
            <p className="section-subtitle mx-auto">
              TODO: Опис розділу з ліцензіями та сертифікатами.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenses.map((license, i) => {
              const Icon = license.icon;
              return (
                <div key={i} className="card border-2 border-blue-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{license.title}</h3>
                  <div className="space-y-1.5 text-sm text-gray-500">
                    <div className="flex gap-2"><span className="text-gray-400 shrink-0">Номер:</span><span>{license.number}</span></div>
                    <div className="flex gap-2"><span className="text-gray-400 shrink-0">Видано:</span><span>{license.issuer}</span></div>
                    <div className="flex gap-2"><span className="text-gray-400 shrink-0">Термін:</span><span>{license.valid}</span></div>
                  </div>
                  {/* TODO: Замініть плейсхолдер на скан документа */}
                  <div className="mt-4 bg-gray-50 rounded-xl h-32 flex items-center justify-center text-gray-400 text-xs">
                    Скан документа (TODO: вставити зображення)
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-gray-50">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="section-title">Наша команда</h2>
            <p className="section-subtitle mx-auto">
              TODO: Опис команди — досвідчені фахівці, що забезпечують безпеку клієнтів.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="card text-center">
                {/* TODO: Замініть іконку на реальне фото через <Image> */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-blue-400" />
                </div>
                <p className="text-xs text-blue-400 mb-3 italic">Фото команди</p>
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section bg-blue-600 text-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Наші досягнення</h2>
              <p className="text-blue-200 mb-8">
                TODO: Опис розділу досягнень компанії.
              </p>
              <ul className="space-y-4">
                {[
                  "TODO: Досягнення 1 (напр., перемога в професійному конкурсі)",
                  "TODO: Досягнення 2 (напр., участь у державних програмах)",
                  "TODO: Досягнення 3 (партнерство з великими організаціями)",
                  "TODO: Досягнення 4",
                  "TODO: Досягнення 5",
                ].map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-300 mt-0.5 shrink-0" />
                    <span className="text-blue-100 text-sm">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <LogoBadgeFull size={220} className="opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-content text-center">
          <h2 className="section-title">Готові до співпраці?</h2>
          <p className="section-subtitle mx-auto">
            TODO: Заклик до дії — зв'яжіться з нами для обговорення умов охорони вашого об'єкта.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contacts" className="btn-primary px-8 py-4 text-base">
              Залишити заявку <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="btn-outline px-8 py-4 text-base">
              Переглянути послуги
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
