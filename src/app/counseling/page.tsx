import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CardGrid from "@/components/CardGrid";

const ITEMS = [
  {
    title: "개인상담",
    desc: "불안, 우울, 자존감, 관계의 어려움 등 개인의 고민을 함께 다룹니다.",
  },
  {
    title: "청소년상담",
    desc: "학업, 진로, 또래 관계로 힘들어하는 청소년을 위한 맞춤 상담입니다.",
  },
  {
    title: "부부상담",
    desc: "소통의 어려움과 갈등을 넘어 서로를 이해하는 관계를 만들어갑니다.",
  },
  {
    title: "가족상담",
    desc: "가족 구성원 간의 관계와 역할을 함께 살펴보는 상담입니다.",
  },
];

export default function CounselingPage() {
  return (
    <>
      <PageHero
        eyebrow="Counseling"
        title="심리상담"
        description="마음의 결을 살피는 1:1 상담 프로그램을 소개합니다."
      />
      <Section>
        <CardGrid items={ITEMS} />
      </Section>
    </>
  );
}
