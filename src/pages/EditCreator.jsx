import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { CreatorInfoForm, DeletionWarningPopup } from "../components";

import { supabaseDB } from "../supabaseDB";

const EditCreator = () => {
  const navigate = useNavigate();

  const { creatorID } = useParams();

  const [creatorName, setCreatorName] = useState("");
  const [creatorImgURL, setCreatorImgURL] = useState("");
  const [creatorDescription, setCreatorDescription] = useState("");
  const [youtubeHandle, setYoutubeHandle] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

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


  const updateCreator = async () => {
    if (creatorName && creatorDescription && (youtubeHandle || twitterHandle || instagramHandle)) {
      // User filled the form correctly
      setIsFormInvalid(false);

      const socialMediaHandles = [youtubeHandle, twitterHandle, instagramHandle];
      await supabaseDB.updateCreator(creatorID, creatorName, creatorImgURL, creatorDescription, socialMediaHandles);

      // Goes back to the home page
      navigate("/");
    } else {
      // User filled the form incorrectly
      setIsFormInvalid(true);

      // Scroll to the error message's position
      window.scroll(0, window.innerHeight);
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const getCreatorInfo = async () => {
      try {
        const creator = await supabaseDB.getCreator(creatorID);

        if (creator) {
          setCreatorName(creator.name);
          setCreatorDescription(creator.description);
          setCreatorImgURL(creator.imgURL);

          // creator.url is a string that contains all of the possible social media handles, with each of them being separated by a comma
          // so we use split(",") in order to extract each handle separately
          // Format: "<youtubeHandle>,<twitterHandle>,<instagramHandle>"
          const [youtubeHandle, twitterHandle, instagramHandle] = creator.url.split(",");
          setYoutubeHandle(youtubeHandle);
          setTwitterHandle(twitterHandle);
          setInstagramHandle(instagramHandle);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCreatorInfo();
  }, [creatorID]);

  const textValues = { creatorName, creatorImgURL, creatorDescription, youtubeHandle, twitterHandle, instagramHandle };
  const onChangeHandlers = {
    creatorNameOnChange,
    creatorImgURLOnChange,
    creatorDescriptionOnChange,
    youtubeHandleOnChange,
    twitterHandleOnChange,
    instagramHandleOnChange,
  };

  return (
    <div className="container mx-auto p-8 w-2/5 min-h-screen ">
      {showPopup && <DeletionWarningPopup creatorID={creatorID} creatorName={creatorName} togglePopup={togglePopup} />}
      <CreatorInfoForm
        textValues={textValues}
        onChangeHandlers={onChangeHandlers}
        isFormInvalid={isFormInvalid}
      />
      <div className="flex justify-center my-8 space-x-12">
        <button className="btn btn-info font-bold text-xl text-white w-40" onClick={updateCreator}>
          SUBMIT
        </button>
        <button className="btn btn-error font-bold text-xl text-white w-40" onClick={togglePopup}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default EditCreator;
