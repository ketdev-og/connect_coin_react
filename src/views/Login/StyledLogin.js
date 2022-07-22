import styled from "styled-components";
import { Colors } from "../../constants/colors";
import FormImg from "../../assets/img/formimg.svg";

export const StyledLogin = styled.div`
  padding: 2rem;
  .login_con {
    background-color: ${Colors.secondary};
    border-radius: 10px;

    .lg_form {
      p {
        font-size: 2rem;
        color: ${Colors.secondary_dark};
        text-shadow: 0 0 1px ${Colors.secondary_dark};
      }

      form .label_text {
        color: ${Colors.secondary_dark};
      }

      form {
        .fg_pass {
          color: ${Colors.secondary_dark};
          transition: all 200ms ease-in-out;
          &:hover {
            color: ${Colors.primary};
          }
        }

        .dnt {
          color: ${Colors.secondary_dark};
        }

        .dnt a {
          color: ${Colors.primary};
        }

        .fr_erm {
          color: red;
          font-size: 0.8rem;
        }

        .reg_btn .btn {
          background-color: ${Colors.primary};
          transition: all 300ms ease-in;
          color: ${Colors.secondary};
          padding: 0.4rem 0;
          border-radius: 10px;
          width: 60%;
        }
        .reg_btn .btn:hover {
          background-color: ${Colors.primary_dark};
        }
      }
    }

    .lg_img {
      background-image: url(${FormImg});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 70% 70%;
      .lg_img_txt {
        p {
          font-size: 0.8rem;
          color: ${Colors.secondary_dark};
        }
        img {
          width: 1.4rem;
          height: 1.4rem;
        }

        span {
          font-size: 1rem;
        }
      }
    }
  }
`;
