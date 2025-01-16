"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import teamImage from "@/assets/bg/abouut-bg.jpg";
import mission from "@/assets/mission.svg";
import progress90image from "@/assets/progress90.png";
import progress85image from "@/assets/progress85.png";
import Arrow from "../shared/icons/Arrow";
import Link from "next/link";
import counterBg from "@/assets/bg/counter-bg.png";

const About: React.FC = () => {
  const [projectsCompleted, setProjectsCompleted] = useState<number>(0);
  const [satisfiedClients, setSatisfiedClients] = useState<number>(0);
  const [expertTeams, setExpertTeams] = useState<number>(0);
  const [peopleUsing, setPeopleUsing] = useState<number>(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    animateCount(5, setProjectsCompleted);
    animateCount(3, setSatisfiedClients);
    animateCount(10, setExpertTeams);
    animateCount(28, setPeopleUsing);
  };

  const animateCount = (
    target: number,
    setState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let count = 0;
    const increment = Math.ceil(target / 50);
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        setState(target);
        clearInterval(interval);
      } else {
        setState(count);
      }
    }, 50);
  };

  return (
    <section className="py-28 px-4 md:px-8 lg:px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h3 className="text-xl md:text-xl uppercase mb-2">About Us</h3>
            <div className="w-10 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two rounded-full mb-5"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10">
              Direction With Our Company.
            </h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-6">
              BigMod Technologies is a dynamic and innovative company
              specializing in providing cutting-edge software and intelligent
              digital branding solutions. With a focus on creativity,
              technology, and client satisfaction, we strive to empower
              businesses of all sizes to thrive in the digital era. Our
              comprehensive suite of services encompasses software development,
              digital marketing, web design, and strategic consultancy, tailored
              to meet the diverse needs of our clients.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 my-8">
              <div className="border border-secondary_one/35 rounded-full p-4 md:p-6">
                <Image
                  className="w-16 md:w-24"
                  src={mission}
                  alt="Team Image"
                />
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-1">
                  Our Mission
                </h4>
                <div className="w-20 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two rounded-full mb-5"></div>
                <p className="text-gray-300 text-sm md:text-base">
                  We are committed to delivering innovative solutions,
                  exceptional customer service, and measurable results that
                  exceed our clients&#39; expectations.
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="bg-gradient-to-tr from-secondary_one to-secondary_two text-white px-6 md:px-8 py-2 md:py-3 rounded-full inline-block mt-4"
            >
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <span>About More</span> <Arrow width={13} height={13} />
              </div>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src={teamImage}
              alt="Team Photo"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute bottom-0 -left-24 md:-left-32 bg-white py-4 px-6 md:px-8 shadow-lg rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 transform translate-x-1/2 translate-y-1/2">
              <div className="text-center flex items-center gap-4">
                <Image
                  className="w-10 md:w-16"
                  src={progress90image}
                  alt="Progress 90%"
                  height={300}
                  width={300}
                />
                <p className="text-xs md:text-sm text-gray-600">
                  Web Clean Design
                </p>
              </div>
              <div className="text-center flex items-center gap-4">
                <Image
                  className="w-10 md:w-16"
                  src={progress85image}
                  alt="Progress 85%"
                  height={300}
                  width={300}
                />
                <p className="text-xs md:text-sm text-gray-600">
                  App Developing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div
          ref={sectionRef}
          className="mt-12 md:mt-16 bg-[#160044] text-white rounded-lg py-10 md:py-16 px-4 md:px-5 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 text-center relative features-count"
          style={{
            background: `url(${counterBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div>
            <p className="text-3xl md:text-5xl font-bold text-primary_two">
              {projectsCompleted}+
            </p>
            <p className="text-sm md:text-base pt-3">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-bold text-primary_two">
              {satisfiedClients}+
            </p>
            <p className="text-sm md:text-base pt-3">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-bold text-primary_two">
              {expertTeams}+
            </p>
            <p className="text-sm md:text-base pt-3">Expert Teams</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-bold text-primary_two">
              {peopleUsing}+
            </p>
            <p className="text-sm md:text-base pt-3">People Are Using</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
