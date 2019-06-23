export default {
  card: {
    width: '25rem',
    backgroundColor: '#ebeef8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    boxShadow: '0.5rem 0.5rem 3rem rgba(0, 0, 0, 0.2)'
  },

  cardImg: {
    width: '100%',
    height: '12rem',
    objectFit: 'cover',
    clipPath: 'polygon(0 0, 100% 0, 100% 78%, 0% 100%)'
  },

  profileImg: {
    width: '13rem',
    height: '13rem',
    objectFit: 'cover',
    borderRadius: '50%',
    marginTop: '-11rem',
    zIndex: '999',
    border: '1rem solid #ebeef8'
  },

  card_h1: {
    fontSize: '2rem',
    color: '#333333'
    // margin: '1.5rem 0'
  },

  jobTitle: {
    color: '#777777',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 300
  },

  about: {
    fontSize: '1.5rem',
    // margin: '1.5rem',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333333'
  },

  btn: {
    padding: '1rem 2.5rem',
    backgroundColor: '#445ae3',
    borderRadius: '2rem',
    // margin: '1rem 0',
    textTransform: 'uppercase',
    color: '#eeeeee',
    fontSize: '1.4rem',
    transition: 'all 0.5s'
  },

  btnHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.2)'
  },

  btnActive: {
    transform: 'translateY(0)',
    boxShadow: 'none'
  },

  socialMedia: {
    width: '100%',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '0.5rem 0',
    // marginTop: '1.5rem',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)'
  },

  socialMediaI: {
    fontSize: '3rem'
  },

  facebook: {
    color: '#3b5999'
  },

  twitter: {
    color: '#55acee'
  },

  instagram: {
    color: '#e6683c'
  },

  googlePlus: {
    color: '#dd4b39'
  },

  socialMediaHover: {
    color: '#45e19f'
  }
};
