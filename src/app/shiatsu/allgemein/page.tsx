import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, WebPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Shiatsu Allgemein",
  description:
    "Shiatsu-Behandlung in Berlin Charlottenburg. Japanische Körpertherapie nach TCM-Meridiansystem bei Heilpraktikerin Birgit Mähner.",
  alternates: { canonical: "/shiatsu/allgemein/" },
};

export default function ShiatsuAllgemeinPage() {
  return (
    <>
      <WebPageJsonLd
        name="Shiatsu Allgemein"
        url="/shiatsu/allgemein/"
        description="Shiatsu-Behandlung in Berlin Charlottenburg. Japanische Körpertherapie nach TCM-Meridiansystem bei Heilpraktikerin Birgit Mähner."
        mainEntityId="https://www.birgit-maehner.de/shiatsu/allgemein/#service"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", href: "/" },
          { name: "Shiatsu Allgemein", href: "/shiatsu/allgemein/" },
        ]}
      />
      <ServiceJsonLd
        name="Shiatsu-Behandlung"
        description="Japanische Körpertherapie basierend auf Traditioneller Chinesischer Medizin und dem Meridiansystem. Behandlung mit Daumen, Handballen, Unterarmen und Ellbogen entlang der Energiebahnen. Aktivierung der Selbstheilungskräfte, ergänzt durch Bach-Blüten und individuelle Yogaübungen."
        url="/shiatsu/allgemein/"
        additionalType="https://de.wikipedia.org/wiki/Shiatsu"
        serviceType="Shiatsu"
      />
      <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-primary mb-10">
          Shiatsu Allgemein
        </h1>

        <div className="text-center mb-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-primary hover:bg-opacity-90 transition-all shadow-sm"
          >
            Termin vereinbaren
          </Link>
        </div>

        <div className="text-lg text-gray-700 leading-relaxed">
          <Image
            src="/images/shiatsu1.jpg"
            alt="Shiatsu-Behandlung"
            width={640}
            height={480}
            className="rounded-xl object-cover w-full sm:w-1/3 sm:float-left sm:mr-6 mb-4"
          />
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Was ist Shiatsu?
          </h2>
          <p className="mb-8">
            Shiatsu ist eine in Japan entwickelte Form der Körpertherapie, die
            aus der traditionellen chinesischen Massage hervorgegangen ist.
            Wörtlich übersetzt bedeutet Shiatsu &bdquo;Fingerdruck&ldquo;, die
            Behandlung umfasst jedoch weit mehr: nicht nur der Daumen kommt zum
            Einsatz, sondern auch Handballen, Unterarme, Füße und Ellbogen.
          </p>
          <p className="mb-8">
            Shiatsu fußt auf der Traditionellen Chinesischen Medizin mit seinen
            &bdquo;fünf Wandlungsphasen&ldquo; (Fünf-Elemente-Lehre) und dem
            Meridiansystem. Im Unterschied zur Akupunktur und Akupressur werden
            im Shiatsu nicht nur einzelne Punkte am Körper berührt, sondern man
            bewegt sich vorwiegend entlang der verbindenden Meridiane. Aber auch
            andere Elemente wie einfaches Halten, Dehnungen und Mobilisationen
            gehören dazu.
          </p>

          <Image
            src="/images/shiatsu2.jpg"
            alt="Shiatsu-Therapie"
            width={640}
            height={480}
            className="rounded-xl object-cover w-full sm:w-1/3 sm:float-right sm:ml-6 mb-4"
          />
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Wie wirkt Shiatsu?
          </h2>
          <p className="mb-8">
            Shiatsu ist nicht nur heilsam bei bestimmten Beschwerden, es hilft
            auch zu entspannen und ist damit ein ausgezeichneter Stresslöser.
            Abschalten, Runterkommen, den Augenblick genießen, loslassen, sich
            lebendig fühlen, innere Stauungen auflösen, sich erleichtert fühlen,
            Erkenntnisse haben, mit sich selbst in Verbindung treten, Kontakt
            zum eigenen Innenleben bekommen, Gefühle wieder spüren, das
            Leben &ndash; wie es ist &ndash; mit Gelassenheit annehmen
            können&nbsp;&hellip; dies alles und noch mehr kann Shiatsu bewirken.
          </p>

          <Image
            src="/images/shiatsu3.jpg"
            alt="Shiatsu-Meridianarbeit"
            width={640}
            height={480}
            className="rounded-xl object-cover w-full sm:w-1/3 sm:float-left sm:mr-6 mb-4"
          />
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Zur Behandlung
          </h2>
          <p className="mb-8">
            Welche Energiebahnen man für die Behandlung wählt, hängt vom
            &bdquo;Befund&ldquo;, von der Wahrnehmung des Shiatsutherapeuten ab.
            Auch hier spielen Diagnosemethoden nach der Traditionellen
            Chinesischen Medizin eine Rolle. Während der Behandlung wird eine
            &bdquo;energetische Beziehung&ldquo; zum Klienten aufgebaut. Durch
            Achtsamkeit und Offenheit lassen sich Dysbalancen im Meridiansystem
            erspüren und gezielt ausgleichen.
          </p>

          <Image
            src="/images/shiatsu4.jpg"
            alt="Shiatsu-Praxis"
            width={640}
            height={480}
            className="rounded-xl object-cover w-full sm:w-1/3 sm:float-right sm:ml-6 mb-4"
          />
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Besonderheiten in der Behandlungsweise
          </h2>
          <p>
            Verschiedene Therapieformen fließen in meiner Behandlungsweise
            zusammen und ergänzen sich. Mit Shiatsu wird der Energiefluss im
            Körper angeregt bzw. harmonisiert, so erfährt das Immunsystem eine
            Stärkung und man fühlt sich spürbar wohler. Diese Aktivierung der
            Selbstheilungskräfte ist eine wichtige Grundlage für eine Linderung
            und Heilung jeglicher körperlicher und seelischer Beschwerden. Die
            Therapie wird außerdem nach Bedarf durch Bach-Blüten, homöopathische
            Komplexmittel, anthroposophische Heilmittel und Schüssler-Salze
            unterstützt. Es besteht weiterhin die Möglichkeit, ein speziell auf
            die individuellen Beschwerden und Bedürfnisse abgestimmtes
            Yogaübungsprogramm zu erhalten.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
