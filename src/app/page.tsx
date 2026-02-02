import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background transition-colors duration-300">
      <div className="flex flex-col items-center gap-8">
        <Image
          src="/logo.svg"
          alt="sobo Logo"
          width={96}
          height={96}
          priority
        />
      </div>

      <footer className="fixed bottom-8 text-xs text-muted-foreground">
        © 2026 sobo. All rights reserved.
      </footer>
    </main>
  );
}
