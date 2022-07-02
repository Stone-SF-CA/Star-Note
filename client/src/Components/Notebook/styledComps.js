import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

//Description
export const DescriptCard = styled.div`
  margin-left:20px;
  margin-right:20px;
  `

//EntryForm.jsx
export const EntForm = styled.div`
  padding:20px;
  `
export const RadioButton = styled.input.attrs({ type: 'radio' })`
  &:after {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color:${(props) => props.color};
    content: '';
    display: inline-block;
    visibility: visible;
    margin-left: -6px;
    cursor:pointer;
    border: 2px solid white;

}

&:checked:after {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: ${(props) => props.color};
    content: '';
    display: inline-block;
    visibility: visible;
    border: 4px solid white;
    box-shadow: 0px 0px 7px grey;
    margin-left: -6px
    cursor:pointer;
}
`