import React from "react";

class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="about">
                <div class="container text-left py-5">
                    <h2>Hướng dẫn đăng ký</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia dolore repudiandae placeat? Minima
                        nihil, possimus inventore ut, libero dolore ab ipsa laboriosam reiciendis nemo perspiciatis, consectetur
                    esse officia impedit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, autem praesentium. Delectus eligendi
                        neque enim atque? Repellendus non aliquid omnis culpa. Perferendis, nesciunt! Vero blanditiis, deserunt
                    assumenda aperiam nesciunt rem.</p>
                    <ul>
                        <li>Beautiful Gradient Background Landing Page.</li>
                        <li>Clickable nav links that smooth scroll to page sections.</li>
                        <li>Responsive behavior when clicking nav links.</li>
                        <li>Bootstrap 4 scrollspy feature, which highlights which section of the page you're on in the navbar.</li>
                        <li>Minimal custom CSS so you are free to explore your own unique design options.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AboutComponent;