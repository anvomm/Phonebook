import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/contacts'}>Contacts</NavLink>
      </li>
      <li>
        <NavLink to={'/register'}>Sign up</NavLink>
      </li>
      <li>
        <NavLink to={'/login'}>Log in</NavLink>
      </li>
    </ul>
  </nav>
);
