import { useState } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: "What payment options do you accept?",
    answer:
      "We accept major credit cards, debit cards, and mobile payments. For business orders we also accept bank transfers and purchase orders.",
  },
  {
    id: 2,
    question: "Do you offer international delivery?",
    answer:
      "Yes, we provide delivery and installation services across Nigeria and internationally. Shipping times vary based on destination.",
  },
  {
    id: 3,
    question: "What is your product warranty policy?",
    answer:
      "Most products include a 12-month warranty. Extended warranties are available on selected products. Contact support for details.",
  },
  {
    id: 4,
    question: "How do I request maintenance or servicing?",
    answer:
      "Open a support ticket through your account dashboard or contact our support team by phone or email.",
  },
  {
    id: 5,
    question: "Do you provide performance monitoring?",
    answer:
      "Yes — optional monitoring packages are available to continuously track system performance and receive alerts.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center">

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
          Frequently Ask Questions
        </h2>

        <p className="mt-3 text-sm text-slate-600 max-w-xl">
       Find answers to the most common questions about  our products, services, and policies. Whether you’re 
       curious about payment options, delivery details, warranty coverage,
        or system maintenance, our FAQ section provides the information you  need to make informed decisions.
        </p>

        <div className="mt-6 space-y-4 w-full">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="w-full">

                {/* Question Button */}
                <button
                  onClick={() => toggle(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-t-lg transition-all
                    bg-[#5CA903] text-white font-medium`}
                >
                  {item.question}

                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>

                {/* Answer Box */}
                <div
                  className={`
                    bg-white border border-emerald-200 rounded-b-lg overflow-hidden 
                    transition-all duration-300 ease-in-out 
                    ${isOpen ? "max-h-40 py-4 px-4" : "max-h-0 py-0 px-4"}
                  `}
                >
                  <p className="text-sm text-gray-700">{item.answer}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
