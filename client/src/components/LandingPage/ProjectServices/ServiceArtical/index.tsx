import {
  CardContainer,
  ServiceDescription,
  ServiceImage,
} from '../../components.styled';

export const ServiceArtical = () => (
  <CardContainer>
    <ServiceDescription>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, possimus
      temporibus laboriosam quaerat eos perspiciatis iusto repellendus
      repudiandae consequatur tempore magnam optio, voluptates accusantium natus
      officia placeat, architecto quisquam. Libero?
    </ServiceDescription>
    <ServiceImage
      src="https://images.unsplash.com/photo-1666681179847-8faf01f0719e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
      alt="lion"
    />
  </CardContainer>
);
