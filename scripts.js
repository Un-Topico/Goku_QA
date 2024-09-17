console.log("Script cargado"); // Verifica si el script se carga correctamente

let currentQuestionIndex = 0;
let score = 0;
let previousImage = "./img/imagenes/normal.jpg";
let displayedImages = [];
let selectedQuestions = [];

// Función para seleccionar el tema del cuestionario
function selectTopic(topic) {
    const preguntas = {
        preguntas1,
        preguntas2,
        preguntas3,
        preguntas4,
        preguntas5,
        preguntas6
    };

    selectedQuestions = preguntas[topic] || [];

    document.getElementById('selection-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('go-back-btn').classList.remove('hidden'); // Mostrar el botón de regresar
}

// Función para iniciar el cuestionario
function startQuiz() {
    // Ocultar el botón "Comenzar" y el botón "Regresar"
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('go-back-btn').style.display = 'none';

    // Ocultar cualquier resultado anterior
    document.getElementById('result').classList.add('hidden');
    document.getElementById('options-container').innerHTML = '';
    score = 0;
    currentQuestionIndex = 0;
    displayedImages = [previousImage];

    // Iniciar la barra de progreso en 0
    updateProgressBar();

    // Mezclar preguntas y opciones
    selectedQuestions.forEach(q => {
        q.options = shuffle(q.options); // Mezclar opciones
    });
    selectedQuestions = shuffle(selectedQuestions); // Mezclar preguntas
    
    loadQuestion();
}


// Función para volver a la selección de tema
function goBack() {
    document.getElementById('selection-container').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    
    // Reiniciar variables clave
    currentQuestionIndex = 0;
    score = 0;
    displayedImages = [previousImage];
    
    // Restaurar el estado inicial de los botones
    const goBackBtn = document.getElementById('go-back-btn');
    goBackBtn.classList.remove('hidden-offscreen');
    goBackBtn.classList.add('visible-onscreen');
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.setAttribute('aria-valuenow', progressPercentage);
}

// Función para cargar la siguiente pregunta
function loadQuestion() {
    const imageElement = document.getElementById('question-image');
    imageElement.style.opacity = 0; // Comienza con la imagen oculta

    if (currentQuestionIndex < selectedQuestions.length) {
        const questionData = selectedQuestions[currentQuestionIndex];
        document.getElementById('question').innerText = questionData.question;

        // Actualizar la imagen con base en el índice actual
        imageElement.src = images[imageIndex] || previousImage;
        imageElement.onload = () => {
            imageElement.style.opacity = 1; // Muestra la imagen cuando haya terminado de cargar
        };

        // Actualizar la barra de progreso
        updateProgressBar();

        document.getElementById('options-container').innerHTML = '';

        // Crear un contenedor de Bootstrap con dos columnas
        const colClass = 'col-md-6';
        const row = document.createElement('div');
        row.className = 'row';

        questionData.options.forEach((option, index) => {
            const col = document.createElement('div');
            col.className = colClass;

            const button = document.createElement('button');
            button.className = `option btn-block option-${index + 1}`; // Asignar clase según el índice
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

    // Obtener todos los botones de opción
    const optionButtons = document.querySelectorAll('#options-container button');

    // Si la respuesta es correcta
    if (selectedIndex === correctOptionIndex) {
        score++; // Incrementa el puntaje
        imageIndex++; // Avanza en el array de imágenes
    } else {
        imageIndex--; // Retrocede en el array de imágenes
    }

    // Asegurar que el índice esté dentro del rango permitido (de 0 a longitud del array de imágenes - 1)
    if (imageIndex < 0) {
        imageIndex = 0; // No permitir posiciones negativas
    } else if (imageIndex >= images.length) {
        imageIndex = images.length - 1; // No permitir que sobrepase el límite superior
    }

    // Actualizar la imagen mostrada inmediatamente
    const imageElement = document.getElementById('question-image');
    imageElement.src = images[imageIndex] || previousImage; // Actualiza la imagen
    imageElement.style.opacity = 1; // Asegura que la imagen se muestre

    // Cambiar los colores de fondo de las opciones
    optionButtons.forEach((button, index) => {
        if (index === correctOptionIndex) {
            button.style.backgroundColor = 'green'; // Respuesta correcta en verde
        } else {
            button.style.backgroundColor = 'red'; // Respuesta incorrecta en rojo
        }
        // Deshabilitar los botones después de seleccionar una opción
        button.disabled = true;
    });

    // Esperar unos segundos antes de cargar la siguiente pregunta
    setTimeout(() => {
        // Cargar la siguiente pregunta
        currentQuestionIndex++;
        loadQuestion();
    }, 1000); // Espera 2 segundos antes de cargar la siguiente pregunta
}



// Función para mostrar el resultado final
function showResult() {
    document.getElementById('question').innerText = "¡Has completado el cuestionario!";
    document.getElementById('question-image').src = displayedImages[displayedImages.length - 1] || previousImage;
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('final-score').innerText = `Tu puntuación: ${score} de ${selectedQuestions.length}`;
    //document.getElementById('final-image').innerText = `Última imagen mostrada: ${displayedImages[displayedImages.length - 1] || previousImage}`;
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
