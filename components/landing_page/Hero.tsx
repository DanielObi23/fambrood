import { Button } from "../ui/button";
import { BadgeCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-16 bg-linear-to-b from-olive-50 to-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 text-pretty lg:w-1/2">
          <div className="flex items-center gap-2 text-olive-700">
            <BadgeCheck className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
            <span className="text-base font-semibold sm:text-lg">
              Enhanced DBS checked professionals
            </span>
          </div>

          <h1 className="text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
            Spotless Spaces, Trusted Hands: Milton Keynes&rsquo; Premier
            Cleaning Professionals
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            Experience the joy of a pristine home or office. Enhanced
            DBS-checked, reliable, and tailored to your schedule.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a href="#quote" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
            </a>
            <a href="#quote" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Book your clean now
              </Button>
            </a>
          </div>
        </div>

        <div
          id="quote"
          className="scroll-mt-20 rounded-2xl border bg-white p-5 shadow-lg sm:p-6 lg:w-1/2"
        >
          <h2 className="text-xl font-bold sm:text-2xl">
            Get Your Free Quote
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us a little about your space and we&rsquo;ll get back to you
            within one working day.
          </p>
          <form className="mt-5 flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="07123 456789"
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="text-sm font-medium">
                Type of cleaning
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="residential">Residential & Domestic</option>
                <option value="commercial">Commercial & Office</option>
                <option value="deep-clean">Deep & End-of-Tenancy</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="details" className="text-sm font-medium">
                Tell us about your space
              </label>
              <textarea
                id="details"
                name="details"
                rows={3}
                placeholder="e.g. 3-bed house, weekly clean"
                className="resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Request Free Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
