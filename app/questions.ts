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
    options: ["En été", "En hiver", "Au printemps", "En automne"],
    correct: 3,
    explanation: "Halloween se fête en automne, le 31 octobre !"
  },
  {
    question: "Quel animal noir est souvent associé à Halloween ?",
    options: ["L'ours", "Le chien", "Le chat", "Le lapin"],
    correct: 2,
    explanation: "Le chat noir est traditionnellement associé à Halloween et aux sorcières !"
  },
  {
    question: "Que signifie le mot 'Halloween' ?",
    options: ["La fête des bonbons", "Le jour des fantômes", "La veille de la Toussaint", "La nuit des citrouilles"],
    correct: 2,
    explanation: "Halloween vient de 'All Hallows' Eve' qui signifie 'la veille de la Toussaint' !"
  },
  {
    question: "Quel personnage fait souvent des potions magiques ?",
    options: ["Le loup-garou", "La sorcière", "Le fantôme", "Le vampire"],
    correct: 1,
    explanation: "Les sorcières sont connues pour préparer des potions magiques dans leur chaudron !"
  },
  {
    question: "De quelle couleur sont souvent les chauves-souris d'Halloween ?",
    options: ["Grises", "Marron", "Violettes", "Noires"],
    correct: 3,
    explanation: "Les chauves-souris d'Halloween sont traditionnellement noires !"
  },
  {
    question: "Quel accessoire porte souvent une sorcière sur la tête ?",
    options: ["Un bonnet", "Une couronne", "Un chapeau pointu", "Un casque"],
    correct: 2,
    explanation: "Les sorcières portent traditionnellement un grand chapeau noir pointu !"
  },
  {
    question: "Que dit-on voir dans les cimetières la nuit d'Halloween ?",
    options: ["Des sirènes", "Des licornes", "Des fantômes", "Des fées"],
    correct: 2,
    explanation: "Selon la légende, les fantômes se promènent dans les cimetières la nuit d'Halloween !"
  },
  {
    question: "Quel objet utilise une sorcière pour voler ?",
    options: ["Un parapluie", "Une voiture", "Un balai", "Un tapis"],
    correct: 2,
    explanation: "Dans les histoires, les sorcières volent sur un balai magique !"
  },
  {
    question: "Quelle créature se transforme les soirs de pleine lune ?",
    options: ["Le fantôme", "Le loup-garou", "Le zombie", "Le vampire"],
    correct: 1,
    explanation: "Le loup-garou se transforme en loup les soirs de pleine lune !"
  },
  {
    question: "Quel monstre boit du sang ?",
    options: ["Le squelette", "Le vampire", "Le fantôme", "Le zombie"],
    correct: 1,
    explanation: "Les vampires sont connus pour boire du sang et craindre l'ail !"
  },
  {
    question: "Que mangent traditionnellement les zombies ?",
    options: ["Des pommes", "Des bonbons", "Des sandwichs", "Des cerveaux"],
    correct: 3,
    explanation: "Dans les histoires, les zombies mangent des cerveaux !"
  },
  {
    question: "Quel fruit est souvent utilisé pour jouer à Halloween ?",
    options: ["La banane", "La poire", "L'orange", "La pomme"],
    correct: 3,
    explanation: "On joue souvent à attraper des pommes qui flottent dans l'eau à Halloween !"
  },
  {
    question: "Quelle créature sort de son tombeau à Halloween ?",
    options: ["Le dragon", "Le géant", "La momie", "La sirène"],
    correct: 2,
    explanation: "Les momies sortent de leur tombeau pendant Halloween !"
  },
  {
    question: "Quel petit animal fait peur aux éléphants selon la légende ?",
    options: ["L'écureuil", "Le lapin", "Le hamster", "La souris"],
    correct: 3,
    explanation: "Selon la légende, les éléphants ont peur des souris !"
  },
  {
    question: "Quelle est la maison préférée des fantômes ?",
    options: ["Un immeuble", "Une cabane", "Une maison hantée", "Un château"],
    correct: 2,
    explanation: "Les fantômes adorent vivre dans les maisons hantées !"
  },
  {
    question: "Que portent les fantômes traditionnellement ?",
    options: ["Un costume", "Un drap blanc", "Un pyjama", "Une robe"],
    correct: 1,
    explanation: "Les fantômes sont souvent représentés avec un drap blanc !"
  },
  {
    question: "Quel cri fait le fantôme ?",
    options: ["Meuh !", "Bouuuuh !", "Cocorico !", "Miaou !"],
    correct: 1,
    explanation: "Les fantômes font 'Bouuuuh !' pour essayer de faire peur !"
  },
  {
    question: "Quelle est la boisson préférée des vampires ?",
    options: ["Le lait", "Le jus d'orange", "L'eau", "Le sang"],
    correct: 3,
    explanation: "Les vampires boivent du sang, c'est leur spécialité !"
  },
  {
    question: "Que craignent les vampires ?",
    options: ["Les bonbons", "L'ail", "Les carottes", "Les pommes"],
    correct: 1,
    explanation: "L'ail fait fuir les vampires selon les légendes !"
  },
  {
    question: "Quel moyen de transport utilisent les sorcières ?",
    options: ["La voiture", "Le balai volant", "Le vélo", "Le bus"],
    correct: 1,
    explanation: "Les sorcières se déplacent sur leur balai volant magique !"
  },
  {
    question: "Où vivent les sorcières ?",
    options: ["Dans un palace", "Dans une chaumière", "Dans un igloo", "Dans une tente"],
    correct: 1,
    explanation: "Les sorcières vivent traditionnellement dans des chaumières au fond des bois !"
  },
  {
    question: "Quel animal accompagne souvent les sorcières ?",
    options: ["Le chien blanc", "Le chat noir", "Le perroquet", "Le poisson"],
    correct: 1,
    explanation: "Les sorcières ont souvent un chat noir comme animal de compagnie !"
  },
  {
    question: "Que mettent les sorcières dans leur chaudron ?",
    options: ["Du thé", "Du chocolat chaud", "De la soupe", "Des potions magiques"],
    correct: 3,
    explanation: "Les sorcières préparent des potions magiques dans leur grand chaudron !"
  },
  {
    question: "Que font les enfants pendant Halloween ?",
    options: ["Font leurs devoirs", "Font du sport", "Récoltent des bonbons", "Vont à l'école"],
    correct: 2,
    explanation: "Les enfants font du porte-à-porte pour récolter des bonbons à Halloween !"
  },
  {
    question: "Quel légume est le symbole d'Halloween ?",
    options: ["La carotte", "La citrouille", "Le poireau", "La salade"],
    correct: 1,
    explanation: "La citrouille est le symbole le plus connu d'Halloween !"
  },
  {
    question: "Que met-on dans une citrouille d'Halloween ?",
    options: ["Des jouets", "Des livres", "Des fleurs", "Une bougie"],
    correct: 3,
    explanation: "On met une bougie dans la citrouille pour la faire briller dans la nuit !"
  },
  {
    question: "Quel mois fête-t-on Halloween ?",
    options: ["Mars", "Décembre", "Juillet", "Octobre"],
    correct: 3,
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
    options: ["Le cartable", "La maison", "La voiture", "Le lit"],
    correct: 1,
    explanation: "On décore sa maison avec des éléments effrayants pour Halloween !"
  },
  {
    question: "Quel est le repas préféré des zombies ?",
    options: ["Les gâteaux", "Les légumes", "Les fruits", "Les cerveaux"],
    correct: 3,
    explanation: "Dans les histoires, les zombies adorent manger des cerveaux !"
  },
  {
    question: "Qui est le plus fort parmi ces monstres gentils ?",
    options: ["Shrek", "Sully (Monstres & Cie)", "Casper", "Félicie (la fille loup-garou)", "Mike Wazowski"],
    correct: 0,
    explanation: "Parmi ces monstres gentils, Shrek est souvent considéré comme le plus fort grâce à sa taille, sa force physique et sa résilience !"
  },
  {
    question: "Quel monstre a le plus de mal à se lever le matin ?",
    options: [
      "Le vampire (il n’aime pas la lumière)",
      "Le zombie (il marche comme un dormeur)",
      "Le fantôme (il reste sous les draps)",
      "Le loup-garou (il préfère la pleine lune)"
    ],
    correct: 2,
    explanation: "Le fantôme a du mal à se lever car il reste sous les draps toute la journée !"
  },
  {
    question: "Pourquoi les vampires sont-ils mauvais en jardinage ?",
    options: [
      "Parce qu'ils détestent les gousses d’ail",
      "Parce qu’ils ne voient rien de jour",
      "Parce qu'ils préfèrent les plantes carnivores",
      "Parce qu'ils ne supportent pas le soleil"
    ],
    correct: 0,
    explanation: "Les vampires évitent le jardinage à cause des gousses d'ail, leur pire cauchemar !"
  }
];