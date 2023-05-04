import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import { useAuth } from "../provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useAuth()
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="bg-white">
            <div className="ui-container flex justify-between items-center py-3">
                <Link to="/"><h2 className="text-2xl font-bold">Chafe<span className="text-[#289199]">Cafe</span></h2></Link>
                <span className="md:hidden text-xl">
                    {
                       toggle ? <MdOutlineRestaurantMenu onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2  onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`flex items-center duration-200 z-50 flex-col py-5 md:p-0 text-white bg-opacity-80 md:text-black top-14 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-3 absolute md:static ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
                    </li>
                    
                    <li>{
                            user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full" src={user?.photoURL} title={user.displayName} alt="" /> : ""
                        }
                    </li>
                    <li>{
                            user ? <button onClick={logOut} className="bg-[#289199] px-4 py-2  text-white">LogOut</button> : <button className="bg-[#289199] px-4 py-2 rounded text-white"><Link to="/login">Login</Link></button>
                        }
                    </li>
                </ul>
            </div>
           
        </nav>
    );
};

export default Navbar;