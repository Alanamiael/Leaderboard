export interface UserProps {
  name: string;
  avatar: string;
  score: number;
  id: string;
}

export interface AvatarsProps {
  id?: number;
  src: string;
  name: string;
}
export interface UserState {
  name: string;
  leaders: UserProps[] | [] | undefined;
  loading: boolean;
  history: (UserProps[] | undefined)[];
  currentDay: number;
}
