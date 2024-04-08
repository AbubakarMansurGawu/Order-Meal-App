import React, {useRef, useState, useEffect} from 'react'
import { FaInfoCircle, FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const USER_REGEX = /^[a-zA-Z][a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/

const Register = () => {
    const userRef = useRef()
    const errRef = useRef()


    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchpwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchpwd
        setValidMatch(match)
    }, [pwd, matchpwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchpwd])

  return (
    <>
    <p className='flex items-center justify-center mt-32 font-extrabold text-3xl '>Welcome to my ABINCHI Store</p>

        <section className='mx-auto mt-20 w-[400px] bg-opacity-20 bg-orange-400 shadow-md shadow-orange-800 rounded-lg'>
            <p className='text-2xl p-5 font-bold'>Login</p>
            <form className='p-5'>
                <label htmlFor='username'>
                    Username:
                    {/* <span className={validName ? 'valid' : 'hide'}>
                        <FaCheck icon={FaCheck}/>
                    </span>
                    <span className={validName || !user ? 'hide' : 'invalid'}>
                        <FaTimes  />
                    </span> */}
                </label>
                <input
                type='text'
                id='username'
                className='w-full rounded-lg h-10' 
                ref={userRef}
                aria-invalid={validName ? 'false' : 'true'}
                onChange={(e) => setUser(e.target.value)} required
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                />
                {/* <p className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
                <FaInfoCircle /> 
                3 to 20 characters.<br />
                Must begin with a letter<br/>
                letters, numbers, underscores, hyphens allowed.
                </p> */}

                <label htmlFor='password'>
                    Password:
                    {/* <span className={validName ? 'valid' : 'hide'}>
                        <FaCheck />
                    </span>
                    <span className={validName || !user ? 'hide' : 'invalid'}>
                        <FaTimes />
                    </span> */}
                </label>
                <input
                type='password'
                id='password'
                className='w-full rounded-lg h-10' 
                ref={userRef}
                aria-invalid={validName ? 'false' : 'true'}
                onChange={(e) => setPwd(e.target.value)} required
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                />

                <button className='w-full cursor-default bg-orange-500 rounded-lg mt-10 p-3 font-bold text-white'>
                    <Link to='/Home'>
                        Login
                    </Link>
                </button>            </form>
            <p className='p-5'>Dont have an account 
            <Link to='/Register' className='pl-2 text-blue-500 font-bold' >Sign Up</Link>
            </p>
        </section>
    </>
  )
}

export default Register