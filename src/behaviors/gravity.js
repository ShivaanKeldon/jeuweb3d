(function(JW3D){
    function Gravity(entity){
        entity.gravity = 0.005;
        if(entity.velocity==undefined){
            return console.error("Entity "+entity.name+ " need Behavior.Moveable to use Behavior.Gravity");
        }
    }
    Gravity.prototype = {
        update: function(){
            if(this.velocity==undefined) return;
            this.velocity.z = -this.gravity;
        },
    };
    
    JW3D.behaviors["Gravity"] = Gravity;
})(JW3D);
