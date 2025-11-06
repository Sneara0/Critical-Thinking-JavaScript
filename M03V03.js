class Stack {
    constructor(){
        this.items = [];
    }
     //* o(1)
    push(value){
        this.items.push(value);
        

    }
    //*o(1)
    pop(){
        if (this.isEmpty()){
            return undefined;
        }
        return this.items.pop();


    }
     //* o(1)
    peek(){
        return this.items[this.items.length -1];

    }
    isEmpty(){
        return this.items.length ===0;
    }

//* o(n)
    print (){
        console.log(this.items.slice().reverse().join(" → "))
    }



}

const stack= new Stack();



console.log(stack.peek());
console.log(stack.isEmpty());

stack.push(5);
stack.push(10)
stack.push(15);

stack.print();
console.log(stack.peek());
console.log(stack.pop());

