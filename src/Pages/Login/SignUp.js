import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider';
const SignUp = () => {

     const {createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
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
      <form onSubmit={handleSignUp}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         <input  className="btn btn-primary" type="submit" value="Singup" />
        </div>
                    </form>
                    <p className='text-center'>New to Maintains Car <Link className='text-orange-600 py-8' to='/singup'>Login</Link> </p>
    </div>
  </div>
</div>
    );
};

export default SignUp;