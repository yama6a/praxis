import { Hero } from "./_components/Hero";
import { InfoBanner } from "./_components/InfoBanner";
import { YogaPreview } from "./_components/YogaPreview";
import { ShiatsuPreview } from "./_components/ShiatsuPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBanner />
      <YogaPreview />
      <ShiatsuPreview />
    </>
  );
}
