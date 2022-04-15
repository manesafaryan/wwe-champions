import { FunctionComponent } from "react";
import "./NewsCard.css";

interface IProps {
  heading: string, content:string, img: string, date: string, type:string
}

const NewsCard: FunctionComponent<IProps> = ({ heading, content, img, date, type }) => {
  return (
    <div className="news-card">
      <img className="news-card__img" src={`./images/${img}`} />
      <div className="news-card__content">
        <p className="news-card__date">{date}</p>
        <h5 className="news-card__heading">{heading}</h5>
        <p className="news-card__p">{content}</p>
      </div>
      <div className="read-more">
          <p className="read-more__type">{"#" + type}</p>
          <p>Read More</p>
      </div>
    </div>
  );
}

export default NewsCard