import styled from 'styled-components';


export const PhotoCard = styled.li`
 display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
   
  

`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  // -webkit-transform: scale(1);
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.15);
  }
`;