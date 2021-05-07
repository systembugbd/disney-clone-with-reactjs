import styled from "styled-components";

const Viewers = ({ images }) => {
  return (
    <Container>
      <ImageHolder>
        <Image src="../images/viewers-disney.png" />
      </ImageHolder>
      <ImageHolder>
        <Image src="../images/viewers-marvel.png" />
      </ImageHolder>
      <ImageHolder>
        <Image src="../images/viewers-national.png" />
      </ImageHolder>
      <ImageHolder>
        <Image src="../images/viewers-pixar.png" />
      </ImageHolder>
      <ImageHolder>
        <Image src="../images/viewers-starwars.png" />
      </ImageHolder>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 25px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  align-items: center;
  text-align: center;
  justify-content: center;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms ease-in;
  justify-content:center;
  align-items: center;
  display: flex;
  border-radius:8px;
  animation: dropIt 3s ease-in forwards;
  animation-delay:calc(${Math.floor(Math.random())} * 250ms);
  
  @keyframes dropIt {
    30% {
      opacity: 0;
      transform: translateY(20%);
     }
    50%,
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
     transform: scale(1)!important;
    transition: transform 1s ease-in-out!important;
 
`;
const ImageHolder = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 70%) 0 16px 30px -10px,
    rgb(0 0 0 / 70%) 0 16px 30px -10px;
  transition: box-shadow, border 100ms ease-in;
  transition: transform 250ms ease-out;

  position: relative;
  animation: dropItFromTop 1s;

  @keyframes dropItFromTop {
    from {
      top: -100vh;
      opacity: 0;
      transform: translateY(20%);
    }

    to {
      top: 0;
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    /* background:rgba(249, 249, 249, 0.1); */
    box-shadow: rgb(74 121 255 / 30%) 0 16px 30px -10px,
      rgb(74 121 255 / 30%) 0 16px 30px -10px;
    border: 3px solid rgba(74, 121, 255, 0.71);
    transition: box-shadow, border 100ms ease-out;

    ${Image} {
      transform: scale(1.05)!important;
      transition: transform 1s ease-in;
    }
  }
`;

export default Viewers;
