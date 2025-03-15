import React from 'react';
import FormComp from './FormComp';
import { useState ,useEffect} from 'react';
import parse from 'html-react-parser'
import axios from 'axios';

function Guides() {
  const [data, setData] = useState({
    username: '',
    course: '',
    subject: '',
    topic: '',
    description: '',
  });
  const [res,setRes]=useState('');
const [msg,setMsg]=useState('');

  const apiKey = import.meta.env.VITE_API_KEY;

  const update = (val) => {
    setData((prev)=>({...val})) 
  };

  

  function formatGeminiResponse(res) {
    let formattedText = res
      .replace(/\n/g, "") // Remove unnecessary line breaks
      .replace(/-{5,}/g, "") // Remove long dashes
      .replace(/(\w+):/g, "<strong>$1:</strong>") // Bold headings
      .replace(/\* (.+?)/g, "<li>$1</li>") // Convert bullet points into list item
      .replace(/<li>(.+?)<\/li>/g, "<ul><li>$1</li></ul>") // Wrap list items inside <ul>
      .replace(/Category\nDetails/, "<table border='1'><thead><tr><th>Category</th><th>Details</th></tr></thead><tbody>") // Table Start
      .replace(/\n\n/g, "</td></tr><tr><td>") // New rows
      .replace(/\n/g, "</td><td>") // New columns
      .concat("</tbody></table>"); // Close table

    return formattedText;
  }


  const fetchData = async () => {
    try {
      setMsg('...Loading 🪄🪄')
      const response = await axios.request({
        method: 'POST',
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        headers: { "Content-Type": "application/json" },
        data: {
          contents: [{ parts: [{ text: ` i want to know details of this  topic : ${data.topic}  of subject ${data.subject}  the description of it ${data.description}   in a proper rows and column format also use bullet points and in less than 250 words` }] }],
        },
        generationConfig: { temperature: 0, maxOutputTokens: 500 },
      });

     setRes(response.data.candidates[0].
        content.parts[0].text
        ); 
        console.log(response.data.candidates[0].
          content.parts[0].text)
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const calls= async ()=>{
   
      if(data.description && data.subject && data.topic ){
     
       res=  await fetchData();
        setRes(res)
        
      }
    
  }
  return (
    <div className='result grid grid-cols-2 h-screen w-full justify-between mt-0 p-4 '>

      
      <div className='left flex flex-col mr-60  '>
        <FormComp update={update}  calls={calls} />
      </div>
      <div className='right flex flex-col  justify-center p-3 bg-blue-50 border-2 rounded-3xl text-center  mr-2 mb-30 mt-20 shadow-pink-800'>
      {!res&&<h1 className='text-center text-4xl caret-amber-800'> {msg} </h1>}
      {res && parse (formatGeminiResponse(res))}
      </div>
   
    </div>
  );
}

export default Guides;
