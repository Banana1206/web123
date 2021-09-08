var a = 12; // number
var b = '12'; // string
 
// TRUE vì cả hai đều có giá trị là 12
document.write(a == b); 
 
// FALSE vì mặc dù giá trị bằng nhau nhưng
// kiểu dữ liệu của a là number, của b là string
document.write(a === b);