import { Card, Collapse, Descriptions, List } from "antd";
import { useHistory } from "react-router-dom";
import { getRefIndexBySubstring } from "../../data/references";

import "../../styles/usage.less";

const { Panel } = Collapse;
const { Item: DescItem } = Descriptions;
const { Item: ListItem } = List;

const ChocolateUsage = () => {
  const history = useHistory();

  return (
    <div className={"usage-page"}>
      <Card type="inner" bordered={false} className="usage-tab-content">
        <Collapse accordion defaultActiveKey="1">
          <Panel key="1" header="Usage by Dish Type">
            <Descriptions col="3" layout="vertical" bordered={true}>
              <DescItem label="Savory">
                <List>
                  <ListItem>
                    Sauces for these dishes are made using either solid
                    chocolate or cocoa powder.
                  </ListItem>
                  <ListItem>
                    Cacao beans may be ground into powder to use as a seasoning
                    for any part of the dish.
                  </ListItem>
                  <ListItem>
                    After being chopped or ground, solid chocolate can be used
                    in fillings alongside savory ingredients.
                  </ListItem>
                </List>
              </DescItem>
              <DescItem label="Drink">
                <List>
                  <ListItem>
                    Cocoa powder is dissolved into a liquid like water or milk
                    for flavoring
                  </ListItem>
                  <ListItem>
                    Some drinks may instead heat the liquid first, then melt
                    solid chocolate into it.
                  </ListItem>
                </List>
              </DescItem>
              <DescItem label="Dessert">
                <List>
                  <ListItem>
                    Chocolate is used as a flavoring for cakes and treats,
                    usually in the form of cocoa powder.
                  </ListItem>
                  <ListItem>
                    Both cocoa powder and solid chocolate can be incorporated
                    into frostings, glazes, sauces, and more.
                  </ListItem>
                  <ListItem>
                    Solid chocolate, as chips or chunks, is also used as a
                    mix-in for cakes, treats, frostings, and fillings.
                  </ListItem>
                </List>
              </DescItem>
            </Descriptions>
          </Panel>
          <Panel key="2" header="Regional Usage Observations">
            <Descriptions col="3" layout="vertical" bordered={true}>
              <DescItem label="Hispanoamérica">
                <List>
                  <ListItem>
                    Savory meals may have a sauce that incoporates chocolate,
                    such as{" "}
                    <span
                      className="dish-link"
                      onClick={() => history.push("/nat-choco-recipes/mole-poblano")}
                    >
                      Mole Poblano
                    </span>
                    .
                  </ListItem>
                  <ListItem>
                    Chocolate is incorporated into drinks, usually served hot,
                    which may be taken instead of a morning coffee.
                  </ListItem>
                  <ListItem>
                    Solid chocolate, as chips or chunks, is also used as a
                    mix-in for cakes, treats, frostings, and fillings.
                  </ListItem>
                </List>
              </DescItem>
              <DescItem label="Europe">
                <List>
                  <ListItem>
                    Dishes from Europe, excepting Italy, were mostly desserts,
                    with chocolate being used as flavoring for 1 or more
                    component(s) of the dish.
                  </ListItem>
                </List>
              </DescItem>
              <DescItem label="Italy">
                <List>
                  <ListItem>
                    At some point or another, Italian chefs likely experimented
                    with using chocolate to season any dish they created.
                  </ListItem>
                  <ListItem>
                    "...it’s important to remember that cacao beans are seeds.
                    Like many other seeds...they are not sweet and may be used
                    as a spice" - G.B. Mantelli{" "}
                    <span
                      className="dish-link"
                      onClick={() =>
                        history.push(
                          `/nat-choco-recipes/references#${getRefIndexBySubstring("Segan")}`
                        )
                      }
                    >
                      (Segan, 2018)
                    </span>
                  </ListItem>
                </List>
              </DescItem>
            </Descriptions>
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
};

export default ChocolateUsage;
