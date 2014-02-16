#pragma strict

var maxSpeed:float = 10;

function Start () {

}

function FixedUpdate () {

	// Motion
	var move:float = Input.GetAxis("Horizontal");	
	rigidbody2D.velocity = new Vector2( move * maxSpeed, rigidbody2D.velocity.y );
}