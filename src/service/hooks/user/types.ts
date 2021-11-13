enum UserTitle {
  MR = "mr",
  MS = "ms",
  MRS = "mrs",
  MISS = "miss",
  DR = "dr",
  EMPTY = "",
}

export type UserModel = {
  id: string;
  title: UserTitle;
  firstName: string;
  lastName: string;
  picture: string;
};
