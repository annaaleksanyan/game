//xndir 1 arandzin linum em bayc irar het linelov menak arachinna tpum isk erkrordy che
//var a = 100;
//var b = 200;
//var p = calcPer(a,b); 
//var s = calcSq(a,b);
//function calcPer(c,d){
//var zuzu = (c*2)+(d*2)
//return zuzu
//}
//calcPer(100,200);
//function calcSq(e,f){
//var kakadu = e*f
//return kakadu
//}
//calcSq(100,200);
//ok




//xndir 2 1)
//var c = [45,60,12,98,78,154,65];
//var m = [15,98,45,33,78,98,100,56,98]; 
//var s1 = sumArray(c,m);
//console.log(s1);
//function sumArray(a,b){
//var bob=0
//for(let i=0;i<a.length;i++)
//for(let h=0;h<b.length;h++)
//bob+=a[i]+b[h]
//return bob
//}
//xndir 2 1)
//var c = [45,60,12,98,78,154,65];
//var m = [15,98,45,33,78,98,100,56,98]; 
//var s1 = sumArray(c,m);
//console.log(s1);
//function sumArray(a,b){
//var bob=0
//for(let i=0;i<a.length;i++)
//for(let h=0;h<b.length;h++)
//bob+=a[i]+b[h]
//return bob
//}
//xndir 2 1)
//var c = [45,60,12,98,78,154,65];
//var m = [15,98,45,33,78,98,100,56,98]; 
//var s1 = sumArray(c,m);
//console.log(s1);
//function sumArray(a,b){
//var bob=0
//for(let i=0;i<a.length;i++)
//for(let h=0;h<b.length;h++)
//bob+=a[i]+b[h]
//return bob
//}
//xndir 2 1)
//var c = [45,60,12,98,78,154,65];
//var m = [15,98,45,33,78,98,100,56,98]; 
//var s1 = sumArray(c,m);
//console.log(s1);
//function sumArray(a,b){
//var bob=0
//for(let i=0;i<a.length;i++)
//for(let h=0;h<b.length;h++)
//bob+=a[i]+b[h]
//return bob
//}






//xndir 2 2) arandzin linum em bayc irar het linelov menak arachinna tpum isk erkrordy che ok
//var c = [45,60,12,98,78,154,65];
//var m = [15,98,45,33,78,98,100,56,98]; 
//var s1 = sumArray1(c);
//var s2 = sumArray2(m);
//console.log(s1, s2);
//function sumArray1(a){
//var bob=0
//for(let i=0;i<a.length;i++)
//bob+=a[i]
//return bob
//}
//function sumArray2(h){
//var begem=0
//for(let f=0;f<h.length;f++)
//begem+=h[f]
//return begem
//}





//xndir 3 linuma bayc skzbum gruma unesiminch
// var c = [45,60,12,98,78,154,65];
// var b = reverseArray(c);
// console.log(b); 
// function reverseArray(a){
//   var vermishel 
//   for(let i=a.length;i>=0;i--)
//   vermishel+=a[i]+","
//   return vermishel
// }
// var t = ["php","javascript","html","css","mysql"];
// var m = reverseArray(t);
// console.log(m); 
// function reverseArray(a){
//   var vermishel = []
//   for(let i=a.length;i>=0;i--)
//   vermishel.push(arr[i])
//   return vermishel}

// function setup(){
//     createCanvas(500,500)
//     background(0)
// }
// function draw(){
//     let x = random(0,500)
//     let y = random(0,500)
//     fill(45,566,88) 
//     ellipse(x,y,65,65)
//     fill(567,88,99)
//     rect(x,y,30,30)
// }





//xndir 3 linuma bayc skzbum gruma unesiminch
// var c = [45, 60, 12, 98, 78, 154, 65];
// var b = reverseArray(c);
// console.log(b);
// function reverseArray(a) {
//     var vermishel = [];
//     for (let i = a.length-1; i >= 0; i--) {
//         vermishel.push (a[i]);
//     }
//     return vermishel;
// }
// var t = ["php", "javascript", "html", "css", "mysql"];
// var m = reverseArray(t);
// console.log(m);
// function reverseArray(a) {
//     var vermishel
//     for (let i = a.length; i >= 0; i--)
//         vermishel += a[i] + ","
//     return vermishel
// }








// var cols = 20;
// var rows = 20;
// var colors = []

// function setup(){
//     createCanvas(300,300)
//    for (var i = 0; i < cols; i++) {
//      colors[i]=[]
//         for (var j = 0; j < rows; j++) {
//           colors[i][j]=random(260)
// }
//    }
// }

// function draw(){
//     background(51)


//     for (var i = 0; i < cols; i++) {
//         for (var j = 0; j < rows; j++) {
//             var x = i*30;
//             var y = j*30;
//             stroke(0)
//             fill(colors[i][j])
//             rect(x,y,30,30)

//         }

//     }
// }









// let cols = 20; //uxxahayac syunery
// let rows = 20; //horizonakan syunery
// let grid; // vor heto funkcia 2 um stacvi. giniaaaasssssss:
// let apelsin = 30; //qarakusikneri weight u height mekum vortev heshta sench
// // let can1 = 300; //createcanvas i tvyal 1
// // let can2 = 300; //createcanvas i tvyal 2
// let qaniApelsin = 15;

// function Make2dArray(cols, rows) { //ste vapshe karerliya erku hat tal 1cols 2rows bayc petq chi, nence xarna
//     // cols = width/resolution; ////mi ban uzum em anem bayc der inqs chem haskanum inchi hamar. zut vor erevi hesht ylni
//     // rows = height/resolution;
//     let arr = new Array(cols);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = new Array(rows);
//     }
//     return arr;
// }

// function setup() {
//     // createCanvas(can1, can2);
//     createCanvas(qaniApelsin * apelsin, qaniApelsin * apelsin);
//     grid = Make2dArray(cols, rows);
//     for (let i = 0; i < cols; i++) {
//         for (let j = 0; j < rows; j++) {
//             grid[i][j] = floor(random(2))//vor minchev 2 patahak tivy depi nerqev tani. shnorhakal em ter astvac
//             //harcer time!!!!!!! uzum em urish guyn arden hogneci es sev spitakic. exavavavav
//         }
//     }
// }

// function draw() {
//     background(220, 20, 60);
//     for (let i = 0; i < cols; i++) {
//         for (let j = 0; j < rows; j++) {
//             let x = i * apelsin;
//             let y = j * apelsin;
//             if (grid[i][j] == 1) {//vapshe 0 el klni erevi bayv de risk chanenq
//                 fill(255, 69, 0);
//                 rect(x, y, apelsin, apelsin);
//             }
//             // else{
//             // fill(255, 255, 0)
//             // rect(x,y,apelsin,apelsin)}

//         }
//     }
// }









// // function setup(){
// //     createCanvas(500,500)
// //     frameRate(15)
// // }
// // function draw(){
// //     background(0)
// //     let x = random(0,500)
// //     let y = random(0,500)
// //     let w = random(65,200)
// //     let h = random(53,200)
// //     fill(45,566,88) 
// //     ellipse(x,y,w,h)
// //     fill(567,88,99)
// //     rect(x,y,w,h)
// // }





