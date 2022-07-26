import styled from "styled-components"
import { Colors } from "../../constants/colors"
export const StyledModal = styled.div`
box-shadow:0 0 2px ${Colors.primary};
border-radius:10px;
padding:2rem 0;
transition:all 500ms ease-in;
    
    .mod_img{
        display:flex;
        justify-content:center;
        align-items:center;

        img{
            width:100px;
            height:100px;
        }
    }

    .pay_logo{
        width:50px;
        height:50px;
        
    }

    .mod_text{
        p{
            text-align:center;
            color:${Colors.secondary_dark};
            font-size:1rem;
            padding:1rem 0;
        }
    }

    &:hover{
        border: 1px solid ${Colors.primary_dark};
        cursor: pointer;
    }
`