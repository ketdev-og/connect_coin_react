import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const StyledRegister = styled.div`
  .reg_con {
    box-shadow: 0 0 2px ${Colors.primary};

    label {
      color: ${Colors.secondary_dark};
    }

    form {
      .policy {
        color: ${Colors.secondary_dark};
        a {
          color: ${Colors.primary_dark};
        }
      }
      .cpy {
        font-size: 0.8rem;
        color: ${Colors.secondary_dark};
        text-align: center;
      }

      .fr_erm {
        color: red;
        font-size:0.8rem;
      }
      .reg_btn .btn{
        background-color:${Colors.primary};
        transition:all 300ms ease-in;
        color:${Colors.secondary};
        padding:0.6rem 0;
        border-radius:10px;
        width:60%;
      }
      .reg_btn .btn:hover{
        background-color:${Colors.primary_dark}
      }
    }
  }
`;
