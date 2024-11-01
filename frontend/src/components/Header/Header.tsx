import styles from './Header.module.css';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <CustomNavLink to='/'>Главная</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to='/register'>Регистрация</CustomNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
