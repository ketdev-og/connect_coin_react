import styled from "styled-components";
import { Colors } from "../../constants/colors";


export const StyledActions = styled.div`
  .hd_title {
    color: ${Colors.faded};
  }

  .hd_contents {
    div {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-right:1px solid ${Colors.faded};

        p:nth-child(1){
            font-size:3rem;
            color:${Colors.primary};
            font-weight:bold;
            text-shadow:0 0 2px ${Colors.primary_dark}; 
        }

        p:nth-child(2){
            color:${Colors.secondary_dark};
             
        }
    }

    div:nth-child(4){
        border-right:none;
    }
   
  }
`;
