import React from 'react';
import importcss from 'importcss';
import {
  Card,
  CardBlock,
  CardFooter,
  CardTitle,
  CardText,
} from 'reactstrap';
import {
  Grid,
  Row,
  Col,
  Button,
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';

import Component from 'lsk-general/General/Component';
import Slide from 'lsk-general/General/Slide';
import A from 'lsk-general/General/A';

import PostList from '../../components/PostList';
//import StatusButton from '../../components/StatusButton';
import Avatar from '../../components/Avatar';

@importcss(require('./HomePage.css'))
export default class HomePage extends Component {
  render() {
    return (
      <Grid>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Cool Blog</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <img src='../../../../img/favicon.ico' width="32" height="32" alt="logo" />
            <Nav>
              <NavItem eventKey={1} href="/posts">Posts</NavItem>
              <NavItem eventKey={2} href="/users">Users</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/auth">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col md={4}>
            <Card>
              <CardBlock>
                <CardTitle>
                  Hello, XXI Century World!
                </CardTitle>
                Это пример, как можно использовать lego-starter-kit
              </CardBlock>
              <CardFooter className="text-xs-center">
                <A href="https://github.com/makushatnik/skb-react">
                  Страница разработчика
                </A>
              </CardFooter>
            </Card>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quo obcaecati, eveniet natus nam molestiae amet laboriosam, doloremque mollitia minus quidem consectetur, aliquid porro quam! Culpa numquam nesciunt dolorem vel.
            </p>
          </Col>
          <Col md={8}>
            <PostList pageSize="20" pageNum="1" />
          </Col>
        </Row>
        <Avatar src='https://imageshack.com/i/pmpZ0Mxdp'
          border='1'
          borderColor='red'
          borderWidth='thick'
          borderRadius='30px'
          shadow='1'
          badge='circleBadge' />
      </Grid>
    );
  }
}
