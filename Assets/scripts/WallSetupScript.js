#pragma strict

// Camera
var cam:Camera;

// Wall objects
var leftWall: BoxCollider2D;
var rightWall: BoxCollider2D;

function Start () {

	leftWall.size = new Vector2( 1f, cam.ScreenToWorldPoint( new Vector3( 0f, Screen.height * 2, 0f ) ).y );
	leftWall.center = new Vector2( cam.ScreenToWorldPoint( new Vector3( 0f, 0f, 0f ) ).x, 0f );
	
	rightWall.size = new Vector2( 1f, cam.ScreenToWorldPoint( new Vector3( 0f, Screen.height * 2, 0f ) ).y );
	rightWall.center = new Vector2( cam.ScreenToWorldPoint( new Vector3( Screen.width, 0f, 0f ) ).x, 0f );
}