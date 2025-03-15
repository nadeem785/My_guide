
import {NavLink} from 'react-router-dom'
export default function Navbar(){

    return (
        <div className='Navbar   text-blue-200  flex  justify-center mt-6 items-center h-13 '>
            <ul className='flex justify-around rounded-3xl   space-x-3  px-10 py-3'>
              <li> <NavLink to='/'>Home</NavLink></li>
                
               <li><NavLink to='/guide'>Guide</NavLink></li> 
                <li><NavLink to='/'>back</NavLink>
                    </li>
            </ul>

        </div>
    )

}