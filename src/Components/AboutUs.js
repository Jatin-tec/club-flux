import React from "react";

export default function AboutUs() {
    return (
        <div className="container my-5" id='About-Us'>
            <div className="row">
                <div className="col-4 my-5">
                    <img src="Components/profilepic.jpg" alt="logo" />
                </div>
                <div className="col-8">
                    <h3 className='my-5'>About Us</h3>
                    <div>
                        It is a Robotics Club of Samrat Ashok Technological
                        Institute,Vidisha(M.P.) , run by a team of young enthusiastic and
                        ambitious people. We mainly focus on latest and future demanding
                        technologies like Internet of Things, Machine Learnig, Artificial
                        Intelligence, and many more.

                        <h4 className='my-3'>Mission</h4>
                        <div>
                            To help community with our works ,simultaneously developing ourselp in the feild of latst Technologies and giving a platform for our members to stand and shine.
                        </div>
                        
                        <h4 className='my-3'>Vision</h4>
                        <div>
                        With the works of this club ,members will be able to develop their personality and simultaneously help community.
                        </div>
                    </div>
                    <div className="my-5">
                        <strong>Location</strong>
                        <br />
                        <br />
                        FLUX Office, Near NCC Office, Samrat Ashok Technological Institute, Vidisha(M.P.)
                        <br />
                        9098216412
                        <br />
                        roboticsclubflux@gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
}
