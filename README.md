# sobo Link Distributor

**sobo Link**는 사용자 기기 환경(iOS, Android, PC)을 자동으로 감지하여 적절한 앱 스토어 주소로 리다이렉트해주는 스마트 링크 서비스입니다.

Next.js Edge Middleware를 사용하여 빠르고 효율적인 리다이렉트를 제공합니다.

## ✨ Features
- **OS 감지**: 접속한 기기가 iPhone/iPad라면 App Store로, Android라면 Play Store로 이동합니다.
- **Fallback**: PC나 기타 환경에서 접속 시 깔끔한 랜딩 페이지를 보여줍니다.
- **UTM 파라미터 보존**: 광고 캠페인 등에서 사용하는 Query Parameter를 목적지 URL까지 그대로 전달합니다.

## 🚀 How to Add a New Link (새 링크 추가 방법)

새로운 앱이나 캠페인 링크를 추가하려면 `src/config/apps.ts` 파일만 수정하면 됩니다.

1. `src/config/apps.ts` 파일을 엽니다.
2. `apps` 객체에 새로운 **slug(경로)**와 **redirects(목적지)** 정보를 추가합니다.

```typescript
export const apps = {
  // 예시: https://link.sobo.house/new-app 으로 접속 시 동작
  'new-app': {
    slug: 'new-app',         // URL 경로 (고유해야 함)
    redirects: {
      ios: 'https://apps.apple.com/...',    // iOS App Store 링크
      android: 'https://play.google.com/...', // Google Play Store 링크
      default: 'https://sobo.house',          // PC/기타 접속 시 이동할 링크
    },
  },
  // ...
};
```
3. 저장 후 배포(Push)하면 즉시 반영됩니다.

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Edge Middleware)

## 📄 License
This project is licensed under the [MIT License](LICENSE).
