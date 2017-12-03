/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';
import { graphql, createFragmentContainer } from 'react-relay';

import Link from '../Link';
import type { AppToolbar_me } from './__generated__/AppToolbar_me.graphql';

const Header = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  flex-direction: column;
  background-color: #3f4257;
  justify-content: space-between;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 959px) and (orientation: landscape) {
    min-height: 48px;
  }
  @media (max-width: 599px) {
    min-height: 56px;
  }
`;

const Section = styled.section`
  z-index: 1;
  display: inline-flex;
  min-width: 0;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: ${props =>
    props.start ? 'flex-start' : props.end ? 'flex-end' : 'center'};
  order: ${props => (props.start ? -1 : props.end ? 1 : null)};
`;

const TitleLink = styled(Link)`
  z-index: 1;
  display: inline-flex;
  padding: 16px 0;
  margin: 0;
  margin-left: 24px;
  overflow: hidden;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25em;
  line-height: 1.5rem;
  color: #00d8ff;
  text-decoration: none;
  text-overflow: ellipsis;
  letter-spacing: 0.0625em;
  white-space: nowrap;
  align-self: center;
  align-items: center;

  @media (max-width: 599px) {
    margin-left: 16px;
  }

  &.title:active,
  &.title:hover,
  &.title:visited {
    color: #00d8ff;
  }

  & img {
    width: 90px;
    margin-right: 10px;
  }
`;

const NavLink = styled(Link)`
  padding-right: 8px;
  padding-left: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NavLinkLast = styled(NavLink)`
  margin-right: 24px;
  @media (max-width: 599px) {
    margin-right: 16px;
  }
  cursor: pointer;
`;

class AppToolbar extends React.Component {
  props: {
    me: AppToolbar_me,
    hero: React.Element<*>,
  };

  render() {
    return (
      <Header>
        <Row>
          <Section start>
            <TitleLink href="/">
              <img src={require('../microMACROLogoSmall.png')} className='logo' alt='logo' title='site logo' />
              microMacro
            </TitleLink>
          </Section>
          <Section end>
            <NavLinkLast href="/" id="logout">Logout</NavLinkLast>
          </Section>
        </Row>
        {this.props.hero &&
          React.cloneElement(this.props.hero, {
            style: {
              maxWidth: '1000px',
              alignSelf: 'center',
            },
          })}
      </Header>
    );
  }
}

export default createFragmentContainer(
  AppToolbar,
  graphql`
    fragment AppToolbar_me on User {
      displayName
    }
  `,
);
