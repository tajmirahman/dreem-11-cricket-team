
import { useEffect, useState } from 'react'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Container from './Components/PlayerContainer/Container'


function App() {

  // Handle available and schedule button for use state
  const [isActive, setIsActive] = useState({
    player: true,
    status: 'available'
  });

  const handleButtons = (status) => {
    if (status === 'available') {
      setIsActive({
        player: true,
        status: 'available'
      })
    }
    else {
      setIsActive({
        player: false,
        status: 'schedule'
      })
    }
  }

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, []);

  // Add Free Coins for main account
  const [addFCoins, setAddFCoins]=useState(20000);

  const handleAddFreeCoins=()=>{
    alert('hi')
  }






  return (
    <>

      {/* header section */}

      <Header></Header>
      <Banner handleAddFreeCoins={handleAddFreeCoins}></Banner>

      {/* header section */}

      <Container
        handleButtons={handleButtons}
        isActive={isActive}
        players={players}
      ></Container>

    </>
  )
}

export default App
