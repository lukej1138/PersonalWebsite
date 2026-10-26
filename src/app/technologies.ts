import { Injectable } from '@angular/core';
import { TechInfo } from './tech-info';

@Injectable({
  providedIn: 'root',
})
export class Technologies {
  private data: TechInfo[] = [
    // Languages
    { id: 1,  name: 'Java',         imgUrl: 'https://icon.icepanel.io/Technology/svg/Java.svg' },
    { id: 2,  name: 'C++ Language',          imgUrl: 'https://cdn.simpleicons.org/cplusplus' },
    { id: 3,  name: 'Python',       imgUrl: 'https://cdn.simpleicons.org/python' },
    { id: 4,  name: 'R Language',            imgUrl: 'https://cdn.simpleicons.org/r' },
    { id: 5,  name: 'TypeScript',   imgUrl: 'https://cdn.simpleicons.org/typescript' },
    { id: 6,  name: 'HTML',         imgUrl: 'https://cdn.simpleicons.org/html5' },
    { id: 7,  name: 'CSS',          imgUrl: 'https://cdn.simpleicons.org/css' },
    { id: 8,  name: 'JavaScript',   imgUrl: 'https://cdn.simpleicons.org/javascript' },
    { id: 9,  name: 'SQLite',          imgUrl: 'https://cdn.simpleicons.org/sqlite' },

    // Technologies
    { id: 10, name: 'Next.js',      imgUrl: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
    { id: 11, name: 'React.js',     imgUrl: 'https://cdn.simpleicons.org/react' },
    { id: 12, name: 'Astro',        imgUrl: 'https://cdn.simpleicons.org/astro' },
    { id: 13, name: 'Node.js',      imgUrl: 'https://cdn.simpleicons.org/nodedotjs' },
    { id: 14, name: 'Flask',        imgUrl: 'https://cdn.simpleicons.org/flask/ffffff' },
    { id: 15, name: 'Tailwind CSS', imgUrl: 'https://cdn.simpleicons.org/tailwindcss' },
    { id: 16, name: 'NumPy',        imgUrl: 'https://cdn.simpleicons.org/numpy/ffffff' },
    { id: 17, name: 'Scikit-learn', imgUrl: 'https://cdn.simpleicons.org/scikitlearn' },
    { id: 18, name: 'Pandas',       imgUrl: 'https://cdn.simpleicons.org/pandas/ffffff' },
    { id: 19, name: 'JUnit',        imgUrl: 'https://cdn.simpleicons.org/junit5' },

    // Tools and Platforms
    { id: 20, name: 'Git',          imgUrl: 'https://cdn.simpleicons.org/git' },
    { id: 21, name: 'Docker',       imgUrl: 'https://cdn.simpleicons.org/docker' },
    { id: 22, name: 'PostgreSQL',   imgUrl: 'https://cdn.simpleicons.org/postgresql' },
    { id: 23, name: 'Vercel',       imgUrl: 'https://cdn.simpleicons.org/vercel/ffffff' },
    { id: 24, name: 'VsCode',        imgUrl: 'https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg' },
    { id: 25, name: 'IntelliJ',     imgUrl: 'https://icon.icepanel.io/Technology/svg/IntelliJ-IDEA.svg'},
    { id: 26, name: 'Drizzle ORM',  imgUrl: 'https://cdn.simpleicons.org/drizzle' },
    { id: 27, name: 'Neon',         imgUrl: 'https://cdn.simpleicons.org/neon' },
    { id: 28, name: 'macOS',        imgUrl: 'https://cdn.simpleicons.org/apple/ffffff' },
    { id: 29, name: 'Linux',        imgUrl: 'https://cdn.simpleicons.org/linux' },
    { id: 30, name: 'PyTorch',      imgUrl: 'https://cdn.simpleicons.org/pytorch' },

    // Missing from filter tags
    { id: 31, name: 'Swing',        imgUrl: '/swing.png' },
    { id: 32, name: 'Netlify',      imgUrl: 'https://cdn.simpleicons.org/netlify' },
  ];

  getData(): TechInfo[] {
    return [...this.data];
  }
}
