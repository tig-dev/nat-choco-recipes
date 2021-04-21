import { Table, List, Steps, Badge, Tooltip } from "antd";
import { kebabCase, map, keys, startCase } from "lodash";
import { ReadOutlined } from "@ant-design/icons";

import "../../styles/recipe.less";

const { Column } = Table;
const { Step } = Steps;
const { Ribbon } = Badge;

const RecipeTab = ({ currDish }) => {
  return (
    <Ribbon
      className="source-ribbon"
      color="#9254de"
      placement="start"
      text={
        <a
          href={currDish.obj.recipeSource.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="source-ribbon-text">
            From:&nbsp;
            <i>
              <u>{currDish.obj.recipeSource.name}</u>
            </i>
          </div>
        </a>
      }
    >
      <div className="recipe-tab">
        <div className="recipe-top">
          <Ribbon
            className="source-ribbon"
            color="#9254de"
            text={
              <Tooltip title="Open Image Source">
                <a
                  href={currDish.obj.thumbnailLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ReadOutlined className="source-ribbon-text" />
                </a>
              </Tooltip>
            }
          >
            <img src={`${currDish.obj.thumbnail}`} alt={`${currDish.name}`} />
          </Ribbon>
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
                      ? currDish.obj.ingredients[
                          keys(currDish.obj.ingredients)[0]
                        ]
                      : map(currDish.obj.ingredients, (list, key) => {
                          return {
                            name: key,
                            amount: "",
                            children: list,
                            expand: true,
                          };
                        })
                  }
                  expandable={{
                    rowExpandable: (record) => record.expand,
                  }}
                  rowKey="name"
                  pagination={false}
                  size="small"
                >
                  <Column
                    key="name"
                    dataIndex="name"
                    title="Name"
                    // using code from https://stackoverflow.com/a/58254980
                    render={(value, record) =>
                      record.optional
                        ? `${value.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
                            match.toUpperCase()
                          )} (optional)`
                        : value.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
                            match.toUpperCase()
                          )
                    }
                  />
                  <Column
                    key="amount"
                    dataIndex="amount"
                    title="Quantity"
                    className="quantity-col"
                  />
                </Table>
              }
            />
          </div>
          {keys(currDish.obj.steps).includes("main") ? (
            <div className="recipe-steps">
              <List
                className="steps-header header-font"
                header="Steps"
                children={
                  <Steps direction="vertical">
                    {map(currDish.obj.steps.main, (step, key) => (
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
          ) : (
            <div className="recipe-steps">
              {map(currDish.obj.steps, (group, key) => (
                <List
                  className="steps-header header-font"
                  header={`Steps - ${startCase(key)}`}
                  key={key}
                  children={
                    <Steps direction="vertical">
                      {map(group, (step, key) => (
                        <Step
                          title={step}
                          status="process"
                          key={`${kebabCase(currDish.name)}-${key}`}
                        />
                      ))}
                    </Steps>
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Ribbon>
  );
};

export default RecipeTab;
