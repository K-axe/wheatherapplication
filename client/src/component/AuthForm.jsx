import React from 'react'
import '../component/AuthForm.css'

const AuthForm = () => {
  return (
    <div className='AuthForm'>
        <form action="" method="post" className='form'>
            <input type="text" placeholder='Firstname' required />
            <input type="text" placeholder='Lastname' required />
            <input type="text" placeholder='Email' required />
            <input type='password' placeholder='Password' required />
            <input type='password' placeholder='Confirm Password' required />

        </form>
    </div>
  )
}

export default AuthForm