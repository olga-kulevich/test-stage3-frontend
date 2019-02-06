import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { PATHS } from '../constants';
import {Main, Adverts, Authors, Advert, Author, AdvertEdit, AuthorEdit, AdvertAdd, AuthorAdd
} from '../containers';

export const Routes = () => (
  <div>
    <ul>
      <li>
        <Link to={PATHS.adverts.path}>Adverts</Link>
      </li>
      <li>
        <Link to={PATHS.authors.path}>Authors</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path={PATHS.main.path} component={Main}/>
      <Route exact path={PATHS.adverts.path} component={Adverts}/>
      <Route exact path={PATHS.authors.path} component={Authors}/>
      <Route exact path={PATHS.advert.path} component={Advert}/>
      <Route exact path={PATHS.author.path} component={Author}/>
      <Route exact path={PATHS.advertEdit.path} component={AdvertEdit}/>
      <Route exact path={PATHS.authorEdit.path} component={AuthorEdit}/>
      <Route exact path="/adverts/new" component={AdvertAdd}/>
      <Route exact path="/authors/new" component={AuthorAdd}/>
    </Switch>
  </div>
);

