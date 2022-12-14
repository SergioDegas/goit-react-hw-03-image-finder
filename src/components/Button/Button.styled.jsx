import styled from 'styled-components';

export const LoadButton = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  background-color: rgba(78, 23, 141, 0.534);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
 
  :hover,
  :focus {
    background-color: rgba(78, 23, 141, 0.644);
  }
`;
