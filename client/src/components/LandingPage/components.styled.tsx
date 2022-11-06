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
  minHeight: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
  '@media screen and (max-width:450px)': {
    backgroundSize: 'contain',
    height: '26rem',
    marginBottom: '5rem',
  },
});

const WelcomePargraph = styled(Typography)({
  background: 'rgba(90, 89, 89, 0)',
  textAlign: 'center',
  fontSize: '2.5rem',
  fontFamily: 'Inter',
  letterSpacing: '.6rem',
  paddingBottom: '1.5rem',
  '@media screen and (max-width:450px)': {
    fontSize: '1rem',
    letterSpacing: '.2rem',
    marginBottom: '25rem',
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
