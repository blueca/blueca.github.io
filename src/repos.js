export const projects = [
  {
    title: 'Keeper',
    image: 'images/keeper.png',
    description:
      'A cross platform productivity/goal keeping app for Android and iOS, utilising gamification to encourage users to stick with their goals.',
    tech: {
      frontend: ['Dart', 'Flutter', 'Spritewidget'],
      backend: ['Firebase', 'Node.js'],
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
    description: 'A fullstack news/article aggregator.',
    tech: {
      frontend: ['React', 'Styled-Components', 'JavaScript', 'HTML', 'CSS'],
      backend: ['Node.js', 'Express', 'PostgreSQL', 'Knex'],
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
    description: "The website you're currently viewing.",
    tech: {
      frontend: ['Svelte', 'JavaScript'],
      backend: [],
    },
    repo: {
      frontend: 'https://github.com/blueca/portfolio-website',
    },
    demo: {},
  },
];
