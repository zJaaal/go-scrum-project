export type UserRegister = {
  userName: string;
  password: string;
  email: string;
  teamID: string;
  role: Roles;
  continent: Continents;
  region: Region;
  check: boolean;
};

export enum Roles {
  TeamMember = "Team Member",
  TeamLeader = "Team Leader",
}

export enum Continents {
  America = "America",
  Europe = "Europe",
  Other = "Other",
}

export enum Region {
  Brasil = "Brasil",
  Latam = "Latam",
  NorthAmerica = "North America",
  Other = "Other",
}
