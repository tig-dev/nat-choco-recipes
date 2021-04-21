import { Descriptions, List } from "antd";

import "../../styles/notes.less";

const { Item } = Descriptions;

const NotesTab = ({ currDish }) => (
  <div className="notes-tab">
    <Descriptions
      layout="vertical"
      bordered={true}
      className="notes-descriptions"
      column={1}
    >
      <Item
        label={<div className="notes-desc-header">{currDish.name} - Notes</div>}
      >
        <List
          dataSource={currDish.obj.notes}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <div dangerouslySetInnerHTML={{ __html: `•&nbsp;${item}` }} />
            </List.Item>
          )}
        />
      </Item>
    </Descriptions>
  </div>
);

export default NotesTab;
