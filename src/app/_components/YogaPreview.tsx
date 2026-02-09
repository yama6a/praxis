import Image from "next/image";
import { MdSelfImprovement, MdCheckCircle } from "react-icons/md";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureList } from "@/components/FeatureList";
import { ArrowLink } from "@/components/ArrowLink";

export function YogaPreview() {
  return (
    <section className="py-16 lg:py-24" id="yoga">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0 relative">
            <div className="absolute -inset-4 bg-primary rounded-xl opacity-5 blur-lg" />
            <Image
              src="/images/yoga-class.webp"
              alt="Yoga Klasse in Charlottenburg"
              width={640}
              height={384}
              className="relative rounded-xl shadow-xl w-full object-cover h-64 lg:h-96"
            />
          </div>

          <div>
            <SectionHeading icon={MdSelfImprovement} title="Yoga Kurse" />
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Entdecken Sie die heilsame Kraft des Yoga. Unsere Kurse sind für
              Anfänger und Fortgeschrittene gleichermaßen geeignet. Wir legen
              großen Wert auf eine achtsame Ausführung der Asanas und die
              Verbindung von Atem und Bewegung. In kleinen Gruppen schaffen wir
              eine persönliche Atmosphäre, in der Sie vom Alltag abschalten
              können.
            </p>
            <FeatureList
              icon={MdCheckCircle}
              items={[
                "Hatha Yoga & Vinyasa Flow",
                "Kleine Gruppen für individuelle Betreuung",
                "Kurse am Morgen und Abend",
              ]}
            />
            <ArrowLink href="/yoga/allgemein" label="Zum Kursplan" />
          </div>
        </div>
      </div>
    </section>
  );
}
