
import { useState } from "react";


function FormComp({ update, calls }) {
  const[ val,setVal]= useState('');


    const handleChange = (e) => {
        setVal(e.target.value)
    };

    const change = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const values= Object.fromEntries(form.entries())
        update(values);
        calls()
       
       
    };

    return (
        <div>
            <div className="container flex justify-center items-center mt-28 mx-18 gap-y-2.5">
                <form className="flex flex-col justify-center items-center gap-4" onSubmit={change}>
                    <label htmlFor="username" className="text-3xl">Username:</label>
                    <input id="username" name="username"  onChange={handleChange} className="bg-amber-50 rounded-2xl h-8 w-60 px-1.5" />

                    <label htmlFor="course" className="text-3xl">Course: </label>
                    <input type="text" id="course" name="course"  onChange={handleChange} className="bg-amber-50 rounded-2xl h-8 w-60 px-1.5" />

                    <label htmlFor="subject" className="text-3xl">Subject: </label>
                    <input type="text" id="subject" name="subject" onChange={handleChange} className="bg-amber-50 rounded-2xl h-8 w-60 px-1.5" />

                    <label htmlFor="topic" className="text-3xl">Topic: </label>
                    <input type="text" id="topic" name="topic" onChange={handleChange} className="bg-amber-50 rounded-2xl h-8 w-60 px-1.5" />

                    <label htmlFor="description" className="text-3xl">Description: </label>
                    <input type="text" id="description" name="description" onChange={handleChange} className="bg-amber-50 rounded-2xl h-8 w-60 px-1.5" />

                    <button type="submit" className="mt-4 w-32 px-4 py-2 flex justify-center items-center rounded-2xl text-green-300 text-lg bg-cyan-800">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormComp;
