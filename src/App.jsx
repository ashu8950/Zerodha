
import './App.css'
import First from './Component/First'
import Footer from './Component/Footer'
import Landing from './Component/Landing'
import Market from './Component/Market'
import Navbar from './Component/Navbar'
import OpenAccount from './Component/OpenAccount'
import Price from './Component/Price'


function App() {


  return (
    <div>
      <Navbar/>
      <Navbar/>
      <main>
      <Landing/>
      <First/>
      <Price/>
      
      <Market/>
      <OpenAccount/>
    </main>
    
    <Footer>
      <Footer/>
    </Footer>
    </div>
    
  )
}

export default App
