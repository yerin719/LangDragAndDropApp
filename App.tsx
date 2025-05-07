import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, Text, View } from 'react-native';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f5f5f5;
`;

const Content = styled(View)`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

function App(): React.JSX.Element {
  return (
    <Container>
      <Content>
        <Title>Welcome to My App</Title>
      </Content>
    </Container>
  );
}

export default App;
