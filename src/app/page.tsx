import BackgroundVideo from "./components/BackgroundVideo";

export default function Home() {
  return (
    <div className="relative m-0 p-0 overflow-hidden ">
      {/* Background video component */}
      <BackgroundVideo />

      {/* Main content */}
      <div className="relative z-10 text-center text-white p-4 md:p-8">
        {/* <h1>Welcome to My Website</h1>
        <p>This is my favorite video game-themed website.</p> */}
      </div>
    </div>
  );
}
