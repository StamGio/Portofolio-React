import { Component } from "react";
import Home from "../Portofoliocontainer/Home/Home";
import AboutMe from "../Portofoliocontainer/AboutMe/AboutMe";
import Resume from "../Portofoliocontainer/Resume/Resume";
import Testimonial from "../Portofoliocontainer/Testimonials/Testimonials";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About Me",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Testimonial",
    component: Testimonial,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
