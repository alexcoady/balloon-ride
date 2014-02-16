#pragma strict

var speed:float = 0;

function Update () {

	renderer.material.mainTextureOffset = new Vector2( 0f, Time.time * speed %1 );
}