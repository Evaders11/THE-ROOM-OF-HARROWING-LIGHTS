const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Behaviors.jumpthru,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Acts.FallThrough,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{BackgroundTile: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{Player: 0},
	{Solid: 0},
	{SolidTile: 0},
	{Sine: 0},
	{MovingSolidTile: 0},
	{Jumpthru: 0},
	{JumpThruTile: 0},
	{Keyboard: 0},
	{Text: 0},
	{Sprite: 0},
	{Sprite2: 0}
];

self.InstanceType = {
	BackgroundTile: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	SolidTile: class extends self.ITiledBackgroundInstance {},
	MovingSolidTile: class extends self.ITiledBackgroundInstance {},
	JumpThruTile: class extends self.ITiledBackgroundInstance {},
	Keyboard: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {}
}