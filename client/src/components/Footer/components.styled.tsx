import { Box, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';

const SimpleFlexBox = styled(Box)({
  display: 'flex',
  'align-items': 'center',
  gap: '0.2rem',
});

const FooterBox = styled(Box)({
  width: '33%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  alignSelf: 'flex-start',
  '@media screen and (max-width: 850px)': {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1rem',
    boxShadow: 'grey 0px 1px 0px 0px',
  },
});
const StyledFooter = styled('footer')({
  background: '#e5e2ec00',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  widows: '100%',
  textAlign: 'left',
  font: 'bold 16px sans-serif',
  padding: '50px 50px 60px 50px',
  '> h3': {
    color: '#000116',
    font: 'normal 36px cookie, cursive',
    margin: ' 0',
  },
  '> h3 ': {
    '> span': {
      color: '#2D9B9B',
    },
  },
  '@media screen and (max-width: 850px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  },
});

const FooterIconsBox = styled(Box)({
  '> a': {
    display: 'inline-block',
    width: '35px',
    height: '25px',
    cursor: 'pointer',
    background: '#ffff',
    borderRadius: '2px',
    fontSize: '20px',
    color: '#000116',
    textAlign: 'center',
    lineHeight: '35px',
    marginRight: '3px',
    marginBottom: '5px',
    transition: 'all 0.2s ease-in',
  },
  '> a:hover': {
    transform: 'scale(1.2)',
  },
});
const EmailLink = styled(Link)({
  color: '#2D9B9B',
  textDecoration: 'none',
  fontWeight: 'bold',
});
const TiteledPargraph = styled(Typography)({
  lineHeight: '20px',
  color: '#5d646b',
  fontSize: '13px',
  fontWeight: 'normal',
  margin: '0',
  '> span': {
    display: 'block',
    color: '#000116',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
});
const FooterLinksStyled = styled(Typography)({
  color: '#000116',
  margin: '20px 0 12px',
  '> a': {
    display: 'inline-block',
    lineHeight: '1.8',
    textDecoration: 'none',
    color: 'inherit',
  },
  '> a:hover': {
    color: '#3f71ae',
  },
});
export {
  FooterLinksStyled,
  TiteledPargraph,
  EmailLink,
  SimpleFlexBox,
  FooterBox,
  StyledFooter,
  FooterIconsBox,
};
