import styled from "styled-components";

export const Card1 = styled.div`
  background: green;
  padding: 10px 20px;
  color: #fff;
`;

export const Heading = styled.p`
  display: ${(props) => (props.open ? "none" : "inline-block")};
  /* width: ${(props) => (props.open ? "200px" : "30px")}; */
`;
export const OpenArrow = styled.i`
  display: ${(props) => (props.open ? "none" : "inline-block")};
`;
export const CloseArrow = styled.i`
  display: ${(props) => (props.open ? "inline-block" : "none")};
`;
export const cardContent = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
`;
