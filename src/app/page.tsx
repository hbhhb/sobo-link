import Image from "next/image";
import Link from "next/link";
import { apps } from "@/config/apps";
import { detectLanguage } from "@/lib/i18n";
import { getText } from "@/lib/ui-text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sobo Link",
  description: "앱 다운로드 링크 관리 서비스",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default async function Home() {
  const lang = await detectLanguage();
  const appList = Object.values(apps);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background transition-colors duration-300">
      <div className="flex flex-col items-center gap-8 w-full max-w-md">
        {/* 로고 */}
        <Image
          src="/logo.svg"
          alt="sobo Logo"
          width={96}
          height={96}
          priority
        />

        {/* 앱 리스트 */}
        <div className="flex flex-col gap-3 w-full">
          {appList.map((app) => (
            <Link href={`/${app.slug}`} key={app.slug}>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-muted transition-colors cursor-pointer">
                {/* 왼쪽: 아이콘 */}
                {app.icon && (
                  <Image
                    src={app.icon}
                    alt={`${app.name[lang]} Icon`}
                    width={56}
                    height={56}
                    className="rounded-xl"
                  />
                )}

                {/* 오른쪽: 이름 + 설명 */}
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-foreground">
                    {app.name[lang]}
                  </span>
                  <span className="text-sm text-muted-foreground line-clamp-2">
                    {app.description[lang]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="fixed bottom-8 text-xs text-muted-foreground">
        {getText('footer', lang)}
      </footer>
    </main>
  );
}
