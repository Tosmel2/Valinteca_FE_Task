import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import signupImg from "../assets/signup.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./signup.css";

function SignUp() {
  const [errors, setErrors] = useState({});
  // const [form, setForm] = useState({});

  // faUser, faUserAlt faLock
  const submitHandler = (e) => {
    e.preventDefault();

    const endpoint = 'https://goldblv.com/api/hiring/tasks/register';
    const data = {
      username: 'userName',
      email: 'userEmail',
      password: 'userPassword',
      password_confirmation: 'confirmUserPassword'
    };

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === 200) {
          sessionStorage.setItem('email', userEmail);
        }else
        if (data.errors) {
          setErrors(data.errors);
        }
      });

    let formInfo = e.target.elements;

    let [username, email, password, confirmPassword] = formInfo;

    let userName = username.value,
      userEmail = email.value,
      userPassword = password.value,
      confirmUserPassword = confirmPassword.value;

    if (
            !(
            userName.endsWith("0") ||
            userName.endsWith("1") ||
            userName.endsWith("2") ||
            userName.endsWith("3") ||
            userName.endsWith("4") ||
            userName.endsWith("5") ||
            userName.endsWith("6") ||
            userName.endsWith("7") ||
            userName.endsWith("8") ||
            userName.endsWith("9")
            ) && (userPassword === confirmUserPassword) &&
            !(
              userName.startsWith("0") ||
              userName.startsWith("1") ||
              userName.startsWith("2") ||
              userName.startsWith("3") ||
              userName.startsWith("4") ||
              userName.startsWith("5") ||
              userName.startsWith("6") ||
              userName.startsWith("7") ||
              userName.startsWith("8") ||
              userName.startsWith("9")
              )
        ) {
          sessionStorage.setItem('data', JSON.stringify({userEmail}))

          toast.success("Logged In Successful");

          setTimeout(() => {
            window.location="/welcome"
          }, 3000);
        } else{
           if (userPassword !== confirmUserPassword){
            toast.warning("Password incorrect!")
           };
           if(userName.endsWith("0") ||
           userName.endsWith("1") ||
           userName.endsWith("2") ||
           userName.endsWith("3") ||
           userName.endsWith("4") ||
           userName.endsWith("5") ||
           userName.endsWith("6") ||
           userName.endsWith("7") ||
           userName.endsWith("8") ||
           userName.endsWith("9") || 

           userName.startsWith("0") ||
           userName.startsWith("1") ||
           userName.startsWith("2") ||
           userName.startsWith("3") ||
           userName.startsWith("4") ||
           userName.startsWith("5") ||
           userName.startsWith("6") ||
           userName.startsWith("7") ||
           userName.startsWith("8") ||
           userName.startsWith("9"))  {

            toast.warning("username must not start or end with a number")
           }
           return;
        }
  };
  return (
    <div className="auth_signup">
      <ToastContainer />
      <div>
        <div className="signup-container">
          <div className="hero-container">
            <div className="hero-left">
              <img
                src={signupImg}
                alt="SignupImage"
                className="hero_left-img"
              />
            </div>
            <div className="signup-hero-right">
              <h1>Create Account</h1>
              <p>
                Go ahead and sign up, let everyone<br /> know how awesome you are!
              </p>
              <form method="POST" onSubmit={submitHandler}>

              <div className='input-box'>
                <input
                  type="text"
                  required
                  placeholder="Username"
                  name="username"
                  minLength={5}
                  maxLength={15}
                  style={{textIndent: '35px'}}
                />
                <FontAwesomeIcon icon={faUser} style={{ color: '#9CADF2', position:"absolute", top:"8px", left:'8px',borderRight: '1px solid #9CADF2',padding:'5px', paddingRight:'10px' }} />
              </div>
                {/* {errors.userName && <p>{errors.userName}</p>} */}
              <div className='input-box'>
              <input type="email" placeholder="Email" name="email" style={{textIndent: '35px'}} />
              <FontAwesomeIcon icon={faEnvelope} style={{ color: '#9CADF2', position:"absolute", top:"8px", left:'8px',borderRight: '1px solid #9CADF2',padding:'5px', paddingRight:'10px' }} />
              </div>
                {/* {errors.email && <p>{errors.email}</p>} */}
              <div className='input-box'>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  minLength={8}
                  name="password"
                  style={{textIndent: '35px'}}
                />
                <FontAwesomeIcon icon={faLock} style={{ color: '#9CADF2', position:"absolute", top:"8px", left:'8px',borderRight: '1px solid #9CADF2',padding:'5px', paddingRight:'10px' }} />
              </div>
                {/* {errors.password && <p>{errors.password}</p>} */}
              <div className='input-box'>
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  style={{textIndent: '35px'}}
                />
                <FontAwesomeIcon icon={faLock} style={{ color: '#9CADF2', position:"absolute", top:"8px", left:'8px',borderRight: '1px solid #9CADF2',padding:'5px',paddingRight:'10px' }} />
              </div>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
              <div className='input-box'> 
                <input
                  type="submit"
                  name="submit"
                  value="Create Account"
                />
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
