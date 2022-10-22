const navItemsStyle = {
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'inline-block',
    'font-size': '1.5em',
    'margin-right': '5px',
  },

};

const apps = {
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'block',
    'font-size': '1.5em',
    'margin-right': '5px',
    order: '10',
  },
};

const closeIcon = {
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'block',
    color: '#222',
    position: 'absolute',
    top: '0',
    right: '0',
    'font-size': '1.3em',
    margin: '10px',
    cursor: 'pointer',
  },
};
export default { closeIcon, apps, navItemsStyle };
