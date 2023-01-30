import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Notes, Registration } from './pages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Registration />} path='registration' />
          <Route element={<Notes />} path='notes' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
