var Keranjang_Buah = ["pisang", "manga", "papaya", "melon", "jambu"];
//output
console.log(Keranjang_Buah.join(", "));

//code untuk tambah array
Keranjang_Buah.push("semangka", "pear", "salak");
//output
console.log(Keranjang_Buah.join(", "));

//code untuk menghapus buah yg pertama dari keranjang buah
Keranjang_Buah.shift();
//output
console.log(Keranjang_Buah.join(", "));

//code untuk menghapus buah berdasarkan kita yang milih
Keranjang_Buah.splice(2, 1);
//output
console.log(Keranjang_Buah.join(", "));

//code untuk tambah array
Keranjang_Buah.sort();
//output
console.log(Keranjang_Buah.join(", "));

//////////////////////////////////////////////////////////////////////////////////

//variable
var Hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
var Hari2 = ["senin", "selasa", "rabu"];
var Hari3 = [];
var Hari4 = [1, 2, 3, 4];
var Hari5 = [];

//code mengembalikan hari/reverse
Hari.reverse();
//output
console.log(Hari.join(", "));

//code untuk mengambil hari
Hari.reverse();
Hari2.forEach(function (e, i) {
  Hari3.push(Hari[i + (i + 1)]);
});
//output
console.log(Hari3.join(", "));

//code untuk mengambil hari
Hari.reverse();
Hari4.forEach(function (e, i) {
  Hari5.push(Hari[i + i]);
});
//output
console.log(Hari5.join(", "));

//code untuk mengambil hari
Hari.reverse();
Hari.splice(0, 2);
Hari.splice(2, 1);
Hari.splice(3, 1);
//output
console.log(Hari.join(", "));

/////////////////////////////////////////////////////////////////////

var angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

angka.forEach(function (e, i)
    {
        console.log("index ke " + (8 + (i * 3)));
    });


// var a = 0;
// for (var i = 0; i > 20; i++) {
//     const element = a[i];
    
// }