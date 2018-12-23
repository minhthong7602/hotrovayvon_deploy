import React, { Component } from "react";

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section class="main-banner text-center" id="home">
                <h1 class="display-2">VAY VỐN NHANH 24H</h1>
                <p class="lead pt-3">Landing Page Template Made With Bootstrap 4.</p>
            </section>
        )
    }
}

export default Banner;