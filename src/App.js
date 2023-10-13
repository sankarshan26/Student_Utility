import VideoPlayer from "./Components/VideoPlayer"
import './App.css';
import Topbar from "./Components/Topbar"
import ToDo  from "./Components/ToDo";
import Timer from "./Components/Timer"

function App() {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full"><Topbar /></div>

      {/* Middle section */}
     <div className="flex lg:gap-[4vw] px-3 justify-evenly mt-5">
     <div className=" md:w-[25%] lg:w-[22%] h-[500px]"><ToDo /></div>
     <div className=" md:w-[45%] lg:w-[50%] h-[600px]"><VideoPlayer /></div>
     <div className=" md:w-[25%] lg:w-[22%] h-[500px]"><Timer /></div>
      
      
      
      </div>
    </div>
  );
}

export default App;
