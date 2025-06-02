import { Form, Input } from "antd";
import { useState } from "react";
import styles from "./styles.module.css";

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
        rules={[{ required: true, message: "Please enter a todo" }]}
        className={styles.item}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className={styles.input}
        />
      </Form.Item>
    </Form>
  );
};

export default TodoInput;
