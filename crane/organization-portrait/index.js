module.exports = {
    route: {
      name: 'orginization_portrait',
      path: 'orginizationPortrait'
    },
    states: [],
    components: [
      {
        id: 'background',
        component: 'img',
        position: [0, 0],
        props: {
          src: '/zhwllz/images/Bg-Party organization.png'
        },
      },
      {
        component: 'h1',
        content: '综合街道办事处党组织画像',
        position: [768, 24],
        props:{
          $style:{
            color: '#fff',
            fontSize: '32px',
            fontWeight: 500,
            textAlign: 'center',
          }
        }
      }
    ]
  }