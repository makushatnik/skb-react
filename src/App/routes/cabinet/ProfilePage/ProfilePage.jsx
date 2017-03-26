import React, { Component } from 'react'
import { autobind } from 'core-decorators'
import { inject, observer } from 'mobx-react'
import { Grid, Row, Col } from 'react-bootstrap';
import {
  Card,
  CardBlock,
  CardFooter,
  CardTitle,
  CardText,
} from 'reactstrap';
import ErrorPage from '../../ErrorPage';

import A from 'lsk-general/General/A';

// @importcss(require('./HomePage.css'))
@inject('app')
@inject('user')
@observer
export default class ProfilePage extends Component { //eslint-disable-line

  render() {
    const user = this.props.user;
    const errorCont = (
      <div>
        <span>Вы не авторизованы на сайте.</span><br/>
        <A href='/auth'>Авторизоваться?</A>
      </div>
    );
    if (!user) {
      return (
        <ErrorPage children={errorCont} />
      );
    }

    return (
        <Grid>
          <Row>
            <Col md={4} sm={6} xs={12}>
                {JSON.stringify(user)}
                {JSON.stringify(this.props.app.auth.user)}
            </Col>

          </Row>
        </Grid>
    );
  }
}
