import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { apps } from './config/apps';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. 슬러그 추출 (예: /time-ledger -> time-ledger)
    const slug = pathname.slice(1);
    const appConfig = apps[slug];

    // 2. 등록된 앱이 아니면 통과 (-> src/app/page.tsx 등 일반 라우팅)
    if (!appConfig) {
        return NextResponse.next();
    }

    // 3. User-Agent 파싱
    const userAgent = request.headers.get('user-agent') || '';
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);

    // 4. 모바일 환경: 앱스토어로 리다이렉트
    if (isIOS || isAndroid) {
        const targetUrl = isIOS ? appConfig.redirects.ios : appConfig.redirects.android;

        // Query Parameter 보존 (UTM 등)
        try {
            const targetUrlObj = new URL(targetUrl);
            request.nextUrl.searchParams.forEach((value, key) => {
                targetUrlObj.searchParams.append(key, value);
            });

            // 307 Temporary Redirect
            return NextResponse.redirect(targetUrlObj, 307);
        } catch (error) {
            console.error('Invalid Target URL:', targetUrl);
            return NextResponse.next();
        }
    }

    // 5. PC 환경: 페이지 렌더링 (리다이렉트 없음)
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
