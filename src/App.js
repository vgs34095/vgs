import './App.css';
import HomeSlider from './components/home-slider/HomeSlider';

const data = [{
  imgUrl: "./images/3 seater round.jpg"
}]


function App() {
  return null;
  
  return (
    <div className="App">
      <HomeSlider data={data} />
    </div>
  );
}

export default App;
