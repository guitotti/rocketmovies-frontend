import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px;
  grid-template-areas: 
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: hidden;
    margin-bottom: 58.64px;
  }
`;

export const SectionHeader = styled.div`
  grid-area: header;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  max-width: 1137px;
  margin: auto;

  padding: 50px 0 40px 0;


  > button {
    width: 207px;
    height: 48px;
  }
  
  > p {
    font-size: 32px;
  }
`;

export const NewMovie = styled.button`
  background-color: ${({theme}) => theme.COLORS.MAIN};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  border: none;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  > svg {
    margin-right: 8px;
  }
`;

export const Content = styled.div`
  grid-area: content;

  max-height: calc(100vh - 20rem);
  overflow-y: scroll;

  max-width: 1137px;
  margin: auto;
`;