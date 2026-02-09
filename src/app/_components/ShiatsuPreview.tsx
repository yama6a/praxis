import Image from "next/image";
import { MdSpa, MdLocalFlorist } from "react-icons/md";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureList } from "@/components/FeatureList";
import { ArrowLink } from "@/components/ArrowLink";

export function ShiatsuPreview() {
  return (
    <section className="py-16 lg:py-24 bg-surface-light" id="shiatsu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading icon={MdSpa} title="Shiatsu Therapie" />
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Shiatsu ist eine achtsame Körperarbeit aus Japan, die auf den
              Grundlagen der traditionellen chinesischen Medizin basiert. Durch
              sanften Druck entlang der Meridiane werden Blockaden gelöst und
              die Lebensenergie (Qi) wieder zum Fließen gebracht. Erfahren Sie
              tiefe Entspannung und Regeneration für Körper und Geist.
            </p>
            <FeatureList
              icon={MdLocalFlorist}
              items={[
                "Stressreduktion und Burnout-Prävention",
                "Linderung von Verspannungen",
                "Stärkung des Immunsystems",
              ]}
            />
            <ArrowLink
              href="/shiatsu/allgemein"
              label="Behandlung buchen"
            />
          </div>

          <div className="order-1 lg:order-2 mb-10 lg:mb-0 relative">
            <div className="absolute -inset-4 bg-accent rounded-xl opacity-10 blur-lg" />
            <Image
              src="/images/shiatsu-treatment.webp"
              alt="Shiatsu Behandlungsszene"
              width={640}
              height={384}
              className="relative rounded-xl shadow-xl w-full object-cover h-64 lg:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
