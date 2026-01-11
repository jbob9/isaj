import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactPageContent = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    interestedGrade: "Little Explorers (Toddler - Pre-K)",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Format the information for the email body
    const emailBody = `
Institution le Saint Justien (ISAJ) DEMANDE DE CONTACT
========================

DÉTAILS DE L'EXPÉDITEUR :
- Nom: ${formData.parentName}
- Email: ${formData.email}
- Téléphone: ${formData.phone || "Non fourni"}
- Stade d'intérêt: ${formData.interestedGrade}

MESSAGE DU PARENT :
------------------------------------
${formData.message}
------------------------------------

Cette demande a été générée via le portail de contact de l'Institution le Saint Justien (ISAJ).
    `.trim();

    const subject = `Nouvelle enquête: ${formData.parentName} (${formData.interestedGrade})`;
    const recipient = "admissions@isaj.com";

    // Construct Gmail URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail in new tab
    window.open(gmailUrl, "_blank");

    // Simulate a brief delay to show the spinner before the success message
    setTimeout(() => {
      setFormState("success");
    }, 1000);
  };
  return (
    <section className="animate-in fade-in slide-in-from-bottom-6 mx-auto max-w-7xl overflow-hidden px-4 py-12 duration-700 sm:px-6 md:py-24 lg:px-8">
      <div className="mb-16 text-center md:mb-24">
        <span className="mb-4 block text-xs font-bold tracking-widest text-blue-500 uppercase">
         Entrer en contact
        </span>
        <h1 className="mb-6 text-4xl leading-tight font-bold text-[#3D2C26] md:text-6xl">
          Commençons une{" "}
          <span className="font-serif text-blue-500 italic">Conversation</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-500">
          Que vous ayez des questions sur les inscriptions, les programmes d'études ou que vous souhaitiez simplement nous saluer, notre équipe est là pour vous.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
        {/* Contact Info & Details */}
        <div className="space-y-12 lg:col-span-5">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div className="group flex items-start gap-6 rounded-4xl border border-gray-50 bg-white p-8 shadow-xl shadow-gray-100/50 transition-colors hover:border-blue-200">
              <div className="rounded-2xl bg-blue-100 p-4 text-blue-600 transition-transform group-hover:scale-110">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-[#3D2C26]">
                  Campus principal
                </h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  Lilavois,
                  <br />
                  Ouest, Croix-des-bouquest
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-6 rounded-4xl border border-gray-50 bg-white p-8 shadow-xl shadow-gray-100/50 transition-colors hover:border-blue-200">
              <div className="rounded-2xl bg-blue-100 p-4 text-blue-600 transition-transform group-hover:scale-110">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-[#3D2C26]">
                  Appelez-nous
                </h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  Bureau principal: (555) 123-4567
                  <br />
                  Admissions: (555) 987-6543
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-6 rounded-4xl border border-gray-50 bg-white p-8 shadow-xl shadow-gray-100/50 transition-colors hover:border-green-200">
              <div className="rounded-2xl bg-green-100 p-4 text-green-600 transition-transform group-hover:scale-110">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-[#3D2C26]">
                  Horaires scolaires
                </h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  Lundi - Vendredi: 8:00 AM - 4:00 PM
                  <br />
                  Week-end : Fermé
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof / Small Map Placeholder */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#2D1B14] p-10 text-white">
            <h3 className="relative z-10 mb-6 text-2xl font-bold">
              Rejoignez notre communauté
            </h3>
            <p className="relative z-10 mb-8 text-sm leading-relaxed text-gray-400">
              Suivez-nous sur les réseaux sociaux pour des mises à jour quotidiennes, les réussites des élèves et des aperçus des coulisses de la vie à l'Institution le Saint Justien (ISAJ).
            </p>
            <div className="relative z-10 flex gap-4">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-blue-500">
                <Mail size={20} />
              </div>
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-blue-500">
                <Phone size={20} />
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="relative rounded-[3rem] border border-gray-50 bg-white p-8 shadow-2xl shadow-gray-100 md:p-12">
            {formState === "success" ? (
              <div className="animate-in zoom-in py-20 text-center duration-500">
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 size={40} className="text-green-600" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-[#3D2C26]">
                  Requête initialisée !
                </h2>
                <p className="mb-8 text-gray-500">
                  Nous avons ouvert une fenêtre Gmail contenant votre demande formatée. Veuillez envoyer l'e-mail pour finaliser le processus de notification !
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="rounded-xl bg-blue-500 px-8 py-3 font-bold text-white transition-colors hover:bg-blue-600"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-2 text-sm font-bold text-[#3D2C26]">
                      Nom du parent
                    </label>
                    <input
                      required
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="e.g. Jane Doe"
                      className="w-full rounded-2xl border-none bg-[#FAF9F6] p-4 transition-all outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ml-2 text-sm font-bold text-[#3D2C26]">
                      Adresse email
                    </label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="e.g. jane@example.com"
                      className="w-full rounded-2xl border-none bg-[#FAF9F6] p-4 transition-all outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-2 text-sm font-bold text-[#3D2C26]">
                      Niveau d'intérêt
                    </label>
                    <select
                      name="interestedGrade"
                      value={formData.interestedGrade}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-2xl border-none bg-[#FAF9F6] p-4 transition-all outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Petits explorateurs (Tout-petits - Préscolaire)</option>
                      <option>Fondements de base (1re à 5e année)</option>
                      <option>Croissance et identité (6e à 8e année)</option>
                      <option>Futurs leaders (9e à 12e année)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="ml-2 text-sm font-bold text-[#3D2C26]">
                      Numéro de téléphone
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full rounded-2xl border-none bg-[#FAF9F6] p-4 transition-all outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-2 text-sm font-bold text-[#3D2C26]">
                    Comment pouvons-nous vous aider ?
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Parlez-nous de votre enfant et posez-nous toutes vos questions..."
                    className="w-full resize-none rounded-2xl border-none bg-[#FAF9F6] p-4 transition-all outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  disabled={formState === "submitting"}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-500 py-5 text-lg font-bold text-white shadow-lg shadow-blue-100 transition-all hover:bg-blue-600 disabled:bg-gray-300"
                >
                  {formState === "submitting" ? (
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                  ) : (
                    <>
                     Préparer un courriel <Send size={20} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  En cliquant sur « Préparer l'e-mail », nous ouvrirons un onglet Gmail avec votre demande pré-remplie pour l'envoyer en toute sécurité à notre équipe.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContent;
