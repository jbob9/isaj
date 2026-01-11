import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quels sont les horaires scolaires standard ?",
    answer:
      "Notre journée scolaire standard se déroule de 8h30 à 15h30. Nous proposons également des services de garde périscolaire : « Early Birds » (à partir de 7h30) et « After-School Discovery » (jusqu’à 18h00) afin de s’adapter aux familles qui travaillent.",
  },
  {
    question: "Quel est le ratio élèves/enseignant ?",
    answer:
      "Nous maintenons des effectifs réduits par classe afin de garantir un suivi personnalisé. En maternelle, le ratio est de 1 enseignant pour 8 élèves. En primaire et au collège, il est de 1 enseignant pour 15 élèves, et au lycée, il est en moyenne de 1 enseignant pour 12 élèves, selon la complexité des matières.",
  },
  {
    question: "Proposez-vous une aide financière ou des bourses d'études ?",
    answer:
      "Oui, Edukids s'engage pour l'accessibilité. Nous offrons des bourses au mérite et une aide financière selon les besoins. Environ 20 % de nos élèves bénéficient d'une forme d'aide financière pour leurs frais de scolarité.",
  },
  {
    question: "Comment garantir la sécurité des étudiants sur le campus?",
    answer:
      "La sécurité est notre priorité absolue. Notre campus est équipé d'un service de sécurité 24h/24 et 7j/7, d'un système de surveillance haute définition et d'un système sécurisé de gestion des visiteurs. Tous les membres du personnel font l'objet de vérifications rigoureuses de leurs antécédents et sont certifiés en secourisme et en réanimation cardio-respiratoire.",
  },
  {
    question:
      "Les activités extrascolaires sont-elles incluses dans les frais de scolarité ?",
    answer:
      "La plupart de nos activités parascolaires principales, comme les sports de base et les clubs habituels, sont incluses dans les frais de scolarité. Les académies spécialisées (comme l'Académie de musique ou les sports de compétition de haut niveau) peuvent exiger des frais supplémentaires pour le matériel ou l'entraînement.",
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
            <span className="mb-4 block text-xs font-bold tracking-widest text-blue-500 uppercase">
              Centre d'aide
            </span>
            <h2 className="mb-8 text-4xl leading-tight font-bold text-[#3D2C26] md:text-5xl">
              Vous avez des{" "}
              <span className="font-serif text-blue-500 italic">
                questions?
              </span>{" "}
              Nous avons les réponses.
            </h2>
            <p className="mb-10 text-lg text-gray-500">
              Choisir la bonne école pour son enfant est une décision
              importante. Voici les questions les plus fréquemment posées par
              les parents.
            </p>

            <div className="group relative flex items-start gap-6 overflow-hidden rounded-4xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-50 transition-colors hover:border-blue-200">
              <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                {/* <MessageCircle size={32} /> */}
              </div>
              <div>
                <h4 className="mb-1 font-bold text-[#3D2C26]">
                  Vous êtes toujours curieux ?
                </h4>
                <p className="mb-4 text-sm text-gray-500">
                  Our admissions team is ready to help you with anything else.
                </p>
                <a
                  href="/contact"
                  className="flex items-center text-sm font-bold text-blue-500 transition-all group-hover:gap-2"
                >
                  Discutez avec nous maintenant
                </a>
              </div>
              {/* Decorative circle */}
              <div className="absolute -right-10 -bottom-10 -z-10 h-24 w-24 rounded-full bg-blue-50 transition-transform group-hover:scale-150"></div>
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
                    className={`text-lg font-bold transition-colors ${openIndex === index ? "text-blue-500" : "text-[#3D2C26] group-hover:text-blue-400"}`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-500" : "text-gray-300"}`}
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
              Les mises à jour pour l'année universitaire 2025-2026 sont
              maintenant disponibles.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
