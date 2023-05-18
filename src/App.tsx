import { ToastContainer } from 'react-toastify'
import './App.css'
import RicoCurrencyGrid from './Components/RicoCurrencyGrid/RicoCurrencyGrid'
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-loading-skeleton/dist/skeleton.css'

function App (): React.JSX.Element {
  return (
    <div>
      <nav></nav>
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
