import './Layout.css';
import React from 'react';
import { Outlet, Link } from "react-router-dom";

// Data
import resume from '../data/SouaYangResume.pdf'

function Layout () {

    return (
        <div id='container'>
            <div id='nav'>
                <header>Soua Yang</header>
                <div id='nav-pages'>
                    <Link to="/">About</Link>
                    <a href="/#exp-container">Experiences</a>
                    <a href="/#projects">Projects</a>
                    <a href="https://github.com/popopo19">GitHub</a>
                    <a href="https://zalk.itch.io/">Itch.io</a>
                    <a style={{border:'none'}} href={resume} target='_blank' rel="noreferrer">Resume</a>
                </div>
                <div id='nav-pages-scroll' style={{visibility: 'hidden'}}>
                    <a href="#about">About</a>
                    <a href="#exp-container">Experiences</a>
                    <a href="#projects">Projects</a>
                    <a href="https://github.com/popopo19">GitHub</a>
                    <a href="https://zalk.itch.io/">Itch.io</a>
                    <a style={{border:'none'}} href={resume} target='_blank' rel="noreferrer">Resume</a>
                </div>
            </div>
            <hr />  
            <Outlet />
        </div>
    )
}

export default Layout;
