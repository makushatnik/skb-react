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
} from 'react-bootstrap';

import Component from 'lsk-general/General/Component';
import Slide from 'lsk-general/General/Slide';
import A from 'lsk-general/General/A';

@importcss(require('./HomePage.css'))
export default class HomePage extends Component {
  render() {
    return (
      <Slide
        full
        video="http://skill-branch.ru/video-background.webm"
        overlay
      >
        <Grid>
          <Row>
            <Col md={4} mdOffset={4}>
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
            </Col>
          </Row>
        </Grid>
      </Slide>
    );
  }
}
