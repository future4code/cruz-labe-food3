import styled from "styled-components";

export const CardFood = styled.div`
  display: grid;
  grid-template-rows: 120px 68px;
  border: 1px solid #b8b8b8;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #fff;

  img {
    display: block;
    width: 343px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 10px 16px 16px;

    p {
      margin: 0;
      padding: 0;

      :nth-child(1) {
        margin-bottom: 4px;
        color: #5cb646;
      }
    }

    span {
      display: flex;
      justify-content: space-between;

      p {
        color: #b8b8b8;

        :first-child {
          color: #b8b8b8;
          margin: 0;
        }
      }
    }
  }
`;