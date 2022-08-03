import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const StyledDeposit = styled.div`
    .mkd_intro{
        font-size:1.8rem;
        color:${Colors.primary};
        text-shadow:0 0 1px ${Colors.primary_dark};
    }

    form {
      
      .reg_btn .btn{
        background-color:${Colors.primary};
        transition:all 300ms ease-in;
        color:${Colors.secondary};
        padding:0.6rem 0;
        border-radius:10px;
        width:20%;
      }
      .reg_btn .btn:hover{
        background-color:${Colors.primary_dark}
      }
    }
`