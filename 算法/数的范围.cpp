//整数二分模板题
// 给定一个按照升序排列的长度为 n 的整数数组，以及 q 个查询。

// 对于每个查询，返回一个元素 k 的起始位置和终止位置（位置从 0 开始计数）。

// 如果数组中不存在该元素，则返回 -1 -1。

// 输入格式
// 第一行包含整数 n 和 q，表示数组长度和询问个数。

// 第二行包含 n 个整数（均在 1∼10000 范围内），表示完整数组。

// 接下来 q 行，每行包含一个整数 k，表示一个询问元素。

// 输出格式
// 共 q 行，每行包含两个整数，表示所求元素的起始位置和终止位置。

// 如果数组中不存在该元素，则返回 -1 -1。

// 数据范围
// 1≤n≤100000
// 1≤q≤10000
// 1≤k≤10000
// 输入样例：
// 6 3
// 1 2 2 3 3 4
// 3
// 4
// 5
// 输出样例：
// 3 4
// 5 5
// -1 -1
// 难度：简单
// 时/空限制：1s / 64MB
// 总通过数：53984
// 总尝试数：88606
// 来源：模板题,AcWing
// 算法标签
#include<iostream>
#include<vector>
using namespace std;
#define SIZE 100010
int n;
int q;
int arr[SIZE];
int main(){
    cin>>n>>q;
    for(int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    for(int i=0;i<q;i++){
        int which;
        cin>>which;
        int left=0;
        int right=n-1;
        int leftMargin=-1;
        int rightMargin=-1;
        while(left<right){
            int mid=(left+right)>>1;
            if(arr[mid]<which){
                left=mid+1;
            }
            else{
                right=mid;
            }
        }
        leftMargin=left;
        right=n-1;
        while(left<right){
            int mid=(left+right+1)>>1;
            if(arr[mid]<=which){
                left=mid;
            }
            else{
                right=mid-1;
            }
        }
        rightMargin=right;
        
        if(arr[leftMargin]!=which){
            cout<<-1<<" "<<-1<<endl;
        }     
        else{         
            cout<<leftMargin<<" "<<rightMargin<<endl;
        }
        
    }
    
}