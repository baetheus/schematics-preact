import { h, FunctionalComponent } from 'preact';

import { useState } from '~/libraries/hooks';

export interface <%= classify(name) %>Props {
  text: string;
}

/**
 * @name <%= classify(name) %>
 */
export const <%= classify(name) %>: FunctionalComponent<<%= classify(name) %>Props> = ({ text }) => {

  return (
    <section className="">
      { text }
    </section>
  )
};

export default <%= classify(name) %>;