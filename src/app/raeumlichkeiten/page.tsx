import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Räumlichkeiten",
  description:
    "Die Räumlichkeiten der Praxis für ganzheitliche Körpertherapie in Berlin Charlottenburg. Knobelsdorffstr. 34.",
  alternates: { canonical: "/raeumlichkeiten/" },
};

export default function RaeumlichkeitenPage() {
  return (
    <>
      <WebPageJsonLd
        name="Räumlichkeiten"
        url="/raeumlichkeiten/"
        description="Die Räumlichkeiten der Praxis für ganzheitliche Körpertherapie in Berlin Charlottenburg. Knobelsdorffstr. 34."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", href: "/" },
          { name: "Räumlichkeiten", href: "/raeumlichkeiten/" },
        ]}
      />
      <StubPage title="Räumlichkeiten" />
    </>
  );
}
