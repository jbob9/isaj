export const gradeProfiles = [
  {
    id: "1",
    title: "Académie des Petits Isajiens",
    subtitle: "Les premières années de la scolarité",
    grades: "Préscolaire · 2 à 6 ans",
    ageRange: "2 à 6 ans",
    overview:
      "Un accompagnement adapté aux premières années de la scolarité, dans un environnement bienveillant et attentif au développement de chaque enfant.",
    color: "blue",
    curriculum: [
      "Langage et communication",
      "Premiers apprentissages",
      "Expression artistique",
      "Motricité",
      "Vie en groupe",
    ],
    details: [
      {
        label: "Apprentissages",
        items: [
          "Développer le langage et l'expression",
          "Découvrir les premiers concepts",
          "Apprendre par l'observation et l'expérience",
        ],
      },
      {
        label: "Vie collective",
        items: [
          "Respecter les autres",
          "Participer aux activités du groupe",
          "Construire progressivement son autonomie",
        ],
      },
      {
        label: "Expression",
        items: [
          "Créer et expérimenter",
          "Bouger et découvrir son environnement",
          "Partager ses idées et ses émotions",
        ],
      },
    ],
    activities: [
      "Activités de classe",
      "Expression artistique",
      "Jeux et découvertes",
    ],
    gallery: ["/isaj-1.jpeg", "/isaj-3.jpeg"],
  },
  {
    id: "2",
    title: "Académie des Petits Isajiens",
    subtitle: "Construire les apprentissages fondamentaux",
    grades: "1ᵉʳ et 2ᵉ cycles fondamentaux",
    ageRange: "Âges à confirmer",
    overview:
      "Un cadre pour consolider la lecture, l'écriture, les mathématiques et les autres apprentissages fondamentaux.",
    color: "indigo",
    curriculum: [
      "Français",
      "Mathématiques",
      "Sciences",
      "Histoire et géographie",
      "Expression artistique",
    ],
    details: [
      {
        label: "Fondamentaux",
        items: [
          "Développer la lecture et l'écriture",
          "Renforcer le raisonnement mathématique",
          "Acquérir des méthodes de travail",
        ],
      },
      {
        label: "Découverte",
        items: [
          "Observer et questionner le monde",
          "Relier les apprentissages à son environnement",
          "Développer la curiosité",
        ],
      },
      {
        label: "Expression",
        items: [
          "S'exprimer à l'oral et à l'écrit",
          "Développer sa créativité",
          "Participer à la vie de la classe",
        ],
      },
    ],
    activities: [
      "Activités de classe",
      "Projets pédagogiques à confirmer",
      "Activités artistiques à confirmer",
    ],
    gallery: ["/isaj-2.jpeg", "/isaj-4.jpeg"],
  },
  {
    id: "3",
    title: "École Mixte Le Saint Justien",
    subtitle: "Consolider son parcours fondamental",
    grades: "3ᵉ cycle fondamental",
    ageRange: "Âges à confirmer",
    overview:
      "Un parcours de consolidation qui accompagne les élèves dans le développement de leurs connaissances, de leur autonomie et de leur esprit critique.",
    color: "cyan",
    curriculum: [
      "Français",
      "Mathématiques",
      "Sciences",
      "Histoire et géographie",
      "Éducation à la citoyenneté",
    ],
    details: [
      {
        label: "Connaissances",
        items: [
          "Approfondir les matières fondamentales",
          "Développer l'analyse et le raisonnement",
          "Organiser son travail",
        ],
      },
      {
        label: "Autonomie",
        items: [
          "Prendre progressivement des responsabilités",
          "Présenter son travail",
          "Collaborer avec les autres",
        ],
      },
      {
        label: "Ouverture",
        items: [
          "Comprendre son environnement",
          "Développer l'esprit critique",
          "Préparer la suite de son parcours scolaire",
        ],
      },
    ],
    activities: [
      "Activités de classe",
      "Projets pédagogiques à confirmer",
      "Activités sportives à confirmer",
    ],
    gallery: ["/isaj-3.jpeg", "/isaj-4.jpeg"],
  },
  {
    id: "4",
    title: "Institution Le Saint Justien",
    subtitle: "Poursuivre son parcours secondaire",
    grades: "Secondaire",
    ageRange: "Âges à confirmer",
    overview:
      "La suite du parcours scolaire au sein de l'ISAJ, avec un accompagnement adapté aux exigences du secondaire.",
    color: "emerald",
    curriculum: [
      "Français",
      "Mathématiques",
      "Sciences",
      "Histoire et géographie",
      "Éducation à la citoyenneté",
    ],
    details: [
      {
        label: "Parcours scolaire",
        items: [
          "Approfondir les connaissances disciplinaires",
          "Développer les méthodes de travail",
          "Préparer les étapes suivantes de la scolarité",
        ],
      },
      {
        label: "Responsabilité",
        items: [
          "Renforcer l'autonomie",
          "S'engager dans les projets de l'établissement",
          "Développer le sens de l'effort",
        ],
      },
      {
        label: "Orientation",
        items: [
          "Réfléchir à son projet personnel",
          "Valoriser ses compétences",
          "S'informer sur les possibilités après le secondaire",
        ],
      },
    ],
    activities: [
      "Activités de classe",
      "Projets scolaires à confirmer",
      "Activités et clubs à confirmer",
    ],
    gallery: ["/isaj-1.jpeg", "/isaj-2.jpeg"],
  },
] as const;

export type GradeProfile = (typeof gradeProfiles)[number];
