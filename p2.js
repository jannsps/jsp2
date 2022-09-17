let tabla=[
    {nombre:"juana",apellido:"martinez",direccion:"calle 10"},
    {nombre:"maria",apellido:"gomez",direccion:"calle 11"},
    {nombre:"jose",apellido:"gonzalez",direccion:"calle 19"}
]

const listar=()=>{
    let tbody=document.getElementById("tusuarios")
    let tablallena="";
    for(let i=0;i<tabla.length;i++){
        tablallena+="<tr><td>"+tabla[i].nombre+"</td><td>"+tabla[i].apellido+"</td><td>"+tabla[i].direccion+"</td></tr>";
    }
    
    tbody.innerHTML=tablallena;
}
const registrar=()=>{
    
    const nombre=document.getElementById("nombre").value
    const apellido=document.getElementById("apellido").value
    const direccion=document.getElementById("direccion").value  
    if (!nombre.trim()) {
        alert("Ingrese el nombre")
        return
    }
    if (!apellido.trim()) {
        alert("Ingrese el apellido")
        return
    }
    if (!direccion.trim()) {
        alert("Ingrese la direccion")
        return
    }      
    let tbody=document.getElementById("tusuarios")
    tbody.innerHTML+="<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+direccion+"</td></tr>";
    const nuevo={nombre:nombre,apellido:apellido,direccion:direccion}
    tabla.push(nuevo)
}