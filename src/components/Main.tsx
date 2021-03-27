import React from 'react';

import cIcon from '.././img/Logos/c.svg';
import cssIcon from '.././img/Logos/CSS.png'
import devopsIcon from '.././img/Logos/devops.png'
import gitIcon from '.././img/Logos/Git.png'
import githubIcon from '.././img/Logos/GitHub.png'
import htmlIcon from '.././img/Logos/html5.png'
import javaIcon from '.././img/Logos/Java.png'
import jsIcon from '.././img/Logos/javascript.svg'
import linkedinIcon from '.././img/Logos/linkedin.png'
import mysqlIcon from '.././img/Logos/MySQL.png'
import nodejsIcon from '.././img/Logos/nodejs.png'
import postgreIcon from '.././img/Logos/Postgresql.png'
import profPic from '.././img/prof-1.jpg'
import reactIcon from '.././img/Logos/react.svg'
import sassIcon from '.././img/Logos/sasslogo.png'
import tslogo from '.././img/Logos/tslogo.png'

import ColumnBox from './ColumnBox';

const Main = () => {
    const frontendIcons: Array<{
        source?: any,
        text: string
    }> = [
        {
            source: reactIcon,
            text: 'React.js',
        },
        {
            source: cssIcon,
            text: 'CSS3',
        },
        {
            source: sassIcon,
            text: 'Sass',
        },
        {
            source: htmlIcon,
            text: 'HTML5',
        },
        {
            source: jsIcon,
            text: 'Javascript',
        },
        {
            source: tslogo,
            text: 'Typescript',
        },
    ]

    const backendIcons: Array<{
        source?: any,
        text: string
    }> = [
        {
            source: nodejsIcon,
            text: 'Node.js',
        },
        {
            source: postgreIcon,
            text: 'PostgreSQL',
        },
        {
            source: mysqlIcon,
            text: 'MySQL',
        },
        {
            source: cIcon,
            text: 'C#',
        },
    ]

    const otherStuffIcons: Array<{
        source?: any,
        text: string
    }> = [
        {
            source: gitIcon,
            text: 'Git',
        },
        {
            source: javaIcon,
            text: 'Java',
        },
        {
            source: githubIcon,
            text: 'Github',
        },
        {
            source: devopsIcon,
            text: 'Azure DevOPS',
        },
    ]

    return (
        <main>
            <section className="section section-about">
                <h3 className="section__header section__header-about">
                    Who am I?
                </h3>

                <div className="row u-margin-top-huge">
                    <div className="col-1-2 block">
                        <p className="section-about__text">Hey! I'm Aleksi and I'm computer science student. I'm not very design driven person but I focus trying to make beautiful and understandable code that is easy to read. Javascript, css and react(hooks) are my strongest front-end tools. From back-end the strongest is Node.js. I have done few servers for school projects so I know basics of it. You can see some of my work in github. <b>My contact information is on my Linkedin profile.</b></p>
                        <div className="section-about__social-link">
                            <a href="https://github.com/Partanennn"><img src={githubIcon} className="section-about__social-link-git" alt="github icon"></img></a>
                            <a href="https://www.linkedin.com/in/aleksi-partanen-b285a1150/"><img src={linkedinIcon} className="section-about__social-link-linkedin" alt="linkedin icon"></img></a>
                        </div>
                    </div>

                    <div className="col-1-2 block">
                        <div className="section-about__img-container">
                            <img src={profPic} alt="Profile" className="section-about__image"></img>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            <section className="section section-skills">
                <h3 className="section__header m-bottom-medium section__header-skills stroke">Languages</h3>
                <div className="row">
                    <ColumnBox
                        headerText="Front-end"
                        icons={frontendIcons}
                    />
                    
                    <ColumnBox
                        headerText="Back-end"
                        icons={backendIcons}
                    />

                    <ColumnBox 
                        headerText="Other stuff I know"
                        icons={otherStuffIcons}
                    />
                </div>    
            </section>
            <footer className="footer">
                <p>Aleksi Partanen &#169; 2021</p>
            </footer>
        </main>
    )
}

export default Main;