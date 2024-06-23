/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import { WarningIcon } from "./svgIcons";

import { supabaseDB } from "../supabaseDB";

const DeletionWarningPopup = ({ creatorID, creatorName, togglePopup }) => {
  const navigate = useNavigate();

  const deleteCreator = async (creatorID) => {
    try {
      await supabaseDB.deleteCreator(creatorID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={"fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"} style={{ zIndex: 50 }}>
      <div className="p-8 w-1/3 h-80 border-4 border-sky-600 text-center space-y-3">
        <div className="flex justify-center">
          <WarningIcon style="h-8 w-8 mt-auto" />
          <h2 className="text-4xl font-bold text-sky-600 mx-2">WAIT!!!</h2>
          <WarningIcon style="h-8 w-8 mt-auto" />
        </div>
        <p className="text-lg text-slate-200">{`Are you sure you want to delete ${creatorName ? creatorName : ""}???`}</p>
        <br />
        <div>
          <button className="btn btn-info btn-xl font-bold text-xl text-white w-64" onClick={() => togglePopup(false)}>
            NAH, NEVER MIND
          </button>
        </div>
        <div>
          <button className="btn btn-info btn-xl font-bold text-xl text-white w-64" onClick={() => deleteCreator(creatorID)}>
            YES! TOTALLY SURE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletionWarningPopup;
