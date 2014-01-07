JW3D.entities["Entity"] = function(mesh){
    this.mesh = mesh;
    this.name = mesh.name;
    this.x = mesh.position.x;
    this.y = mesh.position.y;
    this.z = mesh.position.z;
    
    this.needUpdate = true;
    this.behaviors = [];
};
JW3D.entities.Entity.prototype = {
    update: function(){
        if(this.needUpdate==false) return;
        for(var i=0,n=this.behaviors.length; i<n; i++){
            this.behaviors[i].update.call(this);
        }
        this.mesh.position = new THREE.Vector3(this.x, this.y, this.z);
    },
    addBehavior: function(behavior){
        this.behaviors.push(new JW3D.behaviors[behavior](this));
    }
};
