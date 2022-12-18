import React,{useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { register } from '../../actions/auth';
const Signup = ({register}) => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    //alerts
    const[alert,setAlert] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !email || !password){
            console.log('Please fill all the details');
            setAlert("Fill all the details")
        }
        else{
            register({name,email,password})
            console.log(name,email,password)
        }
    }
  return (
    <div className='container'>
        <div className="row">
            <div className='col-lg-8 mt-3'>
                {alert!==null ? <p>{alert}</p> : <></>}
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type="text" name='name' placeholder='Enter your name' className='form-control'
                        onChange={(e)=>{setName(e.target.value)}}/>
                    </div>

                    <div className='form-group'>
                        <input type="text" name='name' placeholder='Enter your email' className='form-control'
                        onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>


                    <div className='form-group'>
                        <input type="text" name='name' placeholder='Enter your password' className='form-control'
                        onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>

                    <button className='btn btn-md btn-dark' type="submit">signup</button>
                </form>
            </div>
        </div>
    </div>
  )
}

Signup.propTypes = {
register : PropTypes.func.isRequired,
}
export default connect(null,{register})(Signup);