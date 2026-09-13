import Link from "next/link";
import Section from "@/components/Section";

const PROGRAMS = [
  {
    href: "/counseling",
    title: "심리상담",
    desc: "개인, 청소년, 부부·가족까지 마음의 결을 살피는 1:1 상담",
  },
  {
    href: "/test",
    title: "심리검사",
    desc: "표준화된 검사로 지금의 나를 객관적으로 이해하는 시간",
  },
  {
    href: "/corporate",
    title: "기업심리",
    desc: "조직과 구성원을 위한 진단, 상담, 워크숍 프로그램",
  },
  {
    href: "/reviews",
    title: "상담 후기",
    desc: "다시봄과 함께한 분들이 남긴 진솔한 이야기",
  },
];

const REVIEWS = [
  {
    name: "20대 · 내담자",
    quote: "제 이야기를 판단 없이 들어주셔서 처음으로 온전히 정리할 수 있었어요.",
  },
  {
    name: "30대 · 내담자",
    quote: "상담 후 제 감정에 이름을 붙이는 법을 배운 것 같아요.",
  },
  {
    name: "직장인 워크숍 참여자",
    quote: "회사 프로그램으로 알게 됐는데, 개인적으로도 다시 찾아뵙고 싶어요.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-end overflow-hidden bg-linear-to-br from-[#e9dcc2] via-[#f2e9d8] to-[#f8f4ec]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(169,137,91,0.18),transparent_55%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20">
          <p className="text-xs tracking-[0.35em] text-gold uppercase">
            Dasibom Counseling Center
          </p>
          <h1 className="mt-6 max-w-2xl text-4xl leading-tight md:text-6xl">
            다시봄,
            <br />
            나를 다시 보는 시간
          </h1>
          <p className="mt-6 max-w-md text-ink/70">
            멈춰 서서 나를 들여다보는 것부터, 마음의 회복은 시작됩니다.
            <br />
            다시봄 상담센터가 그 시간을 함께합니다.
          </p>
          <div className="mt-10 flex gap-3">
            <Link
              href="/inquiry#youth-package"
              className="rounded-full bg-ink px-6 py-3 text-sm text-white transition hover:bg-gold"
            >
              무료 청년 응원 패키지 신청
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-ink/30 px-6 py-3 text-sm transition hover:border-ink"
            >
              센터 소개 보기
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-gold uppercase">About</p>
            <h2 className="mt-4 text-2xl md:text-3xl">
              다시봄, 회복의 기반을 세우는 곳
            </h2>
          </div>
          <p className="text-ink/70">
            다시봄 상담센터는 내담자 한 사람의 속도를 존중합니다. 문제를 급하게
            해결하기보다, 스스로를 이해하고 다시 바라볼 수 있는 안전한 공간을
            만드는 것을 우선합니다.
          </p>
        </div>
      </Section>

      <Section tone="beige">
        <p className="text-xs tracking-[0.3em] text-gold uppercase">Programs</p>
        <h2 className="mt-4 text-2xl md:text-3xl">상담 프로그램</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col justify-between rounded-2xl border border-beige-dark/60 bg-cream p-6 transition hover:border-gold hover:shadow-sm"
            >
              <div>
                <h3 className="text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{p.desc}</p>
              </div>
              <span className="mt-6 text-sm text-gold opacity-0 transition group-hover:opacity-100">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-gold uppercase">
              For Youth
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl">
              무료 청년 응원 패키지
            </h2>
            <p className="mt-3 max-w-md text-white/70">
              경제적 부담 없이 마음을 돌볼 수 있도록, 청년을 위한 상담
              패키지를 무료로 지원합니다.
            </p>
          </div>
          <Link
            href="/inquiry#youth-package"
            className="shrink-0 rounded-full bg-white px-6 py-3 text-sm text-ink transition hover:bg-gold hover:text-white"
          >
            지금 신청하기
          </Link>
        </div>
      </Section>

      <Section>
        <p className="text-xs tracking-[0.3em] text-gold uppercase">Reviews</p>
        <h2 className="mt-4 text-2xl md:text-3xl">상담 후기</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-beige-dark/60 bg-beige/30 p-6"
            >
              <p className="text-ink/80">“{r.quote}”</p>
              <p className="mt-4 text-sm text-ink/50">{r.name}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
