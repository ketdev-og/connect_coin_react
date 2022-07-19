import styled from "styled-components";
import {Colors} from '../../constants/colors'

export const StyledButton =  styled.a`
        display:block;
        padding:0.6rem 1.6rem;
        border-radius:1rem;
        outline-style:none;
        background-color:${props=>(props.outline ? 'none' : Colors.primary) };
        border:${props=>(props.outline ? '0.5px solid'+Colors.primary : 'none') };
        color: ${props=>(props.outline ? Colors.secondary_dark : Colors.secondary) };
        transition:all 300ms ease-in;
        font-size:0.8rem;

        &:hover{
           background-color: ${props=>(props.outline ? Colors.primary : Colors.primary_dark) }; 
           cursor: pointer;
           color:${Colors.secondary}
        }
       
`