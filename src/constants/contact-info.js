export const ConstantContactInfo =  {

  Email: {
    fmtSubject: (str) => {
      if(str && str.length > 0)
        return str.split(' ').join('%20')
    },
    subject: 'General%20query',
    full_email:'customerservice@michelecorley.com',
    prefix:'customerservice',
    suffix: '@michelecorley',
    ext: '.com',
  },

  Telephone: {
    phone: '(707) 637 - 4997',
    areaCode: '707',
    prefix: '637',
    suffix: '4997'
  },

  Address: {
    street: '3055 Jefferson St.',
    suite: 'Suite 3', // '' is ok
    city: 'Napa',
    state: 'Ca.',
    zip: '94558',
  }
}
