import React from 'react';

const LoginComponent = () => {
  return <div>
    <div className='form-group'>
      <label for='login'>Login</label>
      <input type='email' className='form-control' id='login' planceholder='Login' />
    </div>

    <div className='form-group'>
      <label for='password'>Password</label>
      <input type='password' className='form-control' id='password' planceholder='Password' />
    </div>
    <button className='btn btn-primary'>Login</button>
  </div>
}

export default LoginComponent;