![badge](https://img.shields.io/github/languages/top/nronzel/knights-travails) ![badge](https://img.shields.io/github/license/nronzel/Knights-Travails)

# Knights Trevails

## Description

The Odin Project - Knights Travails Project

Given an 8x8 chessboard and one piece (the knight), choose a start position and end position and determine the knights shortest path between the two points. This can be accomplished with a Breadth First Search so that is what I ended up implementing.

Solving this project involved:

- choosing a start square and target square.
- build a graph of all possible moves from the start square, based on the possible moves a knight can make.
- each possible move is now a neighbor (or child) of the start square (the root).
- this process is then done again for each neighbor square, adding a pointer to the respective parent node to track the path.
- once the target is located, follow the parent pointers back to the start square and that is (one of) the shortest paths. (I say one of because there may be multiple paths, but the first one located is the one shown).

My solution implements a proper queue to avoid having to use the `.shift()` array method. This is probably a bit overkill for the project since we are dealing with such a small number of elements in the array.

I was able to easily get the number of moves required to get to the target square, but it took some thinking for me to figure out how to also get the path itself. I ended up just adding a pointer to the parent node in the Node constructor to keep track of each nodes parent. Then once the target square was found I followed the parent pointers back to the start to get the trail. I'm sure there exists a more elegant solution, but I could not figure it out and mine works.

## Usage

[LIVE PREVIEW]()

Use the respective buttons to set a Start and End square.

A knight will be placed in the start square.

The target square will be set to bright blue.

Once both are set, click the "Shortest Path" button and it will display the shortest path from the start to the target.

![screenshot](/dist/assets//imgs/screenshot.png)

## License

licensed under the GNU General Public License v3.0
