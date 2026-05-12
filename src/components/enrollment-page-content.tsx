import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Check,
  CheckCircle2,
  Mail,
  Phone,
  School,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState } from "react";

type PlanId = "monthly" | "annual";

const plans: {
  id: PlanId;
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  badge?: string;
  value: string;
}[] = [
  {
    id: "monthly",
    name: "Mensuel",
    price: "149",
    cadence: "/ mois",
    blurb: "Idéal pour découvrir nos programmes mois après mois.",
    value: "Mensuel ($149/mo)",
  },
  {
    id: "annual",
    name: "Annuel",
    price: "1 430",
    cadence: "/ année",
    blurb: "Le meilleur rapport qualité-prix pour un suivi sur le long terme.",
    badge: "Économisez 20 %",
    value: "Annuel ($1,430/yr)",
  },
];

const benefits = [
  "Accès illimité à tous les ateliers",
  "Rapports d'avancement personnalisés",
  "Inscription prioritaire aux excursions",
  "Événements familiaux réservés aux membres",
  "Réduction automatique de 10 % pour les frères et sœurs",
];

const gradeOptions = [
  "Préscolaire (2–5 ans)",
  "Élémentaire · 1ʳᵉ à 5ᵉ",
  "Collège · 6ᵉ à 8ᵉ",
  "Lycée · 9ᵉ à 12ᵉ",
];

