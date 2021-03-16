import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration:none !important;
    color: ${({color}) => color === 'primary' ? '#fff' : '#000'}
`;

export default StyledLink;