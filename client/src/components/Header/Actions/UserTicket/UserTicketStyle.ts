const actionsStyle = {
  display: 'flex',
  'flex-direction': 'row',
  'align-items': 'center',
  'text-align': 'center',
  gap: '0.1rem',
  '@media screen and (max-width:450px)': {
    gap: '0.1rem',
    'font-size': '0.5rem',
  },
};
const username = {
  'padding-top': '0.4rem',
  '@media screen and (max-width:850px)': {
    'font-size': '1rem',
  },
  '@media screen and (max-width:450px)': {
    'font-size': '0.5rem',
  },
};
const avatar = {
  width: 40,
  height: 40,
  '@media screen and (max-width:850px)': {
    width: 25,
    height: 25,
  },
  '@media screen and (max-width:450px)': {
    width: 23,
    height: 23,
  },
};
export default { avatar, username, actionsStyle };
