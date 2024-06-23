/* eslint-disable react/prop-types */
import * as TextInputs from "./textInputs";

const CreatorInfoForm = ({ textValues, onChangeHandlers, isFormInvalid }) => {

  const { creatorName, creatorImgURL, creatorDescription, youtubeHandle, twitterHandle, instagramHandle } = textValues;
  const {
    creatorNameOnChange,
    creatorImgURLOnChange,
    creatorDescriptionOnChange,
    youtubeHandleOnChange,
    twitterHandleOnChange,
    instagramHandleOnChange,
  } = onChangeHandlers;

  return (
    <div className="space-y-4">
      {isFormInvalid && <div className="text-xl text-error">Missing required fields!</div>}
      <TextInputs.SingleLabelTextInput labelName={"Name"} textValue={creatorName} onChangeHandler={creatorNameOnChange} />
      <TextInputs.DuoLabelsTextInput
        labelName={"Image"}
        labelDescription={"Provide a link to an image of your creator. Be sure to include the http://"}
        textValue={creatorImgURL}
        onChangeHandler={creatorImgURLOnChange}
      />
      <TextInputs.DuoLabelsTextAreaInput
        labelName={"Description"}
        labelDescription={"Provide a description of the creator. Who are they? What makes them interesting?"}
        textValue={creatorDescription}
        onChangeHandler={creatorDescriptionOnChange}
      />
      <p className="font-bold text-2xl text-sky-600 mr-auto">SOCIAL MEDIA LINKS</p>
      <p className="italic text-sm text-slate-200 mr-auto">{"Provide at least one of the creator's social media links"}</p>
      <TextInputs.DuoLabelsTextInputWithIcon
        labelName={"YouTube"}
        labelDescription={"The creator's YouTube handle (without the @)"}
        textValue={youtubeHandle}
        onChangeHandler={youtubeHandleOnChange}
        iconType={"youtube"}
      />
      <TextInputs.DuoLabelsTextInputWithIcon
        labelName={"Twitter"}
        labelDescription={"The creator's Twitter handle (without the @)"}
        textValue={twitterHandle}
        onChangeHandler={twitterHandleOnChange}
        iconType={"twitter"}
      />
      <TextInputs.DuoLabelsTextInputWithIcon
        labelName={"Instagram"}
        labelDescription={"The creator's Instagram handle (without the @)"}
        textValue={instagramHandle}
        onChangeHandler={instagramHandleOnChange}
        iconType={"instagram"}
      />
    </div>
  );
};

export default CreatorInfoForm;
