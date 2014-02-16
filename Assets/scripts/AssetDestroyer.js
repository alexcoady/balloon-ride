#pragma strict

function OnTriggerEnter2D (hit: Collider2D) {

	Debug.Log("Destroying object: " + hit.tag);

	Destroy (hit.gameObject);
}