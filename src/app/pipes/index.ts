import { FirstnamePipe }       from './firstname/firstname.pipe';
import { ReversePipe }         from './reverse/reverse.pipe';

export const APP_PIPES: any[] = [
  FirstnamePipe,
  ReversePipe,
];

export * from './firstname/firstname.pipe';
export * from './reverse/reverse.pipe';
