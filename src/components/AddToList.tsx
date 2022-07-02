import React, { useState } from "react";
import { IState } from "../App";
interface IProps {
  people: IState["people"];
  setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>;
}
const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) return;
    setPeople([
      ...people,
      {
        name: input.name,
        age: Number(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({ name: "", age: "", url: "", note: "" });
  };
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        name="age"
        value={input.age}
        className="AddToList-input"
        onChange={handleChange}
      />
      <input
        type="text"
        name="url"
        placeholder="Image Url"
        value={input.url}
        className="AddToList-input"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        value={input.note}
        name="note"
        className="AddToList-input"
        onChange={handleChange}
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
