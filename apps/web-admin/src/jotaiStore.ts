import { atom } from 'jotai/vanilla';
import { atomWithStorage } from 'jotai/utils';

export const countAtom = atom([0]);
export const labelAtom = atomWithStorage('label', 'Jotai');

export const dividedCountAtom = atom(get =>
  get(countAtom).map(count => Math.round(count / 2)),
);

export const dividedCountAtomSimple = atom(get =>
  Math.round(get(countAtom)[0] / 2),
);

console.log(localStorage.getItem('label'));

/*
  - No selectors
  - Only auto-optimized, not working for complex data so atom should return simple data (no shallow comparison ?)
  - Super easy to use
  - Can be use for replacing react context and for modal toggle for example
  - Better optimized with v2 syntax but debugger works only with v1 for now
  - Typescript seems to be really well integrated
  - Cannot be accessed outside components (workaround with local storage)
*/
