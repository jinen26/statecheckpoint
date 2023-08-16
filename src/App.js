import './App.css';
import Playerlist from './Playerlist';
import Modal from './Modal';
function App() {
  let players= [
    {name: 'Hannibal Mejbri',
    image:'https://cdnfr.africanmanager.com/wp-content/uploads/2022/01/Hannibal-Mejbri.jpg',
  nationality:'Tunisian',},
  { name:'Cristiano Ronaldo',
image:'https://www.planetsport.com/image-library/square/1200/c/cristiano-ronaldo-portugal-5-june-2022.jpg',
nationality:'Portuguese'},
{ name:'Lionel Messi',
image:'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg',
nationality:'Argentina',}
  ]
  return (
    <div className="App">
<Playerlist players={players}/>
    </div>
  );
}

export default App;
