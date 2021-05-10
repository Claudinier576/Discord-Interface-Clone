import styled from "styled-components";
import { PersonAdd,Settings } from 'styled-icons/material'
import { Hashtag } from 'styled-icons/heroicons-outline'


//SL - server Lists
//SN - server Name
//CI - Channel Info
//CL - Channel List
//CD - Channel Data
//UL - User List
//UI - User Info


export const Container = styled.div`

    background-color: var(--white);


    display:flex;
    justify-content: space-between;
    align-items: center;
    cursor:pointer;
    padding: 5px 3px;
    border-radius: 5px;
    background-color: transparent;

    transition: background-color .2s;

    >div {
        display: flex;
        align-items: center;
    }

    > div span {
        font-size:15px;
        color: var(--senary);
        margin-left: 5px;
    }

    &.active, &:hover {
        background-color: var(--quinary);

        >div span {
            color: var(--white);
        }

        > div path {
        display:inline;
    }
    }

    > div path {
        display:none;
    }

`;
export const HashTagIcon = styled(Hashtag)`

    width:20px;
    height:20px;
    color: var(--symbol);

`;

export const InviteIcon = styled(PersonAdd)`
    width:16px;
    height:16px;
    color: var(--symbol);

    cursor: pointer;

    transition: color .2s;


    &:hover{
        color: var(--white);
    }

`;

export const SettingsIcon = styled(Settings)`
    width:16px;
    height:16px;
    color: var(--symbol);
    cursor: pointer;
    
    transition: color .2s;
    &:hover{
        color: var(--white);
    }

    margin-left: 4px;
`;