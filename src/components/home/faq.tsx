import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quels niveaux sont proposés par l'ISAJ ?",
    answer:
      "Les niveaux présentés sur le site donnent un aperçu du parcours scolaire. Les appellations, les classes ouvertes et les tranches d'âge doivent être confirmées directement avec l'établissement.",
  },
  {
    question: "Comment obtenir les informations d'admission ?",
    answer:
      "Utilisez le formulaire de contact ou d'inscription. Le site prépare un brouillon Gmail que vous devez vérifier et envoyer vous-même.",
  },
  {
    question: "Quelles activités sont disponibles ?",
    answer:
      "Les activités et projets actuellement proposés sont en cours de vérification. Contactez l'ISAJ pour obtenir la liste à jour.",
  },
  {
    question: "Comment demander des informations officielles sur l'école ?",
    answer:
      "L'histoire de l'école, la direction fondatrice, la reconnaissance du MENFP et les examens nationaux seront publiés après validation des informations et des références officielles.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="text-ink-mute mb-4 text-[0.72rem] tracking-[0.22em] uppercase">
              Centre d'aide
            </p>
            <h2 className="tracking-headline balance text-ink text-[1.75rem] leading-[1.05] font-semibold sm:text-4xl md:text-[3.25rem]">
              Vous avez des{" "}
              <span className="font-display text-brand-deep font-normal italic">
                questions ?
              </span>
            </h2>
            <p className="pretty text-ink-mute mt-6 max-w-md text-[0.95rem] leading-relaxed">
              Nous privilégions des réponses exactes. Pour toute information qui
              n'est pas encore publiée, notre équipe peut vous renseigner
              directement.
            </p>
            <div className="mt-10 rounded-[1.5rem] border border-black/[0.06] bg-white p-7">
              <p className="font-display text-ink text-[1.25rem] leading-snug italic">
                «&nbsp;Demandez les informations à jour à l'ISAJ.&nbsp;»
              </p>
              <a
                href="/contact"
                className="group text-ink decoration-ink/20 hover:decoration-ink mt-5 inline-flex items-center gap-2 text-[0.9rem] font-medium underline decoration-1 underline-offset-[6px] transition-colors"
              >
                Nous contacter
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              const panelId = `faq-panel-${index}`;
              return (
                <li key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="group hover:text-brand-deep flex w-full items-center justify-between gap-6 py-7 text-left transition-colors"
                  >
                    <span
                      className={`font-display text-[1.05rem] leading-tight tracking-[-0.015em] sm:text-[1.2rem] md:text-[1.55rem] ${open ? "text-brand-deep" : "text-ink"}`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${open ? "border-brand-deep bg-brand-deep text-white" : "text-ink-mute group-hover:border-ink border-black/10"}`}
                    >
                      {open ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>
                  <div id={panelId} hidden={!open} className="pb-7">
                    <p className="text-ink-mute max-w-2xl text-[0.95rem] leading-relaxed">
                      {faq.answer}
                    </p>
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
