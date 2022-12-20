import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* width: 600px; */
  /* border: 2px solid rebeccapurple; */
  /* overflow: scroll; */
`;

// first Card
export const Card1 = styled.div`
  /* background: #fff; */
  padding: 10px;
  color: #000;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  cursor: pointer;
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
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  justify-content: space-between;
  width: 100%;
  border: 2px solid red;
`;

export const Price = styled.p`
  font-size: 120%;
  font-weight: bolder;
`;
export const Cart = styled.i``;

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
  width: 100%;
  line-height: 1.5;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 1px 1px 10px #808080;
  /* padding: 10px; */
  border-radius: 8px 8px 0 0;

  &:hover {
    bottom: 0;
  }
`;

// !!!!!!!!!!!!!!
// card 3
export const Card3 = styled(Card1)`
  background: #000;
  transition: all 0.6s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
  /* width: 100%; */
  transition: all 0.5s ease;

  &:hover {
    height: 80%;
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
