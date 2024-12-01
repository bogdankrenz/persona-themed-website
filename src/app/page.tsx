import BackgroundVideo from "./components/BackgroundVideo";

export default function Home() {
  return (
    <div>
      {/* Background video component */}
      <BackgroundVideo />

      {/* Main content */}
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is my favorite video game-themed website.</p>
      </div>
    </div>
  );
}
