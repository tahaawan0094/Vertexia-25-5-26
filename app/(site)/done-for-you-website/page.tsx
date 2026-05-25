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
        <style>{`
          @keyframes movingLight {
            0% {
              conic-gradient-position: 0deg;
            }
            100% {
              conic-gradient-position: 360deg;
            }
          }
          
          .animated-table-border {
            position: relative;
            background: linear-gradient(black, black) padding-box,
              conic-gradient(from var(--rotation, 0deg), #FF5A4E, #00FF88, #FF5A4E) border-box;
            border: 2px solid transparent;
            animation: rotateBorder 4s linear infinite;
          }
          
          @keyframes rotateBorder {
            0% {
              --rotation: 0deg;
              filter: drop-shadow(0 0 10px rgba(255, 90, 78, 0.6));
            }
            50% {
              filter: drop-shadow(0 0 15px rgba(0, 255, 136, 0.6));
            }
            100% {
              --rotation: 360deg;
              filter: drop-shadow(0 0 10px rgba(255, 90, 78, 0.6));
            }
          }
          
          .table-glow-effect {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            background: black;
            border: 2px solid;
            border-image: linear-gradient(45deg, #FF5A4E, #00FF88, #FF5A4E, #FF5A4E) 1;
            animation: borderGlow 4s ease-in-out infinite;
          }
          
          @keyframes borderGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(255, 90, 78, 0.5), inset 0 0 20px rgba(255, 90, 78, 0.1);
            }
            50% {
              box-shadow: 0 0 30px rgba(0, 255, 136, 0.5), inset 0 0 30px rgba(0, 255, 136, 0.1);
            }
          }
          
          .table-glow-effect::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: conic-gradient(from 0deg, #FF5A4E, #00FF88, #FF5A4E);
            opacity: 0;
            animation: glowRotate 4s linear infinite;
            border-radius: 12px;
            z-index: -1;
            pointer-events: none;
          }
          
          @keyframes glowRotate {
            0% {
              opacity: 0.3;
              transform: rotate(0deg);
            }
            50% {
              opacity: 0.6;
            }
            100% {
              opacity: 0.3;
              transform: rotate(360deg);
            }
          }
          
          .animated-table-border table {
            background: black;
          }
        `}</style>
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What makes Vertexia different?</h2>
            <p className="text-white/70 text-lg">Say goodbye to DIY builders and web agencies and get the best of both</p>
          </div>

          {/* Table */}
          <div className="relative rounded-lg overflow-hidden table-glow-effect">
            <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="flex justify-center mb-2">
                      <span className="text-2xl whitespace-nowrap">VERTEXIA</span>
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
          </div>


        </div>
      </section>
    </main>
  );
}