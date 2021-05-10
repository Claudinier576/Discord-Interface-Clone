import React from 'react';
import ServerButton from '../ServerButton';
import {Container, Separetor} from './style'

const SererList : React.FC = () => {

    return(

        <Container>
            <ServerButton isHome/>

            <Separetor/>

            <ServerButton hasNotifications/>
            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton hasNotifications mentions={3}/>
            <ServerButton hasNotifications mentions={325}/>
            <ServerButton/>
            <ServerButton mentions={99}/>
            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton/>
        </Container>

    )

};


export default SererList;