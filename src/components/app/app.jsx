import { useState, useEffect, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Card, Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeFilled,
  PushpinFilled,
  ReadFilled,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { isNil, map, kebabCase, isEmpty, endsWith } from "lodash";

import "../../styles/app.less";
import { getDish } from "../../data/dish-list";
import dishList from "../../data/dish-list";
import { placeholder } from "../../common/constants";

const { Sider, Header, Content, Footer } = Layout;
const { SubMenu, Item } = Menu;

const App = ({ Child = null }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(
    window.innerWidth <= 1024
  );
  const [currDish, setCurrDish] = useState();
  const history = useHistory();
  const { dish = "" } = useParams();

  useEffect(() => {
    if (dish) {
      let tempDish = getDish(dish);
      if (tempDish) {
        setCurrDish(tempDish);
      }
    }
  }, [dish]);

  const childContent = useMemo(() => {
    if (endsWith(history.location.pathname, "references")) {
      return <Child />;
    } else if (!isEmpty(dish) && !isNil(currDish)) {
      return <Child currDish={currDish} />;
    } else {
      return (
        <div className={"recipe-grid-wrapper"}>
          <div className={"app-recipe-grid"}>
            {map(dishList, (dish) => {
              return (
                <Card
                  hoverable
                  key={`${kebabCase(dish.name)}-card`}
                  onClick={() => history.push(`/${kebabCase(dish.name)}`)}
                  cover={
                    <div
                      className="recipe-grid-image"
                      style={{
                        backgroundImage: `url('${
                          dish.obj.thumbnail ? dish.obj.thumbnail : placeholder
                        }')`,
                      }}
                    ></div>
                  }
                >
                  <Card.Meta title={dish.name} />
                </Card>
              );
            })}
          </div>
        </div>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location, history, currDish, dish]);

  return (
    <Layout>
      <Layout id="main" hasSider={true}>
        <Sider
          className="main-sider header-font"
          collapsible={true}
          collapsed={siderCollapsed}
          collapsedWidth={60}
          width={250}
          trigger={null}
          onCollapse={(collapsed) => setSiderCollapsed(collapsed)}
        >
          <Header className="main-sider-header">
            <Button
              type="primary"
              size="large"
              onClick={() => setSiderCollapsed(!siderCollapsed)}
              icon={
                siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
              }
            />
          </Header>
          <Menu theme="dark" className="main-sider-menu" mode={"inline"}>
            <Item
              key="home-link"
              icon={<HomeFilled />}
              onClick={() => {
                setCurrDish(undefined);
                history.push("/");
                setSiderCollapsed(true);
              }}
            >
              Home
            </Item>
            <Item
              key="references-link"
              icon={<ReadFilled />}
              onClick={() => {
                setCurrDish(undefined);
                history.push("/references");
                setSiderCollapsed(true);
              }}
            >
              Reference List
            </Item>
            <SubMenu
              key="dish-list"
              title="Dishes"
              icon={<UnorderedListOutlined />}
            >
              {map(dishList, (dish) => (
                <Item
                  key={`${kebabCase(dish.name)}-link`}
                  icon={<PushpinFilled />}
                  onClick={() => {
                    history.push(`/${kebabCase(dish.name)}`);
                    setSiderCollapsed(true);
                  }}
                >
                  {dish.name}
                </Item>
              ))}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="app-layout">
          <Header className="app-header header-font">
            {isNil(currDish)
              ? endsWith(history.location.pathname, "references")
                ? "Reference List"
                : "National Chocolate Recipies"
              : currDish.name}
          </Header>
          <Content
            className="app-content body-font"
            style={{
              backgroundImage: `url("${process.env.PUBLIC_URL}/gingham.png")`,
            }}
          >
            {childContent}
          </Content>
        </Layout>
      </Layout>
      <Footer className="app-footer header-font">
        Made by&nbsp;<b>Cam Skubik-Peplaski</b>&nbsp;for&nbsp;
        <b>RALL3080 Chocolate and Power</b>, Spring Semester 2021.
      </Footer>
    </Layout>
  );
};

export default App;
