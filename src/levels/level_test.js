{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "level_test.blend",
	"generatedBy"   : "Blender 2.65 Exporter",
	"objects"       : 7,
	"geometries"    : 5,
	"materials"     : 3,
	"textures"      : 0
},

"urlBaseType" : "relativeToScene",


"objects" :
{
	"murDroite" : {
		"geometry"  : "geo_murDroite",
		"groups"    : [  ],
		"material"  : "rouge",
		"position"  : [ 5, 5, 3 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"murGauche" : {
		"geometry"  : "geo_murGauche",
		"groups"    : [  ],
		"material"  : "rouge",
		"position"  : [ -5, 5, 3 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"murFond" : {
		"geometry"  : "geo_MurFond",
		"groups"    : [  ],
		"material"  : "blanc",
		"position"  : [ 0, 10, 3 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"plafond" : {
		"geometry"  : "geo_plafond",
		"groups"    : [  ],
		"material"  : "bleu",
		"position"  : [ 0, 5, 6 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"sol" : {
		"geometry"  : "geo_sol",
		"groups"    : [  ],
		"material"  : "bleu",
		"position"  : [ 0, 5, 0 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"Lamp" : {
		"type"       : "PointLight",
		"position"   : [ 0, 5, 5.9 ],
		"rotation"   : [ 0.650328, 0.0552171, 1.86639 ],
		"color"      : 16777215,
		"distance"   : 30.000,
		"intensity"  : 2.000
	},

	"Camera" : {
		"type"  : "PerspectiveCamera",
		"fov"   : 77.539341,
		"aspect": 1.333000,
		"near"  : 0.100000,
		"far"   : 100.000000,
		"position": [ 0, -0, 2 ],
		"target"  : [ 0, 0, 0 ]
	}
},


"geometries" :
{
	"geo_murDroite" : {
		"type" : "embedded",
		"id"  : "emb_murDroite"
	},

	"geo_murGauche" : {
		"type" : "embedded",
		"id"  : "emb_murGauche"
	},

	"geo_MurFond" : {
		"type" : "embedded",
		"id"  : "emb_MurFond"
	},

	"geo_plafond" : {
		"type" : "embedded",
		"id"  : "emb_plafond"
	},

	"geo_sol" : {
		"type" : "embedded",
		"id"  : "emb_sol"
	}
},


"materials" :
{
	"blanc" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 9671571, "ambient": 9671571, "opacity": 1, "blending": "NormalBlending" }
	},

	"bleu" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 1776466, "ambient": 1776466, "opacity": 1, "blending": "NormalBlending" }
	},

	"rouge" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 5380891, "ambient": 5380891, "opacity": 1, "blending": "NormalBlending" }
	}
},


"embeds" :
{
"emb_plafond": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "bleu",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.10629468122563779, 0.10629468122563779, 0.32158227446052834],
		"colorDiffuse" : [0.10629468122563779, 0.10629468122563779, 0.32158227446052834],
		"colorSpecular" : [0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		"depthTest" : true,
		"depthWrite" : true,
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [-5,-5,6.39758e-06,5,-5,-6.39758e-06,-5,5,6.39758e-06,5,5,-6.39758e-06],

	"morphTargets" : [],

	"normals" : [0,0,-1],

	"colors" : [],

	"uvs" : [],

	"faces" : [35,1,0,2,3,0,0,0,0,0],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animations" : []
},

"emb_sol": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "bleu",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.10629468122563779, 0.10629468122563779, 0.32158227446052834],
		"colorDiffuse" : [0.10629468122563779, 0.10629468122563779, 0.32158227446052834],
		"colorSpecular" : [0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		"depthTest" : true,
		"depthWrite" : true,
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [5,-5,0,-5,-5,0,5,5,0,-5,5,0],

	"morphTargets" : [],

	"normals" : [0,0,1],

	"colors" : [],

	"uvs" : [],

	"faces" : [35,1,0,2,3,0,0,0,0,0],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animations" : []
},

"emb_murDroite": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "rouge",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.32158227446052834, 0.10629468122563779, 0.10629468122563779],
		"colorDiffuse" : [0.32158227446052834, 0.10629468122563779, 0.10629468122563779],
		"colorSpecular" : [0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		"depthTest" : true,
		"depthWrite" : true,
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [5.75782e-06,-5,3,-5.75782e-06,-5,-3,5.75782e-06,5,3,-5.75782e-06,5,-3],

	"morphTargets" : [],

	"normals" : [-1,0,0],

	"colors" : [],

	"uvs" : [],

	"faces" : [35,1,0,2,3,0,0,0,0,0],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animations" : []
},

"emb_murGauche": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "rouge",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.32158227446052834, 0.10629468122563779, 0.10629468122563779],
		"colorDiffuse" : [0.32158227446052834, 0.10629468122563779, 0.10629468122563779],
		"colorSpecular" : [0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		"depthTest" : true,
		"depthWrite" : true,
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [-1.91927e-06,-5,-3,1.91927e-06,-5,3,-1.91927e-06,5,-3,1.91927e-06,5,3],

	"morphTargets" : [],

	"normals" : [1,0,0],

	"colors" : [],

	"uvs" : [],

	"faces" : [35,1,0,2,3,0,0,0,0,0],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animations" : []
},

"emb_MurFond": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "blanc",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.5784442510969079, 0.5784442510969079, 0.5784442510969079],
		"colorDiffuse" : [0.5784442510969079, 0.5784442510969079, 0.5784442510969079],
		"colorSpecular" : [0.10000000149011612, 0.10000000149011612, 0.10000000149011612],
		"depthTest" : true,
		"depthWrite" : true,
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [5,-2.26494e-07,-3,-5,-2.26494e-07,-3,5,2.26494e-07,3,-5,2.26494e-07,3],

	"morphTargets" : [],

	"normals" : [0,-1,0],

	"colors" : [],

	"uvs" : [],

	"faces" : [35,1,0,2,3,0,0,0,0,0],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animations" : []
}
},


"transform" :
{
	"position"  : [ 0, 0, 0 ],
	"rotation"  : [ 0, 0, 0 ],
	"scale"     : [ 1, 1, 1 ]
},

"defaults" :
{
	"bgcolor" : [ 0, 0, 0 ],
	"bgalpha" : 1.000000,
	"camera"  : "default_camera"
}

}
