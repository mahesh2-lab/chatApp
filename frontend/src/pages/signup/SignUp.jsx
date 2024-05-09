import { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    });    

    const {loading, Signup} = useSignup();

    const handleCheckBoxChange = (gender) => {
        setInputs({...inputs, gender});
    };

    const handleSubmit = async (e) => {
        console.log(inputs);
        e.preventDefault();
        await Signup(inputs);
    };



  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp 
        <span className='text-blue-500'>Chat App</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input type="text" placeholder='John Duo' className='w-full input input-bordered h-10'
                value={inputs.fullName}
                onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder='johnduo' className='w-full input input-bordered h-10'
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
                />
            </div>

            <div>
                <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
                />
            </div>
            <div>
                <label className='label p-2'>
                        <span className='text-base label-text'>Conform Password</span>
                </label>
                <input type="password" placeholder='Conform Password' className='w-full input input-bordered h-10'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                />
            </div>
             
             <GenderCheckBox onCheckboxChange = {handleCheckBoxChange} selectedGender={inputs.gender}/>

            <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Already"} have a account? Login
            </Link>
            <div>
                <button className='btn btn-block btn-sm mt-2'
                disabled={loading}
                >
                    {loading ? <span className='loading loading-spinner'></span> : "SignUp"}
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp

// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'
// 
// const SignUp = () => {
//   return (
    // <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      {/* <div className='w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> */}
      {/* <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp  */}
        {/* <span className='text-blue-500'>Chat App</span> */}
        {/* </h1> */}
        {/* <form action=""> */}
            {/* <div> */}
                {/* <label className='label p-2'> */}
                    {/* <span className='text-base label-text'>Full Name</span> */}
                {/* </label> */}
                {/* <input type="text" placeholder='John Duo' className='w-full input input-bordered h-10'/> */}
            {/* </div> */}
            {/* <div> */}
                {/* <label className='label p-2'> */}
                    {/* <span className='text-base label-text'>Username</span> */}
                {/* </label> */}
                {/* <input type="text" placeholder='johnduo' className='w-full input input-bordered h-10'/> */}
            {/* </div> */}
{/*  */}
            {/* <div> */}
                {/* <label className='label p-2'> */}
                        {/* <span className='text-base label-text'>Password</span> */}
                {/* </label> */}
                {/* <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'/> */}
            {/* </div> */}
            {/* <div> */}
                {/* <label className='label p-2'> */}
                        {/* <span className='text-base label-text'>Conform Password</span> */}
                {/* </label> */}
                {/* <input type="password" placeholder='Conform Password' className='w-full input input-bordered h-10'/> */}
            {/* </div> */}
             {/*  */}
             {/* <GenderCheckBox/> */}
{/*  */}
            {/* <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'> */}
                {/* {"Already"} have a account? Login */}
            {/* </a> */}
            {/* <div> */}
                {/* <button className='btn btn-block btn-sm mt-2'>SignUp</button> */}
            {/* </div> */}
        {/* </form> */}
      {/* </div> */}
    {/* </div> */}
//   )
// }
// 
// export default SignUp
// 