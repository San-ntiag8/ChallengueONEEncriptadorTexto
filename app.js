const reemplazos = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function cifrar(texto) {
    return texto.split('').map(caracter => reemplazos[caracter] || caracter).join('');
}

function descifrar(texto) {
    const inverso = Object.fromEntries(
        Object.entries(reemplazos).map(([clave, valor]) => [valor, clave])
    );
    return texto.split(' ').map(parte => inverso[parte] || parte).join('');
}

function procesar() {
    const texto = document.getElementById("texto").value.toLowerCase();
    const accion = document.getElementById("accion").value;
    

    if (!/^[a-z\s]+$/.test(texto)) {
        document.getElementById("resultado").innerText = "Solo ingresa letras minúsculas sin acentos ni caracteres especiales.";
        return;
    }
    
    let resultado;
    if (accion === "encriptar") {
        resultado = cifrar(texto);
    } else {
        resultado = descifrar(texto);
    }

    document.getElementById("resultado").innerText = resultado;
}

function copiar() {
    const textoResultado = document.getElementById("resultado").innerText;
    if (textoResultado) {
        navigator.clipboard.writeText(textoResultado).then(() => {
            alert("Texto copiado al portapapeles");
        }).catch(err => {
            alert("Error al copiar el texto: " + err);
        });
    } else {
        alert("No hay texto para copiar");
    }
}

document.getElementById('copyButton').addEventListener('click', copiar);
