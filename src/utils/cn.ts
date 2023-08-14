import config from './../../tailwind.config';
import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

const customTwMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [
      {
        text: Object.keys(config.theme!.fontSize!),
      },
    ],
  },
});

const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(clsx(inputs));
};

export default cn;
