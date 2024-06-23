/* eslint-disable react/prop-types */
import * as Icons from "./svgIcons";

const CreatorCardSocialMediaIcon = ({ handle, handleType }) => {
  const baseURL =
    handleType === "youtube"
      ? "https://youtube.com/"
      : handleType === "twitter"
      ? "https://x.com/"
      : handleType === "instagram"
      ? "https://instagram.com/"
      : "";

  return (
    <a
      href={handle ? `${baseURL}${handle}` : ""}
      target="_blank"
      rel="noopener noreferrer"
      style={{ pointerEvents: handle ? "auto" : "none" }}
    >
      {handleType === "youtube" ? (
        <Icons.YoutubeIcon />
      ) : handleType === "twitter" ? (
        <Icons.TwitterIcon />
      ) : handleType === "instagram" ? (
        <Icons.InstagramIcon />
      ) : (
        <></>
      )}
    </a>
  );
};

export default CreatorCardSocialMediaIcon;
