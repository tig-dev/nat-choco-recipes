import { Table, List, Steps } from "antd";
import { kebabCase, map, keys, startCase } from "lodash";
import "../../styles/recipe.less";

const { Column } = Table;
const { Step } = Steps;

const RecipeTab = ({ currDish }) => {
  return (
    <div className="recipe-tab">
      <div className="recipe-top">
        <img src={`${currDish.obj.thumbnail}`} alt={`${currDish.name}`} />
      </div>
      <div className="recipe-bottom">
        <div className="ingredients-list">
          <List
            className="ingredients-header header-font"
            header="Ingredients"
            children={
              <Table
                bordered={true}
                dataSource={
                  keys(currDish.obj.ingredients).length === 1
                    ? currDish.obj.ingredients[keys(currDish.obj.ingredients)[0]]
                    : map(currDish.obj.ingredients, (list, key) => {
                        return {
                          name: key,
                          amount: "",
                          children: list,
                        };
                      })
                }
                rowKey="name"
                pagination={false}
                size="small"
              >
                <Column
                  key="name"
                  dataIndex="name"
                  title="Name"
                  render={(value) => startCase(value)}
                />
                <Column key="amount" dataIndex="amount" title="Quantity" />
              </Table>
            }
          />
        </div>
        <div className="recipe-steps">
          <List
            className="steps-header header-font"
            header="Steps"
            children={
              <Steps direction="vertical">
                {map(currDish.obj.steps, (step, key) => (
                  <Step
                    title={step}
                    status="process"
                    key={`${kebabCase(currDish.name)}-${key}`}
                  />
                ))}
              </Steps>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeTab;
