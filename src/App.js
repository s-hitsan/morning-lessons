import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { UserProvider } from './contexts/userContext';
import { Navigation } from './navigation';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserProvider>
          <Navigation />
        </UserProvider>
      </BrowserRouter>
      <ToastContainer position='bottom-right' />
    </div>
  );
}

export default App;
