var FontList = React.createClass({

	defaultText: "กรุงเทพมหานคร อมรรัตนโกสินทร์ มหินทรายุธยา มหาดิลกภพ",

	getInitialState: function(){
		return {
			showText: this.defaultText,
			fonts: [],
			viewFontModal: {
				name: 'Sample Title',
				id: 10,
				description: 'sample content'
			},
			webFontModal: {
				font: {
					name: 'Sample',
					id: 0
				},
				styles: []
			}
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

	openDescriptionModal: function(id) {
		$.get('api/fonts/id/' + id, function(result) {
			this.setState({ viewFontModal: result });
			$('#description_modal').modal({show: true});
		}.bind(this));
	},

	openWebFontModal: function(id) {
		$.get('api/fonts/styles/id/' + id, function(result) {
			this.setState({ webFontModal: result });
			// console.log(this.state.webFontModal);
			$('#webfont_modal').modal({show: true});
		}.bind(this));
	},

	render: function(){
		var newFont = function(font){
			return <Font text={this.state.showText} fontList={this} name={font.name} id={font.id} />
		}.bind(this);
		return (
			<div>
				<input onChange={this.onChange} className="form-control preview-input" placeholder="ตัวอย่างข้อความ" />
				{this.state.fonts.map(newFont)}
				<DescriptionModal name={this.state.viewFontModal.name} id={this.state.viewFontModal.id} description={this.state.viewFontModal.description} />
				<WebFontModal name={this.state.webFontModal.font.name} id={this.state.webFontModal.font.id} styles={this.state.webFontModal.styles} />
			</div>
		);
	}
});