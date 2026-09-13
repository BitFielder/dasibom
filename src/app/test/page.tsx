import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CardGrid from "@/components/CardGrid";

const ITEMS = [
  {
    title: "종합심리검사 (Full Battery)",
    desc: "성격, 정서, 지능 등을 종합적으로 살펴보는 심층 심리검사입니다.",
  },
  {
    title: "MMPI 다면적 인성검사",
    desc: "성격 특성과 정서 상태를 객관적으로 파악하는 표준화 검사입니다.",
  },
  {
    title: "문장완성검사 (SCT)",
    desc: "미완성 문장을 통해 내면의 생각과 감정을 탐색합니다.",
  },
  {
    title: "그림검사 (HTP, KFD)",
    desc: "그림을 매개로 무의식적인 심리 상태를 이해하는 검사입니다.",
  },
];

export default function TestPage() {
  return (
    <>
      <PageHero
        eyebrow="Psychological Test"
        title="심리검사"
        description="표준화된 검사로 지금의 나를 객관적으로 이해하는 시간입니다."
      />
      <Section>
        <CardGrid items={ITEMS} />
      </Section>
    </>
  );
}
