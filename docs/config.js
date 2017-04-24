var langs = [
  {title: 'English', path: '/'},
  {title: '简体中文', path: '/zh/'}
]

docute.init({
  repo: 'zcong1993/md2pdf',
  'edit-link': 'https://github.com/zcong1993/md2pdf/blob/master/docs/',
  tocVisibleDepth: 3,
  nav: {
    default: [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Ebook-convert',
        path: 'ebook'
      },
      {
        title: 'Choose language',
        type: 'dropdown',
        items: langs
      }
    ],
    zh: [
      {
        title: '首页',
        path: '/zh/'
      },
      {
        title: 'Ebook-convert',
        path: '/zh/ebook'
      },
      {
        title: '选择语言',
        type: 'dropdown',
        items: langs
      }
    ]
  }
})
