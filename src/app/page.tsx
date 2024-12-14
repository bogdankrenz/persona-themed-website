import BackgroundVideo from "./components/BackgroundVideo";
import Hero from "./components/Hero";
import JobList from "./components/JobList";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="m-0 p-0 ">
      {/* Background video component */}
      <BackgroundVideo>
        {/* Main content */}
        <div className="relative text-center font-mono text-m overflow-y-scroll max-h-screen">
          <Navigation />
          <Hero />
          <JobList />
        </div>
      </BackgroundVideo>
    </div>
  );
}
