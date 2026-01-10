import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What are the standard school hours?",
    answer:
      "Our standard academic day runs from 8:30 AM to 3:30 PM. We also offer extended care options: Early Birds (starts at 7:30 AM) and After-School Discovery (until 6:00 PM) to accommodate working families.",
  },
  {
    question: "What is the student-to-teacher ratio?",
    answer:
      "We maintain small class sizes to ensure personalized attention. For Early Childhood, the ratio is 1:8. For Elementary and Middle School, it's 1:15, and for High School, it averages 1:12 depending on the subject complexity.",
  },
  {
    question: "Do you offer financial aid or scholarships?",
    answer:
      "Yes, Edukids is committed to accessibility. We offer merit-based scholarships and need-based financial aid. Approximately 20% of our student body receives some form of tuition assistance.",
  },
  {
    question: "How do you ensure student safety on campus?",
    answer:
      "Safety is our top priority. Our campus features 24/7 security personnel, high-definition monitoring, and a secure visitor management system. All staff members undergo rigorous background checks and are certified in first aid and CPR.",
  },
  {
    question: "Are extracurricular activities included in the tuition?",
    answer:
      "Most of our core extracurricular activities, such as basic sports and standard clubs, are included in the tuition. Specialized academies (like the Music Academy or Elite Travel Sports) may require an additional materials or coaching fee.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        {/* Left Side: Text and CTA */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <span className="mb-4 block text-xs font-bold tracking-widest text-orange-500 uppercase">
              Help Center
            </span>
            <h2 className="mb-8 text-4xl leading-tight font-bold text-[#3D2C26] md:text-5xl">
              Got{" "}
              <span className="font-serif text-orange-500 italic">
                Questions?
              </span>{" "}
              We Have Answers.
            </h2>
            <p className="mb-10 text-lg text-gray-500">
              Choosing the right school for your child is a big decision. Here
              are the most common questions we receive from parents.
            </p>

            <div className="group relative flex items-start gap-6 overflow-hidden rounded-4xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-50 transition-colors hover:border-orange-200">
              <div className="rounded-2xl bg-orange-100 p-4 text-orange-600">
                {/* <MessageCircle size={32} /> */}
              </div>
              <div>
                <h4 className="mb-1 font-bold text-[#3D2C26]">
                  Still curious?
                </h4>
                <p className="mb-4 text-sm text-gray-500">
                  Our admissions team is ready to help you with anything else.
                </p>
                <button className="flex items-center text-sm font-bold text-orange-500 transition-all group-hover:gap-2">
                  Chat with us now
                </button>
              </div>
              {/* Decorative circle */}
              <div className="absolute -right-10 -bottom-10 -z-10 h-24 w-24 rounded-full bg-orange-50 transition-transform group-hover:scale-150"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:col-span-7">
          <div className="rounded-[3rem] border border-gray-50 bg-white p-8 shadow-2xl shadow-gray-100 md:p-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="group flex w-full items-center justify-between py-6 text-left focus:outline-none"
                >
                  <h3
                    className={`text-lg font-bold transition-colors ${openIndex === index ? "text-orange-500" : "text-[#3D2C26] group-hover:text-orange-400"}`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180 text-orange-500" : "text-gray-300"}`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 pb-6" : "max-h-0"}`}
                >
                  <p className="leading-relaxed text-gray-500">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-400 italic">
            <HelpCircle size={16} />
            <span>
              Updates for the 2025-2026 Academic Year are now available.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
