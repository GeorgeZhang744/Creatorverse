import { supabase } from "./client";

class SupabaseDB {
  constructor(db) {
    this.db = db;
  }

  async addCreator(creatorName, creatorImgURL, creatorDescription, socialMediaHandles) {
    // Comma works as splitter here, which helps to differentiate youtube, twitter, and instagram handle when retrieving data from the database
    const socialMediaURL = socialMediaHandles.join(",");
    const { error } = await this.db
      .from("creators")
      .insert({ name: creatorName, url: socialMediaURL, description: creatorDescription, imgURL: creatorImgURL })
      .select();

    if (error) {
      console.error(error);
    }
  }

  async updateCreator(creatorID, creatorName, creatorImgURL, creatorDescription, socialMediaHandles) {
    // Comma works as splitter here, which helps to differentiate youtube, twitter, and instagram handle when retrieving data from the database
    const socialMediaURL = socialMediaHandles.join(",");
    const { error } = await this.db
      .from("creators")
      .update({ name: creatorName, url: socialMediaURL, description: creatorDescription, imgURL: creatorImgURL })
      .eq("id", creatorID);

    if (error) {
      console.error(error);
    }
  }

  async getCreator(creatorID) {
    const { data, error } = await supabase.from("creators").select().eq("id", creatorID).limit(1).single();

    if (error) {
      console.error(error);
    }

    return data;
  }

  async deleteCreator(creatorID) {
    const { error } = await supabase.from("creators").delete().eq("id", creatorID);

    if (error) {
      console.error(error);
    }
  }
}

export const supabaseDB = new SupabaseDB(supabase);
