import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
    const handleLogin =  event => {
         
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
       login(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          const currentUser = {
            email:user.email
          }

          //get jwt token
          fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body:JSON.stringify(currentUser)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              //localstorage
              localStorage.setItem('token', data.token);
              navigate(from,{replace:true})
            })
          
          
        })
        .catch(err => console.error(err));
        
    }

    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row gap-20 grid md:grid-cols-2">
    <div className="text-center lg:text-left">
      <img src={img} alt="" />
    </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <form onSubmit={handleLogin}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email"  name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password"  name='password' className="input input-bordered" />
          <label className="label">
            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         <input  className="btn btn-primary" type="submit" value="Login" />
        </div>
                    </form>
                    <p className='text-center'>New to Maintains Car <Link className='text-orange-600 py-8' to='/signup'>SingUp</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;