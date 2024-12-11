import BackgroundVideo from "./components/BackgroundVideo";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="relative m-0 p-0 overflow-hidden ">
      {/* Background video component */}
      <BackgroundVideo>
        {/* Main content */}
        <div className="relative z-10 text-center text-black font-mono text-m"></div>
        <Navigation />
      </BackgroundVideo>
    </div>
  );
}
