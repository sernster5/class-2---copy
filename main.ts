input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.showIcon(IconNames.Confused)
        basic.pause(500)
        basic.showIcon(IconNames.Surprised)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    5000,
    1,
    216,
    0,
    6693,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Surprised)
    basic.pause(500)
    basic.clearScreen()
})
