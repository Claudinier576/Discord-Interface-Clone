import styled from "styled-components";

import {Add} from 'styled-icons/material';

//SL - server Lists
//SN - server Name
//CI - Channel Info
//CL - Channel List
//CD - Channel Data
//UL - User List
//UI - User Info

export const Container = styled.div`

    grid-area : CL;
    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    padding : 24px 9.5px 0 16px;

    background-color: var(--secondary);

    ::-webkit-scrollbar {
        width:5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
 

`;
export const Category = styled.div`

    display: flex;
    align-items : center;
    justify-content: space-between;
    margin-bottom:6px;
   
   &:not(:first-child){
    margin-top:10px;
   }

    > span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight:500;
        color: var(--gray);

    }


`;
export const AddCategoryIcon = styled(Add)`

    width: 21px;
    height: 21px;
    color: var(--symbol);

    cursor: pointer;

`;