import type { SupportedLanguage } from './i18n';

export const uiText = {
    copyLink: {
        ko: '다운로드 링크 복사',
        en: 'Copy Download Link',
    },
    copied: {
        ko: '복사 완료!',
        en: 'Copied!',
    },
    qrInstruction: {
        ko: '모바일 기기로 QR 코드를 스캔하거나\n링크를 복사하여 공유하세요.',
        en: 'Scan the QR code with your mobile device\nor copy the link to share.',
    },
    footer: {
        ko: '© 2026 sobo. All rights reserved.',
        en: '© 2026 sobo. All rights reserved.',
    },
} as const;

export type UITextKey = keyof typeof uiText;

/**
 * 특정 키에 대한 다국어 텍스트를 반환합니다.
 */
export function getText(key: UITextKey, lang: SupportedLanguage): string {
    return uiText[key][lang];
}
