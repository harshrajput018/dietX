import React, { useContext, useState } from "react";
import Login from "./component/login";
import { BrowserRouter, Route, NavLink, Link, Routes } from "react-router-dom";
import Admin from "./component/admin";
import User from "./component/user";
import Signup from "./component/signup";
import Landing from "./component/landing";
import Card from "./component/card";
import AdminLogin from "./component/adminlogin";
import AdminSignup from "./component/adminsignup";
import formContext from "./context/form/formcontext";
import Contact from "./component/contact";



function App() {

  const a = useContext(formContext)

  const [num, inc] = useState(0);

  console.log('nav')

  const navLinkstyle = ({ isActive }) => {

    return {
      color: isActive ? 'white' : 'black',
      padding: '1% 3%',


      fontWeight: isActive ? '900' : 'bold',
      textDecoration: 'none',
      background: isActive ? 'black' : 'white'
    }
  }

  const navLinkstyle2 = ({ isActive }) => {

    return {
      color: isActive ? 'white' : 'black',
      padding: '1rem 1rem',


      fontWeight: isActive ? '900' : 'bold',
      textDecoration: 'none',
      background: isActive ? 'black' : 'white'
    }
  }



  return (
    <BrowserRouter>

      <nav style={{ background: 'white' }} >

        <div id="big"  className="nav-btns">



          <NavLink  onMouseEnter={() => {
            document.getElementById('nav-2').style.backgroundColor = 'black';
            document.getElementById('nav-2').style.color = 'white'
          }}

            onMouseLeave={() => {

              document.getElementById('nav-2').style.backgroundColor = 'white';
              document.getElementById('nav-2').style.color = 'black'

            }}

            

            style={navLinkstyle} end to={'/'} id="nav-2"

          >Home</NavLink>


          <NavLink
          
          onMouseEnter={() => {
            document.getElementById('nav-3').style.backgroundColor = 'black';
            document.getElementById('nav-3').style.color = 'white'
          }}

            onMouseLeave={() => {

              document.getElementById('nav-3').style.backgroundColor = 'white';
              document.getElementById('nav-3').style.color = 'black'

            }}

          style={navLinkstyle} to={'/contact'} id="nav-3"

          >Contact Us</NavLink>

          {!localStorage.getItem('auth-token') ? <NavLink style={navLinkstyle} to={'/login'} id='nav-1' onClick={() => {







          }} >Login/Signup</NavLink> :


            <Link style={{ textDecoration: 'none', color: 'black', padding: '0 5%', borderColor: 'skyblue', fontWeight: 'bolder' }} id="nav-1" className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./user.png" width={'25px'} alt="" />
              </button>
              <ul className="dropdown-menu" >
                <li style={{ textDecoration: 'none', color: 'black', borderColor: 'skyblue' }}><Link style={{ textDecoration: 'none', color: 'black', padding: '0.5rem 10%', borderColor: 'skyblue', fontWeight: 'bolder' }} to={'/user'} >  DashBoard</Link></li>
                <li style={{ textDecoration: 'none', color: 'black',  borderColor: 'skyblue' }}><Link onClick={() => { localStorage.removeItem('auth-token'); inc(prev => prev + 1) }} style={{ textDecoration: 'none', color: 'black', padding: '0.5rem 10%', borderColor: 'skyblue', fontWeight: 'bolder' }} to={'/login'}>Logout</Link></li>
                <li style={{ textDecoration: 'none', color: 'black',  borderColor: 'skyblue' }}><Link onClick={() => { localStorage.removeItem('auth-token-admin'); inc(prev => prev + 1) }} style={{ textDecoration: 'none', color: 'black', padding: '0.5rem 10%', borderColor: 'skyblue', fontWeight: 'bolder' }} to={'/adminlogin'}>Logout-admin</Link></li>
              </ul>
            </Link>




          }
        </div>


        <div style={{ display: 'flex', flexDirection: 'column', padding: '0', margin: '0 auto', textAlign: 'center', justifyContent: 'center' }} className="nav-btns">


          <button id='menu' style={{ border: 'none', background: 'white', margin: '0', padding: '0', fontSize: '2rem' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            &#9776;
          </button>

          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <NavLink onMouseEnter={() => {
                document.getElementById('nav-2').style.backgroundColor = 'black';
                document.getElementById('nav-2').style.color = 'white'
              }}

                onMouseLeave={() => {

                  document.getElementById('nav-2').style.backgroundColor = 'white';
                  document.getElementById('nav-2').style.color = 'black'

                }}

                style={navLinkstyle2} end to={'/'} id="nav-2"

              >Home</NavLink>


              <NavLink style={navLinkstyle2} to={'/contact'} id="nav-3"

              >Contact Us</NavLink>

              {!localStorage.getItem('auth-token') ? <NavLink style={navLinkstyle2} to={'/login'} id='nav-1' onClick={() => {







              }} >Login/Signup</NavLink> :


                <Link style={{ textDecoration: 'none', color: 'black', padding: '1rem 5%', borderColor: 'skyblue', fontWeight: 'bolder' }} id="nav-1" className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="./user.png" width={'25px'} alt="" />
                  </button>
                  <ul className="dropdown-menu" style={{ width: '100%' }}>
                    <li style={{ textDecoration: 'none', color: 'black', padding: '0.5rem 10%', borderColor: 'skyblue' }}><Link style={{ textDecoration: 'none', color: 'black', padding: '0.5rem 10%', borderColor: 'skyblue', fontWeight: 'bolder' }} to={'/user'} >DashBoard</Link></li>
                    <li style={{ textDecoration: 'none', color: 'black', padding: '0.5rem 10%', borderColor: 'skyblue' }}><Link onClick={() => { localStorage.removeItem('auth-token'); inc(prev => prev + 1) }} style={{ textDecoration: 'none', color: 'black', padding: '0.5rem 10%', borderColor: 'skyblue', fontWeight: 'bolder' }} to={'/login'}>Logout</Link></li>
                    <li style={{ textDecoration: 'none', color: 'black', padding: '0.5rem 10%', borderColor: 'skyblue' }}><Link onClick={() => { localStorage.removeItem('auth-token-admin'); inc(prev => prev + 1) }} style={{ textDecoration: 'none', color: 'black', padding: '0.5rem 10%', borderColor: 'skyblue', fontWeight: 'bolder' }} to={'/adminlogin'}>Logout-admin</Link></li>
                  </ul>
                </Link>




              }
            </div>
          </div>



        </div>

      </nav>

      <Routes>
        <Route path="/" element={< Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="admin" element={<Admin />} />

        <Route path="user" element={<User />} />

        <Route path="signup" element={<Signup />} />

        <Route path="adminsignup" element={<AdminSignup />} />

        <Route path="card" element={<Card />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="adminlogin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
