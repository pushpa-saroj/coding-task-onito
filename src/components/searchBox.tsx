import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Clear } from 'src/assest/svg/cross-23.svg';

type SearchBoxProps = {
  placeholder: string,
  value: string,
  handleChange: (text: string) => void,
  setSearchText: (text: string) => void
}

const Container = styled.div`
  font-family: 'Arial';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
  width: 200px;
  margin: 10px;

  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

const TextInput = styled.input`
  flex: 1 0;
  font-size: 12px;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.div`
  flex: 0 0;
`;

export const SearchBox = ({ placeholder, handleChange, value, setSearchText }: SearchBoxProps) => {

  const searchHandler = (text: string) => {
    handleChange(text)
  }

  const clearSearch = () => {
    setSearchText('');
    handleChange('');
  }

  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => searchHandler(e.target.value)}
      />
      {value &&
        <Icon>
          <Clear
            width="20px"
            height="20px"
            stroke="black"
            onClick={() => clearSearch()}
          />
        </Icon>
      }
    </Container>
  );
};
