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
import linkedinIcon from './img/Logos/linkedin.png'

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
                    <h3 className="section__header section__header-about">
                        Who am I?
                    </h3>

                    <div className="row u-margin-top-huge">
                        <div className="col-1-2">
                            <p className="section-about__text">Hey! I'm Aleksi and I'm 3rd year computer science student. I'm going to get my bachelor done by 2021. I'm not very design driven person but I focus trying to make beautiful and understandable code that is easy to read. Javascript, css and react(hooks) are my strongest front-end tools. From back-end the strongest is Node.js. I have done few servers for school projects so I know basics of it. You can see some of my work in github.</p>
                            <div className="section-about__social-link">
                                <a href="https://github.com/Partanennn"><img src={githubIcon} className="section-about__social-link-git"></img></a>
                                <a href="https://www.linkedin.com/in/aleksi-partanen-b285a1150/"><img src={linkedinIcon} className="section-about__social-link-linkedin"></img></a>
                            </div>
                        </div>

                        <div className="col-1-2">
                            <div className="section-about__img-container">
                                <img src={profPic} alt="Profile photo" className="section-about__image"></img>
                            </div>
                            
                        </div>
                    </div>
                </section>
                
                <section className="section section-skills">
                    <h3 className="section__header m-bottom-medium section__header-skills stroke">Languages</h3>
                    <div className="card">
                        <h2 className="card__header">Front-end</h2>
                        <ul className="list">
                            <div className="list__li-container">
                                <img src={reactIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://reactjs.org/docs/getting-started.html">React.js</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={cssIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://devdocs.io/css/">CSS3</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={sassIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://sass-lang.com/documentation">Sass</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={htmlIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://devdocs.io/html/">HTML5</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={jsIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://devdocs.io/javascript/">Javascript</a></li>
                            </div>
                        </ul>
                    </div>

                    <div className="card">
                        <h2 className="card__header">Back-end</h2>
                        <ul className="list">
                            <div className="list__li-container">
                                <img src={nodejsIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://nodejs.org/en/docs/">Node.js</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={postgreIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://www.postgresql.org/docs/">PostgreSQL</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={mysqlIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://dev.mysql.com/doc/">MySQL</a></li>
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
                                <li className="list__li"><a href="https://git-scm.com/doc">Git</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={javaIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://docs.oracle.com/javase/8/docs/">Java</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={mercurialIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://www.mercurial-scm.org/guide">Mercurial</a></li>
                            </div>
                            <div className="list__li-container">
                                <img src={githubIcon} className="list__icon"></img>
                                <li className="list__li"><a href="https://github.com/Partanennn">Github</a></li>
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
