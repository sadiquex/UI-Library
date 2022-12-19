import styled from "styled-components";

// contains the buttons alone
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
  gap: 20px;
`;

// button 1

export const text = styled.p`
  display: inline-block;
`;

export const icon = styled.i`
  /* opacity: ${(props) => (props.click ? "0.5" : "1")}; */
  /* display: ${(props) => (props.isOpen ? "block" : "none")}; */
`;

// button 2
export const btndiv = styled(Container)`
  color: #fff;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: none;
`;

export const Button1 = styled.div`
  border-radius: 10px;
  background: #d90166;
  color: #fff;
  padding: 20px;
  opacity: ${(props) => (props.click ? ".4" : ".8")};
  display: ${(props) => (props.isOpen ? "none" : "block")};
`;

// this is a replacement for the stroke
export const FixStroke = styled(Button1)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 0;
`;

export const StrokedBtn = styled(Button1)`
  /* width: 95%; */
  background: #fff;
  color: #d90166;
  stroke: #d90166;
  stroke-width: 3px;
  /* opacity: 0.4; */
`;
export const Delete = styled(Button1)`
  padding: 10px;
  border-radius: 10px;
`;
