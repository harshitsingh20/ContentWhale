export function FAQSection() {
  const faqs = [
    {
      question: "What Is Your Turn-Around-Time For Content Delivery?",
      answer: "Our typical turnaround time varies based on the content type and scope. Most standard articles are delivered within 2-3 business days."
    },
    {
      question: "How Much Does Content Cost At Content Whale?",
      answer: "Our pricing varies based on content type, complexity, and research requirements. We offer competitive rates with custom packages."
    },
    {
      question: "Agencies Have Problems Understanding Our Business, How Can We Trust Content Whale?",
      answer: "We begin every project with a thorough discovery phase to understand your business, industry, and specific needs."
    },
    {
      question: "Do You Provide Customized Or Personalized Content?",
      answer: "Yes, all our content is customized to match your brand voice, target audience, and specific requirements."
    },
    {
      question: "Does Content Whale Serve My Niche?",
      answer: "We serve a wide range of industries including technology, healthcare, finance, education, and more."
    },
    {
      question: "How Can We Trust The Quality Of Your Content?",
      answer: "Our content goes through multiple rounds of quality checks, editing, and plagiarism verification."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] text-gray-800 font-bold text-center mb-8 sm:mb-12 md:mb-16">
            Content Writing Agency FAQs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-4 sm:gap-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-[#42175B] pr-6 sm:pr-8">
                    {faq.question}
                  </h3>
                  <svg 
                    className="w-5 h-5 text-[#42175B] transition-transform group-hover:rotate-180"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
                <div className="h-px w-full bg-gray-200 mb-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
