import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

const VALUES = [
  { title: "존중", desc: "내담자의 속도와 언어를 있는 그대로 존중합니다." },
  { title: "안전", desc: "무엇을 말해도 괜찮은 공간을 만듭니다." },
  { title: "회복", desc: "문제 해결이 아닌, 스스로 다시 서는 힘을 함께 찾습니다." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="다시봄, 회복의 기반을 세우는 곳"
        description="다시봄 상담센터는 한 사람을 다시 바라보는 시간을 만듭니다."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.3em] text-gold uppercase">
              Greeting
            </p>
            <h2 className="mt-4 text-2xl">원장 인사말</h2>
          </div>
          <div className="space-y-4 text-ink/70">
            <p>
              안녕하세요, 다시봄 상담센터입니다. 이곳을 찾아주신 여러분의
              용기에 먼저 감사드립니다.
            </p>
            <p>
              다시봄은 &ldquo;다시 보다&rdquo;라는 이름처럼, 지나온 시간과
              지금의 나를 새로운 시선으로 바라볼 수 있도록 돕는 공간입니다.
              혼자 견뎌온 마음의 무게를 함께 나누고, 자신만의 속도로 회복해
              나갈 수 있도록 곁에서 함께하겠습니다.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="beige">
        <p className="text-xs tracking-[0.3em] text-gold uppercase">Values</p>
        <h2 className="mt-4 text-2xl">다시봄이 지키는 것</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-beige-dark/60 bg-cream p-6"
            >
              <h3 className="text-lg text-gold">{v.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <p className="text-xs tracking-[0.3em] text-gold uppercase">
          Location
        </p>
        <h2 className="mt-4 text-2xl">오시는 길</h2>
        <div className="mt-6 flex h-64 items-center justify-center rounded-2xl border border-beige-dark/60 bg-beige/40 text-sm text-ink/50">
          지도 영역 (준비 중)
        </div>
        <p className="mt-4 text-sm text-ink/60">
          서울특별시 OO구 OO로 00, 0층 · 지하철 O호선 OO역 O번 출구 도보 5분
        </p>
      </Section>
    </>
  );
}
