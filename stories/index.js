import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button - POC only', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ));
