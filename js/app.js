var News = React.createClass({
	render: function() {
		return (
			<div className="news">
				Нажаль, новин немає.
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
			</div> 
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);