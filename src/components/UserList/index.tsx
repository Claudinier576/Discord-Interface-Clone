import React from 'react';
import { Container,Role,User,Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) =>{
    return (
        <User>
            <Avatar className={ isBot ? "bot" : ''} />
            <strong>{nickname}</strong>
            {isBot && <span>bot</span>}
        </User>

        
    )
}


const UserList: React.FC = () => {
    return (
        <Container>

            <Role>Disponivel - 3</Role>

            <UserRow nickname="Nip" />
            <UserRow nickname="Charleira Style" />
            <UserRow nickname="Lorita" isBot/>

            <Role>Offline - 30</Role>

            <UserRow nickname="Venojr123" isBot/>
            <UserRow nickname="BobMilho" />
            <UserRow nickname="ShinaTensei" />
            <UserRow nickname="ChinaTemC" />
            <UserRow nickname="Fizz Covinha" />
            <UserRow nickname="FulanoCuzaoChinasda" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
           


        </Container>
    )
};

export default UserList;