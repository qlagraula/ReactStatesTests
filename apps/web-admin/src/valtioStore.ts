import { proxy } from 'valtio';
import { derive, devtools } from 'valtio/utils';

export const countState = proxy({ count: [0], label: 'Valtio' });

export const dividedCountState = derive({
  divided: get => get(countState).count.map(count => Math.round(count / 2)),
});

export const dividedCountStateSimple = derive({
  divided: get => Math.round(get(countState).count[0] / 2),
});

console.log(countState);
const unsub = devtools(countState, { name: 'Valtio counter', enabled: true });

/*
  - By default optimized because no mutating data
  - Can have memo if necessary 
  - Redux devtool
  - Too easy
  - No boilerplate
  - Don't know the drawbacks for now
*/
