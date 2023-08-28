import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [item, setItem] = useState([]);

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function hanldeToggleItems(id) {
    setItem((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");

    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form setItem={setItem} />
      <PackingList
        items={item}
        onDeleteItem={handleDeleteItem}
        onToggleItem={hanldeToggleItems}
        onCearList={handleClearList}
      />
      <Stats items={item} />
    </div>
  );
}
