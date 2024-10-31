type Question = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};


export const questions: Question[] = [
  {
    question: "D'où vient la tradition d'Halloween ?",
    options: [
      "De la fête irlandaise Samhain",
      "D'une fête de pirates",
      "D'une fête du printemps",
      "D'une fête du Père Noël"
    ],
    correct: 0,
    explanation: "Halloween vient d'une ancienne fête irlandaise appelée Samhain qui marquait la fin de l'été !"
  },
  {
    question: "Pourquoi creuse-t-on des citrouilles à Halloween ?",
    options: [
      "Pour faire une soupe",
      "Pour faire une lanterne qui protège la maison",
      "Pour décorer le jardin",
      "Pour nourrir les oiseaux"
    ],
    correct: 1,
    explanation: "Les lanternes en citrouille étaient utilisées pour protéger les maisons des esprits pendant Halloween !"
  },
  {
    question: "Pourquoi dit-on 'des bonbons ou un sort' ?",
    options: [
      "Pour faire peur aux voisins",
      "Pour avoir plus de bonbons",
      "C'est une ancienne tradition d'échange",
      "Pour s'amuser entre amis"
    ],
    correct: 2,
    explanation: "C'est une tradition où les gens échangeaient de la nourriture contre des chansons et des prières !"
  },
  {
    question: "Quelle couleur représente Halloween avec le noir ?",
    options: [
      "Le rouge",
      "Le orange",
      "Le bleu",
      "Le vert"
    ],
    correct: 1,
    explanation: "Le orange des citrouilles et le noir de la nuit sont les couleurs traditionnelles d'Halloween !"
  },
  {
    question: "Quel légume utilisait-on avant les citrouilles ?",
    options: [
      "Des navets",
      "Des pommes",
      "Des carottes",
      "Des patates"
    ],
    correct: 0,
    explanation: "En Irlande, on creusait des navets car il n'y avait pas de citrouilles !"
  },
  {
    question: "En quelle saison fête-t-on Halloween ?",
    options: ["En automne", "En hiver", "Au printemps", "En été"],
    correct: 0,
    explanation: "Halloween se fête en automne, le 31 octobre !"
  },
  {
    question: "Quel animal noir est souvent associé à Halloween ?",
    options: ["Le chat", "Le chien", "Le lapin", "L'ours"],
    correct: 0,
    explanation: "Le chat noir est traditionnellement associé à Halloween et aux sorcières !"
  },
  {
    question: "Que signifie le mot 'Halloween' ?",
    options: ["La veille de la Toussaint", "La nuit des citrouilles", "La fête des bonbons", "Le jour des fantômes"],
    correct: 0,
    explanation: "Halloween vient de 'All Hallows' Eve' qui signifie 'la veille de la Toussaint' !"
  },
  {
    question: "Quel personnage fait souvent des potions magiques ?",
    options: ["La sorcière", "Le fantôme", "Le vampire", "Le loup-garou"],
    correct: 0,
    explanation: "Les sorcières sont connues pour préparer des potions magiques dans leur chaudron !"
  },
  {
    question: "De quelle couleur sont souvent les chauves-souris d'Halloween ?",
    options: ["Noires", "Marron", "Grises", "Violettes"],
    correct: 0,
    explanation: "Les chauves-souris d'Halloween sont traditionnellement noires !"
  },
  {
    question: "Quel accessoire porte souvent une sorcière sur la tête ?",
    options: ["Un chapeau pointu", "Une couronne", "Un bonnet", "Un casque"],
    correct: 0,
    explanation: "Les sorcières portent traditionnellement un grand chapeau noir pointu !"
  },
  {
    question: "Que dit-on voir dans les cimetières la nuit d'Halloween ?",
    options: ["Des fantômes", "Des licornes", "Des fées", "Des sirènes"],
    correct: 0,
    explanation: "Selon la légende, les fantômes se promènent dans les cimetières la nuit d'Halloween !"
  },
  {
    question: "Quel objet utilise une sorcière pour voler ?",
    options: ["Un balai", "Un tapis", "Une voiture", "Un parapluie"],
    correct: 0,
    explanation: "Dans les histoires, les sorcières volent sur un balai magique !"
  },
  {
    question: "Quelle créature se transforme les soirs de pleine lune ?",
    options: ["Le loup-garou", "Le vampire", "Le zombie", "Le fantôme"],
    correct: 0,
    explanation: "Le loup-garou se transforme en loup les soirs de pleine lune !"
  },
  {
    question: "Quel monstre boit du sang ?",
    options: ["Le vampire", "Le fantôme", "Le zombie", "Le squelette"],
    correct: 0,
    explanation: "Les vampires sont connus pour boire du sang et craindre l'ail !"
  },
  {
    question: "Que mangent traditionnellement les zombies ?",
    options: ["Des cerveaux", "Des bonbons", "Des pommes", "Des sandwichs"],
    correct: 0,
    explanation: "Dans les histoires, les zombies mangent des cerveaux !"
  },
  {
    question: "Quel fruit est souvent utilisé pour jouer à Halloween ?",
    options: ["La pomme", "La poire", "La banane", "L'orange"],
    correct: 0,
    explanation: "On joue souvent à attraper des pommes qui flottent dans l'eau à Halloween !"
  },
  {
    question: "Quelle créature sort de son tombeau à Halloween ?",
    options: ["La momie", "La sirène", "Le dragon", "Le géant"],
    correct: 0,
    explanation: "Les momies sortent de leur tombeau pendant Halloween !"
  },
  {
    question: "Quel petit animal fait peur aux éléphants selon la légende ?",
    options: ["La souris", "Le lapin", "L'écureuil", "Le hamster"],
    correct: 0,
    explanation: "Selon la légende, les éléphants ont peur des souris !"
  },
  {
    question: "Quelle est la maison préférée des fantômes ?",
    options: ["Une maison hantée", "Un château", "Une cabane", "Un immeuble"],
    correct: 0,
    explanation: "Les fantômes adorent vivre dans les maisons hantées !"
  },
  {
    question: "Que portent les fantômes traditionnellement ?",
    options: ["Un drap blanc", "Un costume", "Un pyjama", "Une robe"],
    correct: 0,
    explanation: "Les fantômes sont souvent représentés avec un drap blanc !"
  },
  {
    question: "Quel cri fait le fantôme ?",
    options: ["Bouuuuh !", "Miaou !", "Cocorico !", "Meuh !"],
    correct: 0,
    explanation: "Les fantômes font 'Bouuuuh !' pour essayer de faire peur !"
  },
  {
    question: "Quelle est la boisson préférée des vampires ?",
    options: ["Le sang", "Le jus d'orange", "Le lait", "L'eau"],
    correct: 0,
    explanation: "Les vampires boivent du sang, c'est leur spécialité !"
  },
  {
    question: "Que craignent les vampires ?",
    options: ["L'ail", "Les carottes", "Les pommes", "Les bonbons"],
    correct: 0,
    explanation: "L'ail fait fuir les vampires selon les légendes !"
  },
  {
    question: "Quel moyen de transport utilisent les sorcières ?",
    options: ["Le balai volant", "La voiture", "Le vélo", "Le bus"],
    correct: 0,
    explanation: "Les sorcières se déplacent sur leur balai volant magique !"
  },
  {
    question: "Où vivent les sorcières ?",
    options: ["Dans une chaumière", "Dans un palace", "Dans un igloo", "Dans une tente"],
    correct: 0,
    explanation: "Les sorcières vivent traditionnellement dans des chaumières au fond des bois !"
  },
  {
    question: "Quel animal accompagne souvent les sorcières ?",
    options: ["Le chat noir", "Le chien blanc", "Le perroquet", "Le poisson"],
    correct: 0,
    explanation: "Les sorcières ont souvent un chat noir comme animal de compagnie !"
  },
  {
    question: "Que mettent les sorcières dans leur chaudron ?",
    options: ["Des potions magiques", "De la soupe", "Du chocolat chaud", "Du thé"],
    correct: 0,
    explanation: "Les sorcières préparent des potions magiques dans leur grand chaudron !"
  },
  {
    question: "Que font les enfants pendant Halloween ?",
    options: ["Récoltent des bonbons", "Font leurs devoirs", "Vont à l'école", "Font du sport"],
    correct: 0,
    explanation: "Les enfants font du porte-à-porte pour récolter des bonbons à Halloween !"
  },
  {
    question: "Quel légume est le symbole d'Halloween ?",
    options: ["La citrouille", "La carotte", "La salade", "Le poireau"],
    correct: 0,
    explanation: "La citrouille est le symbole le plus connu d'Halloween !"
  },
  {
    question: "Que met-on dans une citrouille d'Halloween ?",
    options: ["Une bougie", "Des fleurs", "Des jouets", "Des livres"],
    correct: 0,
    explanation: "On met une bougie dans la citrouille pour la faire briller dans la nuit !"
  },
  {
    question: "Quel mois fête-t-on Halloween ?",
    options: ["Octobre", "Décembre", "Juillet", "Mars"],
    correct: 0,
    explanation: "Halloween se fête le 31 octobre !"
  },
  {
    question: "Que font les gens à Halloween pour faire peur ?",
    options: ["Se déguisent", "Dorment", "Cuisinent", "Jardinent"],
    correct: 0,
    explanation: "Les gens se déguisent en créatures effrayantes pour Halloween !"
  },
  {
    question: "Quel temps fait-il souvent à Halloween ?",
    options: ["Il fait sombre", "Il fait très chaud", "Il neige", "Il pleut des bonbons"],
    correct: 0,
    explanation: "Halloween se fête la nuit, quand il fait sombre et un peu effrayant !"
  },
  {
    question: "Que décore-t-on pour Halloween ?",
    options: ["La maison", "La voiture", "Le cartable", "Le lit"],
    correct: 0,
    explanation: "On décore sa maison avec des éléments effrayants pour Halloween !"
  },
  {
    question: "Quel est le repas préféré des zombies ?",
    options: ["Les cerveaux", "Les légumes", "Les gâteaux", "Les fruits"],
    correct: 0,
    explanation: "Dans les histoires, les zombies adorent manger des cerveaux !"
  }
];