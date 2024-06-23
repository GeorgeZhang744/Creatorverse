/* eslint-disable react/prop-types */
import * as Icons from "../svgIcons";

const DuoLabelsTextInputWithIcon = ({ labelName, labelDescription, textValue, onChangeHandler, iconType }) => {
  const getMatchedIcon = () => {
    return iconType === "youtube" ? (
      <Icons.YoutubeIcon />
    ) : iconType === "twitter" ? (
      <Icons.TwitterIcon />
    ) : iconType === "instagram" ? (
      <Icons.InstagramIcon />
    ) : (
      <></>
    );
  };

  return (
    <label className="form-control w-full">
      <div className="label px-0" style={{ display: "flex", flexDirection: "column" }}>
        <div className="flex mr-auto">
          <div className="my-auto">{getMatchedIcon()}</div>
          <span className="label-text font-bold text-xl text-slate-200 ml-2">{labelName}</span>
        </div>
        <span className="label-text italic text-sm text-slate-200 mr-auto">{labelDescription}</span>
      </div>
      <input type="text" className="input input-bordered w-full" value={textValue} onChange={onChangeHandler} />
    </label>
  );
};

export default DuoLabelsTextInputWithIcon;
