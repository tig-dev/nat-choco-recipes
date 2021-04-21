import {
  camelCase,
  intersection,
  kebabCase,
  lowerCase,
  snakeCase,
  startCase,
  upperCase,
} from "lodash";
import MolePoblano from "./dishes/mole-poblano";
import RigoJancsi from "./dishes/rigo-jancsi";
import Cannoli from "./dishes/cannoli";
import Profiteroles from "./dishes/profiteroles";
import BabkaCzekoladowa from "./dishes/babka-czekoladowa";
import Bicerin from "./dishes/bicerin";
import Champurrado from "./dishes/champurrado";
import CocoaTea from "./dishes/cocoa-tea";
import HorchataDeMorro from "./dishes/horchata-de-morro";
import Mpanatigghi from "./dishes/mpanatigghi";
import SacherTorte from "./dishes/sacher-torte";
import Xocolatl from "./dishes/xocolatl";

export const getDish = (name) => {
  const makeTestNames = (testName) => [
    testName,
    camelCase(testName),
    kebabCase(testName),
    lowerCase(testName),
    snakeCase(testName),
    startCase(testName),
    upperCase(testName),
  ];

  let testInputs = makeTestNames(name);
  for (let n = 0; n < dish_list.length; n++) {
    if (intersection(testInputs, makeTestNames(dish_list[n].name)).length > 0) {
      return dish_list[n];
    }
  }
  return null;
};

const dish_list = [
  {
    name: "Babka Czekoladowa",
    obj: BabkaCzekoladowa,
  },
  {
    name: "Bicerin",
    obj: Bicerin,
  },
  {
    name: "Cannoli",
    obj: Cannoli,
  },
  {
    name: "Champurrado",
    obj: Champurrado,
  },
  {
    name: "Cocoa Tea",
    obj: CocoaTea,
  },
  {
    name: "Horchata de Morro",
    obj: HorchataDeMorro,
  },
  {
    name: "Mole Poblano",
    obj: MolePoblano,
  },
  {
    name: "'Mpanatigghi",
    obj: Mpanatigghi,
  },
  {
    name: "Profiteroles",
    obj: Profiteroles,
  },
  {
    name: "Rigó Jancsi",
    obj: RigoJancsi,
  },
  {
    name: "Sacher-Torte",
    obj: SacherTorte,
  },
  {
    name: "Xocolatl",
    obj: Xocolatl,
  },
];

export default dish_list;
