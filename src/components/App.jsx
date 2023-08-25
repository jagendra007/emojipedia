import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia"


// console.log(emoji)


function createEntry(emojiItem) {
  return (
    <Entry
      key={emojiItem.id}
      emoji={emojiItem.emoji}
      name={emojiItem.name}
      description={emojiItem.meaning}
    />
  )
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">

        {emojipedia.map(createEntry)}

      </dl>

    </div>
  );
}

export default App;
