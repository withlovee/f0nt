var WebFontModal = React.createClass({

	setInitialState: function(){
		return {
		};
	},

	reload: function(){
		alert('reload');
	},

	render: function(){
		return (
			<div className="modal fade" id="webfont_modal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title">{this.props.name}</h4>
						</div>
						<div className="modal-body">
							<FontStyles name={this.props.name} id={this.props.id} styles={this.props.styles} />
						</div>
					</div>
				</div>
			</div>
		);
	}
});