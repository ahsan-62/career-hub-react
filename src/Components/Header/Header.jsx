import { Link, NavLink } from "react-router-dom";


const Header = () => {

    const links=<>
     <li><NavLink to="/" >Home</NavLink></li>
     <li><NavLink to="/jobs">Jobs</NavLink></li>
     <li><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
     <li><NavLink to="/stat" >Statistics</NavLink></li>
     <li><NavLink to="/blogs" >Blogs</NavLink></li>
     
    
    
    </>
    return (
        <div className="bg-slate-100 rounded-xl ">
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to="/" className="text-3xl font-bold btn btn-ghost">Career Hub</Link>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Apply Now</a>
  </div>
            </div>
        </div>
    );
};

export default Header;