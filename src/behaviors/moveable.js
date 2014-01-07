(function(JW3D){
    function Moveable(entity){
        entity.velocity = {
            x:0,
            y:0,
            z:0,
        }
    }
    Moveable.prototype = {
        update: function(){
            this.x = this.x + this.velocity.x;
            this.y = this.y + this.velocity.y;
            this.z = this.z + this.velocity.z;
        },
    };
    
    JW3D.behaviors["Moveable"] = Moveable;
})(JW3D);
