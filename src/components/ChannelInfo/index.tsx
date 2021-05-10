import React from 'react';
import { Container,HashtagIcon,Title,Separetor,Description} from './styles';

const ChannelInfo : React.FC = () => {
    return (
    <Container>
      <HashtagIcon/>
      <Title>Ademiros-Puto</Title>
      <Separetor/>
      <Description>Canal aberto para conversas</Description>
    </Container>
    )
};

export default ChannelInfo;