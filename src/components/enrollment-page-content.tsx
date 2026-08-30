import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Check,
  CheckCircle2,
  Mail,
  Phone,
  School,
  User,
} from "lucide-react";
import { useState } from "react";
import { gmailRecipient, schoolLevels } from "../data/site-content";

const gradeOptions = schoolLevels.map(
  (level) => `${level.title} — ${level.grades}`,
);

type FormState = "idle" | "preparing" | "draft" | "blocked";

const EnrollmentPageContent = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    childFirstName: "",
    childLastName: "",
    dob: "",
    grade: "",
    parentEmail: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (formState !== "idle") setFormState("idle");
  };

  const isValidBirthDate = () => {
    if (!formData.dob) return false;
    const date = new Date(`${formData.dob}T00:00:00`);
    return !Number.isNaN(date.valueOf()) && date <= new Date();
  };

  const handleContinue = () => {
    if (
      formData.childFirstName.trim() &&
      formData.childLastName.trim() &&
      formData.grade &&
      isValidBirthDate()
    ) {
      setStep(2);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormState("preparing");

    const emailBody = [
      "DEMANDE D'INFORMATIONS SUR L'INSCRIPTION — INSTITUTION LE SAINT JUSTIEN",
      "",
      "ENFANT",
      `- Nom complet : ${formData.childFirstName.trim()} ${formData.childLastName.trim()}`,
      `- Date de naissance : ${formData.dob}`,
      `- Niveau souhaité : ${formData.grade}`,
      "",
      "CONTACT PARENTAL",
      `- Email : ${formData.parentEmail.trim()}`,
      `- Téléphone : ${formData.phone.trim()}`,
      "",
      "MESSAGE",
      formData.message.trim() || "Aucun message complémentaire.",
      "",
      "Ce brouillon a été préparé par le site ISAJ. Aucun message n'est envoyé automatiquement.",
    ].join("\n");
    const subject = `Demande d'inscription — ${formData.childFirstName.trim()} ${formData.childLastName.trim()}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(gmailRecipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    const draftWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setFormState(draftWindow ? "draft" : "blocked");
  };

  const inputClass =
    "w-full rounded-2xl border border-black/[0.07] bg-white px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-mute/60 transition-all outline-none focus:border-brand focus:ring-2 focus:ring-brand/15";

  if (formState === "draft" || formState === "blocked") {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/[0.07] bg-[#fbfcfe]">
          <CheckCircle2 size={26} className="text-brand" strokeWidth={1.8} />
        </div>
        <p className="text-ink-mute text-[0.72rem] tracking-[0.22em] uppercase">
          {formState === "draft"
            ? "Brouillon Gmail préparé"
            : "Gmail n'a pas pu s'ouvrir"}
        </p>
        <h1 className="tracking-headline text-ink mt-4 text-4xl leading-[1.05] font-semibold md:text-[3.5rem]">
          Votre demande est prête à être vérifiée.
        </h1>
        <p className="text-ink-mute mx-auto mt-6 max-w-xl text-[1rem] leading-relaxed">
          {formState === "draft"
            ? "Un brouillon Gmail a été préparé. Vérifiez son contenu puis cliquez sur Envoyer dans Gmail. Le site ne transmet ni ne stocke votre demande."
            : `Ouvrez Gmail manuellement et écrivez à ${gmailRecipient}. Le site ne transmet ni ne stocke votre demande.`}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setFormState("idle")}
            className="bg-ink hover:bg-ink-soft inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-medium text-white transition-all active:scale-[0.98]"
          >
            Modifier la demande
          </button>
          <a
            href={`mailto:${gmailRecipient}`}
            className="text-ink inline-flex items-center gap-2 rounded-full border border-black/[0.08] px-6 py-3.5 text-[0.9rem] font-medium transition-colors hover:bg-black/[0.03]"
          >
            Écrire à l'ISAJ
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-16 lg:pb-32">
      <a
        href="/"
        className="group text-ink-mute hover:text-ink inline-flex items-center gap-2 text-[0.85rem] transition-colors"
      >
        <ArrowLeft
          size={15}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        Retour à l'accueil
      </a>
      <div className="mt-10 mb-16 max-w-3xl">
        <p className="text-ink-mute mb-4 text-[0.72rem] tracking-[0.22em] uppercase">
          Demande d'inscription
        </p>
        <h1 className="tracking-headline balance text-ink text-[2rem] leading-[1.02] font-semibold sm:text-5xl md:text-[5rem]">
          Parlons du{" "}
          <span className="font-display text-brand-deep font-normal italic">
            parcours
          </span>{" "}
          de votre enfant.
        </h1>
        <p className="pretty text-ink-mute mt-7 max-w-xl text-[1.05rem] leading-relaxed">
          Remplissez les informations ci-dessous. Le site préparera un brouillon
          Gmail à vérifier et à envoyer vous-même.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="space-y-8 lg:col-span-4">
          <div>
            <p className="text-ink-mute mb-5 text-[0.72rem] tracking-[0.22em] uppercase">
              Avant d'envoyer
            </p>
            <ul className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
              {[
                "Vérifiez les informations saisies",
                "Le brouillon s'ouvre dans Gmail",
                "Cliquez sur Envoyer pour transmettre la demande",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 py-4">
                  <span className="bg-brand/10 mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
                    <Check
                      size={10}
                      strokeWidth={2.4}
                      className="text-brand-deep"
                    />
                  </span>
                  <span className="text-ink text-[0.92rem] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grain bg-ink relative overflow-hidden rounded-[1.75rem] p-7 text-white">
            <Mail size={22} strokeWidth={1.6} className="text-white/85" />
            <p className="font-display mt-5 text-[1.25rem] leading-tight italic">
              Une question avant l'inscription ?
            </p>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-white/55">
              Écrivez directement à {gmailRecipient}.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white">
            <div className="border-b border-black/[0.06] px-8 py-7 md:px-12 md:py-9">
              <p className="text-ink-mute text-[0.72rem] tracking-[0.22em] uppercase">
                Étape {step} sur 2
              </p>
              <h2 className="font-display text-ink mt-2 text-[1.85rem] leading-tight font-medium md:text-[2.25rem]">
                {step === 1
                  ? "Informations de l'enfant"
                  : "Coordonnées du parent"}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              {step === 1 ? (
                <div className="space-y-7">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="childFirstName"
                        className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                      >
                        <User size={13} />
                        Prénom de l'enfant
                      </label>
                      <input
                        id="childFirstName"
                        required
                        type="text"
                        name="childFirstName"
                        value={formData.childFirstName}
                        onChange={handleInputChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="childLastName"
                        className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                      >
                        <User size={13} />
                        Nom de famille
                      </label>
                      <input
                        id="childLastName"
                        required
                        type="text"
                        name="childLastName"
                        value={formData.childLastName}
                        onChange={handleInputChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="dob"
                        className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                      >
                        <Calendar size={13} />
                        Date de naissance
                      </label>
                      <input
                        id="dob"
                        required
                        type="date"
                        name="dob"
                        max={new Date().toISOString().slice(0, 10)}
                        value={formData.dob}
                        onChange={handleInputChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="grade"
                        className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                      >
                        <School size={13} />
                        Niveau souhaité
                      </label>
                      <select
                        id="grade"
                        required
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="">Sélectionner le niveau</option>
                        {gradeOptions.map((grade) => (
                          <option key={grade}>{grade}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    type="button"
                    disabled={
                      !formData.childFirstName.trim() ||
                      !formData.childLastName.trim() ||
                      !formData.grade ||
                      !isValidBirthDate()
                    }
                    onClick={handleContinue}
                    className="group bg-ink hover:bg-ink-soft mt-4 flex w-full items-center justify-center gap-2 rounded-full py-4 text-[0.95rem] font-medium text-white transition-all active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continuer <ArrowUpRight size={16} />
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="parentEmail"
                        className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                      >
                        <Mail size={13} />
                        Email du parent
                      </label>
                      <input
                        id="parentEmail"
                        required
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                      >
                        <Phone size={13} />
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        name="phone"
                        pattern="[+]?[0-9 ()-]{8,}"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-ink-mute text-[0.78rem] font-medium"
                    >
                      Message complémentaire{" "}
                      <span className="text-ink-mute/60">(facultatif)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-ink inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.08] px-6 py-4 text-[0.9rem] font-medium transition-colors hover:bg-black/[0.03]"
                    >
                      <ArrowLeft size={15} />
                      Retour
                    </button>
                    <button
                      type="submit"
                      disabled={formState === "preparing"}
                      className="group bg-ink hover:bg-ink-soft flex flex-1 items-center justify-center gap-2 rounded-full py-4 text-[0.95rem] font-medium text-white transition-all active:scale-[0.99] disabled:opacity-60"
                    >
                      {formState === "preparing"
                        ? "Préparation…"
                        : "Préparer le brouillon Gmail"}
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
          <p className="text-ink-mute mt-6 text-center text-[0.78rem] leading-relaxed">
            Aucun message n'est envoyé automatiquement par ce site.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentPageContent;
