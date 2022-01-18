import { Outlet } from 'react-router-dom';
import { CustomLink } from '../CustomLink/CustomLink';

export const Layout = () => {
    return (
        <>
            <header>
                <p>Header</p>
                <CustomLink to="/">Home</CustomLink>
            </header>
            <Outlet />
            <footer>footer</footer>
        </>
    );
};
