module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/comments',
        permanent: true,
      },
    ]
  },
}
