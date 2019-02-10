import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATHS } from '../constants';
import {App, Main, Adverts, Authors, Advert, Author, AdvertEdit, AuthorEdit, AdvertAdd, AuthorAdd
} from '../containers';

export const Routes = () => (
  <App>
    <Switch>
      <Route exact path={PATHS.advertNew.path} component={AdvertAdd}/>
      <Route exact path={PATHS.authorNew.path} component={AuthorAdd}/>
      <Route exact path={PATHS.main.path} component={Main}/>
      <Route exact path={PATHS.adverts.path} component={Adverts}/>
      <Route exact path={PATHS.authors.path} component={Authors}/>
      <Route exact path={PATHS.advert.path} component={Advert}/>
      <Route exact path={PATHS.author.path} component={Author}/>
      <Route exact path={PATHS.advertEdit.path} component={AdvertEdit}/>
      <Route exact path={PATHS.authorEdit.path} component={AuthorEdit}/>
    </Switch>
  </App>
);
