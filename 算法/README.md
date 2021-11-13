# 回文数

```javascript
//x是输入的数字
let _x=x;
let ans=0;
while(x)
{
	ans=ans*10+_x%10;
	_x=parseInt(_x/10);
}
console.log(ans===x);
```

思路：利用求模 得到数字的末尾值，并将之前的ans*权值  再通过除法（除以权值）去掉数字的最后一位，如此往复，就能得到一个数字的回文数

# 反转链表

```javascript
var reverseList = function(head) {
    if(head==null||head.next==null) return head;
    let p=reverseList(head.next);
   head.next.next=head;
   head.next=null;
    return p;
};
```

# 相交链表

```js
var getIntersectionNode = function(headA, headB) {
  let a = headA,
    b = headB;
  while (a != b) {
    // a 走一步，如果走到 headA 链表末尾，转到 headB 链表
    a =   a != null ? a.next : headB;
    // b 走一步，如果走到 headB 链表末尾，转到 headA 链表
    b =   b != null ? b.next : headA;
  }
  return a;
};

```

# 返回倒数第k个结点

```javascript
//耿直双遍历
var kthToLast = function(head, k) {
    let cnt=0;
    let temp=head;
    while(temp!=null){
        cnt++;
        temp=temp.next;
    }
    let nowcnt=0;
    while(head!=null){
        nowcnt++;
        if(nowcnt==cnt-k+1) return head.val;
        head=head.next;
    }

};
```

```javascript
//快慢指针 快指针先走k步 然后快慢指针一起走，然后慢指针指到值就是要求的
const kthToLast = (head, k) => {
    let [fast, slow] = [head, head];
    while (k--) {
        // 快指针先走k步
        fast = fast.next;
    }
    while (fast) {
        // 再一起走，直到快指针走到头
        fast = fast.next;
        slow = slow.next;
    }
    // 此时的慢指针指的就是倒数第k个
    return slow.val;
};


```

# 环形链表

```javascript
//快慢指针，有环终会相遇
var hasCycle = function(head) {
    let fast=head;
    let slow=head;
    while(fast&&fast.next)
    {
        fast=fast.next.next;
        slow=slow.next;
        if(fast==slow) return true;
    }
    return false;   
};

```

# 删除链表中倒数第n个节点

```
//就返回倒数第k个结点基础上改改
var swapNodes = function(head, k) {
let fir=head;
let sec=head;
let fast=head;
let slow=head;

    while(k--) {
        fir=fast;
        fast=fast.next;
    }
    while(fast){
        fast=fast.next;
        slow=slow.next;
    }
    sec=slow;
    let temp=fir.val;
    fir.val=sec.val;  
    sec.val=temp; 
    return head;

};
```

# 旋转链表

```javascript
var rotateRight = function(head, k) {
    if(head==null) return head;
    //先变环，再截断
    let temp=head;
    let s_head=head;
    let cnt=0;
    let __temp;
    while(head)
    {   cnt++;
        __temp=head;
        head=head.next;
    }
    __temp.next=s_head;//链表已成环
    head=s_head;
    //将索引为cnt-（k%cnt)的next置为null
    let nowcnt=0;
    while(head)
    {
         nowcnt++;
        if(nowcnt==cnt-(k%cnt)) 
        {
            let _temp=head.next;
            head.next=null;
            return _temp;
        }
        head=head.next;
    }

};
```

# 翻转二叉树

```javascript
 //无法中序遍历，因为右子树无法翻转到。
var invertTree = function(root) {
    if(root==null){
        return root;
    }
    let temp=new TreeNode();
    temp=root.left;
    root.left=root.right;
    root.right=temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
```

# 平衡二叉树

```javascript
var isBalanced = function (root) {
    return balanced(root) !== -1
};
var balanced = function (node) {
    if (!node) return 0
    const left = balanced(node.left)
    const right = balanced(node.right)
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1
    }
    return Math.max(left, right) + 1
}

```

# 二叉树的深度

```javascript
var maxDepth = function(root) {
    if(root==null) return 0;
    var left=maxDepth(root.left);
    var right=maxDepth(root.right);
    return Math.max(left,right)+1;
};
```

# 搜索插入位置

```javascript
//二分
var searchInsert = function(nums, target) {
    if (nums == null || !nums.length) {
    return -1;
  }
 let left=0;
 let right=nums.length-1;
 
 while(left<=right){
     let mid=left+((right-left)>>1);
    if(nums[mid]==target) return mid;
    else if(nums[mid]>target){
        right=mid-1;    
    }
    else{
        left=mid+1;     
    }
 }
 return left;
}
```

# 罗马数字转整数

```javascript
var romanToInt = function(s) {
    let ans=0;
    let _temp=[];
    
    for(let i=0;i<s.length;i++){
        
        if(s[i]=='V'&&s[i-1]=='I'){
            _temp.pop();
            ans+=4;
        }
         else if(s[i]=='X'&&s[i-1]=='I'){
            _temp.pop();
            ans+=9;
        }

        else if(s[i]=='L'&&s[i-1]=='X'){
                    _temp.pop();
                    ans+=40;
        }
          else if(s[i]=='C'&&s[i-1]=='X'){
                    _temp.pop();
                    ans+=90;
        }
         else if(s[i]=='D'&&s[i-1]=='C'){
                    _temp.pop();
                    ans+=400;
        }
          else if(s[i]=='M'&&s[i-1]=='C'){
                    _temp.pop();
                    ans+=900;
        }
        else _temp.push(s[i]);
    }
    for(let i=0;i<_temp.length;i++){
        if(_temp[i]=='I') ans+=1;
        if(_temp[i]=='V') ans+=5;
        if(_temp[i]=='X') ans+=10;
        if(_temp[i]=='L') ans+=50;
        if(_temp[i]=='C') ans+=100;
        if(_temp[i]=='D') ans+=500;
        if(_temp[i]=='M') ans+=1000;    
    }
    
return ans;

};
```

# 反转字符串

```javascript
var reverseString = function(s) {
    let temp="";
    for(let i=0,j=s.length-1;i<=j;i++,j--){
        temp=s[i];
        s[i]=s[j];
        s[j]=temp;
    }
    return s;
};
```

# 从尾到头打印链表

```javascript
//unshift 把数组当deque用
var reversePrint = function(head) {
    let ans=[];
    while(head!=null)
    {
        ans.unshift(head.val);
        head=head.next;
    }
    return ans;
};
```

# k个一组翻转链表

```javascript

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 function reverseK(head,k){
  if(k==1) return head;
        let p=reverseK(head.next,k-1);
        head.next.next=head;
        head.next=null;
        return p;
 }
 function reverseBetween(head,left,right){
     let ret=new ListNode(0);
     ret.next=head;
        let p=ret;
        let num=right-left+1;
        while(--left) p=p.next;
        p.next=reverseK(p.next,num);
        return ret.next;
 }
var reverseKGroup = function(head, k) {
    if (head == null) return null; 
// 区间 [a, b) 包含 k 个待反转元素
let  a, b;
a = b = head;
for (let i = 0; i < k; i++) { 
// 不⾜ k 个，不需要反转，base case
if (b == null)
return head;
b = b.next; } 
// 反转前 k 个元素 
let newHead = reverseBetween(head,1, 2); 
// 递归反转后续链表并连接起来 
a.next = reverseKGroup(b, k);
return newHead;    

};
```

# 合并升序链表

```js
var mergeTwoLists = function(l1, l2) {
    let head=new ListNode(0);
    
    let _head=head;
    while(l1&&l2){
        if(l1.val<l2.val){
            _head.next=l1;
            l1=l1.next;      
        }
        else {  
            _head.next=l2;
            l2=l2.next;
        }
        _head=_head.next
    }
       if(l1){
            _head.next=l1;
        }
        if(l2){
            _head.next=l2;
        }
    return head.next;
};
```





# 只出现一次的数字

```javascript
//map内含方法
//map.set（key,value)将键值放入到map对象
//map.get(key)通过key查看value值的大小
//map.has(key)查看key是否存在，返回布尔值
//map.delete(key)删除key
//map.forEach((value,key)=>{})

var singleNumber = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let c = nums[i]
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }
    let a
    map.forEach((value, key) => {
        if (value == 1) a = key
    })
    return a
};

```

# 平方数之和

```javascript
var judgeSquareSum = function(c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c));
    while (left <= right) {
        const sum = left * left + right * right;
        if (sum === c) {
            return true;
        } else if (sum > c) {
            right--;
        } else {
            left++;
        }
    }
    return false;
};

```

# 二分查找

```js
var search = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(nums[mid]===target) return mid;
        else if(nums[mid]>target){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return -1;
};
```

# 两数之和



```js
var twoSum = function(nums, target) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],i);
    }
    for(let j=0;j<nums.length;j++){
        let need=target-nums[j];
        if(map.has(need) && j!==map.get(need))
        return [j,map.get(need)];
    }
        
};
```

# 快乐数

```javascript
//快慢指针 有循环，两指针终会相遇
var isHappy = function(n) {
        function bitSquareSum(n){
        let sum = 0;
        while(n > 0)
        {
            let bit = n % 10;
            sum += bit * bit;
            n = Math.floor(n/10);
        }
        return sum;
    }  
        let slow = n, fast = n;
        do{
            slow = bitSquareSum(slow);
            fast = bitSquareSum(fast);
            fast = bitSquareSum(fast);
        }while(slow != fast);
        
        return slow == 1;  
};
```

# 前序遍历

```
function preorderTraversal(root) {
    if (root == null) { return [] };
    const result = [];
    preorder(root, result);
    return result;

    function preorder(root, result) {
        if (root == null) return;
        result.push(root.val);
        preorder(root.left, result);
        preorder(root.right, result);
    }
};

```

