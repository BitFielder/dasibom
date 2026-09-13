import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

const REVIEWS = [
  {
    name: "20대 · 개인상담",
    quote:
      "제 이야기를 판단 없이 들어주셔서 처음으로 온전히 정리할 수 있었어요.",
  },
  {
    name: "30대 · 개인상담",
    quote: "상담 후 제 감정에 이름을 붙이는 법을 배운 것 같아요.",
  },
  {
    name: "직장인 · 기업 워크숍",
    quote: "회사 프로그램으로 알게 됐는데, 개인적으로도 다시 찾아뵙고 싶어요.",
  },
  {
    name: "부부 · 부부상담",
    quote: "서로를 탓하지 않고 대화하는 법을 함께 배웠습니다.",
  },
  {
    name: "청년 · 무료 청년 응원 패키지",
    quote: "부담 없이 상담을 시작할 수 있어서 큰 힘이 되었어요.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="상담 후기"
        description="다시봄과 함께한 분들이 남긴 진솔한 이야기입니다."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-beige-dark/60 bg-beige/30 p-6"
            >
              <p className="text-ink/80">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-4 text-sm text-ink/50">{r.name}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
