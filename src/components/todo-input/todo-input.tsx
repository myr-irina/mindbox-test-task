import { Form, Input } from "antd";
import { useState } from "react";

const TodoInput = ({ onAdd }: { onAdd: (text: string) => void }) => {
  const [form] = Form.useForm();
  const [text, setText] = useState("");

  const onFinish = () => {
    const trimmedText = text.trim();
    if (!trimmedText) return;
    onAdd(trimmedText);
    setText("");
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="todo"
        rules={[{ required: true, message: "Please enter a todo" }]}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
        />
      </Form.Item>
    </Form>
  );
};

export default TodoInput;
