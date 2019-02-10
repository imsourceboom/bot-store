import withSplitting from 'withSplitting';

// export { default as Story } from './Story';
// export { default as Game } from './Game';
// export { default as Dapp } from './Dapp';
// export { default as Bot } from './Bot';
// export { default as Search } from './Search';

export const Story = withSplitting(() => import('./Story'));
export const Game = withSplitting(() => import('./Game'));
export const Dapp = withSplitting(() => import('./Dapp'));
export const Bot = withSplitting(() => import('./Bot'));
export const Search = withSplitting(() => import('./Search'));
