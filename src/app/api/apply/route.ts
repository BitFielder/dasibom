import { NextResponse } from "next/server";

type ApplyPayload = {
  name: string;
  phone: string;
  email: string;
  age: string;
  category: string;
  message: string;
  privacyAgreed: boolean;
};

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<ApplyPayload>;

  if (!body.name || !body.phone || !body.category || !body.privacyAgreed) {
    return NextResponse.json(
      { error: "필수 항목을 모두 입력해주세요." },
      { status: 400 }
    );
  }

  const submittedAt = new Date().toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
  });

  const record = {
    name: body.name,
    phone: body.phone,
    email: body.email || "-",
    age: body.age || "-",
    category: body.category,
    message: body.message || "-",
    submittedAt,
  };

  const text = [
    "🌱 무료 청년 응원 패키지 신청",
    "",
    `이름: ${record.name}`,
    `연락처: ${record.phone}`,
    `이메일: ${record.email}`,
    `나이: ${record.age}`,
    `희망 상담 분야: ${record.category}`,
    `신청 동기: ${record.message}`,
    "",
    `접수 시각: ${record.submittedAt}`,
  ].join("\n");

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID is not configured.");
    return NextResponse.json(
      { error: "서버 설정 오류로 신청을 처리할 수 없습니다." },
      { status: 500 }
    );
  }

  const telegramRes = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    }
  );

  if (!telegramRes.ok) {
    console.error("Telegram sendMessage failed", await telegramRes.text());
    return NextResponse.json(
      { error: "신청 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
