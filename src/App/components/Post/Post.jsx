import { Component } from 'react'

import A from 'lsk-general/General/A';

class PostTitle extends Component {
  render() {
    return (
      <h3 className="post-title">{this.props.title}</h3>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.item}
      </div>
    );
  }
}

class PostComments extends Component {
  getComments(id) {

    return [];
  }
  render() {
    var comments = this.getComments(this.props.id).map(x => {
      return (
        <Comment item={x} />
      );
    });
    if (!comments.length) {
      return <span>Комментариев нет.</span>;
    }
    return (
      <div className="post-comments">
        {comments}
      </div>
    );
  }
}

export default class Post extends Component {
  render() {
    var post = this.props.item;
    return (
      <div className="post">
        <PostTitle title={post.title || 'unknown'} />
        <span className="pull-right"><A href="/post/{post.id || -1}">Подробнее...</A></span>
        <PostComments id={post.id || -1} />
      </div>
    );
  }
}
