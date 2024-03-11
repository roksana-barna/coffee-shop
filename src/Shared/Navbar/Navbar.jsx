import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  //   const { user, logOut } = useContext(AuthContext);


  //   const handleLogOut = () => {
  //     logOut()
  //       .then(() => { })
  //       .catch(error => console.log(error));
  //   }
  const navItems = <>

    <li><Link to="/" className="text-base text-black font-normal font-serif">Home</Link></li>
    <li className="dropdown hidden sm:block dropdown-hover">
      <Link to="/coffee-pages" className="text-base font-serif text-black font-normal"> Pages</Link>
      <ul tabIndex={0} className="dropdown-content z-[1] menu grid grid-cols-3 p-2 shadow bg-base-100 rounded-box md:w-[800px]">
        <div>
          <li><Link className='font-bold text-base font-serif'>Coffee Types</Link></li>
          <li><Link to='/espresso' className='text-black text-base hover:bg-cyan-600'>Espresso</Link></li>
          <li><Link to='/latte' className='text-black text-base'>Latte</Link></li>
          <li><Link to='/cappuccino' className='text-black text-base'>Cappuccino</Link></li>
          <li><Link to='/americano' className='text-black text-base'>Americano</Link></li>
          <li><Link to='/mocha' className='text-black text-base'>Mocha</Link></li>
        </div>
        <div>
          <li><Link className='font-bold text-base font-serif'>Iced Drinks</Link></li>
          <li><Link to='/iced-coffee' className='text-black text-base'>Iced Coffee</Link></li>
          <li><Link to='/iced-latte' className='text-black text-base'>Iced Latte</Link></li>
          <li><Link to='/frappuccino' className='text-black text-base'>Frappuccino</Link></li>
        </div>
        <div>
          <li><Link className='font-bold text-base font-serif'>Snacks</Link></li>
          <li><Link to='/pastries' className='text-black text-base'>Pastries</Link></li>
          <li><Link to='/cookies' className='text-black text-base'>Cookies</Link></li>
          <li><Link to='/cakes' className='text-black text-base'>Cakes</Link></li>
        </div>
      </ul>
    </li>
    <li className="dropdown hidden sm:block dropdown-hover">
      <Link to="/coffee-menu" className="text-base font-serif text-black font-normal">Menu</Link>
      <ul tabIndex={0} className="dropdown-content z-[1] menu grid grid-cols-3 p-2 shadow bg-base-100 rounded-box md:w-[800px]">
        <div>
          <li><Link className='font-bold text-base font-serif'>Hot Drinks</Link></li>
          <li><Link to='/espresso' className='text-black text-base hover:bg-cyan-600'>Espresso</Link></li>
          <li><Link to='/latte' className='text-black text-base'>Latte</Link></li>
          <li><Link to='/cappuccino' className='text-black text-base'>Cappuccino</Link></li>
          <li><Link to='/americano' className='text-black text-base'>Americano</Link></li>
          <li><Link to='/mocha' className='text-black text-base'>Mocha</Link></li>
        </div>
        <div>
          <li><Link className='font-bold text-base font-serif'>Cold Drinks</Link></li>
          <li><Link to='/iced-coffee' className='text-black text-base'>Iced Coffee</Link></li>
          <li><Link to='/cold-brew' className='text-black text-base'>Cold Brew</Link></li>
          <li><Link to='/iced-latte' className='text-black text-base'>Iced Latte</Link></li>
          <li><Link to='/frappuccino' className='text-black text-base'>Frappuccino</Link></li>
        </div>
        <div>
          <li><Link className='font-bold text-base font-serif'>Snacks</Link></li>
          <li><Link to='/pastries' className='text-black text-base'>Pastries</Link></li>
          <li><Link to='/sandwiches' className='text-black text-base'>Sandwiches</Link></li>
          <li><Link to='/cookies' className='text-black text-base'>Cookies</Link></li>
          <li><Link to='/cakes' className='text-black text-base'>Cakes</Link></li>
        </div>
      </ul>
    </li>
    <li><Link to="/contact" className="text-base font-serif text-black font-normal">Contact Us</Link></li>
    <li><Link to="/" className="text-2xl font-bold font-serif text-orange-950 lg:ml-28  lg:mr-52">Unlocklive</Link></li>
    <>

    <Link to='/dashboard/mycart'>
      <button className="btn gap-2">
        <FaShoppingCart></FaShoppingCart>
        {/* <div className="badge badge-secondary">+{cart?.length ||0}</div> */}
      </button>
    </Link>
      <li><Link to="/login" className=" ml-5 text-white px-5 bg-cyan-600 font-serif mr-3">Login</Link></li>
    </>
  </>
  
  return (
    <div className=''>

      <div className="navbar w-50">
        <div className="navbar-start">
          <div className=" dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
        </div>
        {/* <form className='text-centerp-5 '>
          <input type='text' placeholder='Enter Your Keyword' name='search'

            className=' bg-transparent border-2 rounded-lg p-1 md:w-72  pl-2' />

          <button type='submit' className='bg-cyan-600 p-1  rounded-lg text-white font-serif' >Search</button>
        </form> */}

      </div>

      <div className="drawer  lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-evenly flex-col ">
          <div className="navbar-center hidden lg:flex  ">
            <ul className="menu menu-horizontal justify-between  px-1">
              {navItems}
            </ul>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;