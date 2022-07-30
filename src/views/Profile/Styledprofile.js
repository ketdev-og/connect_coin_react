import styled from "styled-components";
import { Colors } from "../../constants/colors";
import ProImg from "../../assets/img/pro_head.jpg";

export const Styledprofile = styled.div`
 
  padding: 1rem;
  .pro_btn{
    a{
      background-color:${Colors.primary};
      padding: 0.6rem 2rem;
      color:${Colors.secondary};
      border-radius:10px;
      transition:all 300ms ease-in;
      &:hover{
        background-color:${Colors.primary_dark};
      }
    }
  }
  .pro_t_img {
    height: 150px;
    border-radius: 20px;
    background-image: url(${ProImg});
    background-repeat:none;
    background-position:center;
    background-size:cover;
    box-shadow:0 0 10px ${Colors.primary}; 
   
  }
  .pro_ps_dtl {
    margin-top: -48px;
    .icon {
      background-color: ${Colors.primary_dark};
      padding: 1rem;
      border-radius: 5px;
      font-size: 5rem;
      color: ${Colors.secondary_dark};
    }
    .info {
      color: ${Colors.secondary_dark};
      text-shadow: 0 0 1px ${Colors.secondary_dark};

      p:nth-child(1) {
        font-size: 1.6rem;
        font-weight: 500;
        text-transform:capitalize;
      }
    }
  }
  .pro_oth_dtl {
    .dark {
      background-color: ${Colors.secondary};
      box-shadow: 0 0 2px ${Colors.primary}
    }
    .each {
      color: ${Colors.secondary_dark};
      display: flex;
      padding: 0.4rem 1rem;
      border-radius: 10px;
      p {
        color: ${Colors.secondary_dark};
        width: 50%;
        font-size: 1.2rem;
        text-shadow: 0 0 1px ${Colors.secondary_dark};
      }
      p:nth-child(1) {
        font-size: 1.4rem;
        width: 50%;
        font-weight: bold;
      }
    }
  }
`;
