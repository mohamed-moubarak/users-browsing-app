export enum UserTitle {
 MR = "mr",
 MS = "ms",
 MRS = "mrs",
 MISS = "miss",
 DR = "dr",
 EMPTY = "",
}

export enum UserGender {
 MALE = "male",
 FEMALE = "female",
 OTHER = "other",
 EMPTY = "",
}

export type Location = {
 street: string;
 city: string;
 state: string;
 country: string;
 timezone: string;
};
