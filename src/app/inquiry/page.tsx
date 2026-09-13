import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ApplyForm from "@/components/ApplyForm";

export default function InquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Inquiry"
        title="상담 문의"
        description="상담이 처음이라 막막하시다면, 편하게 문의해주세요."
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-3">
          <ContactCard label="전화 문의" value="02-000-0000" />
          <ContactCard label="이메일 문의" value="hello@dasibom-counseling.com" />
          <ContactCard label="운영 시간" value="평일 10:00 – 19:00" />
        </div>
      </Section>

      <Section tone="beige" className="scroll-mt-20" id="youth-package">
        <p className="text-xs tracking-[0.3em] text-gold uppercase">
          For Youth
        </p>
        <h2 className="mt-4 text-2xl md:text-3xl">무료 청년 응원 패키지</h2>
        <p className="mt-3 max-w-xl text-ink/70">
          경제적 부담으로 상담을 망설이는 청년을 위해, 다시봄이 상담 3회
          패키지를 무료로 지원합니다. 아래 양식을 작성해 신청해주세요.
        </p>

        <div className="mt-10 max-w-2xl">
          <ApplyForm />
        </div>
      </Section>
    </>
  );
}

function ContactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-beige-dark/60 bg-beige/30 p-6 text-center">
      <p className="text-xs tracking-[0.2em] text-gold uppercase">{label}</p>
      <p className="mt-2">{value}</p>
    </div>
  );
}
