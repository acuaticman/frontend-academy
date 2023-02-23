// Métodos JS para mostrar ocultar div

function showA () {

    document.getElementById("a").style.display="block"
    document.getElementById("b").style.display="none"
    document.getElementById("c").style.display="none"
    document.getElementById("d").style.display="none"
    document.getElementById("e").style.display="none"
    document.getElementById("f").style.display="none"
    document.getElementById("i").style.display="none"
  }
  
  function showB () {
  
    document.getElementById("a").style.display="none"
    document.getElementById("b").style.display="block"
    document.getElementById("c").style.display="none"
    document.getElementById("d").style.display="none"
    document.getElementById("e").style.display="none"
    document.getElementById("f").style.display="none"
    document.getElementById("i").style.display="none"
  }
  
  function showC () {
  
    document.getElementById("a").style.display="none"
    document.getElementById("b").style.display="none"
    document.getElementById("c").style.display="block"
    document.getElementById("d").style.display="none"
    document.getElementById("e").style.display="none"
    document.getElementById("f").style.display="none"
    document.getElementById("i").style.display="none"
  }

  function showD () {

  document.getElementById("a").style.display="none"
  document.getElementById("b").style.display="none"
  document.getElementById("c").style.display="none"
  document.getElementById("d").style.display="block"
  document.getElementById("e").style.display="none"
  document.getElementById("f").style.display="none" 
  document.getElementById("i").style.display="none"
    }

  function showE () {

  document.getElementById("a").style.display="none"
  document.getElementById("b").style.display="none"
  document.getElementById("c").style.display="none"
  document.getElementById("d").style.display="none"
  document.getElementById("e").style.display="block"
  document.getElementById("f").style.display="none"
  document.getElementById("i").style.display="none"
    }

  function showF () {

  document.getElementById("a").style.display="none"
  document.getElementById("b").style.display="none"
  document.getElementById("c").style.display="none"
  document.getElementById("d").style.display="none"
  document.getElementById("e").style.display="none"
  document.getElementById("f").style.display="block"
  document.getElementById("i").style.display="none"
    }

  function hideA () {    
    document.getElementById("a").style.display="none"
    document.getElementById("b").style.display="none"
    document.getElementById("c").style.display="none"
    document.getElementById("d").style.display="none"
    document.getElementById("e").style.display="none"
    document.getElementById("f").style.display="none"
    document.getElementById("i").style.display="block"
  }

  function showmenu () {
    document.getElementById("menu-lateral").style.visibility="visible"
    document.getElementById("boton-open").style.display="none"
    document.getElementById("boton-close").style.display="block"
  }

  function hidemenu () {
    document.getElementById("menu-lateral").style.visibility="hidden"
    document.getElementById("boton-open").style.display="block"
    document.getElementById("boton-close").style.display="none"
  }

//Metodo Nº 1
/* 
var clic = 1;

function divLogin() {
  if (clic == 1) {
    document.getElementById("caja").style.visibility = "hidden";

    clic = clic + 1;
  } else {
    document.getElementById("caja").style.visibility = "visible";

    clic = 1;
  }
}
 */

//  Metodo Nº 2
// Variante del método anterios ajustado al menú del index.html

/*
var clic = 1;

function mostrar1() {
  if (clic == 1) {
    document.getElementById("presentacion").style.visibility = "visible";
    clic = clic + 1;
  } else {
    document.getElementById("presentacion").style.visibility = "hidden";

    clic = 1;
  }
}

var clic = 1;

function mostrar2() {
  if (clic == 1) {
    document.getElementById("educacion").style.visibility = "visible";
    clic = clic + 1;
  } else {
    document.getElementById("educacion").style.visibility = "hidden";

    clic = 1;
  }
}

function mostrar3() {
  if (clic == 1) {
    document.getElementById("referencias").style.visibility = "visible";
    clic = clic + 1;
  } else {
    document.getElementById("referencias").style.visibility = "hidden";

    clic = 1;
  }
}

function mostrar4() {
  if (clic == 1) {
    document.getElementById("experiencia").style.visibility = "visible";
    clic = clic + 1;
  } else {
    document.getElementById("experiencia").style.visibility = "hidden";

    clic = 1;
  }
}

function mostrar5() {
  if (clic == 1) {
    document.getElementById("habilidad").style.visibility = "visible";
    clic = clic + 1;
  } else {
    document.getElementById("habilidad").style.visibility = "hidden";

    clic = 1;
  }
}

function mostrar6() {
  if (clic == 1) {
    document.getElementById("contacto").style.visibility = "visible";
    clic = clic + 1;
  } else {
    document.getElementById("contacto").style.visibility = "hidden";

    clic = 1;
  }
}
*/

//Método Nº 3 
