class node{
    constructor(value){
        this.value=value;
        this.next=null;

    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    appened(value){
        const newNode= new node(value);

        if( this.head === null){
            this.head=newNode
            this.tail=newNode

        } else{
            this.tail.next=newNode;
            this.tail=newNode;
            
        }
        this.length++;

    }

    prepend( value){

         const newNode= new node(value);

        if( this.head === null){
            this.head=newNode
            this.tail=newNode

        } else{
            newNode.next=this.head
            this.head=newNode
           
            
        }
        this.length++;

    }



    insert(index,value){
        if(index<0 || index> this.length){
            console.error("index out of bound:sohoz Bangla Vasai muri kha")
            return undefined;
        }
        if (index===0){
            return this.prepend(value);
        }




        if(index=== this.length){
            return this.appened(value)
        }
        //if the insert is in the middle
        // find leading node

        let count=0;
        let leadingNode= this.head;

        while ( count !== index-1){
            leadingNode=leadingNode.next
            count++
        }

        console.log(leadingNode)

        
    }


    remove(){

    }
    
    print(){
        const arr=[]
        let currentNode= this.head;

        while(currentNode !== null){
            arr.push (currentNode.value);
            currentNode= currentNode.next



        }

        console.log(arr.join("→"),"→null")

    }
}

const List = new LinkedList ();
List.appened(1);
List.appened(2);
List.appened(3);
List.prepend(30);
List.prepend(20);
List.prepend(10);
List.insert(2,100);
List.print()