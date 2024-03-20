// NavBar.js
import { useState } from "react";
import Link from "./Link"; // Make sure filename matches
import { MdMenuOpen, MdOutlineRestaurantMenu  } from "react-icons/md";


const NavBar = () => {

    const [open, setOpen]= useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Details", path: "/products/:id" },
        { id: 5, name: "Contact", path: "/contact" },
    ];

    return (
        <nav>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <MdMenuOpen className="text-2xl "></MdMenuOpen > : <MdOutlineRestaurantMenu  className="text-2xl "></MdOutlineRestaurantMenu  >
                }
            
            </div>
            <ul className="md:flex">
                {routes.map(route => (
                    <Link key={route.id} route={route} />
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
