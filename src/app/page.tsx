import type { Metadata } from "next";
import { Hero } from "./_components/Hero";
import { InfoBanner } from "./_components/InfoBanner";
import { YogaPreview } from "./_components/YogaPreview";
import { ShiatsuPreview } from "./_components/ShiatsuPreview";
import { LocalBusinessJsonLd, BreadcrumbJsonLd, WebPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  description:
    "Ihre Praxis für ganzheitliche Körpertherapie in Berlin Charlottenburg. Yoga, Shiatsu, Bach-Blütentherapie, Fußreflexzonenmassage und Schröpfen bei Heilpraktikerin Birgit Mähner.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <WebPageJsonLd
        name="Startseite"
        url="/"
        description="Ihre Praxis für ganzheitliche Körpertherapie in Berlin Charlottenburg. Yoga, Shiatsu, Bach-Blütentherapie, Fußreflexzonenmassage und Schröpfen bei Heilpraktikerin Birgit Mähner."
      />
      <BreadcrumbJsonLd items={[{ name: "Startseite", href: "/" }]} />
      <Hero />
      <InfoBanner />
      <YogaPreview />
      <ShiatsuPreview />
    </>
  );
}
