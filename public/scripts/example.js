var Comment = React.createClass({
  render: function(){
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});



var CommentList = React.createClass({
  render: function() {
    return(
      <div className="commentList">
        <Comment author="Charlie Bear"> This is one comment from Charlie</Comment>
        <Comment author="Alex Fedesna"> This is a comment from Alex. She is great</Comment>
      </div>
      );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return (
      <div className="commentForm">
      Hello Cats!  I am a CommentForm.
      </div>
      )
  }
})

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <h2>Comments</h2>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

