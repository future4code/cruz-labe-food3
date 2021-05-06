import React from "react"
import styled from "styled-components"

export const MainContainer = styled.div`
width:90vw;
margin:5vw;
height:150px;
padding:0;
display:flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
font-family: 'Roboto', sans-serif;
letter-spacing:-0.39px;
font-size:16px;
line-height:30px;
border: 1px solid #b8b8b8;
border-radius:8px;
`;

export const Photo = styled.div`
width:35%;

img{
max-width: 100%;
height:150px;
object-fit: cover;
}`;

export const Align = styled.div`
width:60%;
margin: 0 2.5%;
display:flex;
justify-content: flex-end;
flex-wrap: wrap;
`;

export const Name = styled.div`
width:100%;
color: #5cb646;
`;

export const Description = styled.div`
width:100%;
color: #b8b8b8;
letter-spacing:-0.39px;
font-size:12px; 
`;

export const Price = styled.div`
width:100%;
`;

export const Add = styled.button`
 padding:7px;
  color: #5cb646;
  border: 1px solid #5cb646;
  border-bottom-right-radius: 8px;
  background:none;
  margin: 0 -9.5px -16.5px 0;
`;


 