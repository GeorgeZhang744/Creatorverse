/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import * as Icons from "./svgIcons";
import CreatorCardSocialMediaIcon from "./CreatorCradSocialMediaIcon";

const CreatorCard = ({ creatorID, creatorName, creatorImgURL, description, youtubeHandle, twitterHandle, instagramHandle }) => {
  const navigate = useNavigate();

  const goToViewCreatorPage = () => {
    navigate(`/view/${creatorID}`);
    window.scrollTo(0, window.innerHeight);
  };

  const goToEditCreatorPage = () => {
    navigate(`/edit/${creatorID}`);
    window.scrollTo(0, window.innerHeight);
  };

  return (
    <div
      className={"card w-4/5 h-72 border-2 border-sky-600 bg-gray-400 bg-cover bg-center"}
      style={{ backgroundImage: `url(${creatorImgURL})` }}
    >
      <div className="card-body">
        <br />
        <div className="flex">
          <h2 className="card-title font-bold text-sky-600">{creatorName}</h2>
          <div className="ml-auto my-auto">
            <button onClick={goToViewCreatorPage}>
              <Icons.InfoIcon />
            </button>
          </div>
          <div className="ml-1 my-auto">
            <button onClick={goToEditCreatorPage}>
              <Icons.PencilIcon />
            </button>
          </div>
        </div>
        <div className="flex space-x-1">
          <CreatorCardSocialMediaIcon handle={youtubeHandle} handleType={"youtube"} />
          <CreatorCardSocialMediaIcon handle={twitterHandle} handleType={"twitter"} />
          <CreatorCardSocialMediaIcon handle={instagramHandle} handleType={"instagram"} />
        </div>
        <p className=" text-slate-200 line-clamp-3" style={{ maxHeight: "4.5em", lineHeight: "1.5em" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CreatorCard;
