$(function () {
    var LEFT_KEY = 37,
        UP_KEY = 38,
        RIGHT_KEY = 39,
        DOWN_KEY = 40,
        LEFT = "left",
        UP = "up",
        RIGHT = "right",
        DOWN = "down",
        currentCombination = '',
        timeBeforeReset = 2000;

    $(document).keydown(function (event) {

        switch (event.which) {
            case LEFT_KEY:
                currentCombination += LEFT;
                break;

            case UP_KEY:
                currentCombination += UP;
                break;

            case RIGHT_KEY:
                currentCombination += RIGHT;
                break;

            case DOWN_KEY:
                currentCombination += DOWN;
                break;

            default:
                return;
        }

        checkCheatCode();
        event.preventDefault();

        setTimeout(function () {
            resetCombination();
        }, timeBeforeReset);

    });

    function checkCheatCode() {
        var CHEAT_CODE_COMBINATION = LEFT + RIGHT + UP + DOWN;

        if (currentCombination.length > CHEAT_CODE_COMBINATION.length) {
            resetCombination();
        } else {
            if (currentCombination === CHEAT_CODE_COMBINATION) {
                cheatCodeEnteredCorrectly();
            }
        }
    }

    function cheatCodeEnteredCorrectly () {
        alert("Cheat Code Activated");
    }

    function resetCombination() {
        currentCombination = "";
    }

});