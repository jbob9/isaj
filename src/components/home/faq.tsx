import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quels sont les horaires scolaires standard ?",
    answer:
      "Notre journée scolaire standard se déroule de 8h30 à 15h30. Nous proposons également des services de garde périscolaire : « Early Birds » (à partir de 7h30) et « After-School Discovery » (jusqu'à 18h00) afin de s'adapter aux familles qui travaillent.",
  },
  {
    question: "Quel est le ratio élèves/enseignant ?",
    answer:
      "Nous maintenons des effectifs réduits par classe afin de garantir un suivi personnalisé. En maternelle, le ratio est de 1 enseignant pour 8 élèves. En primaire et au collège, il est de 1 pour 15, et au lycée, en moyenne 1 pour 12 — selon la complexité des matières.",
  },
  {
    question: "Proposez-vous une aide financière ou des bourses d'études ?",
    answer:
      "Oui — ISAJ s'engage pour l'accessibilité. Nous offrons des bourses au mérite et une aide financière selon les besoins. Environ 20 % de nos élèves bénéficient d'une forme d'aide pour leurs frais de scolarité.",
  },
  {
    question: "Comment garantissez-vous la sécurité des élèves sur le campus ?",
    answer:
      "La sécurité est notre priorité absolue. Notre campus est équipé d'un service de sécurité 24h/24, d'un système de surveillance haute définition et d'un système sécurisé de gestion des visiteurs. Tous les membres du personnel font l'objet de vérifications rigoureuses et sont certifiés en secourisme.",
  },
  {
    question: "Les activités extrascolaires sont-elles incluses dans les frais ?",
    answer:
      "La plupart de nos activités parascolaires principales (sports de base, clubs habituels) sont incluses. Les académies spécialisées comme l'Académie de musique ou les sports de compétition peuvent exiger des frais supplémentaires pour le matériel ou l'entraînement.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[0.72rem] tracking-[0.22em] text-ink-mute uppercase">
              Centre d'aide
            </p>
            <h2 className="tracking-headline balance text-[1.75rem] leading-[1.05] font-semibold text-ink sm:text-4xl md:text-[3.25rem]">
              Vous avez des <span className="font-display text-brand-deep font-normal italic">questions ?</span>
            </h2>
            <p className="pretty mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink-mute">
              Choisir la bonne école pour son enfant est une décision importante. Voici les questions que les parents nous posent le plus.
            </p>

            <div className="mt-10 rounded-[1.5rem] border border-black/[0.06] bg-white p-7">
              <p className="font-display text-[1.25rem] leading-snug text-ink italic">
                «&nbsp;Toujours curieux ? Notre équipe d'admissions est là pour vous.&nbsp;»
              </p>
              <a
                href="/contact"
                className="group mt-5 inline-flex items-center gap-2 text-[0.9rem] font-medium text-ink underline decoration-ink/20 decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
              >
                Discutez avec nous
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <li key={index}>
                  <button
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-brand-deep"
                  >
                    <h3 className={`font-display text-[1.05rem] leading-tight tracking-[-0.015em] sm:text-[1.2rem] md:text-[1.55rem] ${open ? "text-brand-deep" : "text-ink"}`}>
                      {faq.question}
                    </h3>
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        open ? "border-brand-deep bg-brand-deep text-white" : "border-black/10 text-ink-mute group-hover:border-ink"
                      }`}
                    >
                      {open ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-out ${
                      open ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink-mute">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
