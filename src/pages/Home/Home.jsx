import { useState } from "react";
import { Link } from "react-router-dom";
import Store from "../../components/shared/Buttons/Store/Store";
import { apple, googlePlay } from "../../assets/icons/icons";
import "./Home.css";
import PlayButton from "../../components/shared/Buttons/PlayButton/PlayButton";
import ClaimCard from "../../components/shared/Cards/RankCard/ClaimCard/ClaimCard";


export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  const toNext = () => {
    setSlideIndex((prev) => prev + 1);
  };

  const toPrev = () => {
    setSlideIndex((prev) => prev - 1);
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
      <div className="content">
        <div className="swipper" style={{'transform': `translateX(-${slideIndex * (100/6)})`}}>
          <button className="prev" style={{display: "none"}} onClick={toPrev}>prev</button>
          <ClaimCard
            title="FREE CLAIM"
            description="New Free Claim Available In Shop"
            img="claim-card-image.png"
            background="claim-card-back.png"
          />
          <ClaimCard
            title="NEW OFFER"
            description="New Offer Available In Shop"
            img="widget-offer-card-image.png"
          />
          <button className="next" onlick={toNext}>next</button>
        </div>
        <div className="widget-event">
          <span className="">Live</span>
          <span>FACTION FEUD</span>
          <p>Hall of Fame Flash Feud</p>
          <Link to={"/Lideroard"}></Link>
        </div>
        <div className="top-players"></div>
        <div className="winners-container"></div>
        <div className="news-container"></div>
      </div>
    </div>
  );
}
