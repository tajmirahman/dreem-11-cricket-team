
import { useEffect, useState } from 'react'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Container from './Components/PlayerContainer/Container'

// for toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Footer from './Components/Footer/Footer';


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

  // Add Free Coins for useState
  const [addFCoins, setAddFCoins] = useState(0);

  // Decrement Price when player add to cart
  const handleDecrement = (price) => {
    setAddFCoins(addFCoins - price);
  }



  // add Free Coins handler
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

    const isExist = carts.find(p => p.id === cart.id);

    if (addFCoins < cart.price) {
      toast.warning('No more balance! Please add more coins to continue.');
      return
    }

    if (carts.length >= 6) {
      toast.warning('No More Player Choose');
      return
    }

    if (isExist) {
      toast.warning('No More Player choose!')
      return;
    }

    handleDecrement(cart.price);

    const newCart = [...carts, cart];
    setCarts(newCart);
    toast.success('Congratulations! Player added to the choose list.');

  }







  return (
    <>

      <div className='flex flex-col '>

        {/* header section */}

        <Header addFCoins={addFCoins}></Header>
        <Banner handleAddFreeCoins={handleAddFreeCoins}></Banner>

        {/* header section */}

        <main className='flex-grow bg-white p-8'>
          <div className=' mx-auto'>
            <Container
              handleButtons={handleButtons}
              isActive={isActive}
              players={players}
              handleAddToCart={handleAddToCart}
              carts={carts}

            ></Container>
          </div>
        </main>

        <NewsLetter></NewsLetter>

        <div className='bg-gray-900 text-white text-center py-6 mt-[-4rem] relative z-0'>

          <Footer></Footer>
        </div>

      </div>


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
