import './Card.css';
import { FC, ReactNode } from 'react';

type Props = {
    title: string,
    children: ReactNode,
};

const Card: FC<Props> = ({ title, children }) => (
    <div className="Card">
        <h1>{title}</h1>

        {children}

    </div>
);

export default Card;

