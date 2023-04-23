import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';
import { Button } from 'flowbite-react';

const Login = () => {

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch(error => {
        console.error(error);
      })

  }

 const handleGoogle =()=>[
  signInWithGoogle()
  .then(result=>{
    const loggedUser = result.user
    console.log(loggedUser)
  })
  .catch(error=>{
    console.log(error)
  })
 ]
  return (

    <div>
      <div className="hero lg:pb-72 lg:pt-40 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='pl-5'>New to Auth master!<Link to='/register'><button className='btn btn-link'>Register Now</button></Link></p>
          <div>
            <Button className='w-full' onClick={handleGoogle}>SignIn With Google</Button>
            
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;