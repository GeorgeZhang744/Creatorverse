import { useState, useEffect } from "react";

import { CreatorCard } from "../components";

import { supabase } from "../client";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const getCreators = async () => {
      try {
        const { data } = await supabase.from("creators").select();

        if (data) {
          // sort the creator cards based on their creation time
          setCreators(data.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at) ));
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCreators();
  }, []);

  return (
    <div className="container mx-auto p-4 w-2/3">
      <div className="flex flex-wrap justify-center">
        {creators.map((creatorInfo, index) => {
          const [youtubeHandle, twitterHandle, instagramHandle] = creatorInfo.url.split(",");
          return (
            <div className="flex justify-center w-full sm:w-1/2 my-8" key={index}>
              <CreatorCard
                creatorID={creatorInfo.id}
                creatorName={creatorInfo.name}
                creatorImgURL={creatorInfo.imgURL}
                description={creatorInfo.description}
                youtubeHandle={youtubeHandle}
                twitterHandle={twitterHandle}
                instagramHandle={instagramHandle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowCreators;
