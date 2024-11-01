import { FC } from 'react';
import styles from './CustomNavLink.module.css';
import { NavLink } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
};

const CustomNavLink: FC<Props> = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive, isPending, isTransitioning }) => {
        return {
          fontWeight: isActive ? 'bold' : '',
          color: isPending ? 'red' : 'black',
          viewTransitionName: isTransitioning ? 'slide' : '',
        };
      }}
    >
      {children}
    </NavLink>
  );
};
export default CustomNavLink;
