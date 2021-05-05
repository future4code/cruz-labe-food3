import styled from "styled-components"
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

  button {
      position: absolute;
      top: 25%;
      left: 20px;
      background-color: transparent;
      border: none;
      outline: none;
  }
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

export const SearchMessage = styled.div`
width: 100%;
height: 42px;
margin: 8px 0 0;
padding: 0;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
`;