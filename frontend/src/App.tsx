import { Route, Routes } from 'react-router';
import './App.css';
import { Login, Register } from './modules/auth';

function App() {
  return (
    <Routes>
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/register" element={<Register />} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
  );
}

export default App;
