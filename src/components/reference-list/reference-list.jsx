import { Button, List, Table } from "antd";
import { lowerCase, filter, indexOf, kebabCase, uniq, cloneDeep } from "lodash";
import { useHistory } from "react-router";

import "../../styles/reference-list.less";
import reference_list from "../../data/references";
import dish_list from "../../data/dish-list";

const { Column } = Table;

const ReferenceList = () => {
  const history = useHistory();
  let data = cloneDeep(reference_list);
  data = data.sort((a, b) => lowerCase(a) - lowerCase(b));
  data = uniq(data);

  return (
    <div className="reference-list header-font">
      <Table
        className="reference-table"
        dataSource={data}
        pagination={false}
        rowClassName="body-font"
        rowKey={(record) => kebabCase(record)}
        expandable={{
          expandedRowClassName: () => "used-in-list-row",
          expandedRowRender: (record) => {
            const orig_index = indexOf(reference_list, record);
            const foods = filter(dish_list, (value) =>
              value.obj.references.includes(orig_index)
            );

            return (
              <List
                className="used-in-list body-font"
                header={<span className="header-font">Used In:</span>}
                size="small"
                bordered="false"
                pagination={false}
                dataSource={foods}
                rowKey={(record) => kebabCase(record.name)}
                renderItem={(item) => (
                  <Button
                    type="link"
                    onClick={() => {
                      history.push(`/nat-choco-recipes/${kebabCase(item.name)}`);
                    }}
                  >
                    {item.name}
                  </Button>
                )}
              />
            );
          },
          rowExpandable: (record) => {
            const orig_index = indexOf(reference_list, record);
            const foods = filter(dish_list, (value) =>
              value.obj.references.includes(orig_index)
            );

            return foods.length >= 1;
          },
        }}
      >
        <Column
          title=""
          width="5%"
          render={(value, record, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a id={`#${index}`}>{index + 1}</a>
          )}
        />
        <Column
          title="References"
          render={(record) => (
            <div dangerouslySetInnerHTML={{ __html: record }} />
          )}
        />
      </Table>
    </div>
  );
};

export default ReferenceList;
