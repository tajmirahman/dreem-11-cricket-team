
import { useEffect, useState } from 'react'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Container from './Components/PlayerContainer/Container'

// for toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  const [addFCoins, setAddFCoins] = useState(0);

  const handleAddFreeCoins = () => {

    const newBlance = addFCoins + 2000000;
    setAddFCoins(newBlance);

    // Display congratulation alert
    toast.success('Congratulations! You have received 2,000,000 free coins.');
  }

  // state decilared for add to cart
  const [carts, setCarts] = useState([])

  // Add To Cart section
  const handleAddToCart = (cart) => {

    if (addFCoins <= 0) {
      toast.warning('No more balance! Please add more coins to continue.');
      return;
    }

    if (carts.length >= 6) {
      toast.warning('No More Player Choose');
      return
    }

    const isExist = carts.find(p => p.id === cart.id);

    if (isExist) {
      toast.warning('No More Player choose!')
    }
    else {
      const newCart = [...carts, cart];
      setCarts(newCart);
      toast.success('Congratulations! Player added to the cart.');
    }

  }







  return (
    <>

      {/* header section */}

      <Header addFCoins={addFCoins}></Header>
      <Banner handleAddFreeCoins={handleAddFreeCoins}></Banner>

      {/* header section */}

      <Container
        handleButtons={handleButtons}
        isActive={isActive}
        players={players}
        handleAddToCart={handleAddToCart}
        carts={carts}
      ></Container>


      {/* Toast container start*/}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Toast container start*/}

    </>
  )
}

export default App
