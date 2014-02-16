#pragma strict

function OnTriggerEnter2D (hit: Collider2D) {

	if ( hit.tag == "Boundry" ) {
		return;
	}
	
	// If this object has a parent (The wrapping Prefab) - Wipe it!
	if ( hit.gameObject.transform.parent ) {
	
		Destroy( hit.gameObject.transform.parent.gameObject );
	}

	Destroy (hit.gameObject);
}