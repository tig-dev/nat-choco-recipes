import { Descriptions, Badge, Tooltip } from "antd";
import { ReadOutlined } from "@ant-design/icons";
import { isEmpty, lowerCase, map } from "lodash";

import "../../styles/info.less";

const { Item } = Descriptions;
const { Ribbon } = Badge;

const InfoTab = ({ currDish }) => (
  <div className="info-tab">
    <Descriptions
      layout="vertical"
      bordered={true}
      className="info-descriptions"
      column={1}
    >
      <Item
        label={
          <div className="info-desc-header">{`${currDish.name} - ${
            currDish.obj.country
          } ${currDish.obj.origin && `(${currDish.obj.origin})`}`}</div>
        }
      >
        <div className="info-desc-row">
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
          <div className="info-text">
            {map(currDish.obj.description.split("<br />"), (paragraph) => (
              <div
                key={lowerCase(paragraph)}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </div>
      </Item>
      {!isEmpty(currDish.obj.history) && (
        <Item label="History">
          {map(currDish.obj.history.split("<br />"), (paragraph) => (
            <div
              key={lowerCase(paragraph)}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </Item>
      )}
    </Descriptions>
  </div>
);

export default InfoTab;
