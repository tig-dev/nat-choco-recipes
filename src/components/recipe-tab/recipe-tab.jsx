import { Table, List, Steps } from "antd";
import { kebabCase, map } from "lodash";
import "../../styles/recipe.less";

const { Column } = Table;
const { Step } = Steps;

const RecipeTab = ({ currDish }) => {
  return (
    <div className="recipe-tab">
      <div className="recipe-top">
        <img src={`${currDish.obj.thumbnail}`} alt={`${currDish.name}`} />
        <div className="ingredients-list">
          <List
            className="ingredients-header header-font"
            header="Ingredients"
            children={
              <Table
                dataSource={currDish.obj.ingredients}
                pagination={false}
                size="small"
              >
                <Column key="name" dataIndex="name" title="Name" />
                <Column key="amount" dataIndex="amount" title="Quantity" />
              </Table>
            }
          />
        </div>
      </div>
      <div className="recipe-bottom">
        <Steps className="recipe-steps" direction="vertical">
          {map(currDish.obj.steps, (step, key) => (
            <Step title={step} key={`${kebabCase(currDish.name)}-${key}`} />
          ))}
        </Steps>
      </div>
    </div>
  );
};

export default RecipeTab;
