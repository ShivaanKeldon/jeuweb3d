JW3D.entities["Player"] = function(mesh){
    JW3D.entities.Entity.call(this,mesh);
    
    this.mesh.geometry.computeBoundingBox();
    
    this.addBehavior("Moveable");
    this.addBehavior("Gravity");
    this.addBehavior("Collision");
    
    console.log(mesh.geometry);
};
objectExtend(JW3D.entities.Player.prototype, JW3D.entities.Entity.prototype);

