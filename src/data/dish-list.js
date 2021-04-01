import {
  camelCase,
  intersection,
  kebabCase,
  lowerCase,
  snakeCase,
  startCase,
  upperCase,
} from "lodash";
import { MolePoblano, Cannelloni, RigoJancsi } from "./dish-data";

const dish_list = [
  {
    name: "Mole Poblano",
    obj: MolePoblano,
  },
  {
    name: "Chocolate Canneloni",
    obj: Cannelloni,
  },
  {
    name: "Rigó Jancsi",
    obj: RigoJancsi,
  },
];

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
    if (
      intersection(testInputs, makeTestNames(dish_list[n].name)).length > 0
    ) {
      return dish_list[n];
    }
  }
  return null;
};

export default dish_list;
