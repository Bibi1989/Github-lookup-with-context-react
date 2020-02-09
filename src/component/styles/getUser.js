import styled from "styled-components";

export const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 3% 10%;
  .first {
    width: 100%;
    .img {
      width: 60%;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .repos {
      display: flex;
      justify-content: space-around;
      padding: 2% 10% 0 0;
      span{
          color: orange;
      }
    }
    .bio {
      h3 {
        color: #777;
        font-size: 2rem;
        margin: 0;
        padding: 10px 0;
      }
    }
    .github-link {
      a {
        display: inline-block;
        text-decoration: none;
        padding: 5px;
        border: 0.5px solid #777;
        border-radius: 5px;
        margin: 15px 0;
      }
    }
  }

  .second {
    display: flex;
    justify-content: center;
    h1 {
      color: #777;
      font-size: 2.5rem;
    }
    .attr {
      margin: 20px;
      span:first-child {
        color: orangered;
        font-size: 1.4rem;
        padding-right: 1.2em;
      }
      span:last-child {
        color: #777;
      }
      a {
        text-decoration: none;
        color: orange;
      }
    }
  }
`;
