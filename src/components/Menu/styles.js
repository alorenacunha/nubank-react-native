import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerAtyle: {aligntItems: 'center'},
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
  overflow: hidden;
`;
