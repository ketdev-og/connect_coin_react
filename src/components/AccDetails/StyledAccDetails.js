import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const StyledAccDetails = styled.div`
  
    box-shadow: 0 0 2px ${Colors.primary_dark};
    padding: 1.5rem 1rem;
    border-radius:5px;
    .dtl_icon{
        color:${Colors.primary}
    }
    .dtl_dt {
      .btn_sm{
        font-size:0.6rem;
      }
      p {
        text-align: right;
        color: ${Colors.secondary_dark};
        text-shadow: 0 0 1px ${Colors.secondary_dark};
      }
      p:nth-child(1) {
        font-size: 1.4rem;
        
      }
      p:nth-child(2) {
        font-size: 1rem;
        font-weight: 600;
      }
    
  }
`;
