import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const StyledFooter = styled.div`
    height:200px;
    background-color:${Colors.secondary};
    color:${Colors.secondary_dark};

    a:hover{
        color:${Colors.primary_dark}
    }

   
`

export const StyledBottom = styled.div`
    background-color:${Colors.secondary_dark};
    color:${Colors.secondary};

    a{
        padding:0 1rem;
        text-decoration:underline;
    }

    .ft_icons{
        color:${Colors.primary}
    }
`