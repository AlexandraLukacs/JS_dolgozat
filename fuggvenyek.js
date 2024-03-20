export function div(lista){
    let text = " ";
    for (let index = 0; index < lista.length; index++) {
        text += `<div class=csap>`;
        text += `<p> Csapat: ${lista[index].csapat} </p>`;
        text += `<p> Sofőrök: ${lista[index].soforok} </p>`;
        text += `<p> Autószín: ${lista[index].autoszin} </p>`;
        text += `</div>`;
    }
    text += " ";
    console.log(text);

    return text
}