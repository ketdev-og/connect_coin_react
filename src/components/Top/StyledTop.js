import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const StyledHead = styled.div`
    position:relative;
    .head_con{
        p:nth-child(1),p:nth-child(3){
            color:${Colors.secondary_dark};
            text-shadow:0 0 1.5px ${Colors.secondary_dark}; 
        }
        p:nth-child(2){
            color:${Colors.primary_dark};
            text-shadow:0 0 2px ${Colors.primary}; 
        }
    }

    .head_img{
        .head_img_fm{
            width:fit-content;
            padding:1rem;
            border-radius:10px;
            box-shadow:0 0 2px ${Colors.primary}; 
        }
        img{
            
        }
    }

`