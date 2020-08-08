import { Pai } from './types/pai';
import { ripai } from './logic/ripai';
import { disassembler } from './logic/disassembler';

const tehai: Pai[] = [
  { n: 0, k: 'chun', r: false },
  { n: 0, k: 'chun', r: false },
  { n: 0, k: 'pe', r: false },
  { n: 0, k: 'nan', r: false },
  { n: 0, k: 'ton', r: false },
  { n: 4, k: 'p', r: false },
  { n: 3, k: 'm', r: false },
  { n: 2, k: 's', r: false },
  { n: 9, k: 'm', r: false },
  { n: 9, k: 'p', r: false },
  { n: 3, k: 'm', r: false },
  { n: 2, k: 'p', r: false },
  { n: 9, k: 'm', r: false }
];

console.log('------before');
tehai.forEach(p => console.log(`${p.n}${p.k}`))
console.log('------after');
ripai(tehai).forEach((p: Pai) => console.log(`${p.n}${p.k}`))


disassembler(ripai(tehai));