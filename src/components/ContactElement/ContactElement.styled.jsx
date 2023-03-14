import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 15px;
  line-height: 1.4;

  height: 35px;

  padding: 4px 10px 4px 10px;
  border: 2px solid #f5f5f5;

  border-radius: 5px;

  user-select: none;
  cursor: pointer;
  transition: background-color 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9);

  background-color: #000080;
  color: #e8e8e8;

  margin-left: 10px;

  :hover {
    background-color: #8a2be2;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 15px;
  line-height: 1.4;

  font-weight: 500;

  min-width: 110px;
`;

export const Phone = styled.p`
  font-size: 15px;
  line-height: 1.4;

  font-weight: 700;

  margin-left: 10px;
  min-width: 110px;
`;
