"use strict";var ctx=document.getElementById("miGrafico").getContext("2d"),arregloMeses=["January","February","March","April","May","June","July"],chart=new Chart(ctx,{type:"bar",data:{labels:arregloMeses,datasets:[{label:"Infectados",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[100,5e3,3e3,4300,2e3,3e3,4500]},{label:"Recuperados",backgroundColor:"rgb(44, 171, 116)",borderColor:"rgb(44, 171, 116)",data:[2,400,200,256,456,321,543]}]},options:{}});