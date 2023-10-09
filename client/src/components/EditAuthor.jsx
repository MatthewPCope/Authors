import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';


const EditAuthor = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                setName(res.data.name);
            })
            .catch(err => console.log(err))
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`,{
            name,
        })
            .then(res => {
                console.log(res);
                navigate("/authors");
            })
            .catch(err =>{
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }
    
    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                navigate("/authors");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div>
            <h1 className='text-center mb-5 mt-5'>Favorite Authors</h1>
                <p className='text-center mb-5'><Link to={'/authors'}>Home</Link></p>
                    <h3 className="text-center mt-5 mb-2">Edit this Author</h3>
                        <div id = "container">
                            <div className= 'register p-4 my-3'>
                                <form onSubmit={submitHandler}>
                                    <p>
                                        <div className='form-group mb-4'>
                                            <label className='form-label'>Name:</label><br/>
                                            <input className='form-control' type="text" value = {name} name = "name" onChange = {(e)=>setName(e.target.value)}/>
                                            { errors.name ? 
                                        <p>{errors.name.message}</p>
                                        : null
                                        }
                                        </div>
                                    </p>
                                    
                                    <div className='text-center'>
                                        <input type="submit" value='Submit'/>
                                    </div>
                                    <div className='text-center mt-3'>
                                        <Link to={`/authors`}>Nevermind</Link>
                                    </div>
                                    <div className='text-center mt-3'>
                                        <button onClick={deleteAuthor}>Delete</button>
                                    </div>
                                </form>
                            </div>
                        </div>
        </div>
    )
}
export default EditAuthor;


