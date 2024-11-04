interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Swing Fridge',
    description:
      'Swing Fridge is an intuitive app for tracking refrigerator contents, helping maintain freshness and reduce waste. Easily manage food items with features like expiration reminders.',
    imgSrc:
      'https://sns-webpic-qc.xhscdn.com/202410252104/b56ebafee73dd6d6352b21f2b6fa9e69/217/0/01e68d42ae73d6170010000000019097cc884e_0.jpg!nc_n_webp_mw_1',
    href: '/blog/swingfridge',
  },
  // {
  //   title: 'AA Search Engine',
  //   description: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
