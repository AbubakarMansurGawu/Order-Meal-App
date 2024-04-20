import React, { useRef, useState, useEffect } from "react";
import { BiCheckCircle, BiSolidXCircle } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchpwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [errMsg, setErrMsg] = useState("");
 

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    const match = pwd === matchpwd;
    setValidMatch(match);
  }, [pwd, matchpwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchpwd]);

  const handleSignUp = () => {
    if (isFormComplete()) {
      // Perform signup logic here
      // For example, you can send the username and password to your backend for registration

      // After successful signup, redirect to the home page
      navigate("/");
    }
  };

  const isFormComplete = () => {
    return validName && validPwd && validMatch;
  };

  return (
    <>
      <p className="flex items-center justify-center mt-32 font-extrabold text-3xl ">
        Welcome to my ABINCHI Store
      </p>

      <section className="mx-auto mt-10 w-[400px] bg-opacity-20 bg-orange-400 shadow-md shadow-orange-800 rounded-lg">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          arria-live="assertive"
        >
          {errMsg}
        </p>
        <p className="text-2xl p-5 font-bold">Register</p>
        <form className="p-5">
          <label htmlFor="username" className="flex items-center">
            Username:
            <span className={validName ? "valid" : "hide"}>
              <BiCheckCircle icon={BiCheckCircle} />
            </span>
            <span className={validName || !user ? "hide" : "invalid"}>
              <BiSolidXCircle icon={BiSolidXCircle} />
            </span>
          </label>
          <input
            type="text"
            id="username"
            className="w-full rounded-lg h-10 pl-2"
            ref={userRef}
            aria-invalid={validName ? "false" : "true"}
            onChange={(e) => setUser(e.target.value)}
            required
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            <FaInfoCircle />
            3 to 20 characters.
            <br />
            Must begin with a letter
            <br />
            letters, numbers, underscores, hyphens allowed.
          </p>

          <label htmlFor="password" className="flex items-center">
            Password:
            <span className={validPwd ? "valid" : "hide"}>
              <BiCheckCircle icon={BiCheckCircle} />
            </span>
            <span className={validPwd || !pwd ? "hide" : "invalid"}>
              <BiSolidXCircle icon={BiSolidXCircle} />
            </span>
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-lg h-10 pl-2"
            aria-invalid={validName ? "false" : "true"}
            onChange={(e) => setPwd(e.target.value)}
            required
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
          >
            <FaInfoCircle />
            8 to 20 character.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character. <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>

          <label htmlFor="Confirm_pwd" className="flex items-center">
            Confirm Password:
            <span className={validName && matchpwd ? "valid" : "hide"}>
              <BiCheckCircle />
            </span>
            <span className={validMatch || !matchpwd ? "hide" : "invalid"}>
              <BiSolidXCircle />
            </span>
          </label>
          <input
            type="password"
            id="confirm_pwd"
            className="w-full rounded-lg h-10 pl-2"
            ref={userRef}
            aria-invalid={validMatch ? "false" : "true"}
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p
            id="confirmnote"
            className={matchFocus && !validMatch ? "instructions" : "offscreen"}
          >
            <FaInfoCircle /> Must match the first password input field
          </p>

         
<button
  type="button"
  onClick={handleSignUp}
  disabled={!isFormComplete()}
  className={`bg-orange-500 text-sm active:scale-95 p-2 mt-10 rounded-md w-full text-white font-medium ${
    !isFormComplete() ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  Sign Up
</button>
        </form>
        <p className="p-5">
          Already registered?
          <Link to="/Login" className="pl-2 text-blue-500 font-bold">
            Login
          </Link>
        </p>
      </section>
    </>
  );
};

export default Register;
