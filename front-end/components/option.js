import React from "react";

class Option extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <img src="./app/asset/img/chalkboard.jpg" className="img-fluid" alt="A chalkboard" />
                <div className="card-body">
                    <h4 className="card-title">Vay Tín Chấp Theo Lương</h4>
                    <h6 className="card-subtitle">Support card subtitle</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quod porro reiciendis
                        quo, optio dolor incidunt qui, voluptatem officiis dignissimos, reprehenderit
                                                possimus. Excepturi earum in repellat doloribus officia sed blanditiis.</p>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">learn more</button>
                </div>
            </div>
        )
    }
}

export default Option;