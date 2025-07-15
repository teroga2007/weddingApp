import TimelineItem from "./TimelineItem";
import timelineData from "../data/timeline";

const Timeline = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <ul className="relative">
        {timelineData.map((event, index) => (
          <TimelineItem key={index} index={index} {...event} />
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
