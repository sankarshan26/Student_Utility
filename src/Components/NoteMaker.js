import React, { useState } from 'react';
import produce from 'immer';

const Notes = ({ data }) => data.map((note, index) => <div key={index}>{note.text}</div>);

const NoteMaker = () => {
  const initialData = [{ text: 'Hey' }, { text: 'There' }];
  const [data, setData] = useState(initialData);

  const handleClick = () => {
    const text = document.querySelector('#noteinput').value.trim();
    if (text) {
      const nextState = produce(data, draftState => {
        draftState.push({ text });
      });
      document.querySelector('#noteinput').value = '';
      setData(nextState);
    }
  };

  return (
    <div
      style={{
        border: '5px solid #ccc', // Add a border with a 1px solid gray color
        borderRadius: '5px',
        padding: '16px',
        margin: '8px 0',
      }}
    >
      <input id="noteinput" style={{ width: '80%' }} type="text" placeholder="Enter a new note" />
      <button
        onClick={handleClick}
        style={{
          borderRadius: '5px',
          padding: '8px 16px',
          margin: '8px 0',
          border: '1px solid #007BFF', // Add a border around the button
        }}
      >
        Add note
      </button>
      <Notes data={data} />
    </div>
  );
};

export default NoteMaker;
