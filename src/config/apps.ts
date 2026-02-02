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
      ios: 'https://apps.apple.com/us/app/time-ledger-budget-your-time/id6757844735',
      android: 'https://play.google.com/store/apps/details?id=com.yours.app',
      default: 'https://apps.apple.com/us/app/time-ledger-budget-your-time/id6757844735',
    },
  },
};
