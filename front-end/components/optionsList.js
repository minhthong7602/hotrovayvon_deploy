import React from "react";
import Option from '../components/option';

class OptionsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 3
        }
    }

    render() {
        var vaytinchaps = [];
        for (var i = 0; i < this.state.count; i++) {
            vaytinchaps.push(<Option key={i} />)
        }

        var vaythechaps = [];
        for (var i = 0; i < this.state.count; i++) {
            vaythechaps.push(<Option key={i} />)
        }

        var uudaichovays = [];
        for (var i = 0; i < this.state.count; i++) {
            uudaichovays.push(<Option key={i} />)
        }


        return (
            <div id="features" className="py-5">
                <div className="section-content">
                    <div className="container text-center">
                        <h2>VAY TÍN CHẤP</h2>
                        <hr/>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui accusantium commodi non quod mollitia animi,
                        totam quia labore ex est ut delectus consectetur explicabo eveniet maiores, cumque aut repudiandae.
                        Natus!</p>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card-deck">
                                    {vaytinchaps}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-content">
                    <div className="container text-center">
                        <h2>VAY THẾ CHẤP</h2>
                        <hr/>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui accusantium commodi non quod mollitia animi,
                        totam quia labore ex est ut delectus consectetur explicabo eveniet maiores, cumque aut repudiandae.
                        Natus!</p>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card-deck">
                                    {vaythechaps}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="section-content">
                    <div className="container text-center">
                        <h2>ƯU ĐÃI CHO VAY</h2>
                        <hr/>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui accusantium commodi non quod mollitia animi,
                        totam quia labore ex est ut delectus consectetur explicabo eveniet maiores, cumque aut repudiandae.
                        Natus!</p>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card-deck">
                                    {uudaichovays}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
                    
export default OptionsList;