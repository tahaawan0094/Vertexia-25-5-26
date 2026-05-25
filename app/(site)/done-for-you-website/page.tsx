import DoneForYouHeroSection from "@/components/sections/DoneForYouHeroSection";
import DoneForYouTable from "@/components/sections/DoneForYouTable";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export const metadata = {
  title: "Done For You Website - Vertexia",
  description:
    "Get a website built for you in 7 days. Domain, hosting, security and 0% transaction fees.",
};

export default function DoneForYouWebsitePage() {
  return (
    <main className="site bg-black">
      <DoneForYouHeroSection />

      <section className="bg-[#000] pt-10 pb-10 px-4 sm:px-6 lg:px-8">
        <DoneForYouTable />
      </section>

      {/* BUTTON INSIDE COMPONENT */}
      <HowItWorksSection showButton />

      {/* Comparison Table Section */}
      <section className="bg-black px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What makes UENI different?</h2>
            <p className="text-white/70 text-lg">Say goodbye to DIY builders and web agencies and get the best of both</p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="flex justify-center mb-2">
                      <span className="text-2xl">U E N I</span>
                    </div>
                    <div className="text-sm text-white/70">100% - 10-20%</div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="mb-2">DIY</div>
                    <div className="text-sm text-white/70">100%</div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="mb-2">Hire an Agency</div>
                    <div className="text-sm text-white/70">100%</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Chances of launching your website</td>
                  <td className="text-center py-4 px-6">100%</td>
                  <td className="text-center py-4 px-6">10-20%</td>
                  <td className="text-center py-4 px-6">100%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Done-for-you design & content</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Use any domain to get started fast</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Launch & training call</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Edit with easy-to-use website editor</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Custom one-on-one support</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Fast, secure hosting</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Launch in a week</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Unlimited edits for 30 days</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Biggest frustration</td>
                  <td className="text-center py-4 px-6 text-sm text-white/70">not finding, us sooner</td>
                  <td className="text-center py-4 px-6 text-sm text-white/70">hard to use and difficult to launch & site you're happy with</td>
                  <td className="text-center py-4 px-6 text-sm text-white/70">high cost & hard to maintain since you're dependent</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pricing Row */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-white/70 mb-2">Starting from</p>
              <p className="text-4xl font-bold text-green-500">$79 setup</p>
              <p className="text-white/70 mt-1">+ $24.99/mo</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 mb-2">DIY</p>
              <p className="text-4xl font-bold text-white">$500</p>
              <p className="text-white/70 mt-1">every year + endless time tinkering</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 mb-2">Agency</p>
              <p className="text-4xl font-bold text-white">$1500-$3000</p>
              <p className="text-white/70 mt-1">setup + maintenance costs</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}