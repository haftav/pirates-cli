module.exports = function validateMove(currentAreaY, currentAreaX, index, direction) {
    if (index === 0) {
        if (currentAreaY === 65) {
            if (direction === -1) {
                return false
            }
        } else if (currentAreaY === 67) {
            if (direction === 1) {
                return false
            }
        }
    } else {
        if (currentAreaX === 1) {
            if (direction === -1) {
                return false
            }

        } else if (currentAreaX === 3) {
            if (direction === 1) {
                return false
            }
        }
    }
    return true;
}