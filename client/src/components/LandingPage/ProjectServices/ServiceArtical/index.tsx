import {
  CardContainer,
  ServiceDescription,
  ServiceImage,
} from '../../components.styled';

type Props = {
  description: string;
  image: string;
  altImage: string;
};
export const ServiceArtical = (props: Props) => {
  const { description, image, altImage } = props;
  return (
    <CardContainer>
      <ServiceDescription>{description}</ServiceDescription>
      <ServiceImage src={image} alt={altImage} />
    </CardContainer>
  );
};
