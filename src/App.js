import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { MainLayout } from './components';
import { UserProvider } from './contexts/userContext';
import { Navigation } from './navigation';
import { store } from './redux';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <UserProvider>
            <MainLayout>
              <Navigation />
            </MainLayout>
          </UserProvider>
        </BrowserRouter>
      </Provider>
      <ToastContainer position='bottom-right' />
    </div>
  );
}

export default App;
