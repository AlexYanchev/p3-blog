export type UsersTableType = {
  id: string;
  login: string;
  name: string;
  email: string;
  password: string;
};

export type TablesType = {
  users: UsersTableType;
};
