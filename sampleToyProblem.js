/*
Description:

Write a function that takes an array/list of numbers and returns a number such that

Explanation total([1,2,3,4,5]) => 48

1+2=3--\ 3+5 =>     8 \
2+3=5--/ \            ==  8+12=>20\
          ==>5+7=> 12 / \           20+28 => 48
3+4=7--\ /            == 12+16=>28/
4+5=9--/ 7+9 =>     16  /
 
if total([1,2,3]) => 8 then

first+second => 3 \
                   then 3+5 => 8
second+third => 5 /

*/

var total = function (array) {
  if (array.length === 1) {
    return array[0];
  } else {
    var added = [];

  	for (var i = 0; i < array.length - 1; i++) {
  	  added.push(array[i] + array[i + 1]);
  	}

  	return total(added);
  }

};

