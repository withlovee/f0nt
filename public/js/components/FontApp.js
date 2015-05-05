var FontApp = React.createClass({

	getInitialState: function(){
		return {
			title: 'ฟอนต์ทั้งหมด'
		};
	},


	render: function(){


		return (
			<div className="row">
				<div className="col-md-3">
					<h1>&nbsp;</h1>
					<FontCategory />
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">ดูฟอนต์ตามผู้จัดทำ</h3>
						</div>
						<div className="panel-body">
							<select class="form-control">
								<option>iannnnn</option>
								<option>SIPA</option>
								<option>AtNoon</option>
								<option>Layiji</option>
								<option>Zafire06</option>
							</select>
						</div>
					</div>
				</div>
				<div className="col-md-9">
					<h1>{this.state.title}</h1>
					<FontList source="api/fonts" />
					<nav>
						<ul className="pager">
							<li className="previous disabled"><a href="#"><span aria-hidden="true">&larr;</span> ก่อนหน้า</a></li>
							<li className="next"><a href="#">ถัดไป <span aria-hidden="true">&rarr;</span></a></li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
});

React.render(<FontApp />, document.querySelector('#app'));