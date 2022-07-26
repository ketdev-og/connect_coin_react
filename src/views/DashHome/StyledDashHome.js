import styled from "styled-components";
import { Colors } from "../../constants/colors";
export const StyledDashHome = styled.div`
  padding: 0 1rem;

  .dash_header {
    .ds_logo {
      background-color: ${Colors.secondary};
      padding:1rem;
    }
    .us_dt {
      display: grid;
      gap: 3rem;
      grid-template-columns: 20% 60% 10%;

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
    gap:2rem;
    grid-template-columns: 20% 75%;

    .side_nav_lis {
      background-color: ${Colors.secondary_dark};
      box-shadow: 0 0 2px ${Colors.secondary};
      border-radius: 5px;
      height:fit-content;
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
    .chart{
        
        height:400px;
    
    }
  }
  .acc_ov{
    p{
        text-align:center;
    }

    p:nth-child(1){
        font-size:1.8rem;
        color:${Colors.primary};
        opacity: 0.5;
    }

    p:nth-child(2){
        font-size:1rem;
        color:${Colors.secondary_dark};
        opacity: 0.8;
    }

    p:nth-child(3){
        font-size:1.2rem;
        color:${Colors.secondary_dark};
        font-weight:bold;
        
    }
  }

  .user_dtl{

    .dtl_icon_ic{
      font-size:4rem;
    }
  }

  .dsh_footer{
    background-color:${Colors.secondary_dark};
    padding:2rem;
    div{
      display:flex;
      flex-direction:column;
      justify-content:center;
      
    }
    p{
      font-size:1rem;
      color:${Colors.secondary}
      
    }
  }
`;
