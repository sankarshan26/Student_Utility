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
          "author": "Johann Wolfgang von Goethe, type.fit"
        },
        {
          "text": "Fate is in your hands and no one elses",
          "author": "Byron Pulsifer, type.fit"
        },
        {
          "text": "Be the chief but never the lord.",
          "author": "Lao Tzu, type.fit"
        },
        {
          "text": "Nothing happens unless first we dream.",
          "author": "Carl Sandburg, type.fit"
        },
        {
          "text": "Well begun is half done.",
          "author": "Aristotle, type.fit"
        },
        {
          "text": "Life is a learning experience, only if you learn.",
          "author": "Yogi Berra"
        },
        {
          "text": "Self-complacency is fatal to progress.",
          "author": "Margaret Sangster, type.fit"
        },
        {
          "text": "Peace comes from within. Do not seek it without.",
          "author": "Buddha, type.fit"
        },
        {
          "text": "What you give is what you get.",
          "author": "Byron Pulsifer, type.fit"
        },
        {
          "text": "We can only learn to love by loving.",
          "author": "Iris Murdoch, type.fit"
        },
        {
          "text": "Life is change. Growth is optional. Choose wisely.",
          "author": "Karen Clark, type.fit"
        },
        {
          "text": "You'll see it when you believe it.",
          "author": "Wayne Dyer, type.fit"
        },
        {
          "text": "Today is the tomorrow we worried about yesterday.",
          "author":  "type.fit"
        }
      ]

      const x = Math.floor(Math.random()*16);

  return (
    <>
     <div className="bg-[#010b1c]  md:hidden flex flex-wrap w-full items-center text-base justify-center text-white py-4 px-0" >
       <a href="#"  className="mr-5">To Do</a>
       <a href="#" className="mr-5">Video Player</a>
       <a href="#" className="mr-5">Notes</a>
       <a href="#" className="mr-5">Bookmarks</a>
</div>
    <div className='hidden md:block bg-[#010b1c] text-center w-full py-4 px-8 md:min-w-[700px]'>
        <h1 className='text-white text-2xl tracking-wide font-serif'>{data[x].text}</h1>
    </div></>
  )
}

export default Topbar