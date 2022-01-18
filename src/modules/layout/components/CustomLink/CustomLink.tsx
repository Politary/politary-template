import { Link, useMatch } from 'react-router-dom';

export const CustomLink: React.FC<any> = ({ children, to, ...props }) => {
    const match = useMatch(to as string);

    return (
        <Link
            to={to as string}
            style={{ color: match ? 'red' : 'black' }}
            {...props}
        >
            {children}
        </Link>
    );
};
