import React from 'react'
import ProjectItem from './ProjectItem'

export default function Porjects() {
    // let completedProjects = ['3D Printer']
    return (
        <>
            <div className='container' id='Projects'>
                <h3 className='text-center'>Projects</h3>
            </div>

            <div className="container">
                <h4>Completed Projects</h4>
                <div id="Completed-Projects" className="carousel slide carousel-fade my-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4">
                                    <ProjectItem title='3D Printer' />
                                </div>
                                <div className="col-4">
                                    <ProjectItem title='Gesture Controlled Bots' />
                                </div>
                                <div className="col-4">
                                    <ProjectItem title='Concrete 3D Printer' />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <ProjectItem title='3D Printer' />
                                </div>
                                <div className="col-4">
                                    <ProjectItem title='Surveillance Drone' />
                                </div>
                                <div className="col-4">
                                    <ProjectItem title='Basic Home Automation' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#Completed-Projects" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#Completed-Projects" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                <h4>Ongoing Projects</h4>
                <div id="Ongoing-Projects" className="carousel slide carousel-fade my-4" data-bs-ride="carousel" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4">
                                    <ProjectItem title='3D Printer' />
                                </div>
                                <div className="col-4">
                                    <ProjectItem title='Gesture Controlled Bots' />
                                </div>
                                <div className="col-4">
                                    <ProjectItem title='Concrete 3D Printer' />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <ProjectItem title='Gesture Controlled Bots' />
                                </div>
                                <div className="col-4">
                                    <ProjectItem title='Surveillance Drone' />
                                </div>
                                <div className="col-4">
                                    <ProjectItem title='Basic Home Automation' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#Ongoing-Projects" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#Ongoing-Projects" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
