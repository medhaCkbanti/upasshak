
import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/Navbar/Header'
import FooterMain from './components/FooterMain'




function App() {


  return (
    <>
        <Header/>

        <main className='min-h-screen'>
         <Outlet/>
      </main>
         
        <FooterMain/>
    </>
  )
}

export default App
