public class MazeGenerator extends MonoBehaviour {

	var DEBUG : boolean = false;
	var mapSize : int;
	var scale : float = 3.0;
	var models : GameObject[];
	var pieces : Array;
	/*
	@inputs
	@outputs
	@use http://docs.unity3d.com/Manual/ExecutionOrder.html
	*/
	public function MazeGenerator() {
	}

	/*
	@use
		- called when initializing properties, and on forced resets.
	@TODO: null
	*/
	function Reset () {
		pieces = Array();
		scale = 3.0;
		MazeBlock.DEBUG = DEBUG;
	}
	/*
	@use called before first frame update
	@TODO: null
	*/
	function Start () {
		MazeBlock.scale = scale;
		GenerateMaze();
	}
	function Update() {
		if(DEBUG)
			MazeBlock.scale = scale;
	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function GenerateMaze() {
		pieces = Array();
		Debug.Log("Generating maze of size " + mapSize);
		for(var x=-mapSize; x< mapSize; x++) {
			for(var y=-mapSize; y<mapSize; y++) {
				Debug.Log(x+","+y);
				var piece = gameObject.AddComponent(MazeBlock);
				piece.model = models[0];
				piece.x = x;
				piece.y = y;
				pieces.Add(piece);
			}
		}
	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function MergeRooms() {

	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function RemoveUnmarked() {

	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function GetSurroundingBlocks() {

	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function GetImage() {

	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function GetHumanImage() {

	}

}
