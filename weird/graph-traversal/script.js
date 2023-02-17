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
//the graph
const adjacencyList = new Map();

//Add node
function addNode(airport){
    adjacencyList.set(airport,[]);
};
 
//Add edge, undirected
function addEdge(origin,destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
};

//Create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));
console.log(adjacencyList);

//BFS bread first search
function bfs(start){
    const queue = [start]; //= 
    while(queue.length>0){
        const airport = queue.shift(); //mutates the queue
        const destinations = adjacencyList.get(airport); 

        for(const destination of destinations){
            queue.push(destination);
            if(destination === 'BKK'){
                console.log("found it!");
            }   
        }

    }
}
bfs('PHX');