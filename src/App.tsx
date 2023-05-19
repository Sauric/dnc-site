import { ToastContainer } from 'react-toastify'
import './App.css'
import RicoCurrencyGrid from './Components/RicoCurrencyGrid/RicoCurrencyGrid'
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Burger from './Images/burger.svg'

function App (): React.JSX.Element {
  return (
    <div>
      <nav><img src={Burger} alt='' className='burger'></img></nav>
      {RicoCurrencyGrid({})}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
