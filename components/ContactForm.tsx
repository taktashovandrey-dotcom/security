"use client";

import { useState, useRef } from "react";
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react";

const SERVICES = [
  "Фізична охорона об'єктів",
  "Встановлення відеоспостереження",
  "Охоронна та пожежна сигналізація",
  "Пультова охорона",
  "Особиста охорона (VIP)",
  "Інкасація та перевезення цінностей",
  "Системи контролю доступу (СКУД)",
  "Консультація з безпеки",
  "Інше",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      phone:   (form.elements.namedItem("phone")   as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMessage(json.error || "Виникла помилка");
        setState("error");
        return;
      }

      setState("success");
      formRef.current?.reset();
    } catch {
      setErrorMessage("Не вдалося надіслати заявку. Перевірте підключення до інтернету.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Заявку надіслано!</h3>
        <p className="text-gray-500 max-w-sm">
          Дякуємо! Ми отримали вашу заявку і зв&apos;яжемося з вами найближчим часом.
        </p>
        <button onClick={() => setState("idle")} className="btn-outline text-sm mt-2">
          Надіслати ще одну заявку
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Error banner */}
      {state === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-red-700">Помилка надсилання</p>
            <p className="text-sm text-red-600 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Ваше ім&apos;я <span className="text-red-500">*</span>
          </label>
          <input id="name" name="name" type="text" required
            placeholder="Іван Іванов"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Телефон <span className="text-red-500">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required
            placeholder="+38 (063) 000-00-00"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input id="email" name="email" type="email" required
          placeholder="ivan@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
          Послуга, що цікавить
        </label>
        <select id="service" name="service"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer"
        >
          <option value="">Оберіть послугу...</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Повідомлення
        </label>
        <textarea id="message" name="message" rows={4}
          placeholder="Опишіть ваш об'єкт або завдання..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
        />
      </div>

      <p className="text-xs text-gray-400">
        Натискаючи «Надіслати», ви погоджуєтесь з{" "}
        <a href="#" className="text-blue-600 underline-offset-2 hover:underline">
          політикою конфіденційності
        </a>.
      </p>

      <button type="submit" disabled={state === "loading"}
        className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
        {state === "loading" ? (
          <><Loader2 className="w-5 h-5 animate-spin" />Надсилаємо...</>
        ) : (
          <><Send className="w-5 h-5" />Надіслати заявку</>
        )}
      </button>
    </form>
  );
}
