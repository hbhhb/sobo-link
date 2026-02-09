import { notFound } from 'next/navigation';
import { apps } from '@/config/apps';
import Image from 'next/image';
import { QRCodeDisplay } from '@/components/qr-code-display';
import { CopyLinkButton } from '@/components/copy-link-button';
import { detectLanguage } from '@/lib/i18n';
import { getText } from '@/lib/ui-text';
import type { Metadata } from 'next';

interface AppPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Open Graph 메타데이터 생성
export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
    const { slug } = await params;
    const appConfig = apps[slug];

    if (!appConfig) {
        return { title: 'App Not Found' };
    }

    // 기본값으로 영어 사용 (메타데이터는 서버에서 생성되므로)
    const name = appConfig.name.en;
    const description = appConfig.description.en;
    const imageUrl = `https://sobo-link.vercel.app${appConfig.icon || '/logo.svg'}`;
    const pageUrl = `https://sobo-link.vercel.app/${slug}`;
    const iconUrl = appConfig.icon || '/logo.svg';

    return {
        title: name,
        description: description,
        icons: {
            icon: iconUrl,
            apple: iconUrl,
        },
        openGraph: {
            title: name,
            description: description,
            url: pageUrl,
            siteName: 'sobo Link',
            images: [{ url: imageUrl, width: 512, height: 512 }],
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: name,
            description: description,
            images: [imageUrl],
        },
    };
}

export default async function AppPage({ params }: AppPageProps) {
    const { slug } = await params;
    const appConfig = apps[slug];

    // 등록되지 않은 앱이면 404
    if (!appConfig) {
        notFound();
    }

    // 사용자 언어 감지
    const lang = await detectLanguage();

    // 현재 페이지 URL (QR 코드 및 복사 버튼에 사용)
    const currentUrl = `https://sobo-link.vercel.app/${slug}`;

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background transition-colors duration-300">
            <div className="flex flex-col items-center gap-8 max-w-md w-full">
                {/* 앱 아이콘 */}
                {appConfig.icon && (
                    <Image
                        src={appConfig.icon}
                        alt={`${appConfig.name[lang]} Icon`}
                        width={96}
                        height={96}
                        priority
                        className="rounded-2xl"
                    />
                )}

                {/* 제목 + 설명 그룹 */}
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-3xl font-bold text-foreground text-center">
                        {appConfig.name[lang]}
                    </h1>
                    <p className="text-muted-foreground text-center">
                        {appConfig.description[lang]}
                    </p>
                </div>

                {/* QR 코드 */}
                <div className="mt-4">
                    <QRCodeDisplay url={currentUrl} />
                </div>

                {/* 링크 복사 버튼 (다국어) */}
                <CopyLinkButton url={currentUrl} lang={lang} />

                {/* 안내 메시지 (다국어) */}
                <p className="text-xs text-muted-foreground text-center mt-4 whitespace-pre-line">
                    {getText('qrInstruction', lang)}
                </p>
            </div>

            <footer className="fixed bottom-8 text-xs text-muted-foreground">
                {getText('footer', lang)}
            </footer>
        </main>
    );
}
