var Font = React.createClass({

	showDetail: function(){
		console.log('show');
		$('#myModal').modal({show: true});
	},

	render: function(){
		url = 'api/fonts/css/' + this.props.name;
		divStyle = {
			fontFamily: '"' + this.props.name + '"'
		};
		return (
			<div className="font">
				<link href={url} rel="stylesheet" />
				<div className="heading">
					<h4><a href="#detail{this.props.id}" onClick={this.showDetail}>{this.props.name}</a></h4>
					<h4 className="author">โดย AuthorName</h4>
				</div>
				<div className="body">
					<a href="#detail" onClick={this.showDetail} className="preview" style={divStyle}>{this.props.text}</a>
					<p className="buttons">
						<a href="#webfont" className="button">เว็บฟอนต์</a>
						<a href="#download" className="button">ดาวน์โหลด</a>
					</p>
				</div>
			</div>
		);
	}
});