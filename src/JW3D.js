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
    this.camera = new THREE.PerspectiveCamera(this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR);
    this.scene = new THREE.Scene();
    
    this.scene.add(this.camera);
    this.renderer.setSize(this.WIDTH-5, this.HEIGHT-5);
    this.container.appendChild(this.renderer.domElement);
};

/**
 *  scene init 
 */
JW3D["load"] = function(){
    var pointLight, sol, cube, plafond, murFond, murGauche, murDroite
    ;
    
    this.camera.position = new THREE.Vector3(0, -300, 51);

    pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position = new THREE.Vector3(10,50,130);
    this.scene.add(pointLight);
    
    sol = new THREE.Mesh(new THREE.PlaneGeometry(600,600), new THREE.MeshBasicMaterial({color:0x6666aa}));
    this.scene.add(sol);

    cube = new THREE.Mesh(new THREE.CubeGeometry(50,50,50),  new THREE.MeshBasicMaterial({color:0x66aa66}));
    this.scene.add(cube);
    cube.position.z = 50;

    this.camera.lookAt(cube.position);
    
    plafond = new THREE.Mesh(new THREE.PlaneGeometry(600,600), new THREE.MeshBasicMaterial({color:0x6666aa}));
    this.scene.add(plafond);
    plafond.rotation.x = deg2rad(180);
    plafond.position.z = 150;
    
    murFond = new THREE.Mesh(new THREE.PlaneGeometry(600,150), new THREE.MeshBasicMaterial({color:0xdddddd}));
    this.scene.add(murFond);
    murFond.rotation.x = deg2rad(90);
    murFond.position = new THREE.Vector3(0, 300, 75);

    murGauche = new THREE.Mesh(new THREE.PlaneGeometry(150,600), new THREE.MeshBasicMaterial({color:0xaa6666}));
    this.scene.add(murGauche);
    murGauche.rotation.y = deg2rad(90);
    murGauche.position = new THREE.Vector3(-300, 0, 75);

    murDroite = new THREE.Mesh(new THREE.PlaneGeometry(150,600), new THREE.MeshBasicMaterial({color:0xaa6666}));
    this.scene.add(murDroite);
    murDroite.rotation.y = deg2rad(-90);
    murDroite.position = new THREE.Vector3(300, 0, 75);

    
    this.renderer.render(this.scene, this.camera);
};
