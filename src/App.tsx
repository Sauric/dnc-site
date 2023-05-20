import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navibar from './Components/Navibar/Navibar';
import Home from './Components/Home/Home';
import Accounting from './Components/Accounting/Accounting';
import BagelsBackground from './Components/BagelsBackground/BagelsBackground';

function App(): React.JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        <Navibar />
        <BagelsBackground/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/accounting'>
            <Accounting />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
