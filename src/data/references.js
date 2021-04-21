import { findIndex } from "lodash";

const link_template = (link) =>
  `<<a href=${link} target="_blank" rel="noreferrer" >${link}</a>>`;

export const getRefIndexBySubstring = (substring) => {
  return findIndex(reference_list, (ref) => ref.search(substring) !== -1);
};

const reference_list = [
  // 0
  `‘Mpanatigghi (sicilian chocolate-meat cookies). (2018). Retrieved from ${link_template(
    "https://www.saveur.com/sicilian-chocolate-meat-cookie-recipe/"
  )}`,
  // 1
  `2016 1128 turin bicerin 01. Retrieved from ${link_template(
    "https://commons.wikimedia.org/wiki/File:2016_1128_Turin_Bicerin_01.jpg"
  )}`,
  // 2
  `25331-xocolatl-spicy-aztec-hot-chocolate. Retrieved from ${link_template(
    "https://www.joyfulbelly.com/Ayurveda/recipe/Xocolatl-Spicy-Aztec-Hot-Chocolate/25331"
  )}`,
  // 3
  `Artusi, P., Baca, M., & Ballerini, L. (2003). <i>Science in the kitchen and the art of eating well</i> University of Toronto Press, Scholarly Publishing Division.`,
  // 4
  `Authentic rigó jancsi recipe. Retrieved from ${link_template(
    "https://www.tasteatlas.com/rigo-jancsi/recipe"
  )}`,
  // 5
  `Babka-czekoladowa-z-szampanem-266293. Retrieved from ${link_template(
    "https://gotujmy.pl/babka-czekoladowa-z-szampanem,przepisy-babka-czekoladowa-przepis,212162.html"
  )}`,
  // 6
  `Benayoun, M. (a). 28 chocolate recipes from around the world  . Retrieved from ${link_template(
    "https://www.196flavors.com/chocolate-recipes-from-around-the-world/"
  )}`,
  // 7
  `Benayoun, M. (b). Sachertorte - traditional austrian recipe | 196 flavors . Retrieved from ${link_template(
    "https://www.196flavors.com/austria-sachertorte/"
  )}`,
  // 8
  `Box, N. (2018). Authentic italian cannoli recipe  . Retrieved from ${link_template(
    "https://www.nonnabox.com/authentic-italian-cannoli-recipe/"
  )}`,
  // 9
  `The bicerin. Retrieved from ${link_template(
    "https://bicerin.it/en/the-bicerin/"
  )}`,
  // 10
  `Caribbean-hot-chocolate-tea. Retrieved from ${link_template(
    "https://www.homemadezagat.com/2016/01/caribbean-chocolate-tea.html"
  )}`,
  // 11
  `Carletti's world: An early modern global voyage. (2021). Retrieved from ${link_template(
    "https://www.eui.eu/DepartmentsAndCentres/HistoryAndCivilization/ResearchAndTeaching/ResearchProjects/Carletti-world-an-early-modern-global-voyage"
  )}`,
  // 12
  `Champorado2. Retrieved from ${link_template(
    "https://commons.wikimedia.org/wiki/File:Champorado2.jpg"
  )}`,
  // 13
  `Champurrado (mexican chocolate drink). (2020). Retrieved from ${link_template(
    "https://www.isabeleats.com/champurrado/#wprm-recipe-container-24524"
  )}`,
  // 14
  `Chandran, S. (2015). Teatime around the world: Teatime in the caribbean. Retrieved from ${link_template(
    "https://www.myteadrop.com/blogs/news/116779972-teatime-around-the-world-teatime-in-the-caribbean"
  )}`,
  // 15
  `Cocoa tea: The best hot beverage you’re not drinking, but should be. Retrieved from ${link_template(
    "https://www.foodrepublic.com/2014/08/18/cocoa-tea-the-best-hot-beverage-youre-not-drinking-but-should-be/"
  )}`,
  // 16
  `Coe, S. D., & Coe, M. D. (2013). <i>The true history of chocolate</i> (3rd ed.) Thames and Hudson, Ltd.`,
  // 17
  `Cordova, P. (2013). Champurrado recipe - a traditional mexican hot chocolate drink. Retrieved from ${link_template(
    "https://livingmividaloca.com/easy-champurrado-mexican-hot-chocolate-recipe/"
  )}`,
  // 18
  `Demark, N. (2018). Rigo jancsi: A cake, A legend, a forbidden love. Retrieved from ${link_template(
    "https://www.total-croatia-news.com/lifestyle/27596-rigo-jancsi-a-cake-a-legend-a-forbidden-love"
  )}`,
  // 19
  `French country food. Retrieved from ${link_template(
    "https://www.frenchcountryfood.com/recipes/desserts/profiterolles.html"
  )}`,
  // 20
  `Gerrard, G. (07/19/19). Authentic mole poblano. Retrieved from ${link_template(
    "https://www.thespruceeats.com/authentic-mole-poblano-recipe-2314013"
  )}`,
  // 21
  `Hammond, D. (2017). Making atole, a warm, liquid gift from ancient mexico. Retrieved from ${link_template(
    "https://www.chicagotribune.com/dining/drink/sc-atole-drink-food-0421-20170418-story.html"
  )}`,
  // 22
  `Heberle, M. O. (1987). <i>Polish cooking</i> HP Trade.`,
  // 23
  `Horchata de morro. Retrieved from ${link_template(
    "https://www.196flavors.com/el-salvador-horchata-de-morro/"
  )}`,
  // 24
  `How to make bicerin. Retrieved from ${link_template(
    "https://www.eataly.com/us_en/magazine/eataly-recipes/bicerin-recipe/"
  )}`,
  // 25
  `Jitchotvisut, J. (2019). 11 chocolate desserts around the world that you need to try. Retrieved from ${link_template(
    "https://www.insider.com/chocolate-desserts-to-try-around-the-world-2019-6"
  )}`,
  // 26
  `Laudan, R., & Pilcher, J. M. (1995). Chiles, chocolate, and race in new spain: Glancing backward to spain or looking forward to mexico?. <i>Eighteenth Century Life</i>, 23, 59-70.`,
  // 27
  `Making profiterole. Retrieved from ${link_template(
    "https://commons.wikimedia.org/wiki/File:Making_Profiterole.jpg"
  )}`,
  // 28
  `Mini cannoli with chocolate chips. Retrieved from ${link_template(
    "https://commons.wikimedia.org/wiki/File:Mini_cannoli_with_chocolate_chips.jpg"
  )}`,
  // 29
  `'Mpanatigghi . Retrieved from ${link_template(
    "https://commons.wikimedia.org/wiki/File:%27Mpanatigghi_.jpg"
  )}`,
  // 30
  `Ortiz, E. L. (1994). <i>The book of latin american cooking</i> Ecco.`,
  // 31
  `Pinel, F. (2019). Rigó jancsi: The princess, the fiddler, and the cake. Retrieved from ${link_template(
    "https://foodperestroika.com/2019/11/22/rigo-jancsi-the-princess-the-fiddler-and-the-cake/"
  )}`,
  // 32
  `Polish chocolate babka {babka czekoladowa}. Retrieved from ${link_template(
    "https://www.polishyourkitchen.com/polishrecipes/polish-chocolate-babka-babka-czekoladowa/"
  )}`,
  // 33
  `Pollo en mole - mayo 2019. Retrieved from ${link_template(
    "https://commons.wikimedia.org/wiki/File:Pollo_en_mole_-_Mayo_2019.jpg"
  )}`,
  // 34
  `Sachertorte DSC03027 retouched. Retrieved from ${link_template(
    "https://commons.wikimedia.org/wiki/File:Sachertorte_DSC03027_retouched.jpg"
  )}`,
  // 35
  `Segan, F. (2018). Chocolate’s italian history . Retrieved from ${link_template(
    "https://www.italymagazine.com/featured-story/chocolates-italian-history"
  )}`,
  // 36
  `A taste of empire – gibraltar. Retrieved from ${link_template(
    "https://grannyrobertsonscookbook.com/2016/05/19/a-taste-of-empire-gibraltar/"
  )}`,
  // 37
  `Traditional cocoa tea (caribbean hot chocolate). Retrieved from ${link_template(
    "https://caribbeanpot.com/traditional-cocoa-tea-caribbean-hot-chocolate/"
  )}`,
  // 38
  `World history through 5 hot chocolate recipes. Retrieved from ${link_template(
    "https://www.openwidetheworld.com/blog/world-history-5-hot-chocolate-recipes"
  )}`,
];

export default reference_list;
