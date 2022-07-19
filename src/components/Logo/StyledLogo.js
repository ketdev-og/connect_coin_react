import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const StyledLogo = styled.div`
     display: flex;
    align-items: center;

    img {
      width: 3rem;
      height: 3rem;
    }
    span{
        font-size:1.4rem;
        font-weight:bold;
        color:${Colors.primary_dark};
        text-shadow: 0 0 1px #ff6741;
    }
`