export type ContentStatus = "verified" | "draft";

export type SiteContentItem = {
  status: ContentStatus;
  title: string;
  text: string;
};

export const contactDetails = {
  email: "institutionlesaintjustien2000@gmail.com",
  phones: [
    { display: "(509) 42518828", href: "tel:+50942518828" },
    { display: "(509) 37453087", href: "tel:+50937453087" },
    { display: "(509) 37604261", href: "tel:+50937604261" },
  ],
};

export const schoolLevels = [
  {
    id: "1",
    title: "Académie des Petits Isajiens",
    grades: "Préscolaire",
    ageRange: "Âges à confirmer",
    description:
      "Un accompagnement adapté aux premières années de la scolarité.",
  },
  {
    id: "2",
    title: "Fondamentale · 1ᵉʳ et 2ᵉ cycles",
    grades: "Niveaux à confirmer",
    ageRange: "Âges à confirmer",
    description: "Un cadre pour construire les apprentissages fondamentaux.",
  },
  {
    id: "3",
    title: "École Mixte le Saint Justien",
    grades: "3ᵉ cycle fondamental",
    ageRange: "Âges à confirmer",
    description: "Un parcours de consolidation avant le secondaire.",
  },
  {
    id: "4",
    title: "Institution le Saint Justien",
    grades: "Secondaire",
    ageRange: "Âges à confirmer",
    description: "La suite du parcours scolaire au sein de l'ISAJ.",
  },
] as const;

export const institutionalDrafts: SiteContentItem[] = [
  {
    status: "draft",
    title: "Histoire de l'ISAJ",
    text: "L'histoire, les étapes de fondation et les principales dates de l'ISAJ seront publiées après validation par l'institution.",
  },
  {
    status: "draft",
    title: "Direction fondatrice",
    text: "Le nom, la biographie et le parcours de la direction fondatrice seront ajoutés après confirmation et accord de publication.",
  },
  {
    status: "draft",
    title: "Reconnaissance du MENFP",
    text: "Les informations relatives à la reconnaissance du MENFP seront publiées avec la formulation et les références officielles fournies par l'institution.",
  },
  {
    status: "draft",
    title: "Examens nationaux",
    text: "La participation de l'ISAJ aux examens nationaux et les résultats correspondants seront ajoutés après vérification des années et des documents officiels.",
  },
  {
    status: "draft",
    title: "Activités et projets",
    text: "La liste des activités et projets réellement proposés sera publiée après validation par l'équipe de l'ISAJ.",
  },
];

export const gmailRecipient = contactDetails.email;
