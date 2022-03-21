function listReverse(head){
  let newHead = null;
  let p = head;
  while(p){
    let temp = new Node(p.val)
    temp.next = newHead
    newHead = temp
    p = p.next
  }
  return newHead
}