import React from 'react'
import logo from "../Assets/logo/Logo.png"
import "./Header.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg navbar-dark nav-wrapper">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src={logo} alt="Hustlers" className='logo' />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/product">Products</Link>
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