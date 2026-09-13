# 다시봄 상담센터

Next.js(App Router) + Tailwind CSS로 만든 심리상담센터 홈페이지입니다.

## 개발

Node.js 24 LTS를 사용합니다. nvm을 사용한다면 먼저 `nvm install && nvm use`를 실행합니다.

```bash
npm ci
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

Vercel에서 Next.js 앱으로 배포합니다. `vercel.json`에 설치·빌드 명령을,
`package.json`과 `.nvmrc`에 Node.js 24 버전을 지정했습니다.
`/api/apply`는 서버에서 실행되므로 정적 HTML 내보내기(`output: "export"`)는 사용하지 않습니다.

### 로컬 변경사항을 바로 배포

프로젝트 루트(`package.json`이 있는 `dasibom` 폴더)에서 실행합니다.

```bash
npm ci
npm run lint
npm run build
npx vercel login
npx vercel
```

처음 실행할 때 본인의 Vercel 계정/팀을 선택하고 `dasibom` 프로젝트를 생성하거나
기존에 사용할 프로젝트를 선택합니다. `npx vercel`은 미리보기 배포를 만듭니다.
미리보기 확인 후 운영 배포는 `npx vercel --prod`로 진행합니다.

### GitHub 연결로 자동 배포

기존 운영 프로젝트는 `hyeonsu-sims-projects/dasibom`이고 사이트 주소는
[dasibom-navy.vercel.app](https://dasibom-navy.vercel.app)입니다.
이 프로젝트의 **Settings → Git**에서 `BitFielder/dasibom`을 연결하고,
**Production Branch**를 `master`로 설정합니다. 저장소 연결 전
저장소 소유자 계정에서 [Vercel GitHub 앱](https://github.com/apps/vercel)의
접근 대상에 `dasibom`을 포함해야 합니다.

연결을 마치면 `master`에 새 커밋이 푸시될 때 운영 배포가 시작됩니다.
`vercel.json`은 `master` 배포를 활성화하고, 변경 파일에 따른 빌드 생략과
연속 푸시의 대기 빌드 자동 취소를 사용하지 않도록 설정했습니다.
빌드 성공 후 운영 URL에 반영되며, 실패하면 기존 정상 배포가 유지됩니다.

새 Vercel 프로젝트를 만드는 경우에는 다음 절차를 따릅니다.

1. 이 폴더의 변경사항을 배포할 GitHub 저장소에 커밋하고 푸시합니다.
2. [Vercel 새 프로젝트](https://vercel.com/new)에서 해당 저장소를 Import합니다.
3. Framework Preset은 **Next.js**, Root Directory는 저장소 루트(`./`)를 사용합니다.
   상위 폴더 전체를 별도 저장소로 올렸다면 `package.json`이 있는 폴더를 지정합니다.
4. Install Command는 `npm ci`, Build Command는 `npm run build`, Node.js는 **24.x**입니다.
   Output Directory는 Next.js 기본 설정을 사용합니다.
5. Environment Variables에 `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`를 추가하고 Deploy합니다.

홈페이지는 텔레그램 환경변수 없이도 빌드·표시되지만, **신청 접수는 두 값이 모두 있어야 동작합니다.**
두 값은 서버 전용 비밀 값이므로 `NEXT_PUBLIC_` 접두사를 붙이거나 Git에 커밋하지 않습니다.
Vercel에서 **Preview**와 **Production** 중 사용할 환경마다 등록하세요.
환경변수를 추가하거나 변경했다면 새 배포 또는 Redeploy가 필요합니다.

배포 후 `/`, `/about`, `/counseling`, `/test`, `/corporate`, `/reviews`, `/inquiry`를 확인합니다.
신청을 제출하면 실제 텔레그램 메시지가 전송되므로, 본인의 테스트 정보로 수신 여부를 확인하세요.

현재 주소·전화번호는 예시 값이고 지도는 준비 중입니다. 실제 운영 정보로 교체할 위치는
`src/components/Footer.tsx`, `src/app/inquiry/page.tsx`, `src/app/about/page.tsx`입니다.

공식 문서: [Next.js 배포](https://vercel.com/docs/frameworks/full-stack/nextjs),
[Node.js 버전 설정](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).
