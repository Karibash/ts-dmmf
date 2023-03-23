import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
});

export const emphasis = style({
  padding: '2px',
  fontStyle: 'initial',
  fontWeight: 'bold',
  backgroundColor: 'yellow',
});
