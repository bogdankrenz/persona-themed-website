import BackgroundVideo from "./components/BackgroundVideo";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="m-0 p-0 overflow-hidden ">
      {/* Background video component */}
      <BackgroundVideo>
        {/* Main content */}
        <div className="relative text-center font-mono text-m">
          <Navigation />
          <div className="relative p-10 max-w-sm sm:max-w-lg mx-auto">
            <h2 className="text-5xl  text-white">
              Hi 👋, I’m Bogdan, a software engineer from Cologne.
            </h2>
          </div>
        </div>
      </BackgroundVideo>
    </div>
  );
}
