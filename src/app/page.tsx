import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background transition-colors duration-300">
      <div className="flex flex-col items-center gap-8">
        <Image
          src="/logo.svg"
          alt="sobo Logo"
          width={120}
          height={120}
          priority
        />

        <Button className="w-40 h-11" variant="outline" asChild>
          <a href="mailto:madebysobo@gmail.com">문의하기</a>
        </Button>
      </div>

      <footer className="fixed bottom-8 text-xs text-muted-foreground">
        © 2026 sobo. All rights reserved.
      </footer>
    </main>
  );
}
