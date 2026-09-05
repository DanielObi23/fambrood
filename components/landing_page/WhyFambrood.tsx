import {
  CalendarCog,
  StarCheck,
  MapPinHouse,
  UserRoundSearch,
} from "lucide-react";

export default function WhyFambrood() {
  const reasons = [
    {
      icon: UserRoundSearch,
      title: "Enhanced DBS Checked",
      description:
        "Every single cleaner on our team undergoes rigorous background checks. Safe for homes, schools, and offices.",
    },
    {
      icon: MapPinHouse,
      title: "Local & Reliable",
      description:
        "Proudly serving Bletchley, Milton Keynes, and surrounding Buckinghamshire areas. We're just around the corner.",
    },
    {
      icon: CalendarCog,
      title: "Tailored Cleaning Plans",
      description:
        "Whether it's a weekly domestic tidy-up or a deep commercial clean, we build a plan around you.",
    },
    {
      icon: StarCheck,
      title: "Satisfaction Guaranteed",
      description:
        "We do not leave until your space meets our premium standards. Your happiness is our top priority.",
    },
  ];
  return (
    <div className="space-y-2">
      <p className="text-2xl font-bold text-center">Why Choose Fambrood?</p>
      <p className="text-center">
        We pride ourselves on delivering a professional, family-oriented service
        that treats your space with the respect it deserves.
      </p>
      <div className="flex gap-4 py-2 px-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-gray-200 rounded-md p-2"
          >
            <div className="bg-white rounded-xl p-2 flex items-center gap-2">
              <reason.icon />
              <span className="font-semibold">{reason.title}</span>
            </div>
            <span className="text-sm">{reason.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
