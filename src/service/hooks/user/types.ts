enum UserTitle {
 MR = "mr",
 MS = "ms",
 MRS = "mrs",
 MISS = "miss",
 DR = "dr",
 EMPTY = "",
}

enum UserGender {
 MALE = "male",
 FEMALE = "female",
 OTHER = "other",
 EMPTY = "",
}

export type UserModel = {
 id: string;
 title: UserTitle;
 firstName: string;
 lastName: string;
 picture: string;
};

export type FetchUsersResponse = {
 data: Array<UserModel>;
 limit: number;
 page: number;
 total: number;
};

export type Location = {
 street: string;
 city: string;
 state: string;
 country: string;
 timezone: string;
};

export type UserDetailsModel = {
 id: string;
 title: UserTitle;
 firstName: string;
 lastName: string;
 gender: UserGender;
 email: string;
 dateOfBirth: string;
 registerDate: string;
 phone: string;
 picture: string;
 location: Location;
};
