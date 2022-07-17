import React, {useRef, useState} from 'react';
import "./About.css";
import images from "../../constants/images";
import {about_stats} from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import {FaPlay} from "react-icons/fa";

const About = () => {
    const vidRef = useRef(null);
    const [toggleVideo, setToggleVideo] = useState(false);
    const playVideo = () => {
        setToggleVideo(!toggleVideo);
        if(toggleVideo) vidRef.current.play();
        else vidRef.current.pause();
    }

  return (
    <div className='about section-p'>
        <div className='container'>
            <div className='about-content'>
                <div className='about-grid grid'>
                    <img src = {images.About_Alex} alt = "" className='about-img mx-auto' />
                    <div className='section-title'>
                        <h3 className='text-brown'>I'm <span className='text-dark'>Alex</span></h3>
                        <p className='text mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam culpa distinctio mollitia consectetur dolore! Iusto dolores reprehenderit at ad! Molestiae.</p>
                    </div>
                </div>

                <div className='about-grid grid'>
                    {
                        about_stats.map((about_stat, index) => {
                            return (
                                <div className='about-item text-center flex' key = {index}>
                                    <div className='about-item-icon'>
                                        <img src = {about_stat.image} alt = "" />
                                    </div>
                                    <div className='about-item-text text-left'>
                                        <h3 className='fs-24 ls-2'>{about_stat.value}</h3>
                                        <p className='text'>{about_stat.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='about-grid grid'>
                    <div className='section-title'>
                        <h3 className='text-brown'>Video <span className='text-dark'>Presentation</span></h3>
                        <p className='text mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias maxime tenetur, temporibus aspernatur, omnis expedita saepe sapiente adipisci laboriosam necessitatibus ullam eveniet asperiores nostrum.</p>
                    </div>

                    <div className='about-video'>
                        <video className='about-video' autoPlay loop ref = {vidRef}>
                            <source src = {video} type = "video/mp4" />
                        </video>
                        <button type = "button" className='vidPlayBtn flex flex-c' onClick={playVideo}>
                            <FaPlay className='text-brown' size = {28} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About