import React from "react";
import { Modal, Form, Input, Select, DatePicker, InputNumber } from "antd";
import moment from "moment";

const formmodal = ({
  visible,
  onCancel,
  form,
  addFamousPerson,
  update,
  updateFamousPerson
}) => {
  const { getFieldDecorator, validateFields } = form;

  const rules = {
    rules: [
      {
        required: true,
        message: "This field is required."
      }
    ]
  };

  const emailRules = {
    rules: [
      {
        type: "email",
        required: true,
        message: "The input is not valid E-mail."
      }
    ]
  };

  const submit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        if (update) {
          updateFamousPerson(values);
        } else {
          addFamousPerson(values);
        }
      }
    });
  };

  return (
    <div>
      <Modal
        title="Basic Form"
        visible={visible}
        onOk={submit}
        onCancel={onCancel}
      >
        <Form>
          <Form.Item label="Name" hasFeedback>
            {getFieldDecorator("name", rules)(<Input />)}
          </Form.Item>
          <Form.Item label="Gender" hasFeedback>
            {getFieldDecorator(
              "gender",
              rules
            )(
              <Select>
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Date Of Birth" hasFeedback>
            {getFieldDecorator("date", rules)(<DatePicker />)}
          </Form.Item>
          <Form.Item label="Age" hasFeedback>
            {getFieldDecorator("age", rules)(<InputNumber />)}
          </Form.Item>
          <Form.Item label="Mobile Number" hasFeedback>
            {getFieldDecorator("mobile_number", rules)(<Input type="number" />)}
          </Form.Item>
        </Form>
        <Form.Item label="Email" hasFeedback>
          {getFieldDecorator("email", emailRules)(<Input />)}
        </Form.Item>
        <Form.Item label="Address" hasFeedback>
          {getFieldDecorator("address", rules)(<Input.TextArea />)}
        </Form.Item>
        <Form.Item label="Experience" hasFeedback>
          {getFieldDecorator("experience", rules)(<Input.TextArea />)}
        </Form.Item>
        <Form.Item label="Education" hasFeedback>
          {getFieldDecorator("education", rules)(<Input.TextArea />)}
        </Form.Item>
      </Modal>
    </div>
  );
};

export default Form.create({
  mapPropsToFields(props) {
    const { data } = props;
    return {
      name: Form.createFormField({
        ...props,
        value: data !== null ? data.name : ""
      }),
      gender: Form.createFormField({
        ...props,
        value: data !== null ? data.gender : ""
      }),
      date: Form.createFormField({
        ...props,
        value: data !== null ? moment(data.date) : null
      }),
      age: Form.createFormField({
        ...props,
        value: data !== null ? data.age : ""
      }),
      mobile_number: Form.createFormField({
        ...props,
        value: data !== null ? data.mobile_number : ""
      }),
      email: Form.createFormField({
        ...props,
        value: data !== null ? data.email : ""
      }),
      address: Form.createFormField({
        ...props,
        value: data !== null ? data.address : ""
      }),
      experience: Form.createFormField({
        ...props,
        value: data !== null ? data.experience : ""
      }),
      education: Form.createFormField({
        ...props,
        value: data !== null ? data.education : ""
      })
    };
  }
})(formmodal);
