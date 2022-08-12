const PUSH_HEAD = 'PUSH_HEAD';
const PUSH_TAIL = 'PUSH_TAIL';
const POP_HEAD = 'POP_HEAD';

class CartItem {
    constructor(itemName, next=null) {
        this.data = itemName;
        this.next = next;
    }
}

class ShoppingCart {
    constructor(head){
        this.head = head;
        let curr = head;
        while (curr) {
            this.tail = curr;
            curr = curr.next;
        }
    }

    updateCart(itemName, method) {
        switch (method) {
            case PUSH_HEAD:
                let newHead = new CartItem(itemName, this.head);
                this.head = newHead;
            case PUSH_TAIL:
                let newTail = new CartItem(itemName);
                this.tail.next = newTail;
                tail = newTail;
            case POP_HEAD:
                let tempHead = this.head.next;
                this.head.next = null;
                this.head = tempHead;
            default:
                break;
        }
    }
}

const getShoppingCart = function(head, operations) {
    let ans = head;
    let curr = head;
    let tail = null;
    while (curr) {
        tail = curr;
        curr = curr.next;
    }
    for (let i = 0; i < operations.length; i++) {
        let splitOperation = operations[i].split(' ');
        switch (splitOperation[0]) {
            case 'PUSH_HEAD':
                let newHead = new CartItem(splitOperation[1], ans);
                ans = newHead;
            case 'PUSH_TAIL':
                let newTail = new CartItem(splitOperation[1]);
                tail.next = newTail;
                tail = newTail;
            case 'POP_HEAD':
                let tempHead = ans.next;
                ans.next = null;
                ans = tempHead;
            default:
                break;
        }
    }
    return ans;
}