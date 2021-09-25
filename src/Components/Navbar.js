import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    
    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><strong>Flux-SATI</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Flux</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                             {props.components.map((element) => {
                                return(
                            <li className="nav-item" key={element}>
                                <a className="nav-link active" aria-current="page" href={`#${element}`}>{element}</a>
                            </li>)
                            })}
                        
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/joinus">Join Us</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>

    )
}
