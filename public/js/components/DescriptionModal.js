var DescriptionModal = React.createClass({

	render: function(){
		return (
			<div className="modal fade" id="description_modal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title">{this.props.name}</h4>
						</div>
						<div className="modal-body" dangerouslySetInnerHTML={{__html: this.props.description}}>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">ปิดหน้าต่างนี้</button>
							<a href="#download" type="button" className="btn btn-primary">ดาวน์โหลดฟอนต์</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
});