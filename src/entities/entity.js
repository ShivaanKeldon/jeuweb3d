JW3D.entities["Entity"] = function(mesh){
    this.mesh = mesh;
    this.name = mesh.name;
    this.x = mesh.position.x;
    this.y = mesh.position.y;
    this.z = mesh.position.z;
    
    this.needUpdate = true;
};
JW3D.entities.Entity.prototype = {
    update: function(){
        if(this.needUpdate==false) return;
        this.mesh.position = new THREE.Vector3(this.x, this.y, this.z);
    },
};
