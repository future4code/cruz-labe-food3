import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 92vh;
  overflow: hidden;
  overflow-y: auto;
`;

export const Header = styled.header`
  height: 44px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;

  border-bottom: 1px solid #d0d0d0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  z-index: 1000;
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
  width: 343px;
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
