let rn = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `,200)
basic.showLeds(`
        . . . # .
        # # . # .
        . . . . .
        # . . . #
        . # # # .
        `,200)
basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `,200)
basic.showLeds(`
        . # . . .
        . # . # #
        . . . . .
        # . . . #
        . # # # .
        `,200)
basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `,200)
basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `,200)
basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `,200)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `,500)
basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `,150)
basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `,150)
basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `,150)
basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `,150)
basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #   
        `,150)
basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `, 150)
basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #   
        `, 150)
basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `,500)
basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("A",5)
basic.showString("B",5)
basic.showString("C",5)
basic.showString("D",5)
    }
    rn += randint(1, 8)
    if (rn == 1) {
        basic.showString("A")
    } else if (rn == 2) {
        basic.showString("B")
    } else if (rn == 3) {
        basic.showString("C")
    } else if (rn == 4) {
        basic.showString("D")
    } else if (rn == 5) {
        basic.showString("A")
    } else if (rn == 6) {
        basic.showString("B")
    } else if (rn == 7) {
        basic.showString("C")
    } else {
        basic.showString("D")
    }
})
basic.forever(function () {
    while (input.logoIsPressed()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.clearScreen()
})
