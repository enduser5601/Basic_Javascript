var fullName = 'Van Hien is \'Superman\' . Van Hien is number 1';
var fisrtName = 'Van Hien';
var lastName = 'Nguyen';
// Template string es6
console.log(`Toi la : ${fisrtName} ${lastName}`);
//indexOf
console.log(fullName.indexOf('Superman'))
console.log(fullName.lastIndexOf('Superman'))
// slice - cut chuoi
console.log(fullName.slice(0,8))
console.log(fullName.slice(-9,-1))
// Replace - ghi de
console.log(fullName.replace(/Van Hien/g,'Van Tuan'))
// chuyen dôi chu hoa va chu thuong
console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())
//trim - xoa khoang trang
console.log(fullName.trim());
//split - ca chuoi thanh array
console.log(fullName.split(' '))