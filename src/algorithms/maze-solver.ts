export type Point = {
  x: number;
  y: number;
};

const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function walk(
  maze: string[],
  point: Point,
  wall: string,
  end: Point,
  path: Point[],
  visited: boolean[][]
) {
  // base case

  // 1. wall
  if (maze[point.y][point.x] === wall) {
    return false;
  }
  // 2. off the map
  if (
    point.x < 0 ||
    point.x >= maze[0].length ||
    point.y < 0 ||
    point.y >= maze.length
  ) {
    return false;
  }
  // 3. visited
  if (visited[point.y][point.x]) {
    return false;
  }
  // 4. end
  if (point.x === end.x && point.y === end.y) {
    path.push(point);
    return true;
  }

  // pre
  path.push(point);
  visited[point.y][point.x] = true;

  //   recurse
  for (let i = 0; i < directions.length; i++) {
    const [x, y] = directions[i];
    if (
      walk(
        maze,
        {
          x: point.x + x,
          y: point.y + y,
        },
        wall,
        end,
        path,
        visited
      )
    ) {
      return true;
    }
  }

  //   post
  path.pop();

  return false;
}

export function mazeSolver(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const path: Point[] = [];
  const visited: boolean[][] = [];

  for (let i = 0; i < maze.length; i++) {
    visited.push(new Array(maze[i].length).fill(false));
  }

  walk(maze, start, wall, end, path, visited);

  return path;
}
