import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import {
  contactDetails,
  schoolIdentity,
  schoolLevels,
  gmailRecipient,
} from "../data/site-content";

const gradeOptions = schoolLevels.map(
  (level) => `${level.title} — ${level.grades}`,
);

const purposeLabels: Record<string, string> = {
  general: "Information générale",
  partner: "Devenir partenaire",
  admission: "Admission et inscription",
  visit: "Visiter l'établissement",
};

type FormState = "idle" | "preparing" | "draft" | "blocked";

const ContactPageContent = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [purpose, setPurpose] = useState("general");
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    interestedGrade: gradeOptions[0],
    phone: "",
    message: "",
  });

  useEffect(() => {
    const requestedPurpose = new URLSearchParams(window.location.search).get(
      "purpose",
    );
    if (requestedPurpose === "partner") setPurpose("partner");
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (formState !== "idle") setFormState("idle");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormState("preparing");
    const emailBody = [
      "INSTITUTION LE SAINT JUSTIEN (ISAJ) — DEMANDE DE CONTACT",
      "",
      `- Nom : ${formData.parentName.trim()}`,
      `- Email : ${formData.email.trim()}`,
      `- Téléphone : ${formData.phone.trim() || "Non fourni"}`,
      `- Objet : ${purposeLabels[purpose] ?? purposeLabels.general}`,
      `- Niveau d'intérêt : ${formData.interestedGrade}`,
      "",
      "MESSAGE",
      formData.message.trim(),
      "",
      "Ce brouillon a été préparé par le site ISAJ. Aucun message n'est envoyé automatiquement.",
    ].join("\n");
    const subject = `${purposeLabels[purpose] ?? purposeLabels.general} — ${formData.parentName.trim()}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(gmailRecipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    const draftWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setFormState(draftWindow ? "draft" : "blocked");
  };

  const inputClass =
    "w-full rounded-2xl border border-black/[0.07] bg-white px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-mute/60 transition-all outline-none focus:border-brand focus:ring-2 focus:ring-brand/15";

  if (formState === "draft" || formState === "blocked") {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-black/[0.07] bg-[#fbfcfe]">
          <CheckCircle2 size={26} className="text-brand" strokeWidth={1.8} />
        </div>
        <p className="text-ink-mute text-[0.72rem] tracking-[0.22em] uppercase">
          {formState === "draft"
            ? "Brouillon Gmail préparé"
            : "Gmail n'a pas pu s'ouvrir"}
        </p>
        <h1 className="tracking-headline text-ink mt-4 text-4xl leading-[1.05] font-semibold md:text-[3.5rem]">
          Votre message est prêt à être vérifié.
        </h1>
        <p className="text-ink-mute mx-auto mt-6 max-w-xl text-[1rem] leading-relaxed">
          {formState === "draft"
            ? "Vérifiez le brouillon puis cliquez sur Envoyer dans Gmail. Le site ne transmet ni ne stocke votre message."
            : `Ouvrez Gmail manuellement et écrivez à ${gmailRecipient}.`}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setFormState("idle")}
            className="bg-ink hover:bg-ink-soft inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.9rem] font-medium text-white transition-all active:scale-[0.98]"
          >
            Modifier le message
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
    <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32">
      <div className="mb-20 max-w-3xl">
        <p className="text-ink-mute mb-4 text-[0.72rem] tracking-[0.22em] uppercase">
          Contact · Préscolaire, fondamentale et secondaire
        </p>
        <h1 className="tracking-headline balance text-ink text-[2rem] leading-[1.02] font-semibold sm:text-5xl md:text-[5rem]">
          Parlons de{" "}
          <span className="font-display text-brand-deep font-normal italic">
            l'ISAJ.
          </span>
        </h1>
        <p className="pretty text-ink-mute mt-7 max-w-xl text-[1.05rem] leading-relaxed">
          Pour les inscriptions, les programmes, les visites ou toute autre
          question, écrivez directement à l'établissement.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-5">
          <ul className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
            <li className="group grid grid-cols-12 items-start gap-4 py-7">
              <span className="text-ink-mute col-span-2 text-[0.72rem] tracking-[0.18em] uppercase">
                Adresse
              </span>
              <div className="col-span-10 flex items-start gap-4">
                <MapPin
                  size={18}
                  className="text-ink-mute mt-1"
                  strokeWidth={1.6}
                />
                <div>
                  <p className="font-display text-ink text-[1.25rem] leading-snug">
                    Campus principal
                  </p>
                  <p className="text-ink-mute mt-0.5 text-[0.9rem] leading-relaxed">
                    {schoolIdentity.address}
                  </p>
                </div>
              </div>
            </li>
            <li className="group grid grid-cols-12 items-start gap-4 py-7">
              <span className="text-ink-mute col-span-2 text-[0.72rem] tracking-[0.18em] uppercase">
                Téléphone
              </span>
              <div className="col-span-10 flex items-start gap-4">
                <Phone
                  size={18}
                  className="text-ink-mute mt-1"
                  strokeWidth={1.6}
                />
                <div>
                  <p className="font-display text-ink text-[1.25rem] leading-snug">
                    Par téléphone
                  </p>
                  {contactDetails.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="text-ink-mute hover:text-ink mt-0.5 block text-[0.9rem] leading-relaxed transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="group grid grid-cols-12 items-start gap-4 py-7">
              <span className="text-ink-mute col-span-2 text-[0.72rem] tracking-[0.18em] uppercase">
                Courriel
              </span>
              <div className="col-span-10 flex items-start gap-4">
                <Mail
                  size={18}
                  className="text-ink-mute mt-1"
                  strokeWidth={1.6}
                />
                <div>
                  <p className="font-display text-ink text-[1.25rem] leading-snug">
                    Écrire à l'ISAJ
                  </p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-ink-mute hover:text-ink mt-0.5 block text-[0.9rem] leading-relaxed break-all transition-colors"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="grain bg-ink relative mt-10 overflow-hidden rounded-[1.75rem] p-9 text-white">
            <p className="relative text-[0.72rem] tracking-[0.22em] text-white/45 uppercase">
              Information
            </p>
            <h3 className="font-display relative mt-3 text-[1.75rem] leading-tight font-medium text-white italic">
              Une question sur l'école ?
            </h3>
            <p className="relative mt-4 max-w-sm text-[0.9rem] leading-relaxed text-white/55">
              Demandez directement les informations officielles et à jour auprès
              de l'équipe de l'ISAJ.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-7">
          <div className="rounded-[2rem] border border-black/[0.06] bg-white p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="mb-2 flex items-baseline justify-between">
                <p className="font-display text-ink text-[1.5rem] leading-snug italic">
                  Écrivez-nous.
                </p>
                <span className="text-ink-mute text-[0.72rem] tracking-[0.18em] uppercase">
                  Formulaire de contact
                </span>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="purpose"
                  className="text-ink-mute text-[0.78rem] font-medium"
                >
                  Objet de votre demande
                </label>
                <select
                  id="purpose"
                  value={purpose}
                  onChange={(event) => setPurpose(event.target.value)}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="general">Information générale</option>
                  <option value="partner">Devenir partenaire</option>
                  <option value="admission">Admission et inscription</option>
                  <option value="visit">Visiter l'établissement</option>
                </select>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="parentName"
                    className="text-ink-mute text-[0.78rem] font-medium"
                  >
                    Nom
                  </label>
                  <input
                    id="parentName"
                    required
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    type="text"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-ink-mute text-[0.78rem] font-medium"
                  >
                    Adresse email
                  </label>
                  <input
                    id="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="interestedGrade"
                    className="text-ink-mute text-[0.78rem] font-medium"
                  >
                    Niveau d'intérêt
                  </label>
                  <select
                    id="interestedGrade"
                    name="interestedGrade"
                    value={formData.interestedGrade}
                    onChange={handleInputChange}
                    className={`${inputClass} appearance-none`}
                  >
                    {gradeOptions.map((grade) => (
                      <option key={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-ink-mute text-[0.78rem] font-medium"
                  >
                    Téléphone{" "}
                    <span className="text-ink-mute/60">(facultatif)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel"
                    pattern="[+]?[0-9 ()-]{8,}"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-ink-mute text-[0.78rem] font-medium"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                disabled={formState === "preparing"}
                className="group bg-ink hover:bg-ink-soft flex w-full items-center justify-center gap-2 rounded-full py-4 text-[0.95rem] font-medium text-white transition-all active:scale-[0.99] disabled:opacity-60"
              >
                {formState === "preparing"
                  ? "Préparation…"
                  : "Préparer le brouillon Gmail"}
                <ArrowUpRight size={16} />
              </button>
              <p className="text-ink-mute text-center text-[0.78rem] leading-relaxed">
                Aucun message n'est envoyé automatiquement par ce site.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContent;
