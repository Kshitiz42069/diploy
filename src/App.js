import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="bg-black text-white py-2 flex justify-center">
        <p className="underline px-6">FREE SHIPPING for orders over $300. Order today</p>
      </div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
