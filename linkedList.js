
let timeone = performance.now();
let Node = function (value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

function LinkList() {
    head = null;
    tail = null;
    length = 0;
    insertLinkedInList = (val) => {
        let node = new Node(val);
        if (!this.head) this.head = node;
        else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }

            node.prev = current;
            current.next = node;
           
        }
    },

        printAll = () => {
            let ptr = this.head;
            while (ptr != null) {
                console.log(ptr.value);
                ptr = ptr.next;
            }
        },
        insertAt=(position,val)=>{
            let ptr = this.head;
            let index = 1;
            // roll the wheel
            while (index<=position) {
                ptr = ptr.next;
                index++;
            }
            // do the work
            let newNode = new Node(val);
             newNode.next = ptr.next;
             newNode.prev = ptr;
             ptr.next.prev = newNode;
             ptr.next = newNode; 

        }
       
    return {
        insert: insertLinkedInList,
        printAll,
        insertAt
    }
}

let link = new LinkList();

link.insert(12);
link.insert(11);
link.insert(10);
link.insert(09);
link.insert(08);
link.insertAt(3,90);
link.printAll();

timeTwo = performance.now();

console.log(timeTwo- timeone
    );