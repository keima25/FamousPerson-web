import React from "react";
import { Modal, Descriptions } from "antd";

const viewmodal = ({ data, onCancel, view }) => (
  <Modal visible={view} onCancel={onCancel} footer={null} width={1000}>
    <Descriptions title="User Info" layout="vertical" bordered>
      <Descriptions.Item label="Name">{data && data.name}</Descriptions.Item>
      <Descriptions.Item label="Mobile Number">
        {data && data.mobile_number}
      </Descriptions.Item>
      <Descriptions.Item label="Email">{data && data.email}</Descriptions.Item>
      <Descriptions.Item label="Age">{data && data.age}</Descriptions.Item>
      <Descriptions.Item label="Gender">
        {data && data.gender}
      </Descriptions.Item>
      <Descriptions.Item label="Address">
        {data && data.address}
      </Descriptions.Item>
      <Descriptions.Item label="Experience">
        {data && data.experience}
      </Descriptions.Item>
      <Descriptions.Item label="Education">
        {data && data.education}
      </Descriptions.Item>
    </Descriptions>
  </Modal>
);

export default viewmodal;
