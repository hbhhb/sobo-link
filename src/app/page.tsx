import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-900">
      <Card className="w-full max-w-md shadow-lg border-0 bg-white/50 backdrop-blur-sm dark:bg-slate-800/50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sobo Link</CardTitle>
          <CardDescription className="text-center">
            Smart Link Distribution Service
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center text-sm text-muted-foreground leading-relaxed">
            모바일 환경에 최적화된 앱 다운로드 링크를 제공합니다.<br />
            접속하시는 기기 환경에 맞춰 자동으로 이동합니다.
          </div>
          <Separator />
          <div className="flex flex-col space-y-3">
            <Button className="w-full h-11" variant="default" asChild>
              <a href="https://sobo.house">공식 홈페이지 방문</a>
            </Button>
            <Button className="w-full h-11" variant="outline" asChild>
              <a href="mailto:contact@sobo.house">문의하기</a>
            </Button>
          </div>
        </CardContent>
      </Card>
      <footer className="mt-8 text-xs text-gray-400">
        © 2024 Sobo. All rights reserved.
      </footer>
    </main>
  );
}
