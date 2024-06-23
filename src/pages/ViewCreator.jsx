import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { SocialMediaHandle, DeletionWarningPopup } from "../components";

import { supabase } from "../client";

const ViewCreator = () => {
  const { creatorID } = useParams();
  const [creator, setCreator] = useState({});
  const [socialMediaHandles, setSocialMediaHandles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const navigate = useNavigate();

  const goToEditCreatorPage = () => {
    navigate(`/edit/${creatorID}`);
    window.scrollTo(0, window.innerHeight);
  };

  useEffect(() => {
    const getCreatorInfo = async () => {
      try {
        const { data } = await supabase.from("creators").select().eq("id", creatorID).limit(1).single();

        if (data) {
          setCreator(data);
          setSocialMediaHandles(data.url.split(","));
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCreatorInfo();
  }, [creatorID]);

  return (
    <div className="container mx-auto p-8 w-3/4 min-h-screen">
      {showPopup && <DeletionWarningPopup creatorID={creatorID} creatorName={creator?.creatorName} togglePopup={togglePopup} />}
      <div className="flex">
        <div className="w-2/5 p-4">
          <div>
            <div className="flex relative w-full h-full border-2 border-sky-600">
              <img className="m-auto w-80 h-80 object-cover" src={creator.imgURL} alt="" />
            </div>
          </div>
        </div>
        <div className="w-3/5 p-4 pl-12 space-y-8">
          <p className="font-bold text-4xl text-sky-600">{creator.name}</p>
          <p className="text-xl text-slate-200">{creator.description}</p>
          <SocialMediaHandle handleType="youtube" handle={socialMediaHandles[0]} />
          <SocialMediaHandle handleType="twitter" handle={socialMediaHandles[1]} />
          <SocialMediaHandle handleType="instagram" handle={socialMediaHandles[2]} />
        </div>
      </div>
      <div className="flex mt-20 justify-center space-x-20">
        <button className="btn btn-info btn-lg w-64 text-white text-2xl" onClick={goToEditCreatorPage}>
          EDIT
        </button>
        <button className="btn btn-error btn-lg w-64 text-white text-2xl" onClick={togglePopup}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ViewCreator;
