export type LocalizedText = {
  ko: string; // 한국어
  en: string; // 영어
};

export type AppConfig = {
  slug: string;
  name: LocalizedText; // 다국어 앱 이름
  description: LocalizedText; // 다국어 앱 설명
  icon?: string; // 아이콘 경로 (선택, 예: "/icons/time-ledger.png")
  redirects: {
    ios: string;
    android: string;
    default: string; // Fallback
  };
};

export const apps: Record<string, AppConfig> = {
  // 예시: Time Ledger
  'time-ledger': {
    slug: 'time-ledger',
    name: {
      ko: '시간 가계부', // TODO: 한국어 앱 이름
      en: 'Time Ledger', // TODO: 영어 앱 이름
    },
    description: {
      ko: '내 시간의 방향을 찾는 삶의 나침반', // TODO: 한국어 설명
      en: 'Budget your time', // TODO: 영어 설명
    },
    icon: '/app-icon-time-ledger.png', // TODO: 앱 전용 아이콘으로 변경
    redirects: {
      ios: 'https://apps.apple.com/us/app/time-ledger-budget-your-time/id6757844735',
      android: 'https://play.google.com/store/apps/details?id=com.timeledger.time_ledger&pcampaignid=web_share',
      default: 'https://apps.apple.com/us/app/time-ledger-budget-your-time/id6757844735',
    },
  },
};
