(function(JW3D, THREE){
    var rayCaster = new THREE.Raycaster(
        new THREE.Vector3(0,0,0),
        new THREE.Vector3(0,0,0),
        0.001,
        0.05
    );

    function Collision(entity){
        if(entity.velocity==undefined){
            return console.error("Entity "+entity.name+ " need Behavior.Moveable to use Behavior.Collision");
        }
    }
    Collision.prototype = {
        update: function(){
            if(this.velocity==undefined) return;
            var minZ = this.z - Math.abs(this.mesh.geometry.boundingBox.min.z),
                colls, meshes = [];
            for(var o in JW3D.entities.list){
                if(JW3D.entities.list[o]==this) continue;
                meshes.push(JW3D.entities.list[o].mesh);
            }
            rayCaster.set(
                new THREE.Vector3(this.x, this.y, minZ),
                new THREE.Vector3(0,0,-1)
            );
            colls = rayCaster.intersectObjects(meshes);
            if(colls.length>0){
                this.velocity.z = 0;
            }
        },
    };
    
    
    JW3D.behaviors["Collision"] = Collision;
})(JW3D, THREE);
