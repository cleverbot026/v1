import React, {useEffect, useState} from 'react';
import './App.css';
import img from './assets/pic_square.jpg';
import resume from './assets/resume_labnao.pdf';
import {motion} from 'framer-motion';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGithubAlt, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";


function App(){
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme-color');
        setIsOn(currentTheme === 'dark' ? true: false);
    },[]);

    const toggleSwitch = () => {
        if (isOn) {
            localStorage.setItem('theme-color', 'default');
            setIsOn(false);
        } else {
            localStorage.setItem('theme-color', 'dark');
            setIsOn(true);
        }
    };

    return (
        <div
            className={`${isOn ? 'dark' : ''} main`}>
            <div className={'theme'}>
                <FontAwesomeIcon icon={faSun}/>
                <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
                    <motion.div className="handle" layout transition={spring}> </motion.div>
                </div>
                <FontAwesomeIcon icon={faMoon}/>
            </div>
            <Greet/>
            <AboutMe/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
    )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

function Greet(){
    return(
        <motion.div className={'container'}>
            <div className={'greet-title'}>
                <h1>Hi! I'm <span>James Labnao</span></h1>
            </div>
            <div className={'greet-body'}>
                <p >A full-stack developer wannabe that has a slight obsession to minimalism.</p>
                <span>Email me @ <a href={'mailto:jamesv.labnao@gmail.com'}>jamesv.labnao@gmail.com</a></span>
            </div>
        </motion.div>
    )
}



function AboutMe(){
    const [shouldShow, setShouldShow] = React.useState(false);
    const [lastYpos, setLastYpos] = React.useState(0);

    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = (yPos >= 450 && yPos <= 750) ? true : false;
            setShouldShow(isScrollingUp);
            setLastYpos(yPos);
            console.log(yPos);
        }
        window.addEventListener('scroll', handleScroll, false);
        return () =>{
            window.removeEventListener('scroll', handleScroll, false)
        };
    }, [lastYpos]);

    return(
        <motion.div className={'container-about'}
                    animate={shouldShow && {opacity: 1, y: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{ease: "easeOut", duration: 1}}>

            <img className={'about-icon'} src={img} alt=""/>
            <div className={'about-body'}>
                <h2 className={"about-title"}>about me</h2>
                <p>Hi! I am James, a freelance developer living in Marikina City, a licensed teacher and a daddy to
                    two cats. <br/><br/>
                    I enjoy creating applications and putting myself up for a challenge. I always aim to learn new things
                    from different experience. And, I also like playing games, be it tabletops RPG or MMORPG.
                    <br/><br/>
                    After graduating from <b>Polytechnic University of the Philippines</b> I teach Computer Programming
                    subjects in a public high school in Marikina. Hoping to impart my knowledge
                    and skills in programming to the future generation. Currently, I am looking for new
                    ventures to improved my skills.
                    <br/><br/>
                    Here are some of the technologies I've been working with recently:
                </p>
                <div className={'skills'}>
                    <div>
                        <h4>Languages</h4>
                        <ul>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>C/C++</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Tools</h4>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Frameworks</h4>
                        <ul>
                            <li>React</li>
                            <li>Laravel</li>
                            <li>Spring</li>
                            <li>Codeigniter</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Others</h4>
                        <ul>
                            <li>Illustrator</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


function Work() {
    const [shouldShow, setShouldShow] = React.useState(false);
    const [lastYpos, setLastYpos] = React.useState(0);

    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = (yPos >= 1015 && yPos <= 1860) ? true : false;
            setShouldShow(isScrollingUp);
            setLastYpos(yPos);
            console.log(yPos);
        }
        window.addEventListener('scroll', handleScroll, false);
        return () =>{
            window.removeEventListener('scroll', handleScroll, false)
        };
    }, [lastYpos]);

    const workInfo = [
        {
            id: 1,
            company: 'Department of Education',
            position: 'Programming Teacher',
            startDate: 'June, 2016',
            endDate: 'August, 2020',
            description: 'Teach C, HTML, CSS, JavaScript, PHP to Senior High School students.'
        },{
            id: 2,
            company: '88DB',
            position: 'Backend Developer Intern',
            startDate: 'April, 2015',
            endDate: 'May, 2015',
            description: 'Fixed bugs and add functionalities to an existing in-house project.'
        }];

    const workList = workInfo.map(info =>
        <div className={'works'} key={info.id}>
            <h3 className={'job-title'}> {info.position} </h3>
            <h4 className={'company'}> {info.company} </h4>
            <span className={'date'}> {info.startDate} - {info.endDate} </span>
            <p className={'desc'}> {info.description} </p>
        </div>);

    return(
        <motion.div className={'container'}
                    animate={shouldShow && {opacity: 1, y: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{ease: "easeOut", duration: 0.5}}>
            <h2 className={'work-title'}>work experience</h2>
            <>
                {workList}
            </>
            <div className={'resume'}>
                <a className={'icon arrow'} href={resume} target={'_blank'}>View my Resume</a>
            </div>
        </motion.div>
    )

}

function Contact() {
    const [shouldShow, setShouldShow] = React.useState(false);
    const [lastYpos, setLastYpos] = React.useState(0);

    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = (yPos >= 1700 && yPos <= 1863) ? true : false;
            setShouldShow(isScrollingUp);
            setLastYpos(yPos);
            console.log(yPos);
        }
        window.addEventListener('scroll', handleScroll, false);
        return () =>{
            window.removeEventListener('scroll', handleScroll, false)
        };
    }, [lastYpos]);

    return(
        <motion.div className={"container-contact"}
                    animate={shouldShow && {opacity: 1, y: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{ease: "easeOut", duration: 0.5}}>

            <p>I am currently looking for a developer position. If you happen to know someone who is hiring kindly </p>

            <a className={'email'} href={"mailto:jamesv.labnao@gmail.com"}> Email Me! </a>
        </motion.div>
    )
}

function Footer() {
    return(
        <div className={'footer'}>
            <div>
                <a href={'https://www.github.com/cleverbot026'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/github.png"/>*/}
                    <FontAwesomeIcon icon={faGithubAlt} size={'2x'}/>
                </a>
                <a href={'https://www.linkedin.com/in/jameslabnao'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/linkedin.png"/>*/}
                    <FontAwesomeIcon icon={faLinkedinIn} size={'2x'}/>
                </a>
                <a href={'https://www.instagram.com/jameslovenow'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/instagram-new.png"/>*/}
                    <FontAwesomeIcon icon={faInstagram} size={'2x'}/>
                </a>
                <a href={'https://www.twitter.com/jameslovenow'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/twitter.png"/>*/}
                    <FontAwesomeIcon icon={faTwitter} size={'2x'}/>
                </a>
                <a href={'https://www.facebook.com/james.labnao'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/facebook.png"/>*/}
                    <FontAwesomeIcon icon={faFacebookF} size={'2x'}/>
                </a>
            </div>

            <p> Built by James Labnao. Powered by ReactJS</p>

        </div>
    )
}

export default App;
