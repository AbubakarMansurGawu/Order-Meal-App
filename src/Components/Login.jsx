import React, { useRef, useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { BiCheckCircle, BiSolidXCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const USER_REGEX = /^[a-zA-Z][a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/;

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validName, setValidName] = useState(false);
    const [validPwd, setValidPwd] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
    }, [password]);

    const handleLogin = () => {
        if (username === 'AbubakarMansur' && password === '@!Amg12345') {
            setSuccess(true);
            navigate("/");
            toast.success('Login Successful');
        } else {
            toast.error('Invalid username or password');
        }
    };

    const isLoginDisabled = !validName || !validPwd;

    return (
        <>
            <p className='flex items-center justify-center mt-32 font-extrabold text-3xl '>Welcome to my ABINCHI Store</p>

            <section className='mx-auto mt-20 w-[400px] bg-opacity-20 bg-orange-400 shadow-md shadow-orange-800 rounded-lg'>
                <p ref={errRef} className='offscreen' aria-live='assertive'></p>
                <p className='text-2xl p-5 font-bold'>Login</p>
                <div className='p-5'>
                    <label htmlFor='username'>
                        Username:
                        <span className={validName ? 'valid' : 'hide'}>
                            <BiCheckCircle />
                        </span>
                        <span className={(validName || !username) && !success ? 'hide' : 'invalid'}>
                            <BiSolidXCircle />
                        </span>
                    </label>
                    <input
                        type='text'
                        id='username'
                        className='w-full rounded-lg h-10 pl-2'
                        ref={userRef}
                        aria-invalid={validName ? 'false' : 'true'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <p className={username && !validName ? 'instructions' : 'offscreen'}>
                        <FaInfoCircle />
                        3 to 20 characters.<br />
                        Must begin with a letter<br />
                        letters, numbers, underscores, hyphens allowed.
                    </p>

                    <label htmlFor='password'>
                        Password:
                        <span className={validPwd ? 'valid' : 'hide'}>
                            <BiCheckCircle />
                        </span>
                        <span className={(validPwd || !password) && !success ? 'hide' : 'invalid'}>
                            <BiSolidXCircle />
                        </span>
                    </label>
                    <input
                        type='password'
                        id='password'
                        className='w-full rounded-lg h-10 pl-2'
                        ref={userRef}
                        aria-invalid={validPwd ? 'false' : 'true'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type='button'
                        onClick={handleLogin}
                        className={`w-full cursor-pointer bg-orange-500 rounded-lg mt-10 p-3 font-bold text-white ${isLoginDisabled ? 'disabled' : ''}`}
                        disabled={isLoginDisabled}
                    >
                        Login
                    </button>

                </div>
                <p className='p-5'>Don't have an account
                    <Link to='/Register' className='pl-2 text-blue-500 font-bold'>Sign Up</Link>
                </p>
            </section>
        </>
    );
};

export default Login;
