//creation of stack  using class

class Stack{
    constructor()
    {
        this.item=[];
    }

push(data)
{
this.item.push(data);

}
pop()
{
    if(this.isEmpty())
        return null;
    return this.item.pop();
};
top()
{
    if(this.isEmpty())
        return null;
    return this.item[this.item.length-1];
};
isEmpty()
{
    return this.item.length===0;
};
size()
{
    return this.item.length;
};
print()
{
    console.log(this.item.join(','))
};
}

const stack = new Stack();
 stack.push(10);
 stack.push(20);
// const top=stack.top();

stack.push(30);
stack.push(40);
const top=stack.top();
console.log(top);
stack.pop();
stack.print();
console.log(stack.isEmpty());
while(!stack.isEmpty()){
    console.log(stack.pop());
};
stack.print();
console.log(stack.top());