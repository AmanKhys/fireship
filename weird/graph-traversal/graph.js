// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjacencyList = new Map();

//addnode 
function addNode(airport){
    adjacencyList.set(airport,[]);
};

//add edge, undirected
function addEdge(origin,destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
};

//create the graph
airports.forEach(addNode);
routes.forEach( route => addEdge(...route) );
console.log(adjacencyList);

//BFS nreadth first search

function bfs(start){
    const visited = new Set();
    const queue = [start]; 
    while(queue.length>0){
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);
        for(const destination of destinations){
            console.log(destination);
            if(destination === 'BKK'){
                console.log(`${airport} to ${destination} exists`);
            };
            if(!visited.has(destination)){
                visited.add(destination);
                queue.push(destination);

            }
        };
    };
};

bfs('LAP'); //doesn't work with isolated set of nodes

