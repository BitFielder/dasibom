# 다시봄 상담센터

Next.js(App Router) + Tailwind CSS로 만든 심리상담센터 홈페이지입니다.

## 개발

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

## 텔레그램 알림 설정 (무료 청년 응원 패키지 신청)

`/inquiry` 페이지의 신청 폼은 `/api/apply`로 제출되고, 텔레그램 봇을 통해 지정한
채팅방으로 신청 내용이 전송됩니다.

1. 텔레그램에서 **@BotFather**에게 `/newbot`으로 봇을 만들고 **Bot Token**을 발급받습니다.
2. 알림을 받을 채팅방(개인 또는 그룹)에서 봇과 대화를 시작한 뒤, 아래 URL로 **Chat ID**를 확인합니다.
   ```
   https://api.telegram.org/bot<BOT_TOKEN>/getUpdates
   ```
3. 프로젝트 루트에 `.env.local` 파일을 만들고 다음을 채웁니다. (`.env.example` 참고)
   ```
   TELEGRAM_BOT_TOKEN=발급받은 토큰
   TELEGRAM_CHAT_ID=확인한 채팅 ID
   ```
4. 배포 시(Vercel 등) 동일한 값을 호스팅 환경변수로 등록합니다.

> 신청 데이터는 파일이나 DB에 저장되지 않고, 접수 즉시 텔레그램 메시지로만 전달됩니다.
> (서버리스 무료 호스팅에서는 로컬 파일 저장이 유지되지 않기 때문입니다.)

## 배포

Vercel 무료 티어에 그대로 배포 가능합니다. 저장소를 Vercel에 연결하고, 위 텔레그램
환경변수 2개만 등록하면 됩니다.
