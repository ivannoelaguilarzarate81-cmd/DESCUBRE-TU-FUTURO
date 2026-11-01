/* ===================================
   PREGUNTAS DEL TEST
=================================== */

const preguntas = [

{
texto:"¿Disfrutas resolver problemas utilizando lógica y razonamiento?",
area:"ingenieria"
},

{
texto:"¿Te interesa aprender cómo funcionan las computadoras y la tecnología?",
area:"tecnologia"
},

{
texto:"¿Te gustaría ayudar a cuidar la salud y bienestar de otras personas?",
area:"salud"
},

{
texto:"¿Disfrutas dibujar, diseñar o crear cosas visualmente originales?",
area:"arte"
},

{
texto:"¿Te interesa entender cómo funcionan la naturaleza y los seres vivos?",
area:"ciencia"
},

{
texto:"¿Te gusta comunicar ideas, escribir o hablar frente a otras personas?",
area:"humanidades"
},

{
texto:"¿Te interesaría crear y administrar tu propio emprendimiento?",
area:"negocios"
},

{
texto:"¿Disfrutas escuchar, orientar y trabajar con otras personas?",
area:"social"
},

{
texto:"¿Te gustaría diseñar máquinas, estructuras o sistemas?",
area:"ingenieria"
},

{
texto:"¿Te llama la atención crear aplicaciones, videojuegos o páginas web?",
area:"tecnologia"
},

{
texto:"¿Te gustaría conocer más sobre el cuerpo humano?",
area:"salud"
},

{
texto:"¿Disfrutas expresar tus ideas mediante imágenes, música o creatividad?",
area:"arte"
},

{
texto:"¿Te gustaría realizar investigaciones y descubrir cosas nuevas?",
area:"ciencia"
},

{
texto:"¿Te interesa conocer diferentes culturas, idiomas e historias?",
area:"humanidades"
},

{
texto:"¿Te gusta organizar proyectos, recursos o equipos?",
area:"negocios"
},

{
texto:"¿Te gustaría participar en proyectos que ayuden a mejorar tu comunidad?",
area:"social"
},

{
texto:"¿Te gustan las matemáticas cuando se utilizan para solucionar problemas reales?",
area:"ingenieria"
},

{
texto:"¿Te interesa la inteligencia artificial, robótica o programación?",
area:"tecnologia"
},

{
texto:"¿Te sentirías interesado en trabajar en hospitales, clínicas o laboratorios de salud?",
area:"salud"
},

{
texto:"¿Te gusta imaginar nuevas formas de presentar una idea o producto?",
area:"arte"
},

{
texto:"¿Te interesa realizar experimentos y analizar sus resultados?",
area:"ciencia"
},

{
texto:"¿Te gustaría trabajar escribiendo, comunicando o investigando temas sociales?",
area:"humanidades"
},

{
texto:"¿Te interesa entender cómo funcionan las empresas y el dinero?",
area:"negocios"
},

{
texto:"¿Te gusta trabajar en equipo y conocer diferentes puntos de vista?",
area:"social"
},

{
texto:"¿Te gustaría construir o mejorar objetos y sistemas que usamos diariamente?",
area:"ingenieria"
},

{
texto:"¿Sientes curiosidad por saber cómo funciona el software que utilizas?",
area:"tecnologia"
},

{
texto:"¿Te interesa aprender sobre prevención, alimentación y cuidado de las personas?",
area:"salud"
},

{
texto:"¿Te gustaría convertir tus ideas creativas en proyectos reales?",
area:"arte"
},

{
texto:"¿Disfrutas observar, comparar datos y buscar explicaciones?",
area:"ciencia"
},

{
texto:"Si pudieras elegir un proyecto, ¿te gustaría que tuviera un impacto positivo en otras personas?",
area:"social"
}

];


/* ===================================
   INFORMACIÓN DE ÁREAS
=================================== */

