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
    <section
      id="why-us"
      className="scroll-mt-16 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-2xl space-y-2 text-center">
        <p className="text-2xl font-bold sm:text-3xl">Why Choose Fambrood?</p>
        <p className="text-muted-foreground">
          We pride ourselves on delivering a professional, family-oriented
          service that treats your space with the respect it deserves.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="flex flex-col gap-3 rounded-xl bg-muted p-4 transition-shadow hover:shadow-md sm:p-5"
          >
            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-xs">
              <reason.icon className="h-5 w-5 shrink-0 text-olive-700" />
              <span className="font-semibold">{reason.title}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {reason.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
