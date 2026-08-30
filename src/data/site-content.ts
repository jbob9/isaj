export type ContentStatus = "verified" | "draft";

export type SiteContentItem = {
  status: ContentStatus;
  title: string;
  text: string;
};

export const schoolIdentity = {
  name: "Institution Le Saint Justien",
  shortName: "ISAJ",
  openingDate: "Septembre 2011",
  location: "Bon-Repos, Croix-des-Bouquets",
  address:
    "5, Impasse Bernard, Bon-Repos, Croix-des-Bouquets, Route Nationale #1, Haïti",
  tagline: "Éduquer aujourd'hui, préparer l'avenir.",
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
    grades: "Préscolaire · 2 à 6 ans",
    ageRange: "2 à 6 ans",
    description:
      "L'API accueille les enfants dans un environnement adapté à l'éveil, à la socialisation et aux premiers apprentissages.",
  },
  {
    id: "2",
    title: "Académie des Petits Isajiens",
    grades: "1ᵉʳ et 2ᵉ cycles fondamentaux",
    ageRange: "Niveaux à confirmer",
    description:
      "L'ISAJ assure une formation fondamentale complète, avec les premier et deuxième cycles organisés sous l'appellation API.",
  },
  {
    id: "3",
    title: "École Mixte Le Saint Justien",
    grades: "3ᵉ cycle fondamental",
    ageRange: "Niveaux à confirmer",
    description:
      "Le troisième cycle fondamental est assuré sous l'appellation École Mixte Le Saint Justien.",
  },
  {
    id: "4",
    title: "Institution Le Saint Justien",
    grades: "Secondaire",
    ageRange: "Niveaux à confirmer",
    description:
      "La section secondaire accueille les élèves ayant achevé leurs études fondamentales.",
  },
] as const;

export const institutionalFacts = {
  whoWeAre:
    "L'Institution Le Saint Justien (ISAJ) est un établissement scolaire situé à Bon-Repos, dans la commune de Croix-des-Bouquets. Depuis son ouverture officielle en septembre 2011, l'ISAJ œuvre en faveur d'une éducation accessible et de qualité, destinée aux enfants issus de toutes les couches sociales.",
  history: [
    "L'Institution Le Saint Justien est née d'une volonté de contribuer à répondre aux difficultés d'accès à une éducation de qualité rencontrées par de nombreuses familles de la Plaine du Cul-de-Sac.",
    "Monsieur Osnel Saint-Juste, jeune normalien diplômé de l'École Normale Supérieure (ENS), a pris l'initiative de créer un établissement scolaire capable d'offrir aux enfants une formation accessible, structurée et fondée sur des valeurs humaines et civiques.",
    "Cette vision a été partagée avec Monsieur Federme Badette, jeune universitaire qui s'est engagé avec détermination, dynamisme et persévérance dans la concrétisation du projet.",
    "Grâce aux efforts conjugués des fondateurs, le projet s'est concrétisé par l'ouverture officielle de l'Institution Le Saint Justien en septembre 2011. Depuis lors, l'ISAJ poursuit sa mission éducative au service des enfants et des familles de la communauté.",
  ],
  mission:
    "Offrir une éducation de qualité aux enfants de la commune de Croix-des-Bouquets et des communautés environnantes, sans distinction de condition sociale, afin d'accompagner chaque élève dans son développement académique, humain, moral et civique.",
  vision:
    "Faire de l'Institution Le Saint Justien un établissement éducatif de référence, capable d'offrir une formation académique solide tout en favorisant le développement humain, civique et professionnel des enfants et des jeunes.",
  approach:
    "À l'ISAJ, l'éducation ne se limite pas à la transmission des connaissances académiques. Notre approche vise également à développer la discipline, la responsabilité, la confiance en soi, le respect des autres, l'esprit civique et le désir de contribuer positivement à la communauté.",
  community:
    "Depuis sa création, l'ISAJ cherche à demeurer proche des familles et des besoins de sa communauté. L'établissement souhaite renforcer progressivement ses programmes éducatifs et développer de nouvelles possibilités d'apprentissage au bénéfice des enfants et des jeunes.",
  directorMessage:
    "Bienvenue à l'Institution Le Saint Justien. Depuis sa création, notre établissement place l'éducation, la discipline, les valeurs et l'avenir de l'enfant au cœur de son action. Notre ambition est d'offrir à chaque élève un cadre dans lequel il peut apprendre, grandir, développer ses talents et devenir un citoyen responsable. Nous remercions les parents, les enseignants, les partenaires et tous ceux qui accompagnent l'ISAJ dans sa mission éducative.",
  partnerMessage:
    "Vous êtes une organisation, une fondation, une entreprise ou une personne souhaitant contribuer à l'éducation des enfants ? L'Institution Le Saint Justien est ouverte aux collaborations permettant d'améliorer les conditions d'apprentissage, les équipements pédagogiques, les technologies éducatives, les activités culturelles et les formations pratiques.",
};

export const values = [
  "Excellence académique",
  "Discipline",
  "Respect",
  "Intégrité",
  "Responsabilité",
  "Solidarité",
  "Valeurs morales et spirituelles",
  "Civisme",
  "Égalité des chances",
  "Engagement communautaire",
];

export const perspectives = [
  "Renforcement des équipements pédagogiques",
  "Développement d'un laboratoire informatique",
  "Amélioration de l'accès à Internet et aux outils numériques",
  "Développement de programmes de couture et de formation pratique",
  "Développement de l'éducation musicale et artistique",
  "Amélioration progressive des infrastructures scolaires",
  "Développement de partenariats éducatifs et institutionnels",
  "Renforcement des initiatives sociales au bénéfice des élèves",
];

export const institutionalDrafts: SiteContentItem[] = [
  {
    status: "draft",
    title: "Reconnaissance du MENFP",
    text: "La formulation officielle et les références de la reconnaissance du MENFP seront publiées après validation par l'administration.",
  },
  {
    status: "draft",
    title: "Examens nationaux",
    text: "La participation de l'ISAJ aux examens nationaux et les résultats correspondants seront ajoutés après vérification des années et des documents officiels.",
  },
  {
    status: "draft",
    title: "Équipe de l'établissement",
    text: "La liste définitive de la direction, de l'équipe pédagogique et de l'équipe administrative sera publiée après validation et accord de publication.",
  },
  {
    status: "draft",
    title: "Programmes et activités opérationnels",
    text: "Les activités académiques, numériques, culturelles, artistiques et pratiques actuellement proposées seront distinguées des projets en développement après validation par l'ISAJ.",
  },
  {
    status: "draft",
    title: "Réalisations et résultats",
    text: "Les réalisations, événements, projets et résultats seront publiés avec leurs dates et leurs sources, sans chiffres non vérifiés.",
  },
  {
    status: "draft",
    title: "Partenaires et collaborations",
    text: "Les partenaires confirmés et les collaborations en développement seront présentés séparément après autorisation officielle.",
  },
  {
    status: "draft",
    title: "Admissions pratiques",
    text: "La période d'inscription, les pièces requises, les étapes administratives et les frais seront publiés après validation par l'administration.",
  },
];

export const gmailRecipient = contactDetails.email;
