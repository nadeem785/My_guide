import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login(){
    const [user,setUser]= useState({username:'a',password:'123'});


 const navigate= useNavigate()

    function handleSubmit(e){

        e.preventDefault();
        const data=new FormData(e.target);
        
             navigate('/guide')
        
        
    }
    function change (e){
        setUser(prev=>({...prev,username:e.target.value}))


    }
    return(
        <div>
           
            <div className="container  flex   justify-center items-center mt-32 mx-18 gap-y-2.5">
            <form  className=" flex flex-col   justify-center items-center gap-4 " onSubmit={handleSubmit}>
                <label htmlFor="username " className="text-3xl">Username:</label>
                <input  id="username" name= "username"  className="bg-amber-50 rounded-2xl h-8 w-60  px-1.5" onChange={(e)=>change(e)}></input>

                <label htmlFor="password" className="text-3xl">password: </label>
                <input type="text" id="password" name= "password" className="bg-amber-50 rounded-2xl w-60 h-8 px-1.5"   />
                
                <button  className=" mt-4 w-32 px-4\3 py-1 flex justify-center items-center rounded-2xl text-green-300 text-lg bg-cyan-800" >submit</button>

            </form>
        
        </div>
        </div>
    )
}