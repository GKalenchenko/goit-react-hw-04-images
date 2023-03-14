import styled from '@emotion/styled';
import { ErrorMessage, Field, Form } from 'formik';

export const Input = styled(Field)`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;

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

export const InputName = styled.span`
  font-size: 15px;
  line-height: 1.4;

  font-weight: 500;
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 1.4;

  font-weight: 500;

  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-size: 20px;
  line-height: 1.4;

  height: 42px;

  font-weight: 400;

  padding: 4px 10px 4px 10px;
  border: 2px solid #f5f5f5;

  border-radius: 5px;

  user-select: none;
  cursor: pointer;
  transition: box-shadow 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9),
    font-size 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9),
    border 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9);

  background-color: #000080;
  color: #e8e8e8;

  margin-top: 10px;

  :hover {
    font-size: 22px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export const Error = styled(ErrorMessage)`
  font-size: 15px;
  line-height: 1.4;

  font-weight: 400;
  color: #ff4433;

  margin-top: 2px;
`;

export const FormWrapper = styled(Form)`
  border: 2px solid #d3d3d3;
  border-radius: 4px;
  padding: 20px;
  width: 400px;
`;
