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
};

/**
 *  three.js init 
 */
JW3D["init"] = function(){
    this["ASPECT"] = this.WIDTH / this.HEIGHT;

    this.container = document.getElementById("container");
    this.renderer = new THREE.WebGLRenderer();

    this.renderer.setSize(this.WIDTH-5, this.HEIGHT-5);
    this.container.appendChild(this.renderer.domElement);
};

/**
 *  scene init 
 */
JW3D["load"] = function(){
    var loader, cube
        that = this
    ;
    
    loader = new THREE.SceneLoader();
    loader.load("src/levels/level_test.js",function(result){
        console.log(result);
        that.scene = result.scene;
        that.camera = result.cameras.Camera;
        that.camera.lookAt(new THREE.Vector3(0,10,1.99));
        that.camera.aspect = that.ASPECT;
        that.camera.updateProjectionMatrix();
        
        cube = new THREE.Mesh(new THREE.CubeGeometry(1,1,1.5),  new THREE.MeshBasicMaterial({color:0x66aa66}));
        that.scene.add(cube);
        cube.position = new THREE.Vector3(0,3,0.75);

        that.renderer.render(that.scene, that.camera);
    });
    
};














