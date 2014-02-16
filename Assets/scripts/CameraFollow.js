#pragma strict

var player: Transform;

function Update () {
	
	transform.position = new Vector3( player.position.x, player.position.y + 3, -10 );
}