import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CardGrid from "@/components/CardGrid";

const ITEMS = [
  {
    title: "조직 심리 진단",
    desc: "조직 문화와 구성원의 심리적 안전감을 객관적으로 진단합니다.",
  },
  {
    title: "임직원 개인상담(EAP)",
    desc: "구성원 개개인의 스트레스와 고민을 전문적으로 지원합니다.",
  },
  {
    title: "예방 워크숍",
    desc: "번아웃 예방, 소통, 스트레스 관리 등 주제별 워크숍을 운영합니다.",
  },
  {
    title: "리더십 코칭",
    desc: "관리자급 구성원을 위한 1:1 심리 기반 코칭 프로그램입니다.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate"
        title="기업심리"
        description="조직과 구성원을 위한 진단, 상담, 워크숍 프로그램입니다."
      />
      <Section>
        <CardGrid items={ITEMS} />
      </Section>
    </>
  );
}
