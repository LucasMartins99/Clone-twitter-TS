import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';
import {
  Container, SearchWrapper, SearchInput, SearchIcon, Body,
} from './styles';

const SideBar: React.FC = () => (
  <Container>
    <SearchWrapper>
      <SearchInput placeholder="Buscar no Twitter" />
      <SearchIcon />
    </SearchWrapper>
    <StickyBox>
      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion
              name="Luix Batanero"
              nickname="@luizbatanero"
            />,
            <FollowSuggestion
              name="Luke Morales"
              nickname="@lukemorales"
            />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
      </Body>
    </StickyBox>
  </Container>
);

export default SideBar;
