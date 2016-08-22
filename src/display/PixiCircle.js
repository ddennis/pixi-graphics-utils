
var PIXI = require ("pixi.js");

function PixiCircle(radius,_color, _fillAlpha , _outlineColor){


	PIXI.Graphics.call (this );
	this.radius = radius	|| 50;
    this.fillAlpha = _fillAlpha || 1;
    this.outlineColor = _outlineColor

    // set color
    this.color = _color;
    if(_color == undefined ){
        this.color  = 0xFF0000
    }

	this.beginFill(this.color, 1);
	//this.drawCircle(0,0, this.radius)
	this.redraw(this.radius, this.color)

}

//Copy over prototype --------------------------------------------------------------------------------------
PixiCircle.prototype = Object.create( PIXI.Graphics.prototype );
PixiCircle.prototype.constructor = PixiCircle;

//---------------------------------------------------------------------------------------

PixiCircle.prototype.redraw = function (radius, color) {
	this.clear ();
	this.beginFill(this.color, this.fillAlpha);
    if(this.outlineColor  ){
        this.lineStyle(2, this.outlineColor , 1)
    }

	this.drawCircle(0,0, this.radius)
    this.endFill();
};

module.exports = PixiCircle;
