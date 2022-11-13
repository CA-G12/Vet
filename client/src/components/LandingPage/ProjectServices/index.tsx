import { ServicesList, ServicesTitle } from '../components.styled';
import { ServiceArtical } from './ServiceArtical';
import community from '../../../assets/community.jpg';
import vetConsult from '../../../assets/vet-consult.jpg';

const services = [
  {
    id: 1,
    description:
      'A community dedicated to pet owners, which includes all aspects that a pet breeder lives with his pet, from medical advice through posts or by writing to the veterinarian in a private and emergency, and tips and jokes related to pet owners.',
    image: community,
    altImage: 'Community',
  },
  {
    id: 2,
    description:
      'Medical advice for pets in different ways, according to the situation of the owner of the pet, advice displayed in the form of posts, or by contacting the veterinarian in an emergency by seeing the veterinarians who are in contact, and finally you can also book an appointment with the veterinarian that you think is appropriate',
    image: vetConsult,
    altImage: 'Vet Consult',
  },
];
export const ProjectServices = () => (
  <ServicesList>
    <ServicesTitle variant="h4">Our Services</ServicesTitle>
    {services.map(service => (
      <ServiceArtical
        key={service.id}
        description={service.description}
        image={service.image}
        altImage={service.altImage}
      />
    ))}
  </ServicesList>
);
