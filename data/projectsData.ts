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
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f9/b4/3f/f9b43f14-9cb3-08e6-e787-cf6182e8933a/ipad_U7aef-_U82f1_U8bed-1.jpg/1980x0w.webp',
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
