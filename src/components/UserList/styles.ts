import styled from "styled-components"; 


//SL - server Lists
//SN - server Name
//CI - Channel Info
//CL - Channel List
//CD - Channel Data
//UL - User List
//UI - User Info


export const Container = styled.div`

    grid-area: UL;

    background-color: var(--secondary);
    display: flex;
    flex-direction: column;

    padding: 3px 6px 0 16px;
    
    max-height: calc(100vh - 46px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width:8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`;

export const Role = styled.span`

    margin-top: 20px;

    text-transform: uppercase;
    font-size : 12px;
    font-weight:500;
    color: var(--gray);

`;


export const User = styled.div`

    display: flex;
    margin-top:5px;
    padding: 5px;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;

    background-color: transparent;

    transition: background-color .2s;

    &:hover{
        background-color: rgba(255,255,255,0.1);
    }

    > strong {
        margin-left: 13px;
        font-weight:500;
        color: var(--white);
        opacity: 0.7;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;

    }
    > span {
        margin-left: 9px;
        background-color: var(--discord);
        border-radius: 4px;
        padding: 4px 5px;
        text-transform: uppercase;
        font-weight: bold;
        font-size:11px;
        color: var(--white)
    }
`;


export const Avatar = styled.div`

    flex-shrink : 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--primary);

    &.bot {
        background-color: var(--mention-detail);

    }
`;