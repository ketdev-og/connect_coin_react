import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const StyledFooter = styled.div`
  .foot {
    background-color: ${Colors.secondary};
    color: ${Colors.secondary_dark};

    a:hover {
      color: ${Colors.primary_dark};
    }
  }

  .bottom {
    background-color: ${Colors.secondary_dark};
    color: ${Colors.secondary};

    a {
      padding: 0 1rem;
      text-decoration: underline;
    }

    .ft_icons {
      color: ${Colors.primary};
    }
  }
`;


