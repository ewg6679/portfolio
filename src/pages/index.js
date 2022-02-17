import React from "react";
import {
  HeroSection,
  AboutSection,
  EducationSection,
  SkillsSection,
  ProjectsSection,
  ResumeSection,
  MessageSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Emanuelle Griffin Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <EducationSection sectionId="education" heading="Education" />
        <SkillsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ResumeSection sectionId="resume" heading="Resume" />
        <MessageSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
