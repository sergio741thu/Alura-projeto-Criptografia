function ASC(String) {
    return String.charCodeAt(0);
}

function CHAR(Ascii) {
    return String.fromCharCode(Ascii);
}

var chave = "qwertasdfgzxcvbyuiopghjkljumdrftasdfgasdfqwdefrgtyhju";

function Cript() {
    
    var dados = document.getElementById("0").value;
    var texto = "";
    var len;
    var p = 0;
    var i;

    for ( i = 0; i < dados.length; i++ ) {
        p++;
        len = (ASC(dados.substr(i,1)) + (ASC(chave.substr(p,1))));
        
        if ( p == 50 ) {
            p = 1;
        }

        if ( len > 255 ) {
            len -= 256;
        }

        texto += (CHAR(len));
    }
    

    document.getElementById("1").value = texto;
}

function Descry() {
    
    var dados = document.getElementById("1").value;
    var texto = "";
    var len;
    var p = 0;
    var i;

    for ( i = 0; i < dados.length; i++ ) {
        p++;
        len = (ASC(dados.substr(i,1)) - (ASC(chave.substr(p,1))));
        
        if ( p == 50 ) {
            p = 1;
        }

        if ( len < 0 ) {
            len += 256;
        }

        texto += (CHAR(len));
    }
    

    document.getElementById("2").value = texto;
}

function Limpar() {
    for (var i = 0; i < 3; i++) {
        document.getElementById(i).value = "";
    }

}


