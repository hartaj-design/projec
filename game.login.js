function add(){
    var value1=document.getElementById("input1").value;
    var value2=document.getElementById("input2").value;
    localStorage.setItem("name1",value1);
    localStorage.setItem("name2",value2);
    window.location="game_page.html";
    }