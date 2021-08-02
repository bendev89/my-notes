import { useState } from "react";
import "./App.css";
import MenuContainer from "./components/menuContainer";
import NotesContainer from "./components/notesContainer";
import NoteView from "./components/noteView";

function App() {
  const mynotes = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet 1.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil nostrum dicta hic voluptatibus at magni voluptatem ea tenetur. Voluptas vel sapiente at laboriosam ex.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet 2.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil nostrum dicta hic voluptatibus at magni voluptatem ea tenetur. Voluptas vel sapiente at laboriosam ex.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet 3.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil nostrum dicta hic voluptatibus at magni voluptatem ea tenetur. Voluptas vel sapiente at laboriosam ex.",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet 4.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil nostrum dicta hic voluptatibus at magni voluptatem ea tenetur. Voluptas vel sapiente at laboriosam ex.",
    },
  ];
  const [notes, setNotes] = useState(mynotes);
  console.log(notes);
  return (
    <div className="App">
      <MenuContainer />
      <NotesContainer notes={notes} />
      <NoteView />
    </div>
  );
}

export default App;
