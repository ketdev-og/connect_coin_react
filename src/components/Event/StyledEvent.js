import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const StyledEvent = styled.div`

    .event_img{
        
        .event_img_bg{
            border-radius:5px;
            box-shadow:0 0 2px 5px ${Colors.primary}; 
            position:relative;
            height:400px;
            width:300px;
            background-color:${Colors.primary}
        }

        .event_img_img{
            position:absolute;
            background-color:${Colors.secondary};
            transform:translate(30px, 30px);
            box-shadow:0 0 2px 2px ${Colors.secondary}; 
            border-radius:5px;
            img{
                width:300px;
                height:400px;
                
            }
        }

        

    }

    .event_details{
            div:nth-child(1){
                color:${Colors.secondary_dark};
                font-size:1rem;
                line-height:28px;
            
                
                
            }
        }

`