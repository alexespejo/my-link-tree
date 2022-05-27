import React from "react";
import { useState } from "react";
import "animate.css";
import Tab from "../components/Link_tab";
import Contact_tab from "../components/Contact_tab";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";
import {
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsPersonCircle,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
export default function Home() {
  const [bio, setBio] = useState(false);

  return (
    <div id="bg-links" className="link-tree text-white vertical-bg ">
      <Head>
        <title>Alex Espejo</title>
      </Head>

      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className=" text-5xl  md:text-8xl self-center animate__animated animate__backInUp mb-1 lg:mb-8 ease-in-out duration-300 test-color rounded-xl backdrop-bg">
          Alex Espejo
        </h1>
        <div className="h-1 rounded-full bg-red-200 w-96 animate__animated animate__fadeInLeft animate__delay-1s hidden sm:block"></div>

        <span className="flex text-lg lg:text-xl animate__animated animate__fadeIn animate__delay-2s backdrop-bg mb-3 mt-4 rounded-xl ">
          Oh Hey...
          <span className="ml-1 flex animate__animated animate__fadeIn animate__delay-3s">
            Im Alex
            <BsFillArrowUpCircleFill
              className={`hidden lg:block ml-2  text-md text-red-200 cursor-pointer ${
                bio ? "" : "rotate-180"
              } ease-in-out duration-300`}
              onClick={() => setBio(!bio)}
            />
          </span>
        </span>

        <div
          className={`hidden lg:block opacity-100 text-center text-sm p-2 mx-3 duration-500 ease-out   ${
            bio ? "lg:opacity-100" : "opacity-0"
          } lg:mx-60 lg:text-lg lg:mb-8 xl:mx-82 rounded-xl backdrop-bg`}
        >
          Im a first year student Orange Coast College pursuing my Associates
          Degree for transfer in Computer Science. I like cooking, card magic``
          and coding.{" "}
          <span className="ml-1 hidden lg:inline">
            I taught myself HTML, CSS, and JavaScript in the summer of my junior
            year and picked up Python during my senior year. Im current learning
            the React library and NextJS Framework.
          </span>
        </div>
        <div className=" flex flex-col justify-center items-center md:flex-row md:flex-wrap link-tree-links  animate__delay-1s overflow-y-scroll hide-scrollbar animate__animated animate__fadeIn animate__delay-1s">
          <Tab link="https://www.linkedin.com/in/alex-espejo-4a604920a/">
            <BsLinkedin className="mr-2 p-0.5 text-3xl lg:text-4xl" />
            LinkedIn
          </Tab>
          <Tab link="https://www.instagram.com/_yourpalalex/">
            <BsInstagram className="mr-2 p-0.5 text-3xl lg:text-4xl" />
            Instagram
          </Tab>
          <Tab link="https://github.com/alexespejo?tab=overview&from=2022-03-01&to=2022-03-11">
            <BsGithub className="mr-2 p-0.5 text-3xl lg:text-4xl" />
            GitHub
          </Tab>
          <Contact_tab>
            <BsPersonCircle className="mr-2 p-0.5 text-3xl lg:text-4xl" />
            Contact
          </Contact_tab>
          <div className="mx-10 my-3 p-2 rounded-xl text-center bg-blue-900 text-sm bg-opacity-50">
            Im looking to expand me web developer skills so if you have any
            suggestions questions, want me to build you anything or work on
            anything feel free reach out and message/email me :)
          </div>
        </div>
      </div>
    </div>
  );
}
