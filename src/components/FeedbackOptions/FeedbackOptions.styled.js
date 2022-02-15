import styled from "@emotion/styled";

export const BtnList = styled.ul`
  displey: flex;
  justify-content: space-around;
`;

export const BtnListItem = styled.li`
  display: inline-block;
`;

export const OptionBtn = styled.button`
  margin-left: 5px;
  margin-right: 10px;
  padding: 10px 15px;
  text-transform: uppercase;
  border-radius: 5px;
  &:hover {
    background-color: pink;
  }
`;
