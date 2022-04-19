import Queue from "./Queue";

function hotPotato(elementsList, num) { //batata quente.
  const queue = new Queue();
  const elimitatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    elimitatedList.push(queue.dequeue());
  }

  return {
    aliminated: elimitatedList,
    winned: queue.dequeue()
  }
}

const names = ['Rafael', 'Tayla', 'Thiago', 'Lucas', 'Jãozin'];
const result = hotPotato(names, 8);