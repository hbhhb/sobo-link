export type AppConfig = {
  slug: string;
  redirects: {
    ios: string;
    android: string;
    default: string; // PC or Fallback
  };
};

export const apps: Record<string, AppConfig> = {
  // 예시: Time Ledger
  'time-ledger': {
    slug: 'time-ledger',
    redirects: {
      ios: 'https://apps.apple.com/kr/app/idYOUR_APP_ID', 
      android: 'https://play.google.com/store/apps/details?id=com.yours.app',
      default: 'https://sobo.house', // 소개 페이지
    },
  },
};
