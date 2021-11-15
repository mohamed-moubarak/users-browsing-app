import { UserGender, UserTitle, Location } from "../../../common/types";

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
