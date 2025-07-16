export default function ScheduleItem({ time, activity }) {
  return (
    <li className="flex flex-col md:flex-row md:justify-between items-center gap-2 border-b pb-4 border-secondary-200 last:border-0">
      <span className="text-primary-500 font-semibold text-lg md:text-xl w-40 text-center md:text-left">
        {time}
      </span>
      <span className="text-gray-800 text-base md:text-lg text-center md:text-left">
        {activity}
      </span>
    </li>
  );
}
