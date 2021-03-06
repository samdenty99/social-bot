SocialBot.module('facebook', () => {
  const icon = `data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3e%3cpath fill='#fff' d='M38 22.4v12.4h-9V50h9v45h18.7V50h12.5s1.2-7.3 1.8-15.2H56.8V24.4c0-1.5 2-3.6 4-3.6H71V5H57.2C37.6 5 38 20.2 38 22.4'/%3e%3c/svg%3e`

  return class Facebook extends SocialBot.Core {
    constructor(config) {
      super({
        icon,
        avatar: icon,
        url: `https://www.facebook.com/v2.8/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${encodeURIComponent(config.username)}&sdk=joey&show_facepile=false&small_header=true&tabs=timeline`,
        color: `#3B5998`,
        ...config
      })
    }
  }
})
