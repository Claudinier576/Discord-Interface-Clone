import styled from "styled-components";
import { ExpandMore } from 'styled-icons/material'


//SL - server Lists
//SN - server Name
//CI - Channel Info
//CL - Channel List
//CD - Channel Data
//UL - User List
//UI - User Info


export const Container = styled.div`

    background-color: var(--secondary);
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 11px 0 16px;

    box-shadow: rgba(0, 0, 0,0.2) 0px 1px 0px 0px;
    z-index:2;




`;
export const ExpandIcon = styled(ExpandMore)`

    width: 28px;
    height: 28px;

    color: var(--white);
    cursor: pointer;



`;
export const Title = styled.h1`

    font-size: 16px;
    color: var(--white);
    font-weight: bold;



`;