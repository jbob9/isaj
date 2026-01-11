import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  CreditCard,
  Heart,
  Mail,
  Phone,
  School,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState } from "react";

const EnrollmentPageContent = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    childFirstName: "",
    childLastName: "",
    dob: "",
    grade: "",
    parentEmail: "",
    phone: "",
    plan: "Monthly ($149/mo)",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the information for the email body
    const emailBody = `
DEMANDE D'ABONNEMENT POUR UNE NOUVELLE INSCRIPTION
------------------------------------

INFORMATIONS CONCERNANT L'ENFANT :
- Nom et prénom: ${formData.childFirstName} ${formData.childLastName}
- Date de naissance: ${formData.dob}
- Entrée en classe: ${formData.grade}

CONTACT PARENTAL :
- E-mail: ${formData.parentEmail}
- Téléphone: ${formData.phone}

DÉTAILS DE L'ABONNEMENT :
- Plan sélectionné: ${formData.plan}

------------------------------------
Envoyé via le portail d'inscription de l'Institution le Saint Justien (ISAJ)
    `.trim();

    const subject = `Nouvelles inscriptions: ${formData.childFirstName} ${formData.childLastName}`;
    const recipient = "admissions@isaj.com";

    // Construct Gmail URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail in new tab
    window.open(gmailUrl, "_blank");

    // Show success state
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="animate-in fade-in zoom-in mx-auto max-w-3xl px-4 py-20 text-center duration-700">
        <div className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 shadow-lg shadow-green-100/50">
          <CheckCircle2 size={48} className="text-green-600" />
        </div>
        <h2 className="mb-6 text-4xl font-bold text-slate-900">
          Inscription initialisée!
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-xl leading-relaxed text-slate-500">
         Nous avons ouvert une fenêtre Gmail contenant vos informations d'inscription correctement formatées. Veuillez envoyer l'e-mail pour finaliser la procédure de notification !
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="rounded-2xl bg-blue-600 px-10 py-4 font-bold text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700"
          >
            Retour à la page d'accueil
          </a>
          <a
            href="/contact"
            className="rounded-2xl border-2 border-slate-100 bg-white px-10 py-4 font-bold text-slate-600 transition-all hover:bg-slate-50"
          >
            Contacter l'assistance
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="animate-in fade-in slide-in-from-bottom-6 mx-auto max-w-7xl px-4 py-12 duration-700 sm:px-6 lg:px-8">
      <a
        href="/"
        className="group mb-12 flex items-center text-slate-500 transition-colors hover:text-blue-600"
      >
        <ArrowLeft
          size={20}
          className="mr-2 transform transition-transform group-hover:-translate-x-1"
        />
        Retour à l'accueil
      </a>

      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
        {/* Left Side: Summary & Benefits */}
        <div className="space-y-8 lg:col-span-4">
          <div>
            <h1 className="mb-6 text-4xl font-bold text-slate-900">
              Abonnez-vous à <span className="text-blue-600" >Institution le Saint Justien (ISAJ)</span>
            </h1>
            <p className="leading-relaxed text-slate-500">
              Démarrez dès aujourd'hui le parcours d'apprentissage personnalisé de votre enfant. Nos abonnements lui ouvrent un monde de créativité et d'épanouissement.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-blue-50 bg-white p-8 shadow-xl shadow-blue-900/5">
            <h3 className="mb-6 flex items-center gap-2 font-bold text-slate-900">
              <Heart className="text-blue-500" size={20} />
              Avantages réservés aux membres
            </h3>
            <ul className="space-y-4">
              {[
                "Accès illimité à tous les ateliers",
                "Rapports d'avancement personnalisés",
                "Inscription prioritaire aux excursions",
                "événements familiaux réservés aux membres",
                "Une réduction de 10 % pour les frères et sœurs est automatiquement appliquée.",
              ].map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-tight text-slate-600"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                    <CheckCircle2 size={12} className="text-blue-600" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white">
            <ShieldCheck className="mb-4 text-blue-400" size={32} />
            <h4 className="mb-2 font-bold">Inscription sécurisée</h4>
            <p className="text-xs text-slate-400">
              Vos données sont cryptées et sécurisées. Nous ne partageons jamais vos informations personnelles avec des tiers.
            </p>
            {/* Decoration */}
            <div className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-blue-600/10 blur-2xl transition-transform group-hover:scale-150"></div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-[3rem] border border-blue-50 bg-white shadow-2xl shadow-blue-900/10">
            {/* Form Progress Header */}
            <div className="relative flex items-center justify-between bg-blue-600 p-8 text-white md:p-12">
              <div>
                <span className="mb-2 block text-xs font-bold tracking-widest text-blue-200 uppercase opacity-80">
                  Étape {step} sur 2
                </span>
                <h2 className="text-2xl font-bold md:text-3xl">
                  {step === 1 ? "Child Information" : "Parent & Subscription"}
                </h2>
              </div>
              <div className="hidden gap-2 sm:flex">
                <div
                  className={`h-2 w-12 rounded-full transition-all ${step >= 1 ? "bg-white" : "bg-white/30"}`}
                ></div>
                <div
                  className={`h-2 w-12 rounded-full transition-all ${step === 2 ? "bg-white" : "bg-white/30"}`}
                ></div>
              </div>
              {/* Floating accent */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10 p-8 md:p-12">
              {step === 1 ? (
                <div className="animate-in slide-in-from-right-4 space-y-8 duration-500">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <User size={16} className="text-blue-500" /> Prénom de l'enfant
                      </label>
                      <input
                        required
                        type="text"
                        name="childFirstName"
                        value={formData.childFirstName}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border-2 border-transparent bg-slate-50 p-4 transition-all outline-none focus:border-blue-500 focus:bg-white"
                        placeholder="e.g. Leo"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <User size={16} className="text-blue-500" />
                        Nom de famille
                      </label>
                      <input
                        required
                        type="text"
                        name="childLastName"
                        value={formData.childLastName}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border-2 border-transparent bg-slate-50 p-4 transition-all outline-none focus:border-blue-500 focus:bg-white"
                        placeholder="e.g. Miller"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Calendar size={16} className="text-blue-500" /> Date of
                        Naissance
                      </label>
                      <input
                        required
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border-2 border-transparent bg-slate-50 p-4 transition-all outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <School size={16} className="text-blue-500" /> Entering
                        Grade
                      </label>
                      <select
                        required
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        className="w-full appearance-none rounded-2xl border-2 border-transparent bg-slate-50 p-4 transition-all outline-none focus:border-blue-500 focus:bg-white"
                      >
                        <option value="">Sélectionner le niveau scolaire</option>
                        <option>Tout-petits / Préscolaire</option>
                        <option>Élémentaire (1re à 5e année)</option>
                        <option>Middle School (Grades 6-8)</option>
                        <option>Lycée (9e à 12e année)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="button"
                      disabled={
                        !formData.childFirstName ||
                        !formData.childLastName ||
                        !formData.dob ||
                        !formData.grade
                      }
                      onClick={() => setStep(2)}
                      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 py-5 font-bold text-white shadow-xl shadow-slate-200 transition-all hover:bg-slate-800 disabled:bg-slate-300"
                    >
                      Continuer vers les détails des parents
                    </button>
                  </div>
                </div>
              ) : (
                <div className="animate-in slide-in-from-right-4 space-y-10 duration-500">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Mail size={16} className="text-blue-500" /> Parent
                        E-mail
                      </label>
                      <input
                        required
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border-2 border-transparent bg-slate-50 p-4 transition-all outline-none focus:border-blue-500 focus:bg-white"
                        placeholder="parent@example.com"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Phone size={16} className="text-blue-500" /> Numéro de contact
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border-2 border-transparent bg-slate-50 p-4 transition-all outline-none focus:border-blue-500 focus:bg-white"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CreditCard size={16} className="text-blue-500" /> Choisissez votre abonnement
                    </label>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <label className="group relative cursor-pointer">
                        <input
                          type="radio"
                          name="plan"
                          value="Monthly ($149/mo)"
                          checked={formData.plan === "Monthly ($149/mo)"}
                          onChange={handleInputChange}
                          className="peer sr-only"
                        />
                        <div className="rounded-2xl border-2 border-transparent bg-slate-50 p-6 transition-all peer-checked:border-blue-500 peer-checked:bg-blue-50/30">
                          <div className="mb-4 flex items-center justify-between">
                            <span className="font-bold text-slate-900">
                              Mensuel
                            </span>
                            <span className="font-bold text-blue-600">
                              $149/mo
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">
                            Idéal pour découvrir nos programmes mois après mois.
                          </p>
                        </div>
                        <CheckCircle2
                          size={24}
                          className="absolute top-4 right-4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100"
                        />
                      </label>

                      <label className="group relative cursor-pointer">
                        <input
                          type="radio"
                          name="plan"
                          value="Annual ($1,430/yr)"
                          checked={formData.plan === "Annual ($1,430/yr)"}
                          onChange={handleInputChange}
                          className="peer sr-only"
                        />
                        <div className="rounded-2xl border-2 border-transparent bg-slate-50 p-6 transition-all peer-checked:border-blue-500 peer-checked:bg-blue-50/30">
                          <div className="mb-4 flex items-center justify-between">
                            <span className="font-bold text-slate-900">
                              Annuelle
                            </span>
                            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] text-white">
                              Économisez 20%
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-blue-600">
                              $1,430/yr
                            </span>
                          </div>
                          <p className="mt-2 text-xs text-slate-500">
                            Le meilleur rapport qualité-prix pour une croissance et un succès à long terme.
                          </p>
                        </div>
                        <CheckCircle2
                          size={24}
                          className="absolute top-4 right-4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="rounded-2xl bg-slate-100 px-8 py-5 font-bold text-slate-600 transition-all hover:bg-slate-200"
                    >
                      Retour
                    </button>
                    <button
                      type="submit"
                      className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 font-bold text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700"
                    >
                      Finalisez votre inscription et envoyez vos informations.{" "}
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            <p>
              Cliquer sur « Finaliser l’inscription » ouvrira une fenêtre Gmail pour envoyer en toute sécurité les détails de votre candidature à notre bureau des admissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentPageContent;
