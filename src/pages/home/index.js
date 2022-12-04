import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Profile from "../../assets/images/pfp.jpg";
export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image order-1 order-lg-2 h-100 ">
            <img src={Profile} className="image " alt="pfp" />
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">
                  <Typewriter
                    options={{
                      delay:40,
                      autoStart: true,
                      deleteSpeed: 10,
                      strings: introdata.title,
                      typeSpeed: 100,
                      cursor:null
                    }}
                  />
                </h2>
                {/* <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      delay:100,
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: false,
                      deleteSpeed: 10,
                    }}
                  {/* /> 
                </h1> */}
                <Typewriter
                   options={{
                      delay:35,
                      cursor:null
                    }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .typeString(introdata.description)
                      .callFunction(() => {
                      })
                      .start();
                  }}
                />
                <div className="intro_btn-action pb-5">
                  <Link to="/projects" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      About Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
