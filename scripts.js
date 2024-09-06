console.log("Script cargado"); // Verifica si el script se carga correctamente

const preguntas1 = [
    {
        question: "¿Qué son las pruebas de caja negra?",
        options: [
            "Pruebas que examinan las funcionalidades del software sin conocer su diseño interno, enfocándose en entradas y salidas.",
            "Pruebas que examinan el código fuente línea por línea.",
            "Pruebas que solo se realizan después de la implementación.",
            "Pruebas que solo verifican la interfaz gráfica del usuario."
        ],
        correct: 0, // Índice de la respuesta correcta
        image: "./img/imagenes/bien 1.jpg"
    },
    {
        question: "¿Qué ventajas ofrecen las pruebas de caja negra?",
        options: [
            "No requieren conocer el código fuente, permitiendo enfocarse en requisitos y comportamiento del software.",
            "Permiten evaluar la eficiencia del código fuente.",
            "Requieren menos tiempo y recursos que otros tipos de pruebas.",
            "Son las más adecuadas para probar la seguridad del software."
        ],
        correct: 1,
        image: "./img/imagenes/bien 1-1.jpg"
    },
    {
        question: "¿Qué son las pruebas de caja blanca?",
        options: [
            "Pruebas que evalúan el software con conocimiento detallado del código y su estructura interna.",
            "Pruebas que solo se centran en la interfaz del usuario.",
            "Pruebas que no requieren conocimiento técnico avanzado.",
            "Pruebas que se llevan a cabo sin acceso al código fuente."
        ],
        correct: 2,
        image: "./img/imagenes/bien 2.jpg"
    },
    {
        question: "¿Cómo se llevan a cabo las pruebas de caja blanca?",
        options: [
            "Mediante la creación de casos de prueba basados en el análisis del código y la estructura interna.",
            "Con pruebas aleatorias de la funcionalidad del software.",
            "Verificando únicamente las salidas del sistema.",
            "Usando solo herramientas automatizadas sin intervención manual."
        ],
        correct: 3,
        image: "./img/imagenes/bien 2-1.jpg"
    }
];

