import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { Li, Ul } from '../../styled';
import Button from '../../ui/button/button';
import { NavCustomLink } from './style';

const links = [
  {
    to: AppRoute.ORDER,
    item: (
      <Button link={AppRoute.ORDER} minWidth={260}>
        Купить
      </Button>
    ),
  },
  {
    to: AppRoute.MAIN,
    item: <NavCustomLink to={AppRoute.MAIN}>Главная</NavCustomLink>,
  },
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <Ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
      </Ul>
    </nav>
  );
}

export default Nav;
