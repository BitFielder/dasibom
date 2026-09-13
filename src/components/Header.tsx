"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/about", label: "센터 소개" },
  { href: "/counseling", label: "심리상담" },
  { href: "/test", label: "심리검사" },
  { href: "/corporate", label: "기업심리" },
  { href: "/reviews", label: "상담 후기" },
  { href: "/inquiry", label: "상담 문의" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-beige-dark/60 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-lg tracking-wide">
          다시봄 상담센터
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink/80 transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/inquiry#youth-package"
            className="rounded-full bg-ink px-5 py-2 text-sm text-white transition hover:bg-gold"
          >
            상담 신청
          </Link>
        </div>

        <button
          type="button"
          aria-label="메뉴 열기"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-beige-dark/60 bg-cream px-5 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm text-ink/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/inquiry#youth-package"
            className="mt-2 rounded-full bg-ink px-5 py-2 text-center text-sm text-white"
            onClick={() => setOpen(false)}
          >
            상담 신청
          </Link>
        </nav>
      )}
    </header>
  );
}