const preguntas2 = [
    {
        question: "¿Qué es una prueba de integración?",
        options: [
            "Prueba que evalúa la interacción entre diferentes módulos del software.",
            "Prueba que se realiza únicamente en la interfaz gráfica.",
            "Prueba que verifica la seguridad del sistema.",
            "Prueba que revisa el código fuente línea por línea."
        ],
        correct: 0,
        image: "./img/imagenes/bien 2.jpg"
    },
    {
        question: "¿Cuál es el objetivo principal de las pruebas de regresión?",
        options: [
            "Asegurar que las nuevas modificaciones no afecten el funcionamiento existente del software.",
            "Evaluar el rendimiento del software bajo condiciones extremas.",
            "Verificar la seguridad del sistema.",
            "Asegurar que el software cumpla con los requisitos del cliente."
        ],
        correct: 0,
        image: "./img/imagenes/bien 2-1.jpg"
    },
    {
        question: "¿Qué son las pruebas de sistema?",
        options: [
            "Pruebas que evalúan el sistema completo como un todo, asegurando que todos los componentes funcionen juntos como se espera.",
            "Pruebas que solo se realizan en el componente de la base de datos.",
            "Pruebas que se centran únicamente en la interfaz de usuario.",
            "Pruebas que se realizan sin acceso al sistema completo."
        ],
        correct: 0,
        image: "./img/imagenes/bien 3.jpg"
    },
    {
        question: "¿Qué es una prueba de aceptación?",
        options: [
            "Prueba realizada para verificar si el sistema cumple con los requisitos y expectativas del cliente.",
            "Prueba que se realiza únicamente durante la fase de desarrollo.",
            "Prueba enfocada en la seguridad del software.",
            "Prueba realizada sin involucrar al cliente."
        ],
        correct: 0,
        image: "./img/imagenes/bien 3-1.jpg"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let previousImage = "./img/imagenes/normal.jpg";
let displayedImages = [];
let selectedQuestions = [];

// Función para seleccionar el tema del cuestionario
function selectTopic(topic) {
    if (topic === 'preguntas1') {
        selectedQuestions = preguntas1;
    } else if (topic === 'preguntas2') {
        selectedQuestions = preguntas2;
    }
    document.getElementById('selection-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('go-back-btn').classList.remove('hidden'); // Mostrar el botón de regresar
}


// Función para iniciar el cuestionario
function startQuiz() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('options-container').innerHTML = '';
    score = 0;
    currentQuestionIndex = 0;
    displayedImages = [previousImage];
    
    // Mezclar preguntas y opciones
    selectedQuestions.forEach(q => {
        q.options = shuffle(q.options); // Mezclar opciones
    });
    selectedQuestions = shuffle(selectedQuestions); // Mezclar preguntas
    
    loadQuestion();
    
    // Aplicar el efecto de ocultamiento al botón de regresar
    const goBackBtn = document.getElementById('go-back-btn');
    goBackBtn.classList.add('hidden-with-animation');
    
    // Esperar a que termine la animación y luego ocultar el botón
    goBackBtn.addEventListener('transitionend', () => {
        goBackBtn.classList.add('hidden'); // Ocultar completamente el botón
        goBackBtn.classList.remove('hidden-with-animation'); // Eliminar la clase de animación
    }, { once: true });
}

// Función para volver a la selección de tema
function goBack() {
    document.getElementById('selection-container').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('go-back-btn').classList.remove('hidden'); // Mostrar el botón de regresar
}

// Función para cargar la siguiente pregunta
function loadQuestion() {
    const imageElement = document.getElementById('question-image');
    imageElement.style.opacity = 0; // Comienza con la imagen oculta
    
    if (currentQuestionIndex < selectedQuestions.length) {
        const questionData = selectedQuestions[currentQuestionIndex];
        document.getElementById('question').innerText = questionData.question;
        imageElement.src = displayedImages[displayedImages.length - 1] || previousImage;
        imageElement.onload = () => {
            imageElement.style.opacity = 1; // Muestra la imagen cuando haya terminado de cargar
        };
        document.getElementById('options-container').innerHTML = '';

        // Crear un contenedor de Bootstrap con dos columnas
        const colClass = 'col-md-6';
        const row = document.createElement('div');
        row.className = 'row';

        questionData.options.forEach((option, index) => {
            const col = document.createElement('div');
            col.className = colClass;

            const button = document.createElement('button');
            button.className = 'option btn-block';
            button.innerText = option;
            button.onclick = () => checkAnswer(index);

            col.appendChild(button);
            row.appendChild(col);
        });

        document.getElementById('options-container').appendChild(row);
    } else {
        showResult();
    }
}

// Función para verificar la respuesta seleccionada
function checkAnswer(selectedIndex) {
    const questionData = selectedQuestions[currentQuestionIndex];
    const correctOptionIndex = questionData.options.indexOf(questionData.options[questionData.correct]);

    if (selectedIndex === correctOptionIndex) {
        score++;
        displayedImages.push(questionData.image);
    } else {
        if (displayedImages.length > 1) {
            displayedImages.pop();
        }
    }
    currentQuestionIndex++;
    loadQuestion();
}

// Función para mostrar el resultado final
function showResult() {
    document.getElementById('question').innerText = "¡Has completado el cuestionario!";
    document.getElementById('question-image').src = displayedImages[displayedImages.length - 1] || previousImage;
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('final-score').innerText = `Tu puntuación: ${score} de ${selectedQuestions.length}`;
    document.getElementById('final-image').innerText = `Última imagen mostrada: ${displayedImages[displayedImages.length - 1] || previousImage}`;
    document.getElementById('retry-btn').classList.remove('hidden');
}

// Función para reintentar el cuestionario
function retryQuiz() {
    location.reload(); // Recarga la página
}

// Función para mezclar un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
