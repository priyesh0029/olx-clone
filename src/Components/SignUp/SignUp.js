import { useContext, useState } from 'react';
import './SignUp.css';
import logo from '../../../public/Images/olx-logo.png';
import { FirebaseContext } from '../../store/firebaseContext';
import { auth, db } from '../../firebase/config';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { app } = useContext(FirebaseContext);
    const navigate = useNavigate();
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(userName, email, phone, password)
    //     console.log(app);
    //     createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    //       console.log(userCredential.user);
    //       userCredential.user.updateCurrentUser({displayName: userName}).then(() => {
    //       addDoc(collection(db, "users"), {
    //         id: userCredential.user.uid,
    //         userName: userName,
    //         phone: phone,    
    //       }).then(() => {
    //       navigate.push('/');
    //     })
    //   })
    // })
    // }
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(userName, email, phone, password);
    
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);
    
        // await userCredential.user.updateProfile({
        //   displayName: userName,
        // });
    
        await addDoc(collection(db, "users"), {
          id: userCredential.user.uid,
          userName: userName,
          phone: phone,
        });
    
        navigate('/');
      } catch (error) {
        console.log(error);
        // Handle errors that occur during the authentication or data creation process
      }
    };
    
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
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => {setPhone(e.target.value)}}
            id="phone"
            name="phone"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            id="password"
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