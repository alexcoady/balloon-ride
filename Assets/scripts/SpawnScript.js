#pragma strict

var spawnObjects:GameObject[];
var spawnTimeMin:float 			= 1f;
var spawnTimeMax:float 			= 2f;

function Start () {

	Invoke( "DoSpawn", Random.Range( spawnTimeMin, spawnTimeMax ) );
}

function DoSpawn () {

	// Create a game object (randomly from those supplied) 
	// and add it to the scene at the location of this spawner
	Instantiate( spawnObjects[ Random.Range(0, spawnObjects.Length) ], transform.position, Quaternion.identity );
	
	// Set this function off again after a given duration
	// to create the next game object
	Invoke( "DoSpawn", Random.Range( spawnTimeMin, spawnTimeMax ) );
}