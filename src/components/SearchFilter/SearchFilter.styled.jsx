import styled from '@emotion/styled';

export const Title = styled.h3`
  font-size: 15px;
  line-height: 1.4;

  font-weight: 500;

  margin-bottom: 5px;
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;

  margin-bottom: 8px;

  border: 1px solid #d3d3d3;
  border-radius: 4px;
  padding: 10px;
  max-width: 300px;
  height: 10px;

  transition: border 350ms cubic-bezier(0.1, 0.7, 0.6, 0.9);

  :hover,
  :focus {
    outline: none;
    border: 1px solid #0047ab;
  }
`;
