import React from "react";
import "./homePage.css";
// Import components
import HeroSection from "./HeroSection/heroSection";
import YouTubeEmbed from "./YoutubeEmbed/youtubeEmbed";
import UpcomingTournaments from "./UpcomingTour/upcomingTournaments";


export default function HomePage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <HeroSection />
          <UpcomingTournaments />
          <YouTubeEmbed />
        </div>
      </div>
    </>
  );
}
