import LodgingSection from "./LodgingSection";

export default function LodgingRecommendations({
  section,
  description,
  places,
}) {
  return (
    <section className="space-y-14">
      <LodgingSection
        section={section}
        description={description}
        places={places}
      />
    </section>
  );
}
