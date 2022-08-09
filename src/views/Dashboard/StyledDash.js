import styled from "styled-components";
import { Colors } from "../../constants/colors";
export const StyledDash = styled.div`
  padding: 0 1rem;
  position: relative;

  .ham {
    display: none;
  }
  .ham_nav {
    height: 100vh;
    width: 80vw;
    background-color: ${Colors.secondary};
    position: absolute;
    top: 0;
    right:0;
    z-index:100;

    ul {
      display:flex;
      flex-direction:column;

      a {
        color: ${Colors.secondary_dark};
        padding: 1.4rem 2rem;
        text-align:center;
        font-size:1.2rem;

        &:hover{
          background-color:${Colors.primary};
          color:white;
        }
      }
    }
    a {
      color: ${Colors.secondary_dark};
      padding: 0.6rem 2rem;
    }
  }
  .dash_header {
    .ds_logo {
      background-color: ${Colors.secondary};
      padding: 1rem;
    }
    .us_dt {
      display: grid;
      gap: 3rem;
      grid-template-columns: 20% 60% 10%;

      .us_name {
        span {
          text-transform: capitalize;
        }
      }
      .nav_icon {
        position: relative;
        cursor: pointer;
        ul {
          position: absolute;
          z-index: 100;
          top: 30px;
          background-color: ${Colors.primary};
          border-radius: 5px;
          box-shadow: 0 0 3px ${Colors.primary};
          a {
            padding: 1rem 3rem;
            display: flex;
            flex-direction: column;
            color: ${Colors.secondary};
            transition: all 300ms ease-in;

            &:hover {
              background-color: ${Colors.primary_dark};
            }
          }
        }
      }

      div {
        border-bottom: 2px solid ${Colors.primary_dark};

        span {
          color: ${Colors.secondary_dark};
          font-weight: 500;
          font-size: 1.4rem;
          text-shadow: 0 0 1px ${Colors.secondary_dark};
        }

        svg {
          transform: translateY(8px);
          font-size: 1.4rem;
          color: ${Colors.primary_dark};
        }
      }
    }
  }
  .side_nav {
    border-radius: 10px;
    display: grid;
    gap: 2rem;
    grid-template-columns: 20% 75%;

    .side_nav_lis {
      background-color: ${Colors.secondary_dark};
      box-shadow: 0 0 2px ${Colors.secondary};
      border-radius: 5px;
      height: fit-content;
      a {
        padding: 1rem 1rem;
        width: 100%;
        color: ${Colors.secondary};
        font-weight: 400;
        font-size: 1rem;
        transition: all 200ms ease-in;
        display: flex;

        span:nth-child(1) {
          padding: 0 0.5rem;
          transform: translateY(5px);
        }

        &:hover {
          background-color: ${Colors.primary};
        }
      }
    }
    .chart {
      height: 400px;
    }
  }
  .acc_ov {
    p {
      text-align: center;
    }

    p:nth-child(1) {
      font-size: 1.8rem;
      color: ${Colors.primary};
      opacity: 0.5;
    }

    p:nth-child(2) {
      font-size: 1rem;
      color: ${Colors.secondary_dark};
      opacity: 0.8;
    }

    p:nth-child(3) {
      font-size: 1.2rem;
      color: ${Colors.secondary_dark};
      font-weight: bold;
    }
  }

  .user_dtl {
    .dtl_icon_ic {
      font-size: 4rem;
    }
  }

  .dsh_footer {
    margin-top: 20rem;
    background-color: ${Colors.secondary_dark};
    padding: 2rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    p {
      font-size: 1rem;
      color: ${Colors.secondary};
    }
  }

  @media (max-width: 900px) {
    .ham {
      display: flex;
    }

    .ham_nav {
      display: block;
    }
    .dash_header .us_dt {
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }
    .side_nav {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .side_nav_lis {
      display: none;
    }
    .other_sd {
      width: 100%;
    }

    .welc {
      display: none;
    }

    .user_dtl {
      grid-template-columns: repeat(1, 1fr);
    }

    .nav_icon {
      display: none;
    }

    .dsh_footer {
      grid-template-columns: repeat(1, 1fr);
      p {
        text-align: center;
      }
    }

    .user_dtl {
      padding: 0 3rem;
    }
  }

  @media (max-width: 570px) {
    .acc_ov {
      p:nth-child(1) {
        font-size: 1.4rem;
      }

      p:nth-child(2) {
        font-size: 0.8rem;
      }

      p:nth-child(3) {
        font-size: 0.6rem;
        word-wrap: break-word;
      }
    }

    .user_dtl div {
      grid-template-columns: repeat(1, 1fr);

      .dtl_dt {
        p {
          text-align: center;
        }
      }
    }
  }
`;
