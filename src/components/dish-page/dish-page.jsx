import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { Tabs, Card } from "antd";

import "../../styles/dish.less";
import AnalysisTab from "../analysis-tab/analysis-tab";
import HistoryTab from "../history-tab/history-tab";
import InfoTab from "../info-tab/info-tab";
import RecipeTab from "../recipe-tab/recipe-tab";

const { TabPane } = Tabs;

const DishPage = ({ currDish }) => {
  // NOTE: tabs are "info", "recipe", "history", "analysis"
  const [currTab, setCurrTab] = useState();
  const { tab = "" } = useParams();

  useEffect(() => {
    if (
      !isEmpty(tab) &&
      ["info", "recipe", "history", "analysis"].includes(tab)
    ) {
      setCurrTab(tab);
    } else {
      setCurrTab("info");
    }
  }, [tab]);

  const dishContent = useMemo(() => {
    switch (currTab) {
      case "info": {
        return <InfoTab currDish={currDish} />;
      }
      case "recipe": {
        return <RecipeTab currDish={currDish} />;
      }
      case "history": {
        return <HistoryTab currDish={currDish} />;
      }
      case "analysis": {
        return <AnalysisTab currDish={currDish} />;
      }
      default: {
        return <InfoTab currDish={currDish} />;
      }
    }
  }, [currTab, currDish]);

  return (
    <div className={"dish-page"}>
      <Card
        type="inner"
        bordered={false}
        title={
          <Tabs
            className={"dish-tabs header-font"}
            defaultActiveKey={"info"}
            activeKey={currTab}
            type="card"
            size="large"
            onChange={(activeKey) => setCurrTab(activeKey)}
          >
            <TabPane tab="Information" key="info" />
            {!isEmpty(currDish.obj.steps) &&
              !isEmpty(currDish.obj.ingredients) && (
                <TabPane tab="Recipe" key="recipe" />
              )}
            {!isEmpty(currDish.obj.history) && (
              <TabPane tab="History" key="history" />
            )}
            {!isEmpty(currDish.obj.analysis) && (
              <TabPane tab="Analyses" key="analysis" />
            )}
          </Tabs>
        }
        className="dish-tab-content"
      >
        {dishContent}
      </Card>
    </div>
  );
};

export default DishPage;
