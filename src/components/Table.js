import React from "react";
import { Table, Tag, Button } from "antd";

const table = ({ data, editData, View }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name, record) => <Button type="link" onClick={() => View(record)}>{name}</Button>
    },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: gender => (
        <Tag color={gender === "Male" ? "geekblue" : "magenta"}>{gender}</Tag>
      )
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Button type="link" onClick={() => editData(record)}>
          Edit
        </Button>
      )
    }
  ];

  return (
    <div style={{ marginTop: 50 }}>
      <Table dataSource={data} columns={columns} rowKey="name" />
    </div>
  );
};

export default table;
