import React from "react";
import { useState } from "react";
import "animate.css";
import Tab from "../components/Link_tab";

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
    <div
      id="bg-links"
      className="link-tree text-white h-screen vertical-bg overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className=" text-5xl md:text-8xl self-center animate__animated animate__backInUp mb-8 ease-in-out duration-300 test-color">
          Alex Espejo
        </h1>
        <div className="h-1 rounded-full bg-red-200 w-96 animate__animated animate__fadeInLeft animate__delay-1s hidden sm:block"></div>

        <span className="flex text-xl animate__animated animate__fadeIn py-4 animate__delay-2s">
          Hey... {"  "}
          <span className="ml-1 flex animate__animated animate__fadeIn animate__delay-3s">
            I'm Alex
            <BsFillArrowUpCircleFill
              className={`hidden sm:block ml-2  text-md text-red-200 cursor-pointer ${
                bio ? "" : "rotate-180"
              } ease-in-out duration-300`}
              onClick={() => setBio(!bio)}
            />
          </span>
        </span>

        <div
          className={`opacity-100 sm:opacity-0 animate__animated  text-center text-sm px-3 duration-500 ease-in-out   ${
            bio ? "animate__fadeIn" : "opacity-0"
          } lg:px-60 lg:text-lg lg:mb-8 xl:px-82`}
        >
          I'm a first year student Orange Coast College pursuing my Associates
          Degree for transfer in Computer Science. I like cooking, card magic
          and coding. I taught myself HTML, CSS, and JavaScript in the summer of
          my junior year and picked up Python during my senior year.{" "}
          <span className="ml-1 hidden sm:inline">
            I'm current learning the React library and NextJS Framework.
          </span>
          I'm activly looking for new experiences and opportunities to learn and
          grow as a developer.
        </div>
        <div className=" flex flex-col justify-center md:flex-row items-center   link-tree-links flex-wrap animate__delay-1s ">
          <Tab link="https://www.linkedin.com/in/alex-espejo-4a604920a/">
            <BsLinkedin className="mr-2 p-0.5 text-4xl" />
            LinkedIn
          </Tab>
          <Tab link="https://www.instagram.com/_yourpalalex/">
            <BsInstagram className="mr-2 p-0.5 text-4xl" />
            Instagram
          </Tab>
          <Tab link="https://github.com/alexespejo?tab=overview&from=2022-03-01&to=2022-03-11">
            <BsGithub className="mr-2 p-0.5 text-4xl" />
            GitHub
          </Tab>
          <Tab>
            <BsPersonCircle className="mr-2 p-0.5 text-4xl" />
            Porfolio
          </Tab>
        </div>
      </div>
    </div>
  );
}
