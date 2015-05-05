var FontCategory = React.createClass({
	
	getInitialState: function(){
		return {
			categories: [
				{id: 'handwriting', displayText: 'ลายมือ', checked: true},
				{id: 'sansserif', displayText: 'ทางการ', checked: true}
			],
		};
	},

	onCategoryClick: function(e) {
		console.log(e.target.value);
		var categories = this.state.categories;
		for(i in categories){
			if(categories[i].id == e.target.value){
				categories[i].checked = !categories[i].checked;
			}
		}
		this.setState(categories);
	},
	
	render: function(){

		var newCategory = function(category){
			return (
				<div className="checkbox">
					<label><input type="checkbox" onClick={this.onCategoryClick} value={category.id} checked={category.checked} /> {category.displayText}</label>
				</div>
			);
		}.bind(this);

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">รูปแบบ</h3>
				</div>
				<div className="panel-body">
					{ this.state.categories.map(newCategory) }
				</div>
			</div>
		);

	}
});