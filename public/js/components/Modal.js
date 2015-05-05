var Modal = React.createClass({

	setInitialState: function(){
		return {

		};
	},

	render: function(){
		return (
			<div className="modal fade" id="myModal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title">{this.props.title}</h4>
						</div>
						<div className="modal-body">
							{this.props.body}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							<a href="#download" type="button" className="btn btn-primary">Download</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
});