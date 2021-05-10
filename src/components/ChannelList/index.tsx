import React from 'react';
import ChannelButton from '../ChannelButton';
import { Container,Category,AddCategoryIcon} from './styles';

const ChannelList : React.FC = () => {
    return (
    <Container>
      <Category>
        <span>Ademiro</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton channelName="Ademiros-Puto" selected/>
      <ChannelButton channelName="Logs" />
      <ChannelButton channelName="Chat-Livre" />
      <ChannelButton channelName="Chat-Vava" />
      <ChannelButton channelName="Chat-GTA" />
      <ChannelButton channelName="Chat-SOT" />
      <ChannelButton channelName="Chat-CSGo" />



      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton channelName="Valorinho" />
      <ChannelButton channelName="Chat-Casal" />
     

      <Category>
        <span>Radiante</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton channelName="Radiante" />
      <Category>
        <span>Imortal</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton channelName="Imortal" />
     
     
      <Category>
        <span>Diamante</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton channelName="Dima 1" />
      <ChannelButton channelName="Dima 2" />
      <ChannelButton channelName="Dima 3" />
     
      <Category>
        <span>Platina</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton channelName="Plat 1" />
      <ChannelButton channelName="Plat 2" />
      <ChannelButton channelName="Plat 3" />
     
      <Category>
        <span>Ouro</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton channelName="Ouro 1" />
      <ChannelButton channelName="Ouro 2" />
      <ChannelButton channelName="Ouro 3" />
     
      <Category>
        <span>Prata</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton channelName="Prata 1" />
      <ChannelButton channelName="Prata 2" />
      <ChannelButton channelName="Prata 3" />
     
      <Category>
        <span>Bronze</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton channelName="Bronze 1" />
      <ChannelButton channelName="Bronze 2" />
      <ChannelButton channelName="Bronze 3" />
     

    </Container>
    )
};

export default ChannelList;