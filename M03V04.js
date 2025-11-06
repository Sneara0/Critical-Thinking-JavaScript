//* Array implementation



class Queue {
    constructor(){
        this.items = [];
    }
     //* o(1)
    enqueue(value){
        this.items.push(value);
        

    }
    //*o(1)
    dequeue(){
        if (this.isEmpty()){
            return undefined;
        }
        return this.items.shift();


    }
     //* o(1)
    peek(){
        return this.items[0];

    }
    isEmpty(){
        return this.items.length ===0;
    }

//* o(n)
    print (){
        console.log("Start  → ",this.items.join(" → ")," → End");
    }



}

const queue= new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();


