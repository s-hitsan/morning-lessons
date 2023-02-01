import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { MainLayout } from './components';
import { ROUTES } from './constants';
import { Notes, Registration } from './pages';
import { Posts } from './pages/Posts/Posts';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route element={<Registration />} path={ROUTES.register} />
            <Route element={<Notes />} path={ROUTES.notes} />
            <Route element={<Posts />} path={ROUTES.posts} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
      <ToastContainer position='bottom-right' />
    </div>
  );
}

export default App;
