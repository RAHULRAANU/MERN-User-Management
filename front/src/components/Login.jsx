import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://mern-user-registration-login.onrender.com/api/users/login', {
        email,
        password
      });

      if (response.data.Success) {
        console.log("Login Success");
        alert('Login successful!');

        // Store the token in localStorage or a state management solution
        localStorage.setItem('token', response.data.token);

        // Redirect to the '/home' route
        navigate('/home');
      } else {
        alert('Incorrect password! Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
        <div className="bg-white p-3 rounded" style={{width : '70%'}}>
          <h2 className='mb-3 text-primary'>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <strong>Email Id</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <p className='container my-2'>Don&apos;t have an account?</p>
          <Link to='/register' className="btn btn-secondary">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;





// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
        
//         axios.post( 'http://localhost:3000/api/users/register', {email, password})
//         .then(result => {
//             console.log(result);
//             if(result.data === "Success"){
//                 console.log("Login Success");
//                 alert('Login successful!')
//                 navigate('/home');
//             }
//             else{
//                 alert('Incorrect password! Please try again.');
//             }
//         })
//         .catch(err => console.log(err));
//     }


//     return (
//         <div>
//             <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
//                 <div className="bg-white p-3 rounded" style={{width : '40%'}}>
//                     <h2 className='mb-3 text-primary'>Login</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3 text-start">
//                             <label htmlFor="exampleInputEmail1" className="form-label">
//                                 <strong>Email Id</strong>
//                             </label>
//                             <input 
//                                 type="email" 
//                                 placeholder="Enter Email"
//                                 className="form-control" 
//                                 id="exampleInputEmail1" 
//                                 onChange={(event) => setEmail(event.target.value)}
//                                 required
//                             /> 
//                         </div>
//                         <div className="mb-3 text-start">
//                             <label htmlFor="exampleInputPassword1" className="form-label">
//                                 <strong>Password</strong>
//                             </label>
//                             <input 
//                                 type="password" 
//                                 placeholder="Enter Password"
//                                 className="form-control" 
//                                 id="exampleInputPassword1" 
//                                 onChange={(event) => setPassword(event.target.value)}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary">Login</button>
//                     </form>
//                     {/* TO add ' appostopee */}
//                     <p className='container my-2'>Don&apos;t have an account?</p>
//                     <Link to='/register' className="btn btn-secondary ">Register</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login