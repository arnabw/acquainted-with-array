function getSeason(month) {
    let season;

    switch (month) {
        case 3: case 4: case 5:
            season = "Spring";
            break;
        case 6: case 7: case 8:
            season = "Summer";
            break;
        case 9: case 10: case 11:
            season = "Autumn";
            break;
        case 12: case 1: case 2:
            season = "Winter";
            break;
        default:
            return "Invalid";
    }

    return `The Season is ${season}.`
}

const theSeason = getSeason(12);
console.log(theSeason);