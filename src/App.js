import React from 'react';
import VideoPlayer from './Components/VideoPlayer';
import './App.css';
import Topbar from './Components/Topbar';
import ToDo from './Components/TodoList';
import DarkModeToggle from './Components/DarkModeToggle';
import Countdown from './Components/Countdown';
import NoteMaker from './Components/NoteMaker';

function App() {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full">
        <Topbar />
        <div className="absolute top-0 right-0 m-4">
          <DarkModeToggle />
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap lg:gap-4 px-3 mt-5">
        <div className="md:w-100 lg:w-1/4 mb-5 pr-3"> {/* 1st component */}
          <ToDo />
        </div>
        <div className="md:w-100 lg:w-3/4 lg:pl-4 mb-5"> {/* 2nd component */}
          <VideoPlayer />
        </div>
        <div className="md:w-100 lg:w-1/3 lg:pl-4 mb-5"> {/* 3rd component */}
          <Countdown />
        </div>
        <div className="md:w-100 lg:w-1/3 lg:pl-4"> {/* 4th component at the bottom */}
          <NoteMaker />
        </div>
      </div>
    </div>
  );
}

export default App;
