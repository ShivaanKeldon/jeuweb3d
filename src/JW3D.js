var JW3D = {
    WIDTH: window.innerWidth,
    HEIGHT: window.innerHeight,
    VIEW_ANGLE: 45,
    NEAR: 0.1,
    FAR: 10000,
    container: null,
    renderer: null,
    camera: null,
    scene: null,
    
    entities:{
        list:{},
    },
};

/**
 *  three.js init 
 */
JW3D["init"] = function(){
    this["ASPECT"] = this.WIDTH / this.HEIGHT;

    this.container = document.getElementById("container");
    this.renderer = new THREE.WebGLRenderer({antialias:true});
    
    this.renderer.setSize(this.WIDTH-5, this.HEIGHT-5);
    this.container.appendChild(this.renderer.domElement);
};

/**
 *  scene init 
 */
JW3D["load"] = function(){
    var loader, cube, mesh, group, entity,
        that = this
    ;
    
    loader = new THREE.SceneLoader();
    loader.load("src/levels/level_test2.js",function(result){
        that.scene = result.scene;
        that.camera = result.cameras.Camera;
        that.camera.lookAt(new THREE.Vector3(0,10,1.99));
        that.camera.aspect = that.ASPECT;
        that.camera.updateProjectionMatrix();
        
        cube = new THREE.Mesh(new THREE.CubeGeometry(1,1,1.5),  new THREE.MeshLambertMaterial({color:0x66aa66, ambient:0x66aa66}));
        cube.position = new THREE.Vector3(0,5,1.5);
        cube.name = "player";
        that.scene.add(cube);
        entity = new JW3D.entities.Player(cube);
        JW3D.entities.list[cube.name] = entity;
        
        that._generateLights.call(that);
        
        console.log(result);
        
        for(mesh in result.objects){
            for(group in result.groups){
                if(inArray(mesh, result.groups[group])){
                    entity = new JW3D.entities[group](result.objects[mesh]);
                    JW3D.entities.list[mesh] = entity;
                }
            }
        }
        
        console.log(JW3D.entities.list);
        
        // test
        setInterval(function(){
            JW3D.entities.list.player.x += 0.001;
        },10);
        
        that.update();
    });
    
};

/**
 *  loop for game 
 */
JW3D["update"] = function(){
    requestAnimationFrame(JW3D.update);
    
    for(var o in JW3D.entities.list){
        JW3D.entities.list[o].update();
    }
    
    JW3D.renderer.render(JW3D.scene, JW3D.camera);
};

/**
 *  add lights to the scene (three.js bug) 
 */
JW3D["_generateLights"] = function(){
    light = new THREE.PointLight(0xffffff,0.25,8);
    light.position = new THREE.Vector3(-4,12.1,5.5);
    this.scene.add(light);
    
    light = new THREE.PointLight(0xffffff,0.25,8);
    light.position = new THREE.Vector3(-2,12.1,5.5);
    this.scene.add(light);
    
    light = new THREE.PointLight(0xffffff,0.25,8);
    light.position = new THREE.Vector3(0,12.1,5.5);
    this.scene.add(light);
    
    light = new THREE.PointLight(0xffffff,0.25,8);
    light.position = new THREE.Vector3(2,12.1,5.5);
    this.scene.add(light);
    
    light = new THREE.PointLight(0xffffff,0.25,8);
    light.position = new THREE.Vector3(4,12.1,5.5);
    this.scene.add(light);
    
    light = new THREE.PointLight(0xffffff,0.2,200);
    light.position = new THREE.Vector3(0,5,3);
    this.scene.add(light);
    
    light = new THREE.HemisphereLight(0xffffff, 0xeeeeee, 0.6);
    this.scene.add(light);
}














