export type UserRegister = {
  userName: string;
  password: string;
  email: string;
  teamID: string;
  role: Roles;
  continent: Continents;
  region: Region;
};

export enum Roles {
  TeamLeader = "Team Leader",
  TeamMember = "Team Member",
}

export enum Continents {
  "America",
  "Europe",
  "Other",
}

export enum Region {
  "Other",
  "Latam",
  "Brasil",
  "North America",
}