const areas = {

tecnologia:{
nombre:"Tecnología",
icono:"💻",
descripcion:
"Presentas interés por herramientas digitales, programación, innovación y creación de soluciones tecnológicas.",
carreras:[
"Ingeniería de Sistemas",
"Ingeniería de Software",
"Ciencia de Datos",
"Ciberseguridad",
"Inteligencia Artificial",
"Desarrollo de Videojuegos"
]
},

salud:{
nombre:"Salud",
icono:"🩺",
descripcion:
"Te interesan el bienestar, la salud y el conocimiento relacionado con el cuerpo humano.",
carreras:[
"Medicina",
"Enfermería",
"Fisioterapia",
"Nutrición",
"Odontología",
"Bioquímica"
]
},

ingenieria:{
nombre:"Ingeniería",
icono:"⚙️",
descripcion:
"Te atraen la resolución de problemas, el razonamiento y la creación de soluciones prácticas.",
carreras:[
"Ingeniería Civil",
"Ingeniería Industrial",
"Ingeniería Mecánica",
"Ingeniería Electrónica",
"Ingeniería Eléctrica",
"Mecatrónica"
]
},

arte:{
nombre:"Arte y Diseño",
icono:"🎨",
descripcion:
"Presentas interés por la creatividad, el diseño y diferentes formas de expresión.",
carreras:[
"Diseño Gráfico",
"Arquitectura",
"Animación Digital",
"Diseño de Interiores",
"Producción Audiovisual",
"Diseño Multimedia"
]
},

ciencia:{
nombre:"Ciencias",
icono:"🔬",
descripcion:
"Te interesa investigar, experimentar, analizar información y comprender cómo funciona nuestro mundo.",
carreras:[
"Biología",
"Química",
"Física",
"Biotecnología",
"Ciencias Ambientales",
"Investigación Científica"
]
},

humanidades:{
nombre:"Humanidades y Comunicación",
icono:"📚",
descripcion:
"Te interesan la comunicación, los idiomas, la cultura y la comprensión de la sociedad.",
carreras:[
"Comunicación Social",
"Periodismo",
"Literatura",
"Idiomas",
"Historia",
"Filosofía"
]
},

negocios:{
nombre:"Negocios",
icono:"📈",
descripcion:
"Te atraen la organización, los proyectos, el emprendimiento y el funcionamiento de las empresas.",
carreras:[
"Administración de Empresas",
"Marketing",
"Economía",
"Contaduría",
"Comercio Internacional",
"Finanzas"
]
},

social:{
nombre:"Área Social",
icono:"🤝",
descripcion:
"Presentas interés por trabajar con personas, comprenderlas y contribuir positivamente a la sociedad.",
carreras:[
"Psicología",
"Trabajo Social",
"Educación",
"Sociología",
"Pedagogía",
"Gestión Social"
]
}

};


/* ===================================
   MATERIAS
=================================== */

const materias = {

matematicas:{
nombre:"➗ Matemáticas",
descripcion:
"Si disfrutas las matemáticas, puedes explorar carreras relacionadas con lógica, números y resolución de problemas.",
carreras:[
"Matemáticas",
"Ingeniería Civil",
"Ingeniería Industrial",
"Economía",
"Estadística",
"Ciencia de Datos",
"Actuaría",
"Ingeniería de Sistemas"
]
},

biologia:{
nombre:"🧬 Biología",
descripcion:
"Carreras relacionadas con seres vivos, salud, medioambiente e investigación.",
carreras:[
"Medicina",
"Biología",
"Veterinaria",
"Biotecnología",
"Enfermería",
"Nutrición",
"Bioquímica",
"Ciencias Ambientales"
]
},

informatica:{
nombre:"💻 Informática",
descripcion:
"Opciones relacionadas con computadoras, software y nuevas tecnologías.",
carreras:[
"Ingeniería de Sistemas",
"Ingeniería de Software",
"Inteligencia Artificial",
"Ciberseguridad",
"Ciencia de Datos",
"Desarrollo Web",
"Robótica",
"Desarrollo de Videojuegos"
]
},

quimica:{
nombre:"⚗️ Química",
descripcion:
"Opciones para quienes disfrutan comprender la materia y realizar investigaciones.",
carreras:[
"Química",
"Bioquímica",
"Ingeniería Química",
"Farmacia",
"Biotecnología",
"Ingeniería Ambiental"
]
},

fisica:{
nombre:"⚡ Física",
descripcion:
"Carreras relacionadas con energía, movimiento, tecnología y funcionamiento del universo.",
carreras:[
"Física",
"Ingeniería Mecánica",
"Ingeniería Electrónica",
"Ingeniería Eléctrica",
"Mecatrónica",
"Astronomía"
]
},

lenguaje:{
nombre:"📖 Lenguaje",
descripcion:
"Opciones relacionadas con comunicación, escritura, idiomas y expresión.",
carreras:[
"Comunicación Social",
"Periodismo",
"Literatura",
"Derecho",
"Idiomas",
"Educación"
]
},

arte:{
nombre:"🎨 Arte",
descripcion:
"Carreras donde la creatividad y la expresión visual tienen un papel importante.",
carreras:[
"Diseño Gráfico",
"Arquitectura",
"Animación",
"Artes Visuales",
"Diseño de Interiores",
"Producción Audiovisual"
]
},

sociales:{
nombre:"🌎 Ciencias Sociales",
descripcion:
"Opciones para comprender a las personas, las sociedades y su historia.",
carreras:[
"Psicología",
"Derecho",
"Sociología",
"Historia",
"Trabajo Social",
"Ciencias Políticas",
"Educación"
]
}

};


