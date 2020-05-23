import React from 'react'
import './css/style.css'
import profPic from './img/prof-1.jpg'
import cssIcon from './img/Logos/CSS.png'
import gitIcon from './img/Logos/Git.png'
import githubIcon from './img/Logos/GitHub.png'
import htmlIcon from './img/Logos/html5.png'
import javaIcon from './img/Logos/Java.png'
import jsIcon from './img/Logos/javascript.svg'
import mercurialIcon from './img/Logos/Mercurial.png'
import mysqlIcon from './img/Logos/MySQL.png'
import nodejsIcon from './img/Logos/nodejs.png'
import postgreIcon from './img/Logos/Postgresql.png'
import reactIcon from './img/Logos/react.svg'
import sassIcon from './img/Logos/sasslogo.png'

const App = () => {

    return (
        <div className="App">
            <header className="header">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Aleksi Partanen</span>
                        <span className="heading-primary--sub">CS Student</span>
                    </h1>
                </div>
            </header>

            <main>
                <section className="section section-about">
                    <div>
                        <h3 className="section__header section__header-about">
                            Who am I?
                        </h3>

                        <div className="row u-margin-top-huge">
                            <div className="col-1-2">
                                <p className="section-about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis. Purus in massa tempor nec feugiat nisl. Odio morbi quis commodo odio aenean sed adipiscing. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac tincidunt vitae semper quis lectus nulla. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Ipsum nunc aliquet bibendum enim facilisis. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. In metus vulputate eu scelerisque felis imperdiet proin. Mauris vitae ultricies leo integer malesuada nunc vel. Accumsan in nisl nisi scelerisque eu. Nisi porta lorem mollis aliquam ut porttitor leo. Nisl condimentum id venenatis a condimentum. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Ac auctor augue mauris augue. Ridiculus mus mauris vitae ultricies leo integer. Arcu ac tortor dignissim convallis aenean et tortor at. Auctor augue mauris augue neque gravida in.</p>
                            </div>

                            <div className="col-1-2">
                                <div className="section-about__img-container">
                                    <img src={profPic} alt="Profile photo" className="section-about__image"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section section-skills">
                    <h3 className="section__header u-margin-bottom-medium">My skills</h3>
                    <div className="card">
                        <h2 className="card__header">Front-end</h2>
                        <ul className="list">
                            <div className="list__li-container">
                                <img src={reactIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">React.js</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={cssIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">CSS3</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={sassIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">SCSS/Sass</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={htmlIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">HTML5</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={jsIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">Javascript</a></li>
                            </div>
                        </ul>
                    </div>

                    <div className="card">
                        <h2 className="card__header">Back-end</h2>
                        <ul className="list">
                            <div className="list__li-container">
                                <img src={nodejsIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">Node.js</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={postgreIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">PostgreSQL</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={mysqlIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">MySQL</a></li>
                            </div>
                            <div className="list__li-container">
                                <li className="list__li">&nbsp;</li>
                            </div>
                            <div className="list__li-container">
                                <li className="list__li">&nbsp;</li>
                            </div>
                        </ul>
                    </div>

                    <div className="card">
                        <h2 className="card__header">Other stuff I'm good at</h2>
                        <ul className="list">
                            <div className="list__li-container">
                                <img src={gitIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">Git</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={javaIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">Java</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={mercurialIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">Mercurial</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={githubIcon} className="list__icon"></img>
                                <li className="list__li"><a href="#">Github</a></li>
                            </div>
                            <div className="list__li-container">
                                <li className="list__li">&nbsp;</li>
                            </div>
                        </ul>
                    </div>
                </section>
                <footer className="footer">

                </footer>
            </main>
        </div>
    )
}

export default App
