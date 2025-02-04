import Main from "./components/Main";
import Navbar from "./components/navbar";
import '../src/index.css';

const App = () => {
  return (
    <div className="font-nunito" >
      <div>
        <Navbar />
      </div>
    <main><Main /></main>
      
    </div>
  );
}

export default App;
