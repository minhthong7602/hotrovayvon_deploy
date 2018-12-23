import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header">
                <div class="navbar navbar-expand-md fixed-top navbar-light bg-light" id="main-navigation">
                    <div class="container">
                        <a class="navbar-brand scroll-trigger" href="#" id="header-logo">
                            <img src="https://raw.githubusercontent.com/orbitthemes/Orbit-Themes/master/assets/logo.png" class="img-fluid" width="200"
                                alt="Orbit Themes"/>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto text-center">
                                <li class="nav-item active">
                                    <a class="nav-link text-dark scroll-trigger" href="#home">Trang chủ
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark scroll-trigger" href="#features">Danh mục sản phẩm</a>
                                 </li>

                                <li class="nav-item">
                                    <a class="nav-link text-dark scroll-trigger" href="#about">Hướng dẫn đăng ký</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark scroll-trigger" href="#services">Đăng ký</a>
                                </li>
                                <li class="nav-item mr-md-3">
                                    <a class="nav-link text-dark scroll-trigger" href="#contact">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
        
export default Header;