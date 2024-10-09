/* 
ให้เขียน Function ที่ชื่อว่า discountItem ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ products และ discount
        1. products เป็น Array ที่บรรจุข้อมูลสินค้า
        2. discount เป็น Number ที่ระบุว่าจะลดราคาสินค้ากี่บาท
    - Function นี้จะนำสินค้ามาลดราคาตามที่ระบุ แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
function discountItem(products, discount){
  return products.map(products => products.price - discount)
}

const products = [
  { id: 1, name: "labtop", price: 30000, quantity: 20 },
  { id: 2, name: "keyboard", price: 2000, quantity: 45 },
  { id: 3, name: "charger", price: 750, quantity: 20 },
];

console.log(discountItem(products, 100)); // [ 29900, 1900, 650 ]
console.log(discountItem(products, 500)); // [ 29500, 1500, 250 ]
