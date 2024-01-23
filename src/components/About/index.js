import React from 'react'
import { useState,useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { faAngular, faCss3,faGitAlt,faHtml5, faJsSquare,faReact,} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import './index.scss'
export const About = () => {
     const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray = 'About Me'.split('')
 

    useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
        <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <p>
            Aiming for a challenging position within a progressive organization, where I can apply my expertise gained
            through 2+ years of experience.
          </p>
          <p align="LEFT">
           
            I am a highly motivated front-end developer eager to join a leading IT company that values innovation and embraces the latest technologies. My ambition is to contribute my skills to challenging and diverse projects, where I can continually expand my expertise and stay at the forefront of industry advancements
          </p>
          <p>
            Proficiency in ReactJS , Html ,css and JavaScript , with a proven track record of developing responsive and user-friendly interfaces.
Strong problem-solving skills and a keen eye for detail.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}
