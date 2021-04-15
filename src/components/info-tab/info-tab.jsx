import { Descriptions } from "antd";
import { map } from "lodash";

import "../../styles/info.less";

const { Item } = Descriptions;

const InfoTab = ({ currDish }) => (
  <div className="info-tab">
    <Descriptions
      layout="vertical"
      bordered={true}
      className="info-descriptions"
      column={1}
    >
      <Item
        label={<div className="info-desc-header">{`${currDish.name} - ${currDish.obj.country} ${currDish.obj.origin && `(${currDish.obj.origin})`}`}</div>}
      >
        <div className="info-desc-row">
          <img src={`${currDish.obj.thumbnail}`} alt={`${currDish.name}`} />
          <div
            dangerouslySetInnerHTML={{
              __html: currDish.obj.shortDescription,
            }}
          />
        </div>
      </Item>
      <Item label="More Information">
        {map(currDish.obj.description.split("<br />"), (paragraph) => (
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </Item>
    </Descriptions>
  </div>
);

export default InfoTab;
