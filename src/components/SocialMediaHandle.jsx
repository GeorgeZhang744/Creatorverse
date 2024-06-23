/* eslint-disable react/prop-types */
import * as Icons from "./svgIcons";

const SocialMediaHandle = ({ handleType, handle }) => {
  const baseURL =
    handleType === "youtube"
      ? "https://youtube.com/"
      : handleType === "twitter"
      ? "https://x.com/"
      : handleType === "instagram"
      ? "https://instagram.com/"
      : "";

  return (
    <div>
      <a
        href={baseURL && handle ? baseURL + handle : ""}
        target="_blank"
        rel="noopener noreferrer"
        style={{ pointerEvents: handle ? "auto" : "none" }}
      >
        <div className="flex">
          {handleType === "youtube" ? (
            <Icons.YoutubeIcon style={"mt-auto"} />
          ) : handleType === "twitter" ? (
            <Icons.TwitterIcon style={"mt-auto"} />
          ) : handleType === "instagram" ? (
            <Icons.InstagramIcon style={"mt-auto"} />
          ) : (
            <></>
          )}
          <p className="font-bold text-slate-200 ml-2 text-xl">{handle ? `@${handle}` : ""}</p>
        </div>
      </a>
    </div>
  );
};

export default SocialMediaHandle;
