export default function Steps() {
  const steps = [
    {
      title: "Request a Quote",
      description:
        "Tell us about your space and specific cleaning needs via our quick online form.",
    },
    {
      title: "Get Matched",
      description:
        "We pair you with a professional, vetted local cleaner at a time that suits you.",
    },
    {
      title: "Enjoy Your Clean",
      description:
        "Sit back and relax while our team transforms your environment.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <p className="text-2xl font-bold text-center sm:text-3xl">
        How it Works
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-4 sm:flex-col sm:items-center sm:gap-3 sm:text-center"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
              {index + 1}
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold">{step.title}</span>
              <span className="text-sm text-muted-foreground">
                {step.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
