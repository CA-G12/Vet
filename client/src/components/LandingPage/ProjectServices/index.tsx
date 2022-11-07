import { ServicesList, ServicesTitle } from '../components.styled';
import { ServiceArtical } from './ServiceArtical';

export const ProjectServices = () => (
  <ServicesList>
    <ServicesTitle variant="h4">Our Services</ServicesTitle>
    <ServiceArtical />
    <ServiceArtical />
    <ServiceArtical />
  </ServicesList>
);