const EnrollmentPageContent = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    childFirstName: "",
    childLastName: "",
    dob: "",
    grade: "",
    parentEmail: "",
    phone: "",
    plan: plans[0].value,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `
DEMANDE D'INSCRIPTION — INSTITUTION LE SAINT JUSTIEN
====================================================

ENFANT
- Nom complet : ${formData.childFirstName} ${formData.childLastName}
- Date de naissance : ${formData.dob}
- Entrée en classe : ${formData.grade}

CONTACT PARENTAL
- Email : ${formData.parentEmail}
- Téléphone : ${formData.phone}

ABONNEMENT
- Plan : ${formData.plan}

Envoyé via le portail d'inscription ISAJ.
    `.trim();
    const subject = `Nouvelle inscription : ${formData.childFirstName} ${formData.childLastName}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent("admissions@isaj.com")}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(gmailUrl, "_blank");
    setIsSubmitted(true);
  };

  const inputClass =
    "w-full rounded-2xl border border-black/[0.07] bg-white px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-mute/60 transition-all outline-none focus:border-brand focus:ring-2 focus:ring-brand/15";

  if (isSubmitted) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/[0.07] bg-[#fbfcfe]">
          <CheckCircle2 size={26} className="text-brand" strokeWidth={1.8} />
        </div>
        <p className="text-[0.72rem] uppercase tracking-[0.22em] text-ink-mute">
          Inscription initialisée
        </p>
        <h1 className="tracking-headline mt-4 text-4xl leading-[1.05] font-semibold text-ink md:text-[3.5rem]">
          Votre demande est <span className="font-display italic font-normal text-brand-deep">en route.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[1rem] leading-relaxed text-ink-mute">
          Nous avons ouvert un onglet Gmail avec votre dossier d'inscription pré-rempli. Envoyez le courriel pour finaliser la procédure — notre équipe vous répondra sous 24&nbsp;h.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[0.95rem] font-medium text-white transition-all hover:bg-ink-soft active:scale-[0.98]"
          >
            Retour à l'accueil
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] px-6 py-3.5 text-[0.9rem] font-medium text-ink transition-colors hover:bg-black/[0.03]"
          >
            Contacter l'assistance
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-16 lg:pb-32">
      {/* Breadcrumb */}
      <a
        href="/"
        className="group inline-flex items-center gap-2 text-[0.85rem] text-ink-mute transition-colors hover:text-ink"
      >
        <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
        Retour à l'accueil
      </a>

      {/* Header */}
      <div className="mt-10 mb-16 max-w-3xl">
        <p className="mb-4 text-[0.72rem] uppercase tracking-[0.22em] text-ink-mute">
          Inscription · Année scolaire 2026
        </p>
        <h1 className="tracking-headline balance text-5xl leading-[1.02] font-semibold text-ink md:text-[5rem]">
          Rejoignez la <span className="font-display italic font-normal text-brand-deep">famille</span> ISAJ.
        </h1>
        <p className="pretty mt-7 max-w-xl text-[1.05rem] leading-relaxed text-ink-mute">
          Deux minutes suffisent. Démarrez dès aujourd'hui le parcours d'apprentissage personnalisé de votre enfant — créativité, exigence, et accompagnement humain.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* ============ Left aside ============ */}
        <aside className="space-y-8 lg:col-span-4">
          {/* Member benefits */}
          <div>
            <p className="mb-5 text-[0.72rem] uppercase tracking-[0.22em] text-ink-mute">
              Inclus dans l'abonnement
            </p>
            <ul className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 py-4">
                  <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Check size={10} strokeWidth={2.4} className="text-brand-deep" />
                  </span>
                  <span className="text-[0.92rem] leading-relaxed text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security card */}
          <div className="grain relative overflow-hidden rounded-[1.75rem] bg-ink p-7 text-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(38,87,238,0.22) 0%, transparent 60%)" }}
            />
            <ShieldCheck size={22} strokeWidth={1.6} className="text-white/85" />
            <p className="font-display mt-5 text-[1.25rem] leading-tight italic">
              Vos données restent <span className="text-white/75">en sécurité.</span>
            </p>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-white/55">
              Toutes les informations transmises sont chiffrées. Nous ne partageons jamais vos données avec des tiers.
            </p>
          </div>

          {/* Quote */}
          <figure className="rounded-[1.5rem] border border-black/[0.06] bg-white p-7">
            <p className="font-display text-[1.15rem] leading-snug italic text-ink">
              «&nbsp;L'attention personnalisée dont bénéficie mon fils est remarquable.&nbsp;»
            </p>
            <figcaption className="mt-4 text-[0.78rem] text-ink-mute">
              Jessica Pierre · Parent, CE1
            </figcaption>
          </figure>
        </aside>

        {/* ============ Right form ============ */}
        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white">
            {/* Form Progress Header */}
            <div className="border-b border-black/[0.06] px-8 py-7 md:px-12 md:py-9">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-ink-mute">
                    Étape {step} sur 2
                  </p>
                  <h2 className="font-display mt-2 text-[1.85rem] leading-tight font-medium tracking-[-0.015em] text-ink md:text-[2.25rem]">
                    {step === 1 ? "Informations de l'enfant" : "Parent & abonnement"}
                  </h2>
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                  <span
                    className={`h-1 w-10 rounded-full transition-colors ${step >= 1 ? "bg-ink" : "bg-black/10"}`}
                  />
                  <span
                    className={`h-1 w-10 rounded-full transition-colors ${step === 2 ? "bg-ink" : "bg-black/10"}`}
                  />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              {step === 1 ? (
                <div className="space-y-7">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-[0.78rem] font-medium tracking-[0.04em] text-ink-mute">
                        <User size={13} strokeWidth={1.8} /> Prénom de l'enfant
                      </label>
                      <input
                        required
                        type="text"
                        name="childFirstName"
                        value={formData.childFirstName}
                        onChange={handleInputChange}
                        className={inputClass}
                        placeholder="ex. Léa"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-[0.78rem] font-medium tracking-[0.04em] text-ink-mute">
                        <User size={13} strokeWidth={1.8} /> Nom de famille
                      </label>
                      <input
                        required
                        type="text"
                        name="childLastName"
                        value={formData.childLastName}
                        onChange={handleInputChange}
                        className={inputClass}
                        placeholder="ex. Joseph"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-[0.78rem] font-medium tracking-[0.04em] text-ink-mute">
                        <Calendar size={13} strokeWidth={1.8} /> Date de naissance
                      </label>
                      <input
                        required
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-[0.78rem] font-medium tracking-[0.04em] text-ink-mute">
                        <School size={13} strokeWidth={1.8} /> Entrée en classe
                      </label>
                      <div className="relative">
                        <select
                          required
                          name="grade"
                          value={formData.grade}
                          onChange={handleInputChange}
                          className={`${inputClass} appearance-none pr-10`}
                        >
                          <option value="">Sélectionner le niveau</option>
                          {gradeOptions.map((g) => (
                            <option key={g}>{g}</option>
                          ))}
                        </select>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink-mute"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={
                      !formData.childFirstName ||
                      !formData.childLastName ||
                      !formData.dob ||
                      !formData.grade
                    }
                    onClick={() => setStep(2)}
                    className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-[0.95rem] font-medium text-white transition-all hover:bg-ink-soft active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continuer vers les détails parents
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-[0.78rem] font-medium tracking-[0.04em] text-ink-mute">
                        <Mail size={13} strokeWidth={1.8} /> Email du parent
                      </label>
                      <input
                        required
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        className={inputClass}
                        placeholder="parent@exemple.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-[0.78rem] font-medium tracking-[0.04em] text-ink-mute">
                        <Phone size={13} strokeWidth={1.8} /> Téléphone
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={inputClass}
                        placeholder="+509 00 00 0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[0.78rem] font-medium tracking-[0.04em] text-ink-mute">
                      Choisissez votre abonnement
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {plans.map((p) => {
                        const checked = formData.plan === p.value;
                        return (
                          <label
                            key={p.id}
                            className="group relative block cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="plan"
                              value={p.value}
                              checked={checked}
                              onChange={handleInputChange}
                              className="peer sr-only"
                            />
                            <div
                              className={`relative rounded-2xl border p-6 transition-all ${
                                checked
                                  ? "border-ink bg-[#fbfcfe] shadow-ink"
                                  : "border-black/[0.07] hover:border-black/15"
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <p className="font-display text-[1.1rem] font-medium text-ink">
                                  {p.name}
                                </p>
                                {p.badge && (
                                  <span className="rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[0.65rem] font-medium tracking-[0.08em] text-brand-deep uppercase">
                                    {p.badge}
                                  </span>
                                )}
                              </div>
                              <div className="mt-3 flex items-baseline gap-1">
                                <span className="tabular text-[1.85rem] font-semibold tracking-[-0.025em] text-ink">
                                  ${p.price}
                                </span>
                                <span className="text-[0.78rem] text-ink-mute">{p.cadence}</span>
                              </div>
                              <p className="mt-3 text-[0.78rem] leading-relaxed text-ink-mute">
                                {p.blurb}
                              </p>
                              <span
                                className={`absolute right-4 top-4 inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                                  checked ? "border-ink bg-ink text-white" : "border-black/15"
                                }`}
                              >
                                {checked && <Check size={11} strokeWidth={2.6} />}
                              </span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.08] px-6 py-4 text-[0.9rem] font-medium text-ink transition-colors hover:bg-black/[0.03]"
                    >
                      <ArrowLeft size={15} />
                      Retour
                    </button>
                    <button
                      type="submit"
                      className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-4 text-[0.95rem] font-medium text-white transition-all hover:bg-ink-soft active:scale-[0.99]"
                    >
                      Finaliser l'inscription
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <p className="mt-6 text-center text-[0.78rem] leading-relaxed text-ink-mute">
            Un onglet Gmail s'ouvrira avec votre dossier d'inscription pré-rempli, prêt à être envoyé à notre bureau des admissions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentPageContent;
