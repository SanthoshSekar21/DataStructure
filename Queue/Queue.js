// A queue is a linear data structure that follows the First In, First Out (FIFO) principle,
//  meaning the first element added to the queue is the first one to be removed. 
//  Queues are widely used invarious applications like task scheduling, resource management, 
//  and buffering
 
class Queue{

    constructor()
    {
        this.item=[];

    };
    //operation in queue
    enqueue(data){
        this.item.push(data)
    };
    dequeue(){
        if(this.isEmpty())
            return null;
        return this.item.shift();
    };
fornt()
{
    if(this.isEmpty())
        return null;
    return this.item[0];
};
isEmpty()
{
    return this.item.length===0;
};
size()
{
   return this.item.length;
};
print(){
    console.log(this.item.join(','))
};
};
  const queue=new Queue();
  queue.enqueue(10);
  queue.print();
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.print();
  console.log(queue.dequeue());
  queue.print();
  console.log(queue.fornt());
  while(!queue.isEmpty()){
    console.log(queue.dequeue())
  }
  queue.print();
  console.log(queue.isEmpty())