import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
width: 90vw;
margin: 5vw;
height: 170px;
padding: 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
align-content: stretch;
align-items: center;
align-items: center;
font-family: "Roboto", sans-serif;
letter-spacing: -0.39px;
font-size: 16px;
line-height: 30px;
border: 1px solid #b8b8b8;
border-radius: 8px;
`;

export const Photo = styled.div`
width: 35%;
img {
max-width: 100%;
height: 168px;
object-fit: cover;
border-radius: 8px;
}
`;

export const Align = styled.div`
width: 60%;
margin: 0 2.5%;
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`;


export const Name = styled.div`
width: 80%;
height:50px;
color: #5cb646;
text-align:left;
`;

export const Quantity = styled.div`
  width: 24%;
  height:40px;
  padding: 2px;
  text-align:center;
  color: #5cb646;
  border: 1px solid #5cb646;
  border-top-right-radius: 8px;
  margin:-12px -9.5px 0 0;
`;


export const Description = styled.div`
width: 100%;
height:30px;
color: #b8b8b8;
letter-spacing: -0.39px;
padding-top:5px;
font-size: 12px;
line-height:25px;
`;

export const Price = styled.div`
width: 100%;
margin-top:20px;
`;

export const AlignButton = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`;

export const Add = styled.button`
padding: 7px;
color: #5cb646;
border: 1px solid #5cb646;
border-bottom-right-radius: 8px;
background: none;
margin-right:-9.5px;
`;

export const Remove = styled.button`
padding: 7px;
color: red;
border: 1px solid red;
border-bottom-right-radius: 8px;
background: none;
margin-right:-9.5px;
`;

export const H3 = styled.h3`
width: 90%;
margin: 0 auto;
border-bottom: 1px solid black;
font-family: "Roboto", sans-serif;
letter-spacing: -0.39px;
font-size: 16px;
font-weight: 400;
padding-bottom: 10px;
`;
