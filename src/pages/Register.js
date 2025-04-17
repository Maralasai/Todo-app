import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate('/');
  };

  return (
    <div className="auth-container">
  <h2>Register</h2>
  <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
  <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
  <button onClick={register}>Register</button>

  <p>
    Already have an account?{' '}
    <button onClick={() => navigate('/login')} className="link-button">
      Login
    </button>
  </p>
</div>
  );
}
