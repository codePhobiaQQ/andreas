import Link from "next/link";
import { IVideo } from "../models/IVideo";
import { NextPage } from "next";

interface CardProps {
  card: IVideo;
}

const Card: NextPage<CardProps> = ({ card }) => {
  return (
    <Link href={`/home/cards/${card.id}`}>
      <a>
        <div className="card videoCard">
          <img
            src={`http://localhost:5000/${card.preview}`}
            width={268}
            height={409}
            alt="cart"
          />
          <div className="videoInfo">
            <img
              src={`http://localhost:5000/${card.preview}`}
              alt="avatar"
              width={45}
              height={45}
              className="authorAvatar"
            />
            <h4>{card.title}</h4>
            <div className="price">${card.price}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
