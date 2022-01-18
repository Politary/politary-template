import { Outlet } from 'react-router-dom';
import { CustomLink } from '../CustomLink/CustomLink';
import { Container } from './Layout.styles';

export const Layout = () => {
    return (
        <>
            <header>
                <p>Header</p>
                <CustomLink to="/">Home</CustomLink>
            </header>
            <Container>
                <Outlet />
            </Container>
            <footer>footer</footer>
        </>
    );
};
