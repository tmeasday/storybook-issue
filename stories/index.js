// import React from 'react'; <-- I would like to get this run without this line
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button - POC only', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ));
