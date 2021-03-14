import styled from 'styled-components';
import {Button} from 'react-bootstrap';

const RoundedButton = styled(Button)`
  border-radius: 20px;
  background-color:${({theme,color}) => color =='primary' ? theme.primary : theme.secondary};
  border: 1px solid ${({theme,color}) => color =='primary' ? theme.secondary : theme.primary};
  &:hover{
    background-color:${({theme,color}) => color =='primary' ? theme.secondary : theme.primary};
    border: 2px solid ${({theme,color}) => color =='primary' ? theme.primary : theme.secondary};
  }
`;

export default RoundedButton;