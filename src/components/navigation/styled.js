import styled from "styled-components";

export const MenuWrapper = styled.div`
// background-color:green;
ul{
    padding:10px 0;
    margin:0;
}
li{
    list-style:none;
    display:inline-block;
    width:200px;
}
a{
    color:#fff;
    text-decoration:none;
    &:hover{
        color:red;
    }
    `;
