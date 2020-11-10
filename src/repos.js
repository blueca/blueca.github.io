export const projects = [
  {
    title: 'Keeper',
    image: 'images/keeper.png',
    description:
      'A cross platform goal keeping app for Android and iOS, utilising gamification to encourage users to stick with their goals. A collaborative group effort which took advantage of Git branching and Agile development practices.',
    tech: {
      frontend: ['Dart', 'Flutter', 'Spritewidget'],
      backend: ['Firebase', 'Node.js'],
      technology: [],
    },
    repo: {
      frontend: 'https://github.com/blueca/keeper',
      backend: 'https://github.com/blueca/keeper-cloud-functions',
    },
    demo: {
      video: 'https://www.youtube.com/watch?v=gg07TuJgry8',
    },
  },
  {
    title: 'News-AG',
    image: 'images/news-ag.png',
    description:
      'A fullstack news/article aggregator with functionality inspired by Reddit. Users can sign in to a dummy account, which allows them to submit or delete their own comments as well as vote on other submissions.',
    tech: {
      frontend: ['React', 'JavaScript', 'HTML', 'CSS'],
      backend: ['Node.js', 'Express', 'PostgreSQL', 'Knex'],
      technology: [],
    },
    repo: {
      frontend: 'https://github.com/blueca/fe-news-ag',
      backend: 'https://github.com/blueca/be-news-ag',
    },
    demo: {
      frontend: 'https://news-ag.netlify.app/',
      backend: 'https://nicks-nc-news.herokuapp.com/api',
    },
  },
  {
    title: 'Portfolio Website',
    image: 'images/portfolio.png',
    description:
      "The website you're currently viewing. I've been interested in using Svelte for a while and this was a good opportunity to give it a try.",
    tech: {
      frontend: [],
      backend: [],
      technology: ['Svelte', 'JavaScript', 'HTML', 'CSS'],
    },
    repo: {
      frontend: 'https://github.com/blueca/portfolio-website',
    },
    demo: {},
  },
  {
    title: 'CLI BitTorrent Client',
    image: 'images/torrent.png',
    description:
      'A simple BitTorrent client and my first real attempt at using TypeScript. An interesting excercise in using sockets and working with buffers for sending and receiving data.',
    tech: {
      frontend: [],
      backend: [],
      technology: ['Node.js', 'TypeScript'],
    },
    repo: {
      code: 'https://github.com/blueca/bittorrent-client',
    },
    demo: {},
  },
];
