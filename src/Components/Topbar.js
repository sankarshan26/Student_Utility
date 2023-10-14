import React, { useState, useEffect } from 'react';

function Topbar() {
    const data =[
        {
          "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
          "author": "Thomas Edison, type.fit"
        },
        {
          "text": "You can observe a lot just by watching.",
          "author": "Yogi Berra, type.fit"
        },
        {
          "text": "A house divided against itself cannot stand.",
          "author": "Abraham Lincoln, type.fit"
        },
        {
          "text": "Difficulties increase the nearer we get to the goal.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "Fate is in your hands and no one elses",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Be the chief but never the lord.",
          "author": "Lao Tzu"
        },
        {
          "text": "Nothing happens unless first we dream.",
          "author": "Carl Sandburg"
        },
        {
          "text": "Well begun is half done.",
          "author": "Aristotle"
        },
        {
          "text": "Life is a learning experience, only if you learn.",
          "author": "Yogi Berra"
        },
        {
          "text": "Self-complacency is fatal to progress.",
          "author": "Margaret Sangster"
        },
        {
          "text": "Peace comes from within. Do not seek it without.",
          "author": "Buddha"
        },
        {
          "text": "What you give is what you get.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "We can only learn to love by loving.",
          "author": "Iris Murdoch"
        },
        {
          "text": "Life is change. Growth is optional. Choose wisely.",
          "author": "Karen Clark"
        },
        {
          "text": "You'll see it when you believe it.",
          "author": "Wayne Dyer"
        },
        {
          "text": "Today is the tomorrow we worried about yesterday.",
          "author":  "Anonymus"
        }
      ]

      const x = Math.floor(Math.random() * 16);

      return (
        <>
          <div className="bg-[#010b1c] md:hidden flex flex-wrap w-full items-center text-base justify-center text-white py-4 px-0">
            <a href="#" className="mr-5">
              To Do
            </a>
            <a href="#" className="mr-5">
              Video Player
            </a>
            <a href="#" className="mr-5">
              Notes
            </a>
            <a href="#" className="mr-5">
              Bookmarks
            </a>
          </div>
          <div className="hidden md:flex justify-center w-full py-4 md:min-w-[700px]">
            <div className="quote-box bg-[#010b1c] text-center text-white rounded p-4 border border-white">
              <h1 className="text-white text-2xl tracking-wide font-serif">
                {data[x].text}
              </h1>
              <p className="text-white mt-2">- {data[x].author}</p>
            </div>
          </div>
        </>
      );
    }
    
    export default Topbar;