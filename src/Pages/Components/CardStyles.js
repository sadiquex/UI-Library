import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 20px;
  /* border: 2px solid rebeccapurple; */
`;

export const CardImage = styled.div`
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  width: 100%;
  height: 100px;
  transition: 0.3s all ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductName = styled.p`
  font-weight: bolder;
  padding: 10px;
`;

export const Description = styled.p`
  line-height: 1.5;
`;

export const PriceAndCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border: 2px solid red;

  .cardOne {
    width: 90%;
    background: red;
  }
  /* border: 2px solid red; */
`;

export const Price = styled.p`
  font-size: 120%;
  font-weight: bolder;
`;
export const Cart = styled.i``;

// first Card
export const Card1 = styled.div`
  background: orange;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
  min-width: 230px;
  max-width: 230px;
  /* width: 230px; */
  min-height: 250px;
`;

// second card
export const Card2 = styled(Card1)`
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #b465da 0%,
    #cf6cc9 33%,
    #ee609c 66%,
    #ee609c 100%
  );
  position: relative;
  overflow: hidden;
  display: flex;
`;

export const Card2Content = styled.div`
  background: #fff;
  z-index: 10;
  position: absolute;
  bottom: -100px;
  left: 0;
  line-height: 1.5;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 1px 1px 10px #808080;
  border-radius: 8px 8px 0 0;
  height: 50%;

  &:hover {
    bottom: 0;
  }
`;

// !!!!!!!!!!!!!!
// card 3
export const Card3 = styled(Card2)`
  background: #000;
  transition: all 0.6s ease;
  overflow: hidden;
  position: relative;
`;

export const Card3Top = styled.div`
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  width: 100%;
  transition: all 0.5s ease;

  &:hover {
    height: 80%;
    z-index: 1;
  }
`;
export const Card3Down = styled.div`
  background: #fff;
  position: absolute;
  bottom: 0;
  padding: 10px;
  left: 0;
  height: 50%;
  transition: all 0.5s ease;

  &:hover {
    height: 80%;
    /* transform: translateY(100%); */
  }
`;

// !!!!!!!!!!!!
// card 4
export const Card4 = styled(Card1)`
  background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
  display: flex;
  flex-direction: column;
  transition: 0.4s all ease;
  overflow: hidden;
  padding: 0;
  gap: 0;

  &:hover > :first-child {
    transform: translateX(0);
  }
  &:hover > :last-child {
    transform: translateX(0);
  }
`;

export const Card4Top = styled.div`
  background: #fff;
  flex: 1;
  transform: translateX(20rem);
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  padding: 10px;
`;
export const Card4Down = styled.div`
  background: #db7093;
  flex: 1;
  transform: translateX(-20rem);
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
`;
