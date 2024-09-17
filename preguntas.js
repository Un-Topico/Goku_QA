const preguntas1 = [
    {
        question: "¿Cuál de los siguientes es un modelo de prueba basado en el comportamiento del sistema?",
        options: [
            "Prueba de integración",
            "Prueba de regresión",
            "Prueba funcional",
            "Prueba de estrés"
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es el principal propósito de la prueba de regresión?",
        options: [
            "Verificar la seguridad del software",
            "Asegurar que los cambios no afecten las funcionalidades existentes",
            "Evaluar el rendimiento bajo carga",
            "Verificar la compatibilidad con dispositivos móviles"
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de prueba se enfoca en evaluar cómo el software funciona con otros sistemas o componentes?",
        options: [
            "Prueba de unidad",
            "Prueba de integración",
            "Prueba de aceptación",
            "Prueba de humo"
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de los siguientes modelos de prueba es utilizado para probar el software en etapas tempranas?",
        options: [
            "Prueba de aceptación",
            "Prueba de humo",
            "Prueba de regresión",
            "Prueba de integración continua"
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué modelo de prueba asegura que el sistema cumpla con los requisitos del usuario final?",
        options: [
            "Prueba de estrés",
            "Prueba de aceptación",
            "Prueba de rendimiento",
            "Prueba de regresión"
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿En qué modelo de prueba se utilizan casos de prueba diseñados sin conocer el código fuente?",
        options: [
            "Prueba de caja blanca",
            "Prueba de unidad",
            "Prueba de caja negra",
            "Prueba de integración"
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de las siguientes pruebas verifica el comportamiento del sistema bajo condiciones extremas?",
        options: [
            "Prueba de carga",
            "Prueba de estrés",
            "Prueba de humo",
            "Prueba de regresión"
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es el principal objetivo de la prueba de unidad?",
        options: [
            "Verificar la integración entre componentes",
            "Validar la funcionalidad completa del sistema",
            "Probar el rendimiento del software",
            "Verificar el funcionamiento correcto de pequeñas partes del código individualmente"
        ],
        correct: 3, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué modelo de prueba se enfoca en verificar la estabilidad y fiabilidad del sistema después de pequeños cambios?",
        options: [
            "Prueba de integración",
            "Prueba de aceptación",
            "Prueba de regresión",
            "Prueba de carga"
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de prueba se realiza para determinar si el sistema puede manejar una gran cantidad de usuarios simultáneos?",
        options: [
            "Prueba de carga",
            "Prueba de unidad",
            "Prueba de humo",
            "Prueba funcional"
        ],
        correct: 0, // Índice de la respuesta correcta
    }
];

const preguntas2 = [
    {
        question: "¿Qué son las pruebas dinámicas de software?",
        options: [
            "Pruebas que evalúan el comportamiento del software en tiempo de ejecución",
            "Pruebas que verifican el código fuente sin ejecutarlo",
            "Pruebas que solo verifican la interfaz gráfica",
            "Pruebas estáticas del sistema"
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de las siguientes es una característica de las pruebas dinámicas?",
        options: [
            "Se realizan sin ejecutar el software",
            "Implican la ejecución del software para encontrar defectos",
            "Son pruebas solo de rendimiento",
            "No pueden realizarse de manera automatizada"
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de pruebas dinámicas se enfoca en verificar el comportamiento del software bajo condiciones normales de operación?",
        options: [
            "Prueba de estrés",
            "Prueba funcional",
            "Prueba de carga",
            "Prueba de seguridad"
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de las siguientes NO es una prueba dinámica?",
        options: [
            "Prueba funcional",
            "Prueba de rendimiento",
            "Prueba de integración",
            "Revisión de código"
        ],
        correct: 3, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué pruebas dinámicas evalúan el comportamiento del sistema cuando es sometido a una alta demanda de usuarios?",
        options: [
            "Pruebas de unidad",
            "Pruebas de integración",
            "Pruebas de carga",
            "Pruebas de aceptación"
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿En qué momento del ciclo de vida del software se pueden realizar las pruebas dinámicas?",
        options: [
            "Solo en la fase de diseño",
            "Solo después de la implementación completa",
            "Durante y después del desarrollo del software",
            "Antes de escribir el código"
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué técnica de prueba dinámica utiliza casos de prueba basados en los requisitos funcionales del software?",
        options: [
            "Pruebas de estrés",
            "Pruebas de caja negra",
            "Pruebas de unidad",
            "Pruebas de caja blanca"
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de prueba dinámica se enfoca en medir el tiempo de respuesta y la estabilidad del sistema bajo condiciones específicas?",
        options: [
            "Prueba de regresión",
            "Prueba de integración",
            "Prueba de rendimiento",
            "Prueba de aceptación"
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es el propósito principal de las pruebas de integración como parte de las pruebas dinámicas?",
        options: [
            "Probar el sistema en condiciones extremas",
            "Verificar el correcto funcionamiento de los componentes individuales",
            "Asegurar que los diferentes módulos del sistema trabajen juntos correctamente",
            "Validar la interfaz de usuario"
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de las siguientes pruebas dinámicas tiene como objetivo encontrar errores cuando se ejercen las funciones más básicas del software?",
        options: [
            "Pruebas de humo",
            "Pruebas de unidad",
            "Pruebas de carga",
            "Pruebas de seguridad"
        ],
        correct: 0, // Índice de la respuesta correcta
    }
];

const preguntas3 = [
    {
        question: "¿Qué son las pruebas estáticas de software?",
        options: [
            "Pruebas que evalúan el código sin ejecutar el software",
            "Pruebas que requieren la ejecución del software para encontrar defectos",
            "Pruebas realizadas solo en la interfaz gráfica",
            "Pruebas que verifican el rendimiento del sistema bajo carga"
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de los siguientes es un ejemplo de prueba estática?",
        options: [
            "Revisión de código",
            "Prueba de integración",
            "Prueba de carga",
            "Prueba de aceptación"
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué técnica se utiliza en las pruebas estáticas para encontrar errores sin ejecutar el software?",
        options: [
            "Análisis estático",
            "Pruebas de estrés",
            "Pruebas de regresión",
            "Pruebas de rendimiento"
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de las siguientes opciones NO es una técnica de prueba estática?",
        options: [
            "Inspección",
            "Revisión de pares",
            "Walkthrough",
            "Prueba de unidad"
        ],
        correct: 3, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué rol tiene el análisis estático en las pruebas estáticas?",
        options: [
            "Detectar defectos en el código sin necesidad de ejecutarlo",
            "Evaluar la respuesta del software bajo una alta demanda de usuarios",
            "Ejecutar el software en diferentes plataformas",
            "Verificar la funcionalidad del sistema después de cambios menores"
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿En qué momento del ciclo de desarrollo del software se realizan las pruebas estáticas?",
        options: [
            "Solo después de la implementación",
            "Antes y durante el desarrollo",
            "Solo en la fase de pruebas finales",
            "Después del lanzamiento del producto"
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es el objetivo principal de las revisiones de código como técnica de prueba estática?",
        options: [
            "Evaluar el rendimiento del software",
            "Verificar la correcta implementación del código y encontrar defectos potenciales",
            "Asegurar la compatibilidad entre sistemas",
            "Validar las pruebas unitarias"
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de pruebas estáticas implican una revisión formal del código con un equipo?",
        options: [
            "Inspección",
            "Pruebas de caja negra",
            "Pruebas de integración",
            "Pruebas de humo"
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de las siguientes afirmaciones describe correctamente una inspección estática?",
        options: [
            "Es un proceso formal y estructurado de revisión de documentos o código",
            "Implica la ejecución del software para validar los resultados",
            "Se utiliza principalmente para probar la interfaz de usuario",
            "Requiere herramientas automatizadas para ejecutarse"
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es una ventaja de las pruebas estáticas en el proceso de desarrollo de software?",
        options: [
            "Detectan defectos en las primeras etapas del desarrollo, lo que reduce costos",
            "Solo se realizan al final del desarrollo, lo que garantiza su precisión",
            "Son útiles únicamente para pruebas de rendimiento",
            "Verifican la funcionalidad del software en tiempo real"
        ],
        correct: 0, // Índice de la respuesta correcta
    }
];

const preguntas4 = [
    {
        question: "¿Qué son las pruebas de Caja Negra en software?",
        options: [
            "Pruebas que se enfocan en las entradas y salidas del software sin conocer su estructura interna.",
            "Pruebas que evalúan el código fuente línea por línea.",
            "Pruebas que se centran en la revisión manual del código.",
            "Pruebas que verifican exclusivamente la interfaz gráfica."
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es el principal objetivo de las pruebas de Caja Negra?",
        options: [
            "Verificar el rendimiento del software bajo carga pesada.",
            "Validar que el software cumple con los requisitos funcionales definidos.",
            "Optimizar el código fuente y su estructura.",
            "Evaluar el diseño de la base de datos."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de conocimiento es necesario para realizar pruebas de Caja Negra?",
        options: [
            "Conocimiento profundo del código fuente.",
            "Conocimiento de la estructura interna del software.",
            "Conocimiento de los requisitos funcionales y de negocio del software.",
            "Conocimiento de la arquitectura del sistema."
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de las siguientes pruebas pertenece a la categoría de pruebas de Caja Negra?",
        options: [
            "Pruebas de unidad.",
            "Revisión de código.",
            "Pruebas de interfaz.",
            "Pruebas de cobertura."
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿En qué fase del desarrollo de software se pueden realizar las pruebas de Caja Negra?",
        options: [
            "Solo al finalizar el desarrollo del software.",
            "En cualquier fase del ciclo de desarrollo.",
            "Antes de la codificación.",
            "Solo durante la fase de integración."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué se verifica principalmente en las pruebas de Caja Negra?",
        options: [
            "La estructura interna del código.",
            "El comportamiento del software en base a sus entradas y salidas.",
            "El diseño de la interfaz gráfica.",
            "La optimización del uso de recursos."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de las siguientes es una técnica comúnmente utilizada en las pruebas de Caja Negra?",
        options: [
            "Cobertura de código.",
            "Partición de equivalencia.",
            "Análisis estático.",
            "Revisión de pares."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué técnica de Caja Negra divide las entradas posibles del software en clases que se espera que se comporten de manera similar?",
        options: [
            "Pruebas de regresión.",
            "Análisis de valor límite.",
            "Partición de equivalencia.",
            "Pruebas de integración."
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de error es más probable de ser detectado con pruebas de Caja Negra?",
        options: [
            "Errores de implementación del código.",
            "Errores en la funcionalidad del software según los requisitos.",
            "Errores de seguridad en el servidor.",
            "Errores en la estructura del código."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es una ventaja clave de las pruebas de Caja Negra?",
        options: [
            "No requieren acceso al código fuente, lo que permite la prueba desde la perspectiva del usuario.",
            "Permiten realizar una revisión exhaustiva del código.",
            "Son útiles para verificar el rendimiento del hardware.",
            "Permiten encontrar errores relacionados con la estructura del software."
        ],
        correct: 0, // Índice de la respuesta correcta
    }
];

const preguntas5 = [
    {
        question: "¿Qué son las pruebas de Caja Blanca en software?",
        options: [
            "Pruebas que examinan el funcionamiento interno del software y su estructura de código.",
            "Pruebas que se centran únicamente en la interfaz gráfica del usuario.",
            "Pruebas que validan el software sin conocer su estructura interna.",
            "Pruebas enfocadas en la usabilidad del sistema."
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es el objetivo principal de las pruebas de Caja Blanca?",
        options: [
            "Validar que el software cumple con los requisitos funcionales.",
            "Evaluar el comportamiento del software en base a sus entradas y salidas.",
            "Verificar el flujo lógico y las rutas posibles dentro del código.",
            "Medir el rendimiento del sistema bajo diferentes condiciones de carga."
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de conocimiento se requiere para realizar pruebas de Caja Blanca?",
        options: [
            "Conocimiento profundo del diseño y estructura interna del software.",
            "Conocimiento de los requisitos del cliente.",
            "Conocimiento de los flujos de trabajo del usuario final.",
            "Conocimiento de las técnicas de diseño gráfico."
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de las siguientes pruebas pertenece a la categoría de pruebas de Caja Blanca?",
        options: [
            "Pruebas de unidad.",
            "Pruebas de aceptación del usuario.",
            "Pruebas de caja negra.",
            "Pruebas de interfaz gráfica."
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué se evalúa principalmente en las pruebas de Caja Blanca?",
        options: [
            "La funcionalidad del sistema desde la perspectiva del usuario.",
            "El rendimiento del sistema bajo diferentes niveles de carga.",
            "El diseño y la arquitectura del código fuente.",
            "La accesibilidad del sistema para usuarios con discapacidades."
        ],
        correct: 2, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué técnica se utiliza comúnmente en las pruebas de Caja Blanca?",
        options: [
            "Cobertura de código.",
            "Partición de equivalencia.",
            "Análisis de valor límite.",
            "Pruebas de regresión."
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de los siguientes es un beneficio de las pruebas de Caja Blanca?",
        options: [
            "Permiten probar la funcionalidad del software sin conocer el código.",
            "Permiten revisar y optimizar la lógica y las rutas del código.",
            "Son más fáciles de realizar que las pruebas de Caja Negra.",
            "Son las más adecuadas para probar la usabilidad del sistema."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de errores son más propensos a ser detectados con pruebas de Caja Blanca?",
        options: [
            "Errores de rendimiento en la interfaz gráfica.",
            "Errores de lógica y control de flujo dentro del código.",
            "Errores en la experiencia del usuario final.",
            "Errores relacionados con los requisitos de alto nivel del cliente."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué aspecto del código es clave para verificar en las pruebas de Caja Blanca?",
        options: [
            "La cantidad de errores de interfaz de usuario.",
            "La cobertura de las ramas y caminos lógicos en el código.",
            "El cumplimiento con los requisitos funcionales del cliente.",
            "La facilidad de uso del software para los usuarios finales."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿En qué fase del ciclo de desarrollo se pueden realizar las pruebas de Caja Blanca?",
        options: [
            "Después de completar las pruebas de integración.",
            "Durante y después de la codificación del software.",
            "Solo al final del ciclo de desarrollo.",
            "Después de que los usuarios han realizado pruebas de aceptación."
        ],
        correct: 1, // Índice de la respuesta correcta
    }
];

const preguntas6 = [
    {
        question: "¿Qué son las pruebas de Caja Gris en software?",
        options: [
            "Pruebas que combinan aspectos de Caja Blanca y Caja Negra, con conocimiento parcial del sistema.",
            "Pruebas que evalúan únicamente la interfaz de usuario.",
            "Pruebas que requieren un conocimiento completo del código fuente.",
            "Pruebas que se enfocan solo en el rendimiento del sistema."
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es el principal beneficio de las pruebas de Caja Gris?",
        options: [
            "Permiten verificar el comportamiento funcional sin conocer el código.",
            "Combinan el acceso limitado al código con la verificación de la funcionalidad, equilibrando enfoques de Caja Blanca y Negra.",
            "Son más rápidas que las pruebas de Caja Blanca.",
            "Se centran en encontrar errores de diseño de interfaz."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué conocimiento se requiere para realizar pruebas de Caja Gris?",
        options: [
            "Acceso limitado a la estructura interna del software y conocimiento de los requisitos funcionales.",
            "Conocimiento completo del código fuente.",
            "Ningún conocimiento de la estructura interna del software.",
            "Solo conocimiento del diseño gráfico y la interfaz de usuario."
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál de los siguientes escenarios sería adecuado para una prueba de Caja Gris?",
        options: [
            "Validar la lógica interna del código sin acceso a los requisitos del negocio.",
            "Probar un sistema donde se tiene acceso limitado al código y se evalúan tanto entradas como salidas.",
            "Realizar pruebas solo en la interfaz gráfica del usuario.",
            "Realizar pruebas de estrés para evaluar el rendimiento bajo carga."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué técnica es común en las pruebas de Caja Gris?",
        options: [
            "Análisis de valor límite con acceso parcial al código.",
            "Inspección de código sin ejecutar el software.",
            "Pruebas de cobertura completa del código.",
            "Simulación de usuarios finales sin acceso al código fuente."
        ],
        correct: 0, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de pruebas se combinan en la metodología de Caja Gris?",
        options: [
            "Pruebas funcionales y pruebas de interfaz gráfica.",
            "Pruebas de Caja Blanca y pruebas de Caja Negra.",
            "Pruebas de rendimiento y pruebas de usabilidad.",
            "Pruebas de regresión y pruebas de integración."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Qué tipo de errores pueden detectarse con las pruebas de Caja Gris?",
        options: [
            "Errores relacionados solo con la interfaz gráfica.",
            "Errores tanto en la lógica interna del sistema como en su comportamiento externo.",
            "Errores de diseño de la arquitectura del hardware.",
            "Errores de rendimiento bajo altas cargas de usuarios."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es una desventaja de las pruebas de Caja Gris?",
        options: [
            "Requieren mucho más tiempo que las pruebas de Caja Blanca.",
            "Son menos efectivas para encontrar errores de seguridad en comparación con otras pruebas.",
            "No permiten detectar errores en la lógica interna del software.",
            "Requieren herramientas especializadas para ejecutarse, lo que las hace costosas."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿En qué situaciones las pruebas de Caja Gris son más útiles?",
        options: [
            "Cuando solo se requiere probar la interfaz gráfica del sistema.",
            "Cuando se tiene acceso limitado al código, pero se requiere evaluar tanto la funcionalidad como algunos aspectos internos.",
            "Cuando el equipo tiene acceso completo al código y quiere optimizar la eficiencia del sistema.",
            "Cuando el software necesita ser probado bajo condiciones extremas de carga."
        ],
        correct: 1, // Índice de la respuesta correcta
    },
    {
        question: "¿En qué fase del ciclo de desarrollo pueden realizarse las pruebas de Caja Gris?",
        options: [
            "Solo al finalizar el desarrollo del software.",
            "En cualquier fase del desarrollo, desde las pruebas de unidad hasta las pruebas de aceptación.",
            "Solo después de la implementación del sistema.",
            "Únicamente durante las pruebas de integración."
        ],
        correct: 1, // Índice de la respuesta correcta
    }
];
