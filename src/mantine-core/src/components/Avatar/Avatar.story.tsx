import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Avatar } from './Avatar';

storiesOf('@mantine/core/Avatar/stories', module)
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ Avatar: { color: 'cyan' } }}>
      <Avatar>MJ</Avatar>
    </MantineProvider>
  ))
  .add('Default radius on MantineProvider', () => (
    <MantineProvider theme={{ defaultRadius: 0 }}>
      <Avatar>MJ</Avatar>
    </MantineProvider>
  ));