import React from 'react';
import ChannelMessage from '../ChannelMessage';
import { Mention } from '../ChannelMessage/styles';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

interface PropsChannelData {
    nameChannel: string;
}

const ChannelData: React.FC<PropsChannelData> = ({ nameChannel }) => {
    return (
        <Container>
            <Messages>
                <ChannelMessage author="Fulano" date="08/05/2021" content="Hoje é meu aniversário!" />
                <ChannelMessage author="Fulano2" date="08/05/2021" content="Parabéns" />
                <ChannelMessage author="Fulano3" date="08/05/2021" content="Parabéns" />
                <ChannelMessage author="Fulano4" date="08/05/2021" content="Parabéns" />
                <ChannelMessage author="Fulano5" date="08/05/2021" content="Parabéns" />
                <ChannelMessage author="Fulano6" date="08/05/2021" content="Parabéns" />
                <ChannelMessage author="Venomjr123" date="08/05/2021" content="Parabéns" isBot />
                <ChannelMessage author="Venomjr123" date="09/05/2021" content="Bom Dia" isBot />
                <ChannelMessage author="Nip" date="09/05/2021" content="Bom Dia krl" />
                <ChannelMessage author="Venomjr123" date="09/05/2021" content={
                    <>
                        <Mention>@Nip</Mention>, Cola na Call
             </>
                } isBot hasMention />
                <ChannelMessage author="Charleira Style" date="09/05/2021" content={
                    <>
                        <Mention>@Nip</Mention> Vem call BB
             </>
                } hasMention />
                <ChannelMessage author="Lorita" date="09/05/2021" content={
                    <>
                        <Mention>@everone</Mention> Live do <Mention>@Venomjr123</Mention> Subs não liberados
             </>
                } hasMention isBot />

                <ChannelMessage author="Nip" date="09/05/2021" content="já to indo só entrar na live" />
                <ChannelMessage author="Nip" date="09/05/2021" content={
                    <>
                        <Mention>@venomjr123</Mention> Desmuta ai mano mds
                    </>
                } />
                <ChannelMessage author="Fulano4" date="08/05/2021" content="Lorem ipsum dolor sit amet consectetur adipiscing elit luctus vulputate, suspendisse lacus fames duis sapien pulvinar nibh himenaeos, condimentum ante habitasse vestibulum mi dictum feugiat libero. Curabitur dui ridiculus montes dolor vitae arcu etiam leo habitant, dictumst fames ultrices vel integer class odio vestibulum, magnis elementum porta augue platea at auctor penatibus. Vitae malesuada accumsan ridiculus justo habitant urna penatibus nisi iaculis maecenas, sit mattis curae commodo orci sollicitudin est potenti viverra quam, dictumst fusce porttitor libero mauris ultricies ut finibus vehicula. Consectetur vel morbi venenatis tristique ex elit sagittis vulputate gravida, lobortis nec molestie interdum cras ligula augue egestas scelerisque fusce, massa finibus suspendisse nostra cursus faucibus facilisi odio." />



            </Messages>
            <InputWrapper>
                <Input type="text" placeholder={'Conversar em #' + nameChannel} />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;