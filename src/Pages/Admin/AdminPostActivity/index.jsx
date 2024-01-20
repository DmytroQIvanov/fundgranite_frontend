import React from "react";
import Input from "../../../Components/ReComponents/Input";

const AdminPostActivity = () => {
  return (
    <div style={{ width: "80%", margin: "20px   auto" }}>
      <h1>Український варіант</h1>
      <Input title={{ text: "Назва посту" }} />
      <Input title={{ text: "Короткий опис посту" }} />
      <Input type={"textarea"} title={{ text: "Повний опис посту" }} />
      <Input title={{ text: "Теги (через кому)" }} />
      <h1>Англійський варіант</h1>
      <Input title={{ text: "Назва посту" }} />
      <Input title={{ text: "Короткий опис посту" }} />
      <Input type={"textarea"} title={{ text: "Повний опис посту" }} />
      <Input title={{ text: "Теги (через кому)" }} />

      <h1>Фото чи відео</h1>
      <Input title={{ text: "" }} />
    </div>
  );
};

export default AdminPostActivity;
