import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const AuthorList = (props) => {

    const [authorList, setAuthorList] = useState([]);
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/author")
    	.then((res)=>{
	    console.log(res.data);
            setAuthorList(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])

    const deleteAuthor = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/author/${idFromBelow}`)
            .then((res) => {
                const newList = authorList.filter((author, index) => author._id != idFromBelow)
                setAuthorList(newList);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div >
            <h1 className='text-center mb-5 mt-5'>Favorite Authors</h1>
                <p className='text-center mb-5'><Link to={'/author/new'}>Add an Author</Link></p>
                <h3 className='text-center mb-5'>We have quotes by:</h3>
            <table className=" w-75 border-dark border-4 text-center table table-bordered table-hover">
                    <thead>
                        <tr className='table2'>
                            <th scope="col">Author</th>
                            <th scope="col" colspan="2">Actions Available</th>
                        </tr>
                    </thead>
                {
                    authorList.map((author, index)=>{
                        return (
                            <>
                    <tbody>
                        <tr className='table'>
                            <td>{author.name}</td>
                            <td><button><Link to={`/author/edit/${author._id}`}>Edit</Link></button></td>
                            <td><button onClick={() => deleteAuthor(author._id)}>Delete</button></td>
                        </tr>
                    </tbody>
                    </>
        )})
    }
    </table>
            </div>
)
}
export default AuthorList;

