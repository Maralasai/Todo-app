import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/');
  };

  return (
    <div className="auth-container">
  <h2>Login</h2>
  <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
  <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
  <button onClick={login}>Login</button>

  <p>
    Don't have an account?{' '}
    <button onClick={() => navigate('/register')} className="link-button">
      Create Account
    </button>
  </p>
</div>
  );
}
