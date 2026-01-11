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
EDU-KIDS CONTACT INQUIRY
========================

SENDER DETAILS:
- Name: ${formData.parentName}
- Contact Email: ${formData.email}
- Phone: ${formData.phone || "Not provided"}
- Interested Stage: ${formData.interestedGrade}

MESSAGE FROM PARENT:
------------------------------------
${formData.message}
------------------------------------

This inquiry was generated via the Institution le Saint Justien (ISAJ) Contact Portal.
    `.trim();

    const subject = `New Inquiry: ${formData.parentName} (${formData.interestedGrade})`;
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
          Get In Touch
        </span>
        <h1 className="mb-6 text-4xl leading-tight font-bold text-[#3D2C26] md:text-6xl">
          Let's Start a{" "}
          <span className="font-serif text-blue-500 italic">Conversation</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-500">
          Whether you have questions about enrollment, curriculum, or just want
          to say hi, our team is here for you.
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
                  Main Campus
                </h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  123 Education Way,
                  <br />
                  Creative District, NY 10012
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-6 rounded-4xl border border-gray-50 bg-white p-8 shadow-xl shadow-gray-100/50 transition-colors hover:border-blue-200">
              <div className="rounded-2xl bg-blue-100 p-4 text-blue-600 transition-transform group-hover:scale-110">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-[#3D2C26]">
                  Call Us
                </h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  Main Office: (555) 123-4567
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
                  School Hours
                </h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  Mon - Fri: 8:00 AM - 4:00 PM
                  <br />
                  Weekend: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof / Small Map Placeholder */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#2D1B14] p-10 text-white">
            <h3 className="relative z-10 mb-6 text-2xl font-bold">
              Join our community
            </h3>
            <p className="relative z-10 mb-8 text-sm leading-relaxed text-gray-400">
              Follow us on social media for daily updates, student achievements,
              and behind-the-scenes looks at life at Institution le Saint Justien (ISAJ).
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
                  Inquiry Initialized!
                </h2>
                <p className="mb-8 text-gray-500">
                  We've opened a Gmail window with your formatted inquiry.
                  Please send the email to complete the notification process!
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="rounded-xl bg-blue-500 px-8 py-3 font-bold text-white transition-colors hover:bg-blue-600"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-2 text-sm font-bold text-[#3D2C26]">
                      Parent Name
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
                      Email Address
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
                      Interested Grade
                    </label>
                    <select
                      name="interestedGrade"
                      value={formData.interestedGrade}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-2xl border-none bg-[#FAF9F6] p-4 transition-all outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Little Explorers (Toddler - Pre-K)</option>
                      <option>Core Foundations (Grades 1-5)</option>
                      <option>Growth & Identity (Grades 6-8)</option>
                      <option>Future Leaders (Grades 9-12)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="ml-2 text-sm font-bold text-[#3D2C26]">
                      Phone Number
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
                    How can we help?
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about your child and any questions you have..."
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
                      Prepare Email <Send size={20} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By clicking "Prepare Email", we'll open a Gmail tab with your
                  pre-filled inquiry to send securely to our team.
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
