# sobo Link Distributor

**sobo Link**는 사용자 기기 환경(iOS, Android, PC)을 자동으로 감지하여 적절한 앱 스토어 주소로 리다이렉트해주는 링크 서비스입니다.

Next.js Edge Middleware를 사용합니다.

## ✨ Features

### 🔗 스마트 리다이렉트
- **OS 감지**: iPhone/iPad → App Store, Android → Play Store로 자동 이동
- **UTM 파라미터 보존**: 광고 캠페인 등 Query Parameter를 목적지 URL까지 전달

### 🖥️ PC 앱 정보 페이지
- PC에서 접속 시 앱 정보 페이지 표시 (리다이렉트 대신)
- **QR 코드**: 모바일 기기로 스캔하여 앱 다운로드
- **링크 복사**: 클립보드에 링크 복사 기능

### 🌐 다국어 지원 (한국어/영어)
- 브라우저 언어 설정에 따라 자동 전환
- 앱 이름, 설명, UI 텍스트 모두 다국어 지원

### 🎨 Open Graph 메타데이터
- 링크 공유 시 앱 썸네일과 설명 미리보기 표시
- Twitter Card 지원
- 앱별 동적 favicon

### 📱 홈페이지 앱 리스트
- 메인 페이지에서 등록된 앱들을 리스트로 표시
- 클릭 시 해당 앱 페이지로 이동

---

## 🚀 How to Add a New App

새로운 앱을 추가하려면 `src/config/apps.ts` 파일만 수정하면 됩니다.

### 1. apps.ts 수정

```typescript
export const apps = {
  'new-app': {
    slug: 'new-app',  // URL 경로 (고유해야 함)
    name: {
      ko: '새 앱 이름',      // 한국어 이름
      en: 'New App Name',   // 영어 이름
    },
    description: {
      ko: '앱에 대한 한국어 설명',
      en: 'English description of the app',
    },
    icon: '/app-icon-new-app.png',  // public 폴더 내 아이콘 경로
    redirects: {
      ios: 'https://apps.apple.com/...',     // iOS App Store 링크
      android: 'https://play.google.com/...', // Google Play Store 링크
      default: 'https://apps.apple.com/...',  // Fallback (iOS와 동일 권장)
    },
  },
};
```

### 2. 앱 아이콘 추가
- 앱 아이콘 이미지를 `public/app-icon-new-app.png`에 추가
- 권장 크기: 512x512px

### 3. 배포
- 저장 후 Push하면 Vercel에서 자동 배포됩니다.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── [slug]/page.tsx    # 동적 앱 정보 페이지
│   ├── page.tsx           # 홈페이지 (앱 리스트)
│   └── layout.tsx         # 루트 레이아웃
├── components/
│   ├── qr-code-display.tsx  # QR 코드 컴포넌트
│   └── copy-link-button.tsx # 링크 복사 버튼
├── config/
│   └── apps.ts            # 앱 설정
├── lib/
│   ├── i18n.ts            # 언어 감지 유틸리티
│   └── ui-text.ts         # UI 텍스트 번역
└── middleware.ts          # Edge Middleware (OS 감지 & 리다이렉트)
```

---

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: shadcn/UI, Tailwind CSS
- **QR Code**: react-qr-code
- **Deployment**: Vercel (Edge Middleware)

## 📄 License
This project is licensed under the [MIT License](LICENSE).
