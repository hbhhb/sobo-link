import { headers } from 'next/headers';

export type SupportedLanguage = 'ko' | 'en';

/**
 * 사용자의 언어 설정을 감지합니다.
 * Accept-Language 헤더를 확인하여 한국어(ko)면 'ko', 그 외는 'en'을 반환합니다.
 */
export async function detectLanguage(): Promise<SupportedLanguage> {
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language') || '';

    // ko, ko-KR 등 한국어 감지
    if (acceptLanguage.toLowerCase().includes('ko')) {
        return 'ko';
    }

    // 기본값: 영어
    return 'en';
}
