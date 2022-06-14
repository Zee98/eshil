import React from 'react'


class Header extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="bg-light">
                <div className="container">
                <nav className="bg-light fixed-top navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <h1>ESHIL</h1>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ESHIL</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='/services'>Services </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-outline-success" href='/contact'>Contact us</a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </nav>
                </div>
            </div>
        )
    }
}


export default Header;
