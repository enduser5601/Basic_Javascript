var languages = [
    'Javascript',
    'PHP',
    'Java',
    'Python',
    'Swift',
]
// toString(), join() - chuyen tu array sang chuoi
console.log(languages.join(' - '));
// pop() - xóa phần tu cuoi mang
console.log(languages.pop());
// push() - them phần tu cuoi mang -  in ra so luong phan tu
console.log(languages.push('Dart','Ruby'));
// shift() - xoa phan tu dau mang
console.log(languages.shift());
// unshift() - them phan tu dau mang
console.log(languages.unshift('C#','Scala'));
//splicing() - xoa cat chen phan tu trong mang.
languages.splice(1 ,1 ,'Nodejs')
console.log(languages)
// concat() - noi array
var languages2 = [
    'Go'
]
console.log(languages.concat(languages2))
//slice() - cat element
console.log(languages.slice(3,4))
