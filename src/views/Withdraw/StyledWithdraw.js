import styled from "@emotion/styled";
import { Colors } from "../../constants/colors";

export const StyledWithdraw = styled.div`
    padding:3rem;
    .wit_top{
        font-size:1.6rem;
        color:${Colors.secondary_dark};
        font-weight:500;
        text-shadow:0 0 1px ${Colors.secondary_dark}
        
    }
    .wit_bal{
        display:flex;
        background-color:${Colors.secondary_dark};
        .av_bal{
            width:30%;
            padding:1rem 1rem;
            color:${Colors.secondary};
           
        }
    }
    
`