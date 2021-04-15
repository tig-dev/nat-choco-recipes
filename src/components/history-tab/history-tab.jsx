import { Descriptions } from "antd";
import { map } from "lodash";

import "../../styles/history.less";

const { Item } = Descriptions;

const HistoryTab = ({ currDish }) => (
  <div className="info-tab">
    <Descriptions
      layout="vertical"
      bordered={true}
      className="info-descriptions"
      column={1}
    >
      <Item label={<div className="info-desc-header">History</div>}>
        {map(currDish.obj.history.split("<br />"), (paragraph) => (
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </Item>
    </Descriptions>
  </div>
);

export default HistoryTab;