'use strict';

var a = {subObj: {value: 0}};
var b  = a;

b.subObj.value = 4;
a;
