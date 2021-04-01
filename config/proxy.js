
export default {
  dev: {
    '/api/': {
      target: 'http://api.test.well-em.com/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  test: {
    '/api/': {
      target: 'http://api.test.well-em.com/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  prod: {
    '/api/': {
      target: 'http://api.test.well-em.com/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  // dev: {
  //   '/api/': {
  //     target: 'http://db7dd1881ca9.ngrok.io',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^': '',
  //     },
  //   },
  // },
  // test: {
  //   '/api/': {
  //     target: 'http://db7dd1881ca9.ngrok.io',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^': '',
  //     },
  //   },
  // },
  // pre: {
  //   '/api/': {
  //     target: 'http://c7c70534f96c.ngrok.io',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^': '',
  //     },
  //   },
  // },
};
