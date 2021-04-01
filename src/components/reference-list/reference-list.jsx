import { Table, Button } from "antd";

import "../../styles/reference-list.less";
import reference_list from "../../data/references";

const { Column } = Table;

const ReferenceList = () => (
  <div className="reference-list header-font">
    <Table
      className="reference-table body-font"
      dataSource={reference_list}
      pagination={false}
    >
      <Column title="Reference Type" width="15%" dataIndex="type" key="type" />
      <Column title="Reference Name" dataIndex="name" key="name" />
      <Column
        title="Source"
        width="15%"
        dataIndex="source"
        key="source"
        render={(value) => (
          <Button href={value} target="_blank" type="primary">
            Link
          </Button>
        )}
      />
    </Table>
  </div>
);

export default ReferenceList;
