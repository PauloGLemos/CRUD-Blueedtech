import styled from 'styled-components';

export const Navbar = styled.div`
    width: 100vw;
    background-color: #56C09C;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 0 2rem;
    background-image: url('https://i.pinimg.com/originals/d8/4a/60/d84a6060a6a9c451a29974ed98888316.jpg');
    background-size: 700px;
`;

export const Img = styled.img`
    width: 5rem;
    padding: 0.5rem 0;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const ListItem = styled.li`
    list-style: none;
    padding: 1.2rem 2rem;
    background-color: #892945;
    
    &:hover {
        background-color: #55192B;
    }

`;

export const Linkedpage = styled.a`
    text-decoration: none;
    color: #ffffff;
`;
