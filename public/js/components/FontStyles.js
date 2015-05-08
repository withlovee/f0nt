String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var FontStyles = React.createClass({

	getInitialState: function(){
		return {
			selectedStyles: {}
		};
	},

	getUrl: function(str){
		return "http://localhost/f0nt/public/api/fonts/css/" + str.replace(/ /g, '+');
	},

	styleId: function(id){
		return 'style' + id;
	},

	styleName: function(italic, weight){
		var output = '';
		if(weight != 'normal'){
			output = output + weight;
		}
		if(italic != 'normal'){
			output = output + italic;
		}
		if(output == ''){
			output = 'normal';
		}
		return output;
	},

	styleNameDisplay: function(italic, weight){
		var output = '';
		if(weight != 'normal'){
			output = output + weight.capitalize() + ' ';
		}
		if(italic != 'normal'){
			output = output + italic.capitalize() + ' ';
		}
		if(output == ''){
			output = 'Normal';
		}
		return output.trim();
	},

	inlineStyle: function(italic, weight){
		return {
			fontWeight: weight,
			fontStyle: italic
		};
	},

	allStylesCss: function(name, styles){
		styleNames = []
		for(i in styles){
			styleNames.push(this.styleName(styles[i].italic, styles[i].weight));
		}

		return this.getUrl(name) + '/' + styleNames.join();
	},

	onSelectStyle: function(e){
		var selectedStyles = this.state.selectedStyles;
		selectedStyles[e.target.value] = !selectedStyles[e.target.value];
		this.setState(selectedStyles);
	},

	componentWillReceiveProps: function(nextProps) {
		var selectedStyles = {};
		console.log(nextProps.styles);
		for(i in nextProps.styles){
			console.log('style' + i);
			var name = this.styleName(nextProps.styles[i].italic, nextProps.styles[i].weight);
			console.log(name);
			selectedStyles[name] = false;
		}
		selectedStyles['normal'] = true;
		this.setState({selectedStyles: selectedStyles});
	},

	selectedStyleStr:function() {
		var output = [];
		for(i in this.state.selectedStyles){
			if(this.state.selectedStyles[i])
			output.push(i);
		}
		return output.join();
	},

	linkCss: function(name) {
		return '<link href="' + this.getUrl(this.props.name) + '/' + this.selectedStyleStr() + '" rel="stylesheet" type="text/css" />';
	},

	importCss: function(name) {
		return '@import url(' + this.getUrl(this.props.name) + '/' + this.selectedStyleStr() + ');';
	},

	fontName: function(name) {
		return "font-family: '" + name + "', sans-serif;";
	},

	render: function(){
		var fontFamilyStyle = {
			fontFamily: this.props.name,
			fontSize: '2em'
		};

		var newStyle = function(style){

			return (
				<div className="checkbox">
					<label for={this.styleId(style.id)}>
						<input type="checkbox" onChange={this.onSelectStyle} id={this.styleId(style.id)} value={this.styleName(style.italic, style.weight)} checked={this.state.selectedStyles[this.styleName(style.italic, style.weight)]} />
						<strong>{this.styleNameDisplay(style.italic, style.weight)}</strong><br />
						<span style={fontFamilyStyle}>
							<span style={this.inlineStyle(style.italic, style.weight)}>
								กรุงเทพมหานคร อมรรัตนโกสินทร์
							</span>
						</span>
					</label>
				</div>
			);
		}.bind(this);

		return (
			<div>
				<link href={this.allStylesCss(this.props.name, this.props.styles)} rel="stylesheet" />
				<div>
					{this.props.styles.map(newStyle)}
				</div>
				<br />

				<h4>วิธีการติดตั้ง<br /><br /></h4>

				<h5>1. ติดตั้งฟอนต์ลงบนหน้าเว็บ</h5>
				<div role="tabpanel">

					<ul className="nav nav-tabs" role="tablist">
						<li role="presentation" className="active"><a href="#html" aria-controls="html" role="tab" data-toggle="tab">โหลดฟอนต์ใน HTML</a></li>
						<li role="presentation"><a href="#css" aria-controls="css" role="tab" data-toggle="tab">โหลดฟอนต์ใน CSS</a></li>
					</ul>

					<div className="tab-content">
						<div role="tabpanel" className="tab-pane active" id="html">
							<input type="text" className="code" readonly="" value={this.linkCss(this.props.name)} />
						</div>
						<div role="tabpanel" className="tab-pane" id="css">
							<input type="text" className="code" readonly="" value={this.importCss(this.props.name)} />
						</div>
					</div>
				</div>
				<p>&nbsp;</p>
				<h5>2. เรียกใช้งานฟอนต์โดยใส่ใน css style ที่ต้องการ</h5>
				<p>
					<input type="text" className="code" readonly="" value={this.fontName(this.props.name)} />
				</p>
			</div>
		);
	}
});