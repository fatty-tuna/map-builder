public class MazeBlock extends MonoBehaviour {

	public static var DEBUG : boolean = false;
	public var model : GameObject;
	public var instance : GameObject;
	public static var scale : float = 5.0;

	public var sides = {"UP":0,"RIGHT":0,"DOWN":0,"LEFT":0};

	public var x 						: int;
	public var y 						: int;
	public var marked 			: boolean;
	public var full 				: boolean;
	public var endPoint 		: boolean;
	public var intersection : boolean;

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function MazeBlock() {
	}
	/*
	@use
		- called when initializing properties, and on forced resets.
	@TODO: null
	*/
	function Reset () {
		x = 0;
		y = 0;
		marked = false;
		full = false;
		endPoint = false;
		intersection = false;
	}
	/*
	@use called before first frame update
	@TODO: null
	*/
	function Start () {
		Debug.Log("Creating maze block");
		instance = Instantiate(model, Vector3(x*scale,0,y*scale), Quaternion.identity);
	}
	/*
	@inputs
	@outputs
	@use called before first frame update
	@TODO: null
	*/
	function Update() {
		if(DEBUG)
			instance.transform.position = Vector3(x*scale,0,y*scale);
	}
	function OnDestroy() {
		Debug.Log("Destroying");
	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function CreateBlock() {

	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function FixWalls(sur) {

	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function FillBlock(sur) {

	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function SetSides(up,right,down,left) {

	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function GetValue() {

	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function GetColour() {

	}

	/*
	@inputs
	@outputs
	@use
	@TODO: null
	*/
	public function GetImage() {

	}

}
