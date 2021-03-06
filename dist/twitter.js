SocialBot.module('twitter', () => {
  const icon = `data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 612 612'%3e%3cpath fill='%23FFF' d='M612 116.3a250.7 250.7 0 0 1-72 19.7 126 126 0 0 0 55-69.4 253.1 253.1 0 0 1-79.8 30.5 125.6 125.6 0 0 0-214 114.5A356.4 356.4 0 0 1 42.7 80.4 125.5 125.5 0 0 0 81.5 248c-20.6-.7-40-6.4-56.9-15.8v1.6c0 60.8 43.3 111.5 100.7 123a127.2 127.2 0 0 1-56.7 2.1c16 50 62.3 86.2 117.3 87.2A251.9 251.9 0 0 1 0 498.1a354.9 354.9 0 0 0 192.4 56.5c231 0 357.2-191.3 357.2-357.2l-.4-16.3c24.7-17.6 46-39.7 62.8-64.8z'/%3e%3c/svg%3e`

  return class Twitter extends SocialBot.Core {
    constructor(config) {
      super({
        icon,
        avatar: icon,
        html: `<a class="twitter-timeline" data-dnt="true" href="https://twitter.com/${encodeURIComponent(config.username)}"></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
        color: `#1DA1F2`,
        ...config
      })
    }
  }
})
