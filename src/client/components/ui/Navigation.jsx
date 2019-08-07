import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BasketToggle from '../basket/BasketToggle';
import Badge from './Badge';
import UserNav from '../user/UserNav';

const Navigation = ({ basket, profile }) => {
  const navbar = useRef(null);

  document.addEventListener('scroll', () => {
    if (navbar.current) {
      if (window.pageYOffset === 0) {
        navbar.current.style.background = getComputedStyle(document.documentElement).getPropertyValue('--nav-bg');
      } else {
        navbar.current.style.background = getComputedStyle(document.documentElement).getPropertyValue('--nav-bg-scrolled');
      }
    }
  });

  return (
    <nav 
        className="navigation"
        ref={navbar}
    >
      <div className="logo">
        <h2>SALINAKA</h2>
      </div>
      <ul className="navigation-menu">
        <li className="navigation-menu-item">
          <NavLink 
              activeClassName="navigation-menu-active"
              className="navigation-menu-link"
              exact
              to="/" 
          >
            Store
          </NavLink>
        </li>
        <li className="navigation-menu-item">
          <NavLink 
              activeClassName="navigation-menu-active"
              className="navigation-menu-link"
              exact
              to="/profile" 
          >
            Account
          </NavLink>
        </li>
        <li className="navigation-menu-item">
          <BasketToggle>
             {({ onClickToggle }) => (
                <a href="" className="navigation-menu-link" onClick={onClickToggle}>
                  <Badge count={basket.length}/>
                  Basket
                </a>
             )}
          </BasketToggle>
        </li>
        <li className="navigation-menu-item">
          <UserNav profile={profile}/>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ basket, profile }) => ({
  basket,
  profile
});

export default connect(mapStateToProps)(Navigation);