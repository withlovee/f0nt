var FontList = React.createClass({

	defaultText: "Default Text ตัวหนังสือ",

	getInitialState: function(){
		return {
			showText: this.defaultText,
			fonts: []
		};
	},

	onChange: function(e) {
		if(e.target.value == ""){
			this.setState({ showText: this.defaultText });
		}
		else{
			this.setState({ showText: e.target.value });
		}
	},

	componentDidMount: function() {
		$.get(this.props.source, function(result) {
			this.setState({
				fonts: result
			});
		}.bind(this));
	},


	render: function(){
		var newFont = function(font){
			return <Font text={this.state.showText} name={font.name} id={font.id} />
		}.bind(this);
		return (
			<div>
				<input onChange={this.onChange} className="form-control preview-input" placeholder="ตัวอย่างข้อความ" />
				{ this.state.fonts.map(newFont) }
				<Modal title="" />
			</div>
		);
	}
});