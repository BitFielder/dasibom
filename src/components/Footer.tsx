export default function Footer() {
  return (
    <footer className="border-t border-beige-dark/60 bg-beige/40">
      <div className="mx-auto max-w-6xl px-5 py-12 text-sm text-ink/70">
        <p className="font-display text-base text-ink">다시봄 상담센터</p>
        <div className="mt-4 grid gap-1">
          <p>서울특별시 OO구 OO로 00, 0층</p>
          <p>전화 02-000-0000 · 이메일 hello@dasibom-counseling.com</p>
          <p>평일 10:00 – 19:00 (예약제 운영)</p>
        </div>
        <p className="mt-8 text-xs text-ink/50">
          © {new Date().getFullYear()} Dasibom Counseling Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
