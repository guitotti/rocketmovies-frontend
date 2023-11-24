import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.6rem;

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.MAIN};
  }
`;