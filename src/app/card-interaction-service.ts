import { Injectable, signal } from '@angular/core';

export interface InfoCard {
  id: string;
  label: string;
  icon: string;
  title: string;
  blurb: string;
  imgUrl: string;
  blurImgUrl: string;
  textImgUrl: string;
  positions: {
    phone:   {x: number, y: number, z: number};
    tablet:  {x: number, y: number, z: number};
    desktop: {x: number, y: number, z: number};
  };
}

@Injectable({
  providedIn: 'root',
})
export class CardInteractionService {
  highestZ = 20;
  activeCardId = signal<string | null>(null);
  cards: InfoCard[] = [
    {
      id: 'me',
      label: 'Me',
      icon: '👤',
      title: 'Luke Johnson',
      blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Filler text placeholder — to be replaced with a personal intro.',
      imgUrl: '/optimized/me.webp',
      blurImgUrl: '/optimized/meblur.webp',
      textImgUrl: '/optimized/metext.webp',
      positions: {
        phone:   { x: 40,  y: 300, z: 5  },
        tablet:  { x: 160, y: 55,  z: 10 },
        desktop: { x: 440, y: 20,  z: 5  },
      },
    },
    {
      id: 'mtg',
      label: 'Magic, The Gathering',
      icon: '🃏',
      title: 'Magic: The Gathering',
      blurb:
        "The depth of MTG is staggering — deckbuilding is its own creative discipline and every game is a puzzle. Mostly an EDH player these days, which means four-player chaos and plenty of politics.",
      imgUrl: '/optimized/mtgfront.webp',
      blurImgUrl: '/optimized/mtgblur.webp',
      textImgUrl: '/optimized/mtgtext.webp',
      positions: {
        phone:   { x: 40,  y: 230, z: 4  },
        tablet:  { x: 10,  y: 35,  z: 2  },
        desktop: { x: 0,   y: 100, z: 3  },
      },
    },
    {
      id: 'vinyl',
      label: 'Vinyl',
      icon: '🎵',
      title: 'Vinyl Collecting',
      blurb:
        "Streaming is convenient, but there's a ritual to putting on a record that changes how you actually listen. Always digging for new additions — the hunt is half the fun.",
      imgUrl: '/optimized/recordplayer.webp',
      blurImgUrl: '/optimized/vinylblur.webp',
      textImgUrl: '/optimized/vinyltext.webp',
      positions: {
        phone:   { x: 40,  y: 160, z: 3  },
        tablet:  { x: 310, y: 75,  z: 3  },
        desktop: { x: 670, y: 60,  z: 4  },
      },
    },
    {
      id: 'sandbox',
      label: 'SandboxNEU',
      icon: '🛠️',
      title: 'Sandbox @ Northeastern',
      blurb:
        "Sandbox is NEU's student-run software consultancy — we build real products for real clients. It's where I started treating software as a craft, not just coursework.",
      imgUrl: '/optimized/sandbox.webp',
      blurImgUrl: '/optimized/sandboxblur.webp',
      textImgUrl: '/optimized/sandboxtext.webp',
      positions: {
        phone:   { x: 40,  y: 90,  z: 2  },
        tablet:  { x: 10,  y: 75,  z: 3  },
        desktop: { x: 210, y: 60,  z: 4  },
      },
    },
    {
      id: 'neu',
      label: 'NEU',
      icon: '🎓',
      title: 'Northeastern University',
      blurb:
        "Pursuing a B.S. in Computer Science at Northeastern, where the co-op program puts real engineering experience front and center. Six months in industry, back to class — the fastest way I know to grow.",
      imgUrl: '/optimized/hooskercard.webp',
      blurImgUrl: '/optimized/neublur.webp',
      textImgUrl: '/optimized/neutext.webp',
      positions: {
        phone:   { x: 40,  y: 20,  z: 1  },
        tablet:  { x: 310, y: 35,  z: 2  },
        desktop: { x: 880, y: 100, z: 3  },
      },
    },
  ];

}