/* ===================================
   CARRERAS
=================================== */

const carreras = [

["💻","Ingeniería de Sistemas","Tecnología"],
["🧑‍💻","Ingeniería de Software","Tecnología"],
["🤖","Inteligencia Artificial","Tecnología"],
["🔐","Ciberseguridad","Tecnología"],
["📊","Ciencia de Datos","Tecnología"],

["🩺","Medicina","Salud"],
["🧑‍⚕️","Enfermería","Salud"],
["🥗","Nutrición","Salud"],
["🦷","Odontología","Salud"],
["🧪","Bioquímica","Salud"],

["🏗️","Ingeniería Civil","Ingeniería"],
["⚙️","Ingeniería Mecánica","Ingeniería"],
["🏭","Ingeniería Industrial","Ingeniería"],
["🔌","Ingeniería Eléctrica","Ingeniería"],
["🤖","Mecatrónica","Ingeniería"],

["🎨","Diseño Gráfico","Arte y Diseño"],
["🏛️","Arquitectura","Arte y Diseño"],
["🎬","Producción Audiovisual","Arte y Diseño"],
["🖥️","Animación Digital","Arte y Diseño"],

["🧬","Biología","Ciencias"],
["⚗️","Química","Ciencias"],
["🌌","Física","Ciencias"],
["🌱","Ciencias Ambientales","Ciencias"],

["📰","Periodismo","Humanidades"],
["📢","Comunicación Social","Humanidades"],
["🌐","Idiomas","Humanidades"],
["⚖️","Derecho","Humanidades"],

["📈","Administración","Negocios"],
["📣","Marketing","Negocios"],
["💰","Economía","Negocios"],
["🌍","Comercio Internacional","Negocios"],

["🧠","Psicología","Área Social"],
["👩‍🏫","Educación","Área Social"],
["🤝","Trabajo Social","Área Social"],
["🌎","Sociología","Área Social"]

];


/* ===================================
   VARIABLES
=================================== */

let preguntaActual = 0;

let respuestas = [];

let resultadosFinales = null;


/* ===================================
   NAVEGACIÓN
=================================== */

function mostrarSeccion(id){

document
.querySelectorAll(".seccion")
.forEach(seccion=>{

seccion.classList.remove("activa");

});


document
.getElementById(id)
.classList.add("activa");


window.scrollTo({
top:0,
behavior:"smooth"
});

}


/* ===================================
   TEST
=================================== */

function iniciarTest(){

preguntaActual=0;

respuestas=[];

resultadosFinales=null;

mostrarSeccion("test");

mostrarPregunta();

}


function mostrarPregunta(){

const pregunta=
preguntas[preguntaActual];


document.getElementById(
"preguntaTexto"
).textContent=
pregunta.texto;


document.getElementById(
"numeroPregunta"
).textContent=
`${preguntaActual+1} / ${preguntas.length}`;


document.getElementById(
"numeroGrande"
).textContent=
String(
preguntaActual+1
).padStart(2,"0");


const porcentaje=
((preguntaActual+1)/
preguntas.length)*100;


document.getElementById(
"progreso"
).style.width=
porcentaje+"%";


document.getElementById(
"anterior"
).style.visibility=
preguntaActual===0
?"hidden"
:"visible";

}


function responder(valor){

respuestas[
preguntaActual
]=valor;


if(
preguntaActual <
preguntas.length-1
){

preguntaActual++;

mostrarPregunta();

}else{

calcularResultados();

}

}


