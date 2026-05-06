// type aliase
type Coord = {
    x: number,
    y: number
}

function display(coord: Coord) {
    console.log('X coordinate: ', coord.x);
    console.log('Y coordinate ', coord.y);
}

display({ x: 200, y: 300 });
// display({x:30})