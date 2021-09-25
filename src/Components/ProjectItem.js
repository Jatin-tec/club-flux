import React from 'react'

export default function ProjectItem(props) {
    return (
        <div>

            <div className="card">
                <img src="https://source.unsplash.com/1600x900/?robots" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">More about it...</a>
                </div>
            </div>

        </div>
    )
}
