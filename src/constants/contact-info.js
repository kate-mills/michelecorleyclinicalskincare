const  fmtPhone = (a, p, s) => `(${a}) ${p} - ${s}`;

export const areaCode = '707';
export const prefix = '287';
export const suffix = '0555';

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
    phone: fmtPhone(areaCode, prefix, suffix), // used in Footer
    areaCode: areaCode,
    prefix: prefix,
    suffix: suffix,
  },

  Address: {
    street: '3055 Jefferson St.',
    suite: 'Suite 3', // '' is ok
    city: 'Napa',
    state: 'Ca.',
    zip: '94558',
  }
}
