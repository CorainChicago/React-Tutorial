var data = [
  {id: 1, author: "Charlie F Bear", text: "He likes to watch Alex sleep.Comment 1"},
  {id: 2, author: "Alex F", text: "Alex likes to sleep on a warm, soft blanket. Comment 2"},
  {id: 3, author: "Soft Blanket", text: "I like it when she sleeps on me. Comment 3" }
];


var Comment = React.createClass({
  rawMarkup: function(){
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return {__html: rawMarkup};
  },

  render: function(){
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});



var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key={comment.id}>
        {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
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
  getInitialState: function(){
    return {data: []};
  },
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <h2>Comments</h2>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox url="/api/comments" />,
  document.getElementById('content')
);

