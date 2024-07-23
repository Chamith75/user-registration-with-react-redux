

import UserTable from './Components/UserTable.js';
import UserReg from './Components/UserReg.js';
import { NavLink,  Route, Routes } from 'react-router-dom';
import './App.css';


const App = () => {
    
    
    return (
        <>
        <section className='bg-tertiary shadow-sm'>
        <div className='row ' >
            <div className='col-12 d-flex justify-content-center'>
            <section>
                <ul className="nav">
                    <li  className=' nav-link'>
                        <NavLink to={"/"}  className='text-decoration-none text-success'>
                        <i className="fa fa-home" aria-hidden="true"></i>Home</NavLink>

                    </li>
                    <li className=' nav-link' >
                        <NavLink to={"/user-list"} className='text-decoration-none'>
                        <i className="fa fa-users" aria-hidden="true"></i>UserList</NavLink>
                    </li>
                </ul>
            </section>

            </div>
        </div>
        </section>
        
           
            <Routes>
                <Route path='/' element={<UserReg  />} />
                <Route path='/user-list' element={<UserTable />} />
            </Routes>
            
            




        </>
    );
}

export default App