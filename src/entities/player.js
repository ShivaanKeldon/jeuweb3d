JW3D.entities["Player"] = function(mesh){
    JW3D.entities.Entity.call(this,mesh);
};
objectExtend(JW3D.entities.Player.prototype, JW3D.entities.Entity.prototype);

