import styled from "styled-components";

export const Card1 = styled.div`
  background: green;
  padding: 10px 20px;
  color: #fff;
`;

export const Heading = styled.p`
  display: inline-block;
`;
export const OpenArrow = styled.i`
  display: ${(props) => (props.clicked ? "none" : "inline-block")};
`;
export const CloseArrow = styled.i`
  display: ${(props) => (props.clicked ? "inline-block" : "none")};
`;
 