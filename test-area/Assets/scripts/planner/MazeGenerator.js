public class MazeGenerator extends MonoBehaviour {

	var DEBUG : boolean = false;
	var mapSize : int;
	var scale : float = 3.0;
	var models : GameObject[];
	var mazeBlocks : Array;
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
		mazeBlocks = Array();
		scale = 3.0;
		MazeBlock.DEBUG = DEBUG; //pass our debug constant to children
	}
	/*
	@use called before first frame update
	@TODO: null
	*/
	function Start () {
		Debug.Log("Generating maze of size " + mapSize);
		if(mapSize%2==0) mapSize+=1; //make sure map size is odd
		//MazeBlock.scale = scale;
		//do {
			GenerateMaze();
			//FixWalls();
		//} while(MergeRooms()==false);
		//DeleteUnmarked();
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
		mazeBlocks = Array();
		var center = Mathf.floor(mapSize/2);

		//how many blocks are in the current edge
		//@TODO: How does that refer to the name 'rotAdd?'
		var rotAdd = 0.5;

		//up, right, down, left
		var dir = 0;

		var edgeCount = 0;

		//Total number of edges
		//@TODO: does this mean the width?
		var edgeTotal = mapSize + (mapSize-1)

		//Current maze block
		var curBlock = center * mapSize + center;
		//Loops through spiral until all blocks have been calculated
		while(edgeCount < edgeTotal){

			//To avoid going off the maze map on the last edge
			if(edgeCount == edgeTotal - 1){
				rotAdd-=1;
			}

			//Counts though number of block needed for current edges
			for(i = 0; i < rotAdd; i++){
				//Switches the current block in the correct direction and gets surrounding blocks
				switch(dir){
					case 0:	//Up
						//Changes Current Block
						curBlock -= mapSize;
						break;

					case 1: //Right
						curBlock++;
						break;

					case 2: //Down
						curBlock += mapSize;
						break;

					case 3: //Left
						curBlock--;
						break;

					default: //How did you get here?
						break;
				}
				//Generate the current block
				if(curBlock <= mazeBlocks.length){

					var piece = gameObject.AddComponent(MazeBlock);
					piece.model = models[0];
					piece.x = x;
					piece.y = y;
					mazeBlocks.Add(piece);

					mazeBlocks[curBlock].createBlock();
				}
			}

			//Adds to the number of edges of the spiral
			edgeCount++;

			//Changes direction clock-wise
			dir = (dir + 1) % 4;

			//Adds the the number of blocks in an edge
			rotAdd += 0.5;
		}

		return true;
	};

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
