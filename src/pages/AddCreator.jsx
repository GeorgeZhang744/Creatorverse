import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CreatorInfoForm } from "../components";
import { supabaseDB } from "../supabaseDB";

const AddCreator = () => {
  const navigate = useNavigate()

  const [creatorName, setCreatorName] = useState("");
  const [creatorImgURL, setCreatorImgURL] = useState("");
  const [creatorDescription, setCreatorDescription] = useState("");
  const [youtubeHandle, setYoutubeHandle] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const creatorNameOnChange = (e) => {
    setCreatorName(e.target.value);
  };
  const creatorImgURLOnChange = (e) => {
    setCreatorImgURL(e.target.value);
  };
  const creatorDescriptionOnChange = (e) => {
    setCreatorDescription(e.target.value);
  };
  const youtubeHandleOnChange = (e) => {
    setYoutubeHandle(e.target.value);
  };
  const twitterHandleOnChange = (e) => {
    setTwitterHandle(e.target.value);
  };
  const instagramHandleOnChange = (e) => {
    setInstagramHandle(e.target.value);
  };

  const textValues = { creatorName, creatorImgURL, creatorDescription, youtubeHandle, twitterHandle, instagramHandle };
  const onChangeHandlers = {
    creatorNameOnChange,
    creatorImgURLOnChange,
    creatorDescriptionOnChange,
    youtubeHandleOnChange,
    twitterHandleOnChange,
    instagramHandleOnChange,
  };

  const addCreator = async () => {
    if (creatorName && creatorDescription && (youtubeHandle || twitterHandle || instagramHandle)) {
      // User filled the form correctly
      setIsFormInvalid(false);

      const socialMediaHandles = [youtubeHandle, twitterHandle, instagramHandle];
      await supabaseDB.addCreator(creatorName, creatorImgURL, creatorDescription, socialMediaHandles);
  
      // Goes back to the home page
      navigate("/");
    } else {
      // User filled the form incorrectly
      setIsFormInvalid(true);

      // Scroll to the error message's position
      window.scrollTo(0, window.innerHeight);
    }

  }

  return (
    <div className="container mx-auto p-8 w-2/5 min-h-screen ">
      <CreatorInfoForm
        textValues={textValues}
        onChangeHandlers={onChangeHandlers}
        isFormInvalid={isFormInvalid}
      />
      <button className="btn btn-info font-bold text-2xl text-white w-full my-8" onClick={addCreator}>
        SUBMIT
      </button>
    </div>
  );
};

export default AddCreator;
