import { Pai } from '../types/pai';
import { ripai } from '../logic/ripai';

export const disassembler = (tehai: Pai[]) => {
  const positionsOfToitsu = lenearizeToitsuPosition(tehai);
  positionsOfToitsu.forEach(e => {
    console.log(e);
  })
}

const lenearizeToitsuPosition = (tehai: Pai[]): number[] => {
  return tehai.reduce((acc: number[], pai: Pai, index: number): number[] => {
    const next = index + 1;
    if (next === tehai.length) return acc;
    return (
      pai.n === tehai[next].n &&
      pai.k === tehai[next].k &&
      !acc.find(t => t === pai.n)
    ) ? [...acc, index]: acc;
  }, []);
}

const shuntsu = (candidates: Pai[]): boolean => {
  if (candidates.length !== 3) return false;
  if (candidates.some(c => c.n === 0)) return false; // detect jihai
  if (candidates[0].k !== candidates[1].k) return false;
  if (candidates[1].k !== candidates[2].k) return false;

  const ripaied = ripai(candidates);
  if (ripaied[0].n - ripaied[1].n !== -1) return false;
  if (ripaied[1].n - ripaied[2].n !== -1) return false;
  return true;
};

const kotsu = (candidates: Pai[]): boolean => {
  if (candidates.length !== 3) return false;
  if (candidates.some(c => c.n === 0)) return false; // detect jihai
  if (candidates[0].k !== candidates[1].k) return false;
  if (candidates[1].k !== candidates[2].k) return false;
  if (candidates[0].n !== candidates[1].n) return false;
  if (candidates[1].n !== candidates[2].n) return false;
  return true;
};