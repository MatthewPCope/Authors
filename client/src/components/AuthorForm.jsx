import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthorForm = () => {
    
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/author', {
            name,
        })
        .then((res)=>{
                console.log(res)
            navigate('/authors');
            })
            .catch(err=> {
            setErrors(err.response.data.errors)
            })
}

return (
<>
<h1 className='text-center mb-5 mt-5'>Favorite Authors</h1>
<p className='text-center mb-5'><Link to={'/authors'}>Home</Link></p>
<h3 className="text-center mt-5 mb-2">Add a New Author</h3>
    <div id = "container">
        <div className= 'register p-4 my-3'>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group mb-4'>
                    <label className='form-label'>Name:</label><br/>
                    <input className='form-control' type="text" value = {name} name = "name" onChange = {(e)=>setName(e.target.value)}/>
                    { errors.name ? 
                    <p>{errors.name.message}</p>
                    : null
                    }
                </div>
                <div className='text-center'>
                    <input type="submit" value='Submit'/>
                </div>
                <div className='text-center mt-3'>
                    <Link to={`/authors`}>Nevermind</Link>
                </div>
            </form>
        </div>
    </div>
</>

)
}
export default AuthorForm;

