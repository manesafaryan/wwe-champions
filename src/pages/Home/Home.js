import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Store from "../../components/shared/Buttons/Store/Store";
import { apple, googlePlay, medal, topTrophy } from "../../assets/icons/icons";
import "./Home.css";
import PlayButton from "../../components/shared/Buttons/PlayButton/PlayButton";
import ClaimCard from "../../components/shared/Cards/ClaimCard/ClaimCard";
import { news } from "../../constants/news.constatnt";
import NewsCard from "../../components/shared/Cards/NewsCard/NewsCard";
import { winners } from "../../constants/winners.constant";
import WinnerCard from "../../components/shared/Cards/ClaimCard/WinnerCard/WinnerCard";
import { topPlayers } from "../../constants/topPlayers.constant";
import { topFactions } from "../../constants/topFactions.constant";
import RankCard from "../../components/shared/Cards/RankCard/RankCard";
import RankCardHeader from "../../components/shared/Cards/RankCardHeader/RankCardHeader";
import { claim } from "../../constants/claim.constant";
import { DARK, LIGHT } from "../../actions/constants";
import { useSelector } from "react-redux";
import SliderArrow from "../../components/shared/SliderArrow/SliderArrow";

export default function Home() {
  const theme = useSelector((state) => state.theme);
  const sliderRef = useRef(null)

 const next = () => {
    sliderRef.slickNext();
  }
  const previous = () => {
    sliderRef.slickPrev();
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: "slider",
    nextArrow: <SliderArrow arrow=">" onclick={next} />,
    prevArrow: <SliderArrow arrow="<" onclick={previous} />
  };

  return (
    <div className="home">
      <div className="banner">
        <div className="banner__content">
          <p className="banner__contests">CONTESTS</p>
          <h1 className="banner__heading">HITMAN’S SPECTACULAR</h1>
          <p className="banner__description">
            Hey Champions, Claim your FREE Feud Boost Step with 40% Kickout
            Boost and play Flash Feuds to unlock BRAND-NEW Bret Hart “Hall of
            Fame” at 4-Star Bronze! Climb up the milestones for awesome rewards,
            including his Silver Gear and a 4-Star Gold Poster! 😎💜 ⭐ ONLY on
            wwechampions.com Come back DAILY and enjoy FREE REWARDS […] The post
            Hitman’s Spectacular appeared first on WWE Champions 2022.
          </p>
          <div className="button-group">
            <PlayButton buttonClass={"btn-primary"} />
            <Store
              title="Download on the"
              store="App Store"
              icon={apple()}
              link="https://apps.apple.com/app/id1017432937?mt=8"
            />
            <Store
              title="Get it on"
              store="Google Play"
              icon={googlePlay()}
              link="https://play.google.com/store/apps/details?id=com.scopely.whiplash&referrer=adjust_reftag%3DcNQB4dJZR8V9a%26utm_source%3Dweb_acquisition_button_android"
            />
          </div>
        </div>
      </div>
      <div>
          <Slider {...settings} ref={sliderRef}>

            {claim.map((card) => (
              <ClaimCard
                title={card.title}
                description={card.description}
                img={card.img}
                background={
                  theme === DARK ? card.background_dark : card.background_light
                }
              />
            ))}
            <div className="widget-event">
              <span className="">Live</span>
              <span>FACTION FEUD</span>
              <p>Hall of Fame Flash Feud</p>
              <Link to={"/Lideroard"}></Link>
            </div>
          </Slider>
        <div className="top-players"></div>
        <div className="winners">
          <h2>Last Faction Feud Winners</h2>
          <div className="winners-container"></div>
        </div>
        <div className="leaderboard-container">
          <div className="top-players">
            <RankCardHeader
              icon={medal()}
              heading={"TOP 10 PLAYER LEADERBOARD"}
              content={
                "Top 10 players globally based on their individual performance in last 5 Faction Feuds."
              }
            />
            <RankCard players={topPlayers} description={"PLAYER & FACTION"} />
          </div>
          <div className="top-factions">
            <RankCardHeader
              icon={topTrophy()}
              heading={"TOP 10  FACTION LEADERBOARD"}
              content={
                "Top 10 factions globally based on their performance in last 5 Faction Feuds."
              }
            />
            <RankCard players={topPlayers} description={"PLAYER & FACTION"} />
          </div>
        </div>
        <div className="news">
          <h2 className="news__heading">Latest News & Updates</h2>

          <div className="news-container">
            {news.map((item) => (
              <NewsCard
                heading={item.heading}
                date={item.date}
                img={item.img}
                content={item.content}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
