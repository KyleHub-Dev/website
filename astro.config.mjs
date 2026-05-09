// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kylehub.dev',
  integrations: [
    icon({
      include: {
        lucide: [
          'arrow-up-right',
          'circle-dot',
          'git-fork',
          'git-pull-request',
          'globe',
          'lock',
          'mail',
          'star',
        ],
        'simple-icons': [
          'codeberg',
          'discord',
          'github',
          'mastodon',
          'matrix',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
