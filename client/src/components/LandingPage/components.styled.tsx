import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled(Box)({
  paddingTop: '1.5rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '1rem',
  zIndex: '9999',
  background: '#fff',
  flexWrap: 'wrap',
  '&:nth-child(even)': {
    flexDirection: 'row-reverse',
  },
  '@media screen and (max-width:450px)': {
    margin: '1rem 2rem',
  },
});

const ServiceImage = styled('img')({
  width: '30rem',
  borderRadius: '1rem',
  '@media screen and (max-width:450px)': {
    width: '20rem',
  },
});

const ServiceDescription = styled(Typography)({
  width: '30rem',
  marginTop: '1.5rem',
  fontSize: '20px',
  '@media screen and (max-width:450px)': {
    width: '20rem',
    textAlign: 'center',
  },
});

const ServicesList = styled(Box)({
  zIndex: '5',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: '620px 0px 0px 0px',
  background: '#ffffff',
  paddingBottom: '1.5rem',
  '@media screen and (max-width:450px)': {
    margin: '10rem 0px 0px 0px',
  },
});

const WelcomeLandSection = styled(Box)({
  position: 'absolute',
  top: '0',
  background: 'url(./catBackground.png)',
  width: '100%',
  height: '60rem',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width:450px)': {
    height: '26rem',
    marginBottom: '5rem',
  },
});

const WelcomePargraph = styled(Typography)({
  top: '31rem',
  left: '42%',
  fontSize: '2.5rem',
  fontFamily: 'Inter',
  letterSpacing: '.5rem',
  '@media screen and (max-width:450px)': {
    top: '13rem',
    fontSize: '1rem',
    letterSpacing: '.2rem',
  },
});

export {
  CardContainer,
  ServiceImage,
  ServiceDescription,
  ServicesList,
  WelcomeLandSection,
  WelcomePargraph,
};
