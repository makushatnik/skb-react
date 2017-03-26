import { Component } from 'react'
import {
  Card,
  CardBlock,
  CardFooter,
  CardTitle,
  CardText,
} from 'reactstrap';
import A from 'lsk-general/General/A';

import Post from '../Post';

export default class PostList extends Component {
  getPosts() {

    return [
      {
        id: 12000343,
        title: 'This is my First Post'
      },
      {
        id: 32121334,
        title: 'Awesome Post'
      },
      {
        id: 5634232,
        title: 'Just Another Post Yet'
      }
    ];
  }
  render() {
    var posts = this.getPosts().map(x => {
      return (
        <Post item={x} />
      );
    });
    if (!posts.length) {
      posts = <b>Записи не найдены!</b>;
    }
    return (
      <Card wrap className="posts">
        <div className='text-center'>
          Вы еше не зарегистрированы?
          &nbsp;
          <A href='/auth/signup'>
             Создайте аккаунт
          </A>
        </div>
        <h2>List of recent Posts</h2>
        <div className="post-list">
          {posts}
        </div>
      </Card>
    );
  }
}
