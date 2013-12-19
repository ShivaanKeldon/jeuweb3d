JW3D.entities["Wall"] = function(mesh){
    JW3D.entities.Entity.call(this,mesh);
    this.needUpdate = false;
};
objectExtend(JW3D.entities.Wall.prototype, JW3D.entities.Entity.prototype);
