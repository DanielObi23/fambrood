import { Building, Check, DoorOpen, House } from "lucide-react";

export default function CoreServices() {
  const services = [
    {
      title: "Residential & Domestic Cleaning",
      description:
        "Kitchens, bathrooms, bedrooms, and living spaces kept pristine. We handle the chores so you can focus on family time.",
      icon: House,
      list: ["Dusting & Polishing", "Floor Sanitisation", "Bathroom Scrubbing"],
    },
    {
      title: "Commercial & Office Cleaning",
      description:
        "Professional workspace cleaning to keep your team healthy and productive. Customisable for out-of-hours service.",
      icon: Building,
      list: ["Desk & Tech Cleaning", "Communal Kitchens", "Window Cleaning"],
    },
    {
      title: "Deep & End-of-Tenancy Cleans",
      description:
        "Thorough, top-to-bottom sanitisation designed to secure your rental deposit or refresh your property.",
      icon: DoorOpen,
      list: [
        "Oven & Appliance Deep Clean",
        "Carpets & Upholstery",
        "Skirting Board Detail",
      ],
    },
  ];
  return (
    <section
      id="services"
      className="scroll-mt-16 bg-muted/50 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-2xl font-bold text-center sm:text-3xl">
          Core Services
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-xs transition-shadow hover:shadow-md sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-olive-100">
                <service.icon className="h-6 w-6 text-olive-700" />
              </div>
              <p className="font-bold">{service.title}</p>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-1 flex flex-col gap-1.5">
                {service.list.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-olive-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
