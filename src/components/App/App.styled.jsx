import styled from 'styled-components';


export const Container = styled.div`
  max-width: ${({ theme }) => `${theme.spacing(125)}`};
  margin-top: ${({ theme }) => `${theme.spacing(10)}`};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing(10)}`};
  border: solid 1px grey;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => `${theme.colors.blue}`};
  padding-bottom: ${({ theme }) => `${theme.spacing(3)}`}; ;
`;
export const H2 = styled.h2`
  color: ${({ theme }) => `${theme.colors.blue}`};
  padding-bottom: ${({ theme }) => `${theme.spacing(3)}`}; ;
`;