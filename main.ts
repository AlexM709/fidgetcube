let pmsg = 0
input.onButtonPressed(Button.A, function () {
    pmsg = randint(1, 3)
    if (pmsg == 1) {
        music.playMelody("G F G F G A B C5 ", 140)
        basic.showString("You got this!")
    } else if (pmsg == 2) {
        music.playMelody("E G - F A - E B ", 140)
        basic.showString("You can do it!")
    } else if (pmsg == 3) {
        music.playMelody("C D A F C5 G C5 A ", 140)
        basic.showString("You are awesome!")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        # # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        . # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
