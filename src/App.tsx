import "./App.css";
import LoginCard from "./components/LoginCard";

function App() {
  return (
    <div className="bg-background text-primary min-h-full p-8 flex justify-center items-center flex-col">
      <h1 className="text-6xl font-bold mb-6">Quote Master</h1>
      <p className="text-xl text-muted-foreground">Coming Soon</p>
      <LoginCard />
    </div>
  );
}

export default App;
