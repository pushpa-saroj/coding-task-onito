import styled from "styled-components";
import { Controller } from "react-hook-form";

type BtnProps = {
  color?: string;
  backgroundColor?: string;
};

export const StyledFormWrapper = styled.form`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 1050px;
  padding: 50px;
  box-shadow: 0px 5px 8px 0px #888888;
`;

export const StyledButton = styled.button<BtnProps>`
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "lightgray"};
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: rgb(153, 153, 153) 1px 4px 11px 2px;
  width: 100px;
  padding: 10px;
  margin-right: 20px;
`;
export const StyledButtonDiv = styled.div`
  margin-top: 20px;
  text-align: right;
`;
export const StyleFieldset = styled.fieldset`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 2fr 1fr;
  text-align: left;
  border: 1px solid #c7c7c7;
`;
export const StyledLegend = styled.legend`
  font-weight: bold;
`;
export const StyledInput = styled.input`
  padding: 5px 20px;
  border: 1px solid #c7c7c7;
`;
export const StyledSelect = styled.select`
  padding: 5px 20px;
  margin-right: 5px;
  border: 1px solid #c7c7c7;
`;
export const StyledLebel = styled.label`
  padding-right: 15px;
`;
// export const StyledDiv=styled.div`
// flex-basis: 50%;
//   padding: 10px;
//   margin: 10px;`

export const StyledFlexInputs = styled.div`
  display: flex !important;
`
export const StyledError = styled.p`
  font-size: 10px;
  color: #e34f4f;
`