import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const StyledNavigation = styled.div`
    background-color:${Colors.secondary};
    box-shadow: 0 1px 20px ${Colors.secondary};
  
    .links {
    display: flex;
    justify-content: center;

    .main_nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      color: ${Colors.secondary_dark};
      text-shadow: 0 0 1px ${Colors.secondary_dark};

      .wt_sub_nav {
        position: relative;
        color: ${Colors.secondary_dark};
        transition: all 0.3s ease-in-out;

        &:hover {
          cursor: pointer;
          color: ${Colors.primary_dark};
        }

        ul li a {
          display: block;
          padding: 0.8rem 1rem;
          color: ${Colors.secondary_dark};
          text-shadow: 0 0 1px ${Colors.secondary_dark};
          transition: all 0.3s ease-in-out;

          &:hover {
            background-color: ${Colors.primary};
            color: ${Colors.secondary};
          }
        }
      }

      .sub_nav {
        background-color: ${Colors.secondary};
        box-shadow: 0 0 5px ${Colors.secondary};
        color: ${Colors.secondary_dark};
        position: absolute;
        top: 20px;
        width: 8rem;
        border-radius: 2px;
      }
    }
  }

  .auth {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      margin: 0 0.5rem;
    }
  }
`;


