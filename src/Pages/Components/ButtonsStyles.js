import styled from "styled-components";

// contains the buttons alone
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid red;
  gap: 20px;
`;

export const text = styled.p`
  display: inline-block;
`;

export const icon = styled.i``;

// button 1
export const btndiv = styled(Container)`
  color: #fff;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: none;
`;

// !!!!!!!!!!!!!
// update
export const NewBtn = styled(btndiv)`
  display: flex;
  justify-content: center;
  height: 30px;
  position: relative;
  padding: 10px 20px;
  overflow: hidden;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  > * {
    transition: all 0.6s ease;
  }
`;

export const NewBtnText = styled.div``;

export const NewBtnIcon = styled.i`
  position: absolute;
  transform: translateX(20rem);
  gap: 50px;
`;

export const Button1 = styled(NewBtn)`
  width: 200px;
  background: #c70039;
  border-radius: 0px 14px 0px 14px;

  &:hover {
    > :first-child {
      transform: translateY(-20rem);
    }
    > :last-child {
      transform: translateY(0px);
    }
  }
`;
export const Button2 = styled(NewBtn)`
  background: #301934;
  width: 100px;
  border-radius: 0px 14px 0px 14px;

  &:hover {
    filter: brightness(1.3);
    > :first-child {
      transform: rotate(360deg);
      opacity: 0;
    }
    > :last-child {
      transform: translateX(0px);
    }
  }
`;
export const Button3 = styled(NewBtn)`
  background: #ffc300;

  &:hover {
    /* filter: brightness(1.3); */
    > :first-child {
      transform: translateX(-20rem);
    }
    > :last-child {
      transform: translateX(0px);
    }
  }
`;
