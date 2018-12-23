import React, { Fragment } from "react";
import Header from '../components/header';
import Banner from '../components/banner';
import OptionsList from '../components/optionsList';
import About from '../components/about';
import Service from '../components/service';
import Contact from "../components/contact";
import Footer from '../components/footer';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div class="loader"></div>
                <Header />
                <div id="main" role="main">
                    <Banner />
                    <OptionsList />
                    <About />
                    <Service />
                    <Contact />
                    <a href="#" class="btn btn-primary scrollUp">
                        <i class="fa fa-arrow-circle-o-up"></i>
                    </a>
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default Home;