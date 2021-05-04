import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

export const Header = styled.header`
  height: 44px;
  width: 100%;
  position: fixed;
  top: 0;

  border-bottom: 1px solid #d0d0d0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
`;

export const InputArea = styled.div`
position: relative;
`

export const SearchIconHome = styled(SearchIcon)`
path {fill: #b8b8b8;}
position: absolute;
top: 64%;
left: 12px;
`

export const InputSearch = styled.input`
  width: 328px;
  height: 56px;
  padding: 16px 8px 16px 45px;
  font-size: 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  box-sizing: border-box;
  margin-top: 52px;
`;

export const TypesFoods = styled.div`
  align-self: flex-start;
  width: 500px;
  height: 42px;
  margin: 8px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 16px;

  p {
    box-sizing: border-box;
    width: 87px;
    display: flex;
    justify-content: center;
    margin: 0 5px;

    :first-child {
          color: #5cb646;
        }
  }
`;

export const SearchMessage = styled(TypesFoods)`
width: 100%;
padding: 0;
justify-content: center;
font-weight: 500;
`

export const CardFood = styled.div`
  display: grid;
  grid-template-rows: 120px 68px;
  border: 1px solid #b8b8b8;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #fff;

  img {
    display: block;
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
