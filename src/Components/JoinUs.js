import React from 'react'

export default function JoinUs() {
    return (
        <div style={{marginTop: '80px'}}>
            <div id="successMsg">

            </div>

            <div className="container my-5">
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Name</label>
                    <textarea className="form-control" id="userName" rows="3"
                        style={{'marginTop': '0px', 'marginBottom': '0px', 'height': '38px'}}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" />
                </div>


                <button type="button" id="send" className="btn btn-success">Reach Us</button>
            </div>

        </div>
    )
}
