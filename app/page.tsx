import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative isolate pt-14 lg:px-8 bg-zinc-50 border-b border-zinc-200 overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <Image
            src="/logo.png"
            alt="Dev Earth Movers"
            width={120}
            height={120}
            className="mx-auto mb-8 opacity-80"
          />
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            Moving Earth. Building Future.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Professional earthmoving, excavation, site development, land leveling, trenching, and construction equipment services for modern infrastructure projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-zinc-900 hover:text-orange-600 transition-colors">
              Explore Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
