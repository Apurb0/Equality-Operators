const numNeighbours = prompt('How many neighbour countries does your country have?');

if (1 === Number(numNeighbours)) {
    console.log("only 1 border!");
} else if (Number(numNeighbours) > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

