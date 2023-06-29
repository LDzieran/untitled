input.onButtonPressed(Button.A, function () {
    level = input.lightLevel()
    basic.showNumber(level)
})
let level = 0
basic.showIcon(IconNames.Heart)
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip2.showRainbow(1, 360)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    if (input.lightLevel() < 50) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (input.soundLevel() > 124) {
        strip2.show()
        strip2.rotate(1)
    }
})
