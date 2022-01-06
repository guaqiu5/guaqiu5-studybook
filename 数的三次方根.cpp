//实数二分模板
// 给定一个浮点数 n，求它的三次方根。

// 输入格式
// 共一行，包含一个浮点数 n。

// 输出格式
// 共一行，包含一个浮点数，表示问题的解。

// 注意，结果保留 6 位小数。

// 数据范围
// −10000≤n≤10000
// 输入样例：
// 1000.00
// 输出样例：
// 10.000000
#include<iostream>
using namespace std;
int main(){
    double num=0;
    double l=0;
    cin>>num;
    double r=num;
    while(r-l>=1e-10){
        double mid=(l+r)/2;
        if(mid*mid*mid>=num){
            r=mid;
        }
        else l=mid;
    }
    cout<<l;
}