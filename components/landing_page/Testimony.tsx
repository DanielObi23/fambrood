import { Quote } from "lucide-react";

export default function Testimony() {
  const trust = [
    { title: "Companies House", description: "Registered No. 15719439" },
    { title: "Enhanced DBS", description: "Certified Professionals" },
    { title: "Fully Insured", description: "Comprehensive Public Liability" },
    { title: "5-Star Rated", description: "Milton Keynes Locals" },
  ];

  return (
    <section className="bg-muted/50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:gap-8 lg:px-8">
        <div className="flex flex-1 flex-col justify-between gap-4 rounded-2xl bg-white p-5 shadow-xs sm:p-6">
          <Quote className="h-8 w-8 shrink-0 text-olive-300" />
          <p className="text-lg text-pretty">
            &ldquo;Fambrood completely transformed our office layout.
            Reliable, professional, and excellent attention to detail!
            I&rsquo;ve already recommended them to three other businesses in
            the park.&rdquo;
          </p>
          <div>
            <p className="font-semibold">Local Business Owner</p>
            <p className="text-sm text-muted-foreground">
              Bletchley Enterprise Centre
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <p className="text-xl font-semibold sm:text-2xl">
            Trusted by the Community
          </p>
          <ul className="grid grid-cols-2 gap-3">
            {trust.map((item) => (
              <li
                key={item.title}
                className="rounded-lg bg-white p-3 shadow-xs sm:p-4"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
