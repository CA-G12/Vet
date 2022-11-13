import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import catBackground from '../../assets/catBackground.png';

const CardContainer = styled(Box)({
  paddingTop: '1.5rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '3rem',
  zIndex: '9999',
  background: '#fff',
  flexWrap: 'wrap',
  '&:nth-of-type(odd)': {
    flexDirection: 'row-reverse',
  },
  '@media screen and (max-width:450px)': {
    margin: '0.5rem 0rem',
    padding: '0 0 1rem 0',
    width: '18rem',
    borderBottom: '0.1px solid black',
    gap: '1rem',
  },
});

const ServiceImage = styled('img')({
  width: '30rem',
  borderRadius: '5px',
  '@media screen and (max-width:450px)': {
    width: '16rem',
  },
});

const ServiceDescription = styled(Typography)({
  width: '30rem',
  marginTop: '1.5rem',
  fontSize: '20px',
  color: '#356E6E',
  '@media screen and (max-width:450px)': {
    width: '16rem',
    textAlign: 'center',
    fontSize: '1rem',
    marginTop: '0',
  },
});

const ServicesList = styled(Box)({
  zIndex: '5',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: '620px 0px 0px 0px',
  background: '#ffffff',
  paddingBottom: '1.5rem',
  '@media screen and (max-width:450px)': {
    margin: '11rem 0px 0px 0px',
  },
});

const WelcomeLandSection = styled(Box)({
  position: 'absolute',
  top: '0',
  background: `url(${catBackground})`,
  backgroundAttachment: 'fixed',
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
  fontWeight: '600',
  '@media screen and (max-width:450px)': {
    fontSize: '0.9rem',
    letterSpacing: '.2rem',
    marginBottom: '27rem',
  },
});
const ServicesTitle = styled(Typography)({
  paddingTop: '1rem',
  color: '#D53449',
  '@media screen and (max-width:450px)': {
    fontSize: '1.5rem',
  },
});

export {
  CardContainer,
  ServiceImage,
  ServiceDescription,
  ServicesList,
  WelcomeLandSection,
  WelcomePargraph,
  ServicesTitle,
};
