import { OrderChanges } from '@ts/types';
import cl from './UserInfo.module.scss';

export const orderChanges: OrderChanges = (prevUsers, user, index) => {
  let diff = '';
  let textColor = '';

  if (prevUsers && user && typeof index === 'number') {
    const indexOfUser = prevUsers.indexOf(user.id);

    switch (true) {
      case indexOfUser < index:
        diff = `${Math.abs(indexOfUser - index)} places`;
        textColor = 'r';
        break;

      case indexOfUser > index:
        diff = `${Math.abs(indexOfUser - index)} places`;
        textColor = 'b';
        break;

      default:
        diff = 'No change';
        textColor = 'o';
        break;
    }
  } else {
    diff = 'No data';
    textColor = 'invalidColor';
  }
  return { diff, textColor };
};
export const orderColor = (textColor: string) => {
  switch (textColor) {
    case 'b':
      return cl.blue;
    case 'r':
      return cl.red;
    default:
      return cl.orange;
  }
};
