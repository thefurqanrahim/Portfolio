import './App.css';
import Card from './Compnents/Card';
import CardData from './Compnents/CardData';

function App() {
  return (
    <>
      {CardData.map((val, ind) => {
        return(
          <>
        <Card 
              key={val.key}
             firstName={val.firstName}
             pera={val.pera}
             li1={val.li1}
             li2={val.li2}
             li3={val.li3}
             li4={val.li4}
             link={val.link}
             atribute={val.atribute}
        />
        </>
        )
      })}
    </>
  )
}

export default App;
