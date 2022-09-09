let entre=document.getElementById("entre");
let rep = document.getElementById("rep")
alphabet = {A:'o-', B:'-ooo', C:'-o-o', D:'-oo', E:'o', F:'oo-o', G:'--o',
                H:'oooo', I:'oo', J:'o---', K:'-o-', L:'o-oo', M:'--', N:'-o',
                O:'---', P:'o--o', Q:'--o-', R:'o-o', S:'ooo', T:'-', U:'oo-',
                V:'ooo-', W:'o--', X:'-oo-', Y:'-o--', Z:'--oo'}
morse = {"o-":"a",
         '-ooo':"b",
         '-o-o':"c",
         '-oo':"d",
         'o':"e",
         'oo-o':"f",
         '--o':"g",
        'oooo':"h",
         'oo':"i",
         'o---':"j",
         '-o-':"k",
         'o-oo':"l",
         '--':"m",
         '-o':"n",
         '---':"o",
         'o--o':"p",
         '--o-':"q",
         'o-o':"r",
         'ooo':"s",
         '-':"t",
         'oo-':"u",
        'ooo-':"v",
        'o--':"w",
        '-oo-':"x",
        '-o--':"y",
        '--oo':"z"}
function letmorse(params){
    console.log("conversion en cours")
    let world = String(entre.value);
    console.log(world);
    let ch="";
    for (i of world){
        if(i!=" "){
    i=i.toUpperCase();
    ch+=alphabet[i]+" ";
    rep.textContent=ch;}
    else{
        ch+="/"
    }}}
    
function morseàlettre(){
    let ch="";
    let lmorse="";
    morse_user=String(entre.value+" ");
    for(i of morse_user){
        if (i == " " || i==""){
            ch += morse[lmorse];
            lmorse = "";}
        else{
            lmorse += i;}}
    rep.textContent=ch;}