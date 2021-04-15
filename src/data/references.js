const link_template = (link) => `<<a href=${link}>${link}</a>>`;

const reference_list = [
  `"Authentic Rigó Jancsi recipe." <i>tasteatlas</i>. Web. ${link_template(
    "https://www.tasteatlas.com/rigo-jancsi/recipe"
  )}.`,
  `Gerrard, Gene. "Authentic Mole Poblano." 07/19/19 07/19/19. Web. ${link_template(
    "https://www.thespruceeats.com/authentic-mole-poblano-recipe-2314013"
  )}.`,
  `"Heberle, Marianna Olszewska. <i>Polish Cooking</i>. HP Trade, 1987. Print.`,
  `Pinel, Florian. "Rigó Jancsi: the Princess, the Fiddler, and the Cake." <i>Food Perestroika</i>. November 22, 2019. Web. ${link_template(
    "https://foodperestroika.com/2019/11/22/rigo-jancsi-the-princess-the-fiddler-and-the-cake/"
  )}.`,
];

export default reference_list;
