#pragma strict

function OnTriggerEnter2D (hit: Collider2D) {

	if (hit.tag == "Player") {
	
		Debug.Log("Destroying game object!");
		Destroy( this.gameObject );
	}
}