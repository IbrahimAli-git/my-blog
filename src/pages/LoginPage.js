import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
    // each value from input
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            // navigates user to articles onced sign in authenticates or sends an error
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            {/* displays an error to user if it exists by passing it*/}
            {error && <p className="error">{error}</p>} 
            {/* User inputs: for both email and password binds values to state*/}
            <input
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                placeholder="Your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" />
            <button onClick={logIn}>Log In</button>
            <Link to={'/create-account'}>Don't have an account? Create one here</Link>
            {/*Links to create account page*/}
        </>
    );
}

export default LoginPage;