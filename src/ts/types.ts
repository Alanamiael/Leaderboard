import { UserProps } from './interfaces';

export type OrderChanges = (
  prevUsers: string[] | undefined,
  user: UserProps | undefined,
  index: number,
) => {
  diff: string;
  textColor: string;
};
