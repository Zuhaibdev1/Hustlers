import React from 'react'
import logo from "../Assets/logo/Logo.png"
// import "./Header.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark fw-semibold">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src={logo} alt="Hustlers" className='logo' width={60} />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="/product" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul class="dropdown-menu ">
                                    <li><a class="dropdown-item" href="#">Hoddies</a></li>
                                    <li><a class="dropdown-item" href="#">Sweat Shirts</a></li>
                                    {/* <li><hr class="dropdown-divider"/></li> */}
                                    <li><a class="dropdown-item" href="#">T Shirts</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/product">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/product">About Us</Link>
                            </li>
                        </ul>
                        <div className='my-4'>
                            <i class="fa-solid fa-sun sun-icon">
                            </i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar