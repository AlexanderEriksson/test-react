import React, {useState} from 'react';
import Axios from 'axios';

function UserForm() {
    const [data, setData] = useState({
        name: '',
        email:'',
        password: '',
        status:''
    });
function handleOnChange(event){
    const newData = {...data}
    newData[event.target.id] = event.target.value
    setData(newData)
}

function submitData(event){
    event.preventDefault();
    const url = "http://localhost:5000/user/new"
    Axios.post(url,{
        name: data.name,
        email: data.email,
        //password: data.password,
        status: data.status
    })
    .then(res=>{
        console.log(res.data)
    })
}

       return(
           <form onSubmit={(event)=>submitData(event)}>
           <h1>test</h1>
           <input onChange={(event)=>handleOnChange(event)} type="text" value={data.name} id='name' name="name"/>
           <label htmlFor="name">Name</label>
           <input onChange={(event)=>handleOnChange(event)} type="text" value={data.email} id='email' name = "email"/>
           <label htmlFor="email">Email</label>
           <input onChange={(event)=>handleOnChange(event)} type="text" value={data.status} id='status' name="status"/>
           <label htmlFor='status'>Status</label>
           <input onChange={(event)=>handleOnChange(event)} type="password" value={data.password} id='password' name="password"/>
           <label htmlFor="password">Password</label>
           <button type='submit'>submit</button>
       </form>
       )
}
export default UserForm;