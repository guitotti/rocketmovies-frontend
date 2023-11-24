import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  align-items: center;
  display: flex;
  justify-content: space-between;

  padding: 0 123px;
`;

export const Logo = styled.h2`
  font-size: 24;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.MAIN};
  
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
      text-align: right;
    }

    strong {
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.WHITE};
      text-align: right;
    }
  }
`;

export const Search = styled.div`
  width: 630px;
`