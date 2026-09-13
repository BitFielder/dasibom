"use client";

import { useState, type FormEvent } from "react";

const CATEGORIES = [
  "진로 · 취업 스트레스",
  "대인관계",
  "우울 · 불안",
  "자존감",
  "기타",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      age: String(data.get("age") ?? "").trim(),
      category: String(data.get("category") ?? ""),
      message: String(data.get("message") ?? "").trim(),
      privacyAgreed: data.get("privacyAgreed") === "on",
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error ?? "신청 접수 중 오류가 발생했습니다.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "신청 접수 중 오류가 발생했습니다."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/40 bg-beige/30 p-8 text-center">
        <p className="text-lg">신청이 접수되었습니다.</p>
        <p className="mt-2 text-sm text-ink/60">
          담당자가 확인 후 안내드린 연락처로 연락드리겠습니다.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-ink/30 px-5 py-2 text-sm transition hover:border-ink"
        >
          다시 작성하기
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-beige-dark/60 bg-cream p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="이름" required>
          <input
            name="name"
            required
            className="input"
            placeholder="홍길동"
          />
        </Field>
        <Field label="연락처" required>
          <input
            name="phone"
            required
            type="tel"
            className="input"
            placeholder="010-0000-0000"
          />
        </Field>
        <Field label="이메일">
          <input
            name="email"
            type="email"
            className="input"
            placeholder="example@email.com"
          />
        </Field>
        <Field label="나이">
          <input name="age" className="input" placeholder="예: 24" />
        </Field>
      </div>

      <Field label="희망 상담 분야" required>
        <select name="category" required className="input" defaultValue="">
          <option value="" disabled>
            선택해주세요
          </option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="신청 동기 · 하고 싶은 말">
        <textarea
          name="message"
          rows={4}
          className="input resize-none"
          placeholder="편하게 남겨주세요."
        />
      </Field>

      <label className="flex items-start gap-2 text-sm text-ink/70">
        <input
          type="checkbox"
          name="privacyAgreed"
          required
          className="mt-1"
        />
        <span>
          개인정보 수집 및 이용에 동의합니다. (신청 접수 및 연락 목적으로만
          사용되며, 상담 안내 후 파기됩니다.) <span className="text-gold">*</span>
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-full bg-ink px-6 py-3 text-sm text-white transition hover:bg-gold disabled:opacity-50"
      >
        {status === "loading" ? "접수 중..." : "무료 청년 응원 패키지 신청하기"}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="text-ink/70">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
