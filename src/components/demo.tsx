"use client";

import { PricingCard } from "@/components/21ui/dark-gradient-pricing";

function PricingDemo() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Pricing
          </h2>
          <p className="text-center text-base text-muted-foreground md:text-lg">
            Use it for free for yourself, upgrade when your team needs advanced
            control.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PricingCard
            tier="Home"
            price="₹799/yr*"
            bestFor="At most 5 automation devices"
            CTA="Get a Quote"
            benefits={[
              { text: "Real-time Monitoring", checked: true },
              { text: "Automated Controls", checked: true },
              { text: "7 days of data analytics", checked: true },
              { text: "2 free maintenances/year", checked: true },
              { text: "Priority support", checked: true },
              { text: "Kill Switch", checked: true },
              {
                text: "Centeralized Systems",
                checked: false,
              },
              {
                text: "Multiple Monitors",
                checked: false,
              },
            ]}
          />
          <PricingCard
            tier="Communities"
            price="₹4999/yr*"
            bestFor="For schools, hotels, societies, etc."
            CTA="Get a Quote/Demo"
            benefits={[
              { text: "Real-time Monitoring", checked: true },
              { text: "Automated Controls", checked: true },
              { text: "1 month of data analytics", checked: true },
              { text: "6 free maintenances/year", checked: true },
              { text: "Priority support", checked: true },
              { text: "Kill Switch", checked: true },
              {
                text: "Centeralized Systems",
                checked: true,
              },
            ]}
          />
          <PricingCard
            tier="Industrial"
            price="Contact us"
            bestFor="Best for 50+ users"
            CTA="Get a Quote/Demo"
            benefits={[
              { text: "Real-time Monitoring", checked: true },
              { text: "Automated Controls", checked: true },
              { text: "1 year of data analytics", checked: true },
              { text: "12 free maintenances/year", checked: true },
              { text: "Highest Priority support", checked: true },
              { text: "Daily data insights", checked: true },

              {
                text: "Centeralized Systems",
                checked: true,
              },
              {
                text: "Multiple Monitors",
                checked: true,
              },
            ]}
          />
        </div>
        <br></br>
        <div>
          ⓘ PS: there will be a seperate subscription based plans for additional
          analystics and data storage. <br></br>You can contact us, for any
          additional info{" "}
          <a href="mailto:helplanes@gmail.com">support@dravnik.site</a> !{" "}
        </div>
      </div>
    </section>
  );
}

export { PricingDemo };
