import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header/index';
import Tabs from '~/components/Tabs/index';
import Menu from '~/components/Menu/index';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';
export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 146.243,97</Description>
          </CardContent>
          <CardFooter>
            <Annotation>Transferência recebida</Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
