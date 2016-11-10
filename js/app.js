var News = React.createClass({
	render: function() {
		return (
			<div className="news">
				Нажаль, новин немає.
			</div>
		);
	}
});

var Comments = React.createClass({
	render: function() {
		return (
			<div className="comments">
				Немає новин - коментувати немає що.
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
			 Component App with News
			  <News />
			  <Comments />
			</div> 
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);