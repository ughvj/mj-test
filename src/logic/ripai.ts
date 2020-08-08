import { Pai } from '../types/pai';
import { Priorities } from '../types/PaiKind';

export const ripai = (tehai: Pai[]) => {
  return tehai.sort((a, b) => {
    return (
      Priorities.findIndex(p => p === a.k) * 10 + a.n
    ) - (
      Priorities.findIndex(p => p === b.k) * 10 + b.n
    );
  });
};