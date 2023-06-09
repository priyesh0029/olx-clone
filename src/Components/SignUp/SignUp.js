import { useState } from 'react';
import './SignUp.css';
import logo from '../../../public/Images/olx-logo.png';

function SignUp() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    // console.log(userName);
    // console.log(email);
    // console.log(phone);
    // console.log(password);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, email, phone, password)
    }
    return (
        <div className="signupParentDiv">
        <img width="200px" height="200px" src={logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => {setUserName(e.target.value)}}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => {setPhone(e.target.value)}}
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    );
};

export default SignUp;