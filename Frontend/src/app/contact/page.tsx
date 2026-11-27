"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Contact from "@/components/Contact";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/content/site";

function ContactPageContent() {
  // Pre-select the service the visitor clicked on the home page (/contact?service=...).
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") ?? "";

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <header className="bg-canvas">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-6 sm:px-10">
          <Link href="/" aria-label={`${site.name} home`}>
            <Image src="/logo.png" alt={`${site.name} ${site.tagline}`} width={640} height={167} className="h-9 w-auto" />
          </Link>
          <Link href="/" className="text-[15px] font-medium text-ink/70 transition hover:text-accent">Back to home</Link>
        </div>
      </header>

      <main className="flex-1 bg-black">
        <Contact key={initialService} showService initialService={initialService} />
      </main>
      <RevealObserver />
    </div>
  );
}

export default function ContactPage() {
  // useSearchParams needs a Suspense boundary during static rendering.
  return (
    <Suspense fallback={null}>
      <ContactPageContent />
    </Suspense>
  );
}
