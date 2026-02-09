import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <header className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-display font-bold text-primary sm:text-5xl md:text-6xl mb-6">
              Herzlich Willkommen
              <span className="block text-gray-900 text-2xl sm:text-3xl mt-2 font-normal">
                in Ihrer Praxis für Ganzheitliche Körpertherapie
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Finden Sie Ihre innere Balance und Stärke. Wir begleiten Sie auf
              Ihrem Weg zu mehr Gesundheit und Wohlbefinden in Berlin
              Charlottenburg.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Termin vereinbaren
              </Link>
              <Link
                href="/preise"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-full text-primary hover:bg-surface-light transition-all"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-0 left-10 w-72 h-72 bg-accent opacity-20 rounded-full blur-3xl -z-10" />
            <Image
              src="/images/hero-buddha.webp"
              alt="Buddha Statue vor Yin-Yang Hintergrund"
              width={448}
              height={448}
              className="relative rounded-2xl w-full max-w-md object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
