import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [howDidYouHear, setHowDidYouHear] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
                // http://localhost:3000/api/users/register
    axios.post("http://localhost:3000/api/users/register", {
      name,
      email,
      phone,
      gender,
      howDidYouHear,
      city,
      state,
      password,
      password2
    })
      .then(result => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate('/login');
        } else {
          alert("Registered successfully! Please Login to proceed.")
          navigate('/login');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div className="container-fluid vh-67 d-flex justify-content-center align-items-center text-center" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
        <div className="bg-light-peach   p-3 rounded" style={{ width: '77%', maxWidth: '600px' }}>
          <h2 className='mb-3 text-primary'>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputname" className="form-label">
                <strong >Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                id="exampleInputname"
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
              />
            </div>
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
                value={email}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputPhone" className="form-label">
                <strong>Phone</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Phone"
                className="form-control"
                id="exampleInputPhone"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputGender" className="form-label">
                <strong>Gender</strong>
              </label>
              <select
                className="form-select"
                id="exampleInputGender"
                onChange={(event) => setGender(event.target.value)}
                value={gender}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputCity" className="form-label">
                <strong>City</strong>
              </label>
            <select
                className="form-select"
                id="exampleInputCity"
                onChange={(event) => setCity(event.target.value)}
                value={city}
                required
              >
                <option value="">Select City</option>
                <option value="Ahmadabad">Ahmadabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
              </select>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputState" className="form-label">
                <strong>State</strong>
              </label>
                <select
                className="form-select"
                id="exampleInputState"
                onChange={(event) => setState(event.target.value)}
                value={state}
                required
              >
                <option value="">Select State</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                </select>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputHowDidYouHear" className="form-label">
                <strong>How did you hear about us?</strong>
              </label>
                <select
                className="form-select"
                id="exampleInputHowDidYouHear"
                onChange={(event) => setHowDidYouHear(event.target.value)}
                value={howDidYouHear}
                required
              >
                <option value="">Select How did you hear about</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Friends">Friends</option>
                <option value="Job Portal">Job Portal</option>
                <option value="Others">Others</option>
                </select>
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
                value={password}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputPassword2" className="form-label">
                <strong>Confirm Password</strong>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                id="exampleInputPassword2"
                onChange={(event) => setPassword2(event.target.value)}
                value={password2}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>

          <p className='container my-2'>Already have an account ?</p>
          <Link to='/login' className="btn btn-dark">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