function preguntaAnterior(){

if(preguntaActual>0){

preguntaActual--;

mostrarPregunta();

}

}


/* ===================================
   CALCULAR RESULTADOS
=================================== */

function calcularResultados(){

let puntos={};

let maximos={};


Object.keys(areas)
.forEach(area=>{

puntos[area]=0;

maximos[area]=0;

});


preguntas.forEach(
(pregunta,index)=>{

puntos[pregunta.area]+=
respuestas[index] || 0;

maximos[pregunta.area]+=4;

});


let porcentajes={};


Object.keys(puntos)
.forEach(area=>{

porcentajes[area]=
Math.round(
(puntos[area]/
maximos[area])*100
);

});


resultadosFinales=
porcentajes;


localStorage.setItem(
"resultadosVocacionales",
JSON.stringify(porcentajes)
);


mostrarResultados();

}


/* ===================================
   RESULTADOS
=================================== */

function mostrarResultados(){

mostrarSeccion("resultados");


if(!resultadosFinales){

const guardado=
localStorage.getItem(
"resultadosVocacionales"
);


if(guardado){

resultadosFinales=
JSON.parse(guardado);

}

}


if(!resultadosFinales){

return;

}


const ordenados=
Object.entries(
resultadosFinales
).sort(
(a,b)=>b[1]-a[1]
);


const mejorArea=
ordenados[0][0];


const info=
areas[mejorArea];


let barras="";


ordenados.forEach(
([area,porcentaje])=>{

barras+=`

<div class="fila-resultado">

<strong>
${areas[area].nombre}
</strong>

<div class="barra-resultado">

<div style="
width:${porcentaje}%
"></div>

</div>

<span>
${porcentaje}%
</span>

</div>

`;

});


let recomendaciones="";


info.carreras
.slice(0,6)
.forEach(carrera=>{

recomendaciones+=`

<div class="carrera-card">

<span>
${info.icono}
</span>

<h3>
${carrera}
</h3>

<p>
Una opción relacionada con
${info.nombre}.
</p>

</div>

`;

});


document.getElementById(
"contenidoResultados"
).innerHTML=`

<div class="resultado-cabecera">

<span class="mini">
TU PERFIL
</span>

<h2>
${info.icono}
${info.nombre}
</h2>

<p>
Este resultado representa
tus intereses actuales.
</p>

</div>


<div class="resultado-principal">

<h3>
Tu área más destacada:
${info.nombre}
</h3>

<p>
${info.descripcion}
</p>

</div>


<h3>
Tu mapa de intereses
</h3>

<div class="barras-resultados">

${barras}

</div>


<h3>
Carreras que puedes explorar
</h3>

<div class="recomendaciones">

${recomendaciones}

</div>


<div style="
text-align:center;
margin-top:40px;
">

<button
class="btn-principal"
onclick="iniciarTest()">

REPETIR TEST

</button>

</div>

`;

}


/* ===================================
   MATERIAS
=================================== */

function verMateria(id){

const materia=
materias[id];


let lista="";


materia.carreras
.forEach(carrera=>{

lista+=`

<div class="carrera-mini">

🎓 ${carrera}

</div>

`;

});


document.getElementById(
"detalleMateria"
).innerHTML=`

<div class="materia-info">

<h3>
${materia.nombre}
</h3>

<p>
${materia.descripcion}
</p>

<div class="carreras-materia">

${lista}

</div>

</div>

`;

}


/* ===================================
   EXPLORADOR DE CARRERAS
=================================== */

function mostrarCarreras(){

const buscador=
document.getElementById(
"buscarCarrera"
);


const texto=
buscador
? buscador.value.toLowerCase()
: "";


const contenedor=
document.getElementById(
"listaCarreras"
);


contenedor.innerHTML="";


const filtradas=
carreras.filter(carrera=>

carrera[1]
.toLowerCase()
.includes(texto)

||

carrera[2]
.toLowerCase()
.includes(texto)

);


filtradas.forEach(carrera=>{

const tarjeta=
document.createElement("article");

tarjeta.className=
"carrera-card";


tarjeta.innerHTML=`

<span>
${carrera[0]}
</span>

<h3>
${carrera[1]}
</h3>

<p>
Área:
${carrera[2]}
</p>

`;


contenedor.appendChild(
tarjeta
);

});

}


mostrarCarreras();

