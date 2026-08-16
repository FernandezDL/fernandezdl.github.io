import type { LocalizedPortfolioContent } from "@/types/types";

export const esContent: LocalizedPortfolioContent = {
  	navigation: {
		about: "Sobre mí",
		skills: "Habilidades",
		projects: "Proyectos",
		experience: "Experiencia",
		education: "Educación",
		contact: "Contacto",
  	},

	web: {
		navigation: {
			about: "Sobre mí",
			skills: "Habilidades",
			projects: "Proyectos",
			experience: "Experiencia",
			contact: "Contacto",
		},

		navbarSwitches: {
			area: {
				leftLabel: "Web",
				rightLabel: "Juegos",
				ariaLabel: "Cambiar área de desarrollo",
			},
			theme: {
				leftLabel: "Claro",
				rightLabel: "Oscuro",
				ariaLabel: "Cambiar tema de color",
			},
			language: {
				leftLabel: "En",
				rightLabel: "Es",
				ariaLabel: "Cambiar idioma",
			},
		},

		nameSection: {
			role: "Desarrolladora Full-Stack",
            statement: "Soy una desarrolladora full-stack a quien le apasiona crear y ejecutar diseños de la forma más fiel posible a la visión original. Me centro en los detalles visuales, en una implementación eficiente y en crear experiencias digitales pulidas que funcionen tan bien como se ven.",
            contactButton: "Contacto",
            viewWorkButton: "Mis proyectos",
        },

		sections: [
			{header: "Sobre mí", title: "Un poco sobre mí",},
			{header: "Habilidades", title: "Herramientas Técnicas",},
			{header: "Proyectos", title: "Proyectos Seleccionados",},
			{header: "Experiencia", title: "Experiencia Laboral",},
			{header: "Educación", title: "Formación Académica",},
			{header: "Contacto", title: "Pongámonos en Contacto",},
		],

		about: {
			index: "Sobre mí",
			title: "Un poco sobre mí",
			introduction:
				"Soy graduada de Ingeniería en Ciencias de la Computación y desarrolladora full-stack, con un enfoque especial en el desarrollo front-end. Disfruto transformar conceptos visuales en interfaces pulidas y responsivas que se mantengan fieles al diseño original.",
			approach:
				"Mi experiencia en desarrollo y diseño digital me permite abordar los proyectos tanto desde una perspectiva técnica como creativa. Me preocupo por una implementación limpia, el rendimiento, la usabilidad, la escalabilidad y los pequeños detalles que hacen que un producto resulte completo.",
			basedIn: "Localizada en",
			availability: "Disponible para",
			oportunities: "Abierta a oportunidades",
			languages: "Idiomas",
		},

		contactSection: {
			text: "Disponible para oportunidades de tiempo completo, contratos freelance y trabajos de consultoría.",
			phone: "Phone",
			name: "Name",
			message: "Message",
			button: "Enviar Mensaje",
		},

		footerSection: {
			madeBy: "Hecho con",
			button: "También hago juegos",
		},

		skills: [
            {number: 1, title: "Front-end", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap"]},
            {number: 2, title: "Back-end", skills: ["Node.js", "Express", "Python", "C#"]},
            {number: 3, title: "Diseño", skills: ["Adobe Photoshop", "Canva", "Figma"]},
            {number: 4, title: "Herramientas & Flujo de Trabajo", skills: ["GitHub", "Postman", "Microsoft 365", "Google Workspace"]}
        ],

		projects: [
            {
				number: 2, title: "Buscaminas Remake", description: "Remake del juego Buscaminas de Windows XP", image: "/Img/Minesweeper.png", tags: ["Angular", "TypeScript", "CSS3"], year: 2023,
				overview: "",
				problems: [],
				goals: {
					description: "",
					objectives: []
				},
				myRole: [],
				technologies: [],
				hostedLink: "",
				githubLink: null,
				videos: [],
				photos: null,
				members: null
			},
            {
				number: 1, title: "Replicando Duolingo", description: "Replica de una página web", image: "/Img/Duolingo.png", tags: ["CSS3", "HTML5", "Photoshop", "Babel"], year: 2023,
				overview: "",
				problems: [],
				goals: {
					description: "",
					objectives: []
				},
				myRole: [],
				technologies: [],
				hostedLink: "",
				githubLink: null,
				videos: [],
				photos: null,
				members: null
			},
            {
				number: 3, title: "Hamilmemory", description: "Juego de memoria con temática de Hamilton", image: "/Img/Hamilmemory.png", tags: ["HTML5", "JavaScript", "CSS3"], year: 2023,
				overview: "",
				problems: [],
				goals: {
					description: "",
					objectives: []
				},
				myRole: [],
				technologies: [],
				hostedLink: "",
				githubLink: null,
				videos: [],
				photos: null,
				members: null
			}
        ],
		
		workExperience: [
            {company: "Papercut Studios - Student Project", position: "UI Artista - Technical Artist - Modeladora 3D", startDate: "Feb 2026", endDate: "Aug 2026", description: ["Responsable de la creación de recursos 2D y elementos gráficos", "Implementación de menús y de la interfaz de usuario", "Creación e implementación de shaders y elementos gráficos", "Modelado de elementos 3D"]},
            {company: "Universidad del Valle de Guatemala", position: "Instructora", startDate: "2026", description: ["Instructora del módulo de programación del Diplomado 'Mujeres Creando Videojuegos'"]},
            {company: "Cerial Killer Games - Student Project", position: "Programadora", startDate: "Nov 2025", endDate: "Feb 2026", description: ["Programadora de IA de enemigos"]},
            {company: "Estudio Faser", position: "Desarrolladora Full-stack", startDate: "2025", description: ["Desarrollo full-stack", "Desarrollo de API", "Manejo de bases de datos"]},
            {company: "Spring Bus", position: "Desarrolladora Front-end", startDate: "2024", description: ["Desarrollo Front-end"]},
            {company: "Universidad del Valle de Guatemala", position: "Maestra Auxiliar", startDate: "2023", endDate:"2025", description: ["Organización de Computadoras y Assembler", "Comunicación Efectiva", "Investigación y Pensamiento Científico", "Sistemas y Tecnologías Web", "Inteligencia Artificial", "Sistemas Operativos"]},
            {company: "Laudato Si' Movement", position: "Desarrolladora de Bases de Datos", startDate: "2023", description: ["Planificación de bases de datos", "Desarrollo de bases de datos"]},
        ],

		academicExperience: [
            {institution: "Vancouver Film School", degree: "Programación para Videojuegos, Aplicaciones Móviles y Aplicaciones Web", startDate: "Sep 2025", endDate: "Ago 2026"},
            {institution: "Universidad del Valle de Guatemala", degree: "Licenciatura en Ingeniería en Ciencias de la Computación y Tecnologías de la Información", startDate: "Ene 2021", endDate: "Nov 2025"},
            {institution: "Unity Learn", degree: "Junior Programmer", startDate: "2025"},
            {institution: "Instituto Tecnológico del Suroccidente", degree: "Bachillerato en Ciencias y Letras con Orientación en Computación", startDate: "2005", endDate: "2020"},
        ],

		tabTitles:[
            {shortTitle: "Resumen"},
            {shortTitle: "Retos"},
            {shortTitle: "Mi rol", title: "Mi rol en el projecto"},
            {shortTitle: "Objetivos"},
            {shortTitle: "Tecnologías", title: "Tecnologías usadas"},
            {shortTitle: "Integrantes", title: "Integrantes del equipo"},
        ],
	},

	games: {
		navigation: {
			about: "Sobre mí",
			skills: "Habilidades",
			projects: "Proyectos",
			experience: "Experiencia",
			contact: "Contacto",
		},

		navbarSwitches: {
			area: {
				leftLabel: "Web",
				rightLabel: "Juegos",
				ariaLabel: "Cambiar área de desarrollo",
			},
			theme: {
				leftLabel: "Claro",
				rightLabel: "Oscuro",
				ariaLabel: "Cambiar tema de color",
			},
			language: {
				leftLabel: "En",
				rightLabel: "Es",
				ariaLabel: "Cambiar idioma",
			},
		},
		
		nameSection: {
            role: "Desarrolladora de Videojuegos",
            statement: "Soy una desarrolladora full-stack a quien le apasiona crear y ejecutar diseños de la forma más fiel posible a la visión original. Me centro en los detalles visuales, en una implementación eficiente y en crear experiencias digitales pulidas que funcionen tan bien como se ven.",
            contactButton: "Contacto",
            viewWorkButton: "Mis proyectos",
        },

		sections: [
			{header: "Sobre mí", title: "Un poco sobre mí",},
			{header: "Habilidades", title: "Herramientas Técnicas",},
			{header: "Proyectos", title: "Proyectos Seleccionados",},
			{header: "Experiencia", title: "Experiencia Laboral",},
			{header: "Educación", title: "Formación Académica",},
			{header: "Contacto", title: "Pongámonos en Contacto",},
		],

		about: {
			index: "Sobre mí",
			title: "Un poco sobre mí",
			introduction:
				"Soy graduada de Ingeniería en Ciencias de la Computación, desarrolladora de videojuegos y technical artist, con experiencia creando proyectos interactivos en Unity.",
			approach:
				"Disfruto trabajar en la intersección entre el arte y la programación, desarrollando interfaces, shaders, efectos visuales, sistemas de gameplay y recursos optimizados que contribuyan a experiencias de juego coherentes.",
			basedIn: "Localizada en",
			availability: "Disponible para",
			oportunities: "Abierta a oportunidades",
			languages: "Idiomas",
		},

		contactSection: {
			text: "Disponible para oportunidades de tiempo completo, contratos freelance y trabajos de consultoría.",
			phone: "Phone",
			name: "Name",
			message: "Message",
			button: "Enviar Mensaje",
		},

		footerSection: {
			madeBy: "Hecho con",
			button: "También hago desarrollo web",
		},

		skills: [
            {number: 1, title: "Desarrollo de juegos", skills: ["Unity", "C#", "Python"]},
            {number: 2, title: "Arte 3D", skills: ["Blender", "Maya"]},
            {number: 3, title: "Arte 2D", skills: ["Adobe Photoshop", "Canva"]},
			{number: 4, title: "Herramientas & Flujo de Trabajo", skills: ["GitHub", "Microsoft 365", "Google Workspace"]}
        ],

		projects: [
            {
				number: 1, title: "Papercut", description: "Juego 3D de tipo 'Bullet-Hell'", image: "/Img/papercut2.png", tags: ["Unity", "C#", "Photoshop", "GitHub", "Blender"], year: 2026,
				overview: "Papercut es un juego 3D de acción Bullet Hell con perspectica de tercera persona desarrollado en Unity. Creado como peroyecto final del programa Programming for Games, Web & Mobile Development de Vancouver Film School, ofrece una experiencia de ritmo rápido de 10 minutos.\n" +
					"El juego sigue a SUsie, una niña de 7 años que es transportada a un reino demoniaco hecho de papel de origami. Armada con unas tijeras máginas gigantes, deberá abrirse paso luchando a través del reino para rescatar a Mr. Business -su osito de peluche y mejor amigo- y encontrar el camino de regreso a casa.",
				problems: [
					{
						title: "Visibilidad en el juego",
						description: "Como juego bullet hell, PaperCut presenta al jugador numerosos enemigos, proyectiles, efectos y elementos del entorno moviéndose simultáneamente en pantalla. Uno de los principales desafíos de la UI fue proporcionar toda la información necesaria durante el juego sin obstruir la visión del jugador ni distraerlo de las amenazas que se aproximan.\n" +
							"Para abordar este desafío, decidimos minimizar la cantidad de elementos tradicionales del HUD e incorporar indicadores diegéticos e integrados al gameplay siempre que fuera posible. Esto permitió que la interfaz comunique información esencial, preserve la visibilidad y mantenga al jugador concentrado en la acción.\n" +
							"En las primeras versiones, el HUD contaba con una mira creada a partir de varias imágenes configuradas para mostrar hacia dónde disparaba el jugador y representar el impulso que aún tenía disponible. Este diseño se rehízo y la mira original fue reemplazada por una solución basada en shaders que, a diferencia de una imagen estática, podía ajustarse mediante parámetros en el inspector y controlarse dinámicamente por medio de código. Esta flexibilidad permitió modificar su forma y comportamiento, e incluso animarla según los diferentes estados del juego, sin necesidad de utilizar múltiples recursos gráficos separados.\n",
						id: "gameplay-visibility"
					},
					{
						title: "Identidad visual",
						description: "El juego contiene varias escenas, menús, elementos de interfaz y sistemas de gameplay que debían sentirse como parte de un mismo mundo. El principal desafío fue mantener la consistencia visual a lo largo de toda la experiencia y, al mismo tiempo, reforzar la ambientación del reino demoníaco de papel.\n" +
							"Para lograrlo, me basé en las temáticas de libros y papel del juego y las apliqué de manera consistente en toda la interfaz. Los elementos del HUD, los menús, la tipografía y los demás recursos gráficos fueron diseñados para sentirse como parte de un mismo mundo de cuento ilustrado y hecho a mano.\n" +
							"También establecí una paleta de colores y una tipografía consistentes en las diferentes escenas. La interfaz utiliza principalmente dos tonos de azul y dos tonos de rosado asociados con Susie. Esto conecta visualmente la UI con su personalidad, sus gustos y su imaginación, al mismo tiempo que le otorga una identidad reconocible a la experiencia general.\n",
						id: "visual-identity"
					},
					{
						title: "Hacer que Susie destaque",
						description: "Desde el inicio del proyecto, uno de nuestros principales objetivos artísticos fue hacer que Susie se distinguiera visualmente del reino demoníaco de papel. Sin embargo, este contraste debía mantenerse de manera consistente en el personaje, la UI, los efectos y el entorno que la rodeaba.\n" +
							"Además de incorporar la paleta de colores de Susie en la interfaz, añadí pequeños detalles animados para lograr una presentación más expresiva y visualmente atractiva. Se utilizaron efectos coloridos, como arcoíris y destellos, para enfatizar su presencia y reforzar el contraste entre su personalidad juguetona y el mundo apagado y hecho de papel que la rodeaba.\n",
						id: "susie-visibility"
					}
				],
				goals: {
					description: "El objetivo principal de PaperCut fue crear una experiencia de juego de 10 minutos que fuera atractiva, responsiva y pulida. Para lograrlo, el proyecto se enfocó en tres objetivos clave:",
					objectives: [
						"Ofrecer un sistema de combate y movimiento fluido y satisfactorio.",
						"Mantener un rendimiento estable durante toda la experiencia, con un promedio objetivo de 60 FPS.",
						"Ofrecer compatibilidad con controles de Xbox, controles de PlayStation y teclado y mouse, con controles consistentes y responsivos."
					]
				},
				myRole: [
					{
						title: "Artista de UI y 2D",
						tasks: [
							"Dibujar todos los recursos gráficos utilizados en el juego",
							"Configurar todos los menús del juego",
							"Configurar la UI del nivel principal",
							"Programar algunos elementos de la UI",
							"Crear etiquetas y elementos físicos para el equipo"
						],
						id: "ui-2d-art"
					},
					{
						title: "Tech Artist",
						tasks: [
							"Programar y crear shaders",
							"Implementar los shaders en el juego",
							"Programar elementos de la UI",
							"Escribir scripts para implementar funcionalidades en algunos elementos gráficos"
						],
						id: "tech-art"
					},
					{
						title: "Modeladora de props 3D",
						tasks: [
							"Buscar referencias",
							"Modelar props en 3D",
							"Realizar la ambientación de los escenarios"
						],
						id: "3d-modeler"
					}
				],
				technologies: [
					"Unity",
					"C#",
					"Shader Graph y HLSL",
					"Git & GitHub",
					"Blender",
					"Maya",
					"Photoshop"
				],
				hostedLink: "https://vfs-gdpg.itch.io/papercut",
				githubLink: null,
				videos: ["https://www.youtube.com/watch?v=2lFxIiGFCng"],
				photos: [
					"/Img/Papercut/Papercut1.png",
					"/Img/Papercut/Papercut2.png",
					"/Img/Papercut/Papercut3.png"
				],
				members: [
				{
					name: "Joel van der Lee",
					role: "Project manager - Diseñador de niveles - Diseñador narrativo"
				},
				{
					name: "Vinicius Januzzi",
					role: "Programador de gameplay - Programador de UI"
				},
				{
					name: "Kiran Wood",
					role: "Programador de IA de enemigos"
				},
				{
					name: "Paul Atwal",
					role: "Tech artist - Programador de audio - Diseñador técnico"
				},
				{
					name: "Angie Cole-Blais",
					role: "Artista 3D"
				},
				{
					name: "Diana Fernandez",
					role: "Artista de UI y 2D - Tech artist - Modeladora de props 3D"
				}
			]
			},
            {
				number: 2, title: "The Last Course", description: "Juego de combate y cocina Top-Down", image: "/Img/TheLastCourse.png", tags: ["Unity", "C#", "GitHub"], year: 2026,
				overview: "",
				problems: [],
				goals: {
					description: "",
					objectives: []
				},
				myRole: [],
				technologies: [],
				hostedLink: "",
				githubLink: null,
				videos: [],
				photos: null,
				members: null
			},
			{
				number: 4,
				title: "Conversation on the sofa",
				description: "Juego de desición narrativa",
				image: "/Img/Conversation-on-the-sofa/conversation1.png",
				tags: ["Unity", "C#", "GitHub"],
				year: 2025,
				overview: "",
				problems: [],
				goals: {
					description: "",
					objectives: []
				},
				myRole: [],
				technologies: [],
				hostedLink: "https://fernandezdl.itch.io/conversation-on-the-sofa",
				githubLink: "https://github.com/FernandezDL/conversation-on-the-sofa.git",
				videos: [],
				photos: [
					"/Img/Conversation-on-the-sofa/conversation1.png",
					"/Img/Conversation-on-the-sofa/conversation2.png",
					"/Img/Conversation-on-the-sofa/conversation3.png"
				],
				members: null
			},
            {
				number: 3, title: "Card-Jitsu Remake", description: "Remake del juego de Club Penguin", image: "/Img/Cardjitsu.png", tags: ["Python", "Photoshop", "Kivy"], year: 2023,
				overview: "",
				problems: [],
				goals: {
					description: "",
					objectives: []
				},
				myRole: [],
				technologies: [],
				hostedLink: "",
				githubLink: null,
				videos: [],
				photos: null,
				members: null
			}
        ],

		workExperience: [
            {company: "Papercut Studios - Student Project", position: "UI Artista - Technical Artist - Modeladora 3D", startDate: "Feb 2026", endDate: "Ago 2026", description: ["Responsable de la creación de recursos 2D y elementos gráficos", "Implementación de menús y de la interfaz de usuario", "Creación e implementación de shaders y elementos gráficos", "Modelado de elementos 3D"]},
            {company: "Universidad del Valle de Guatemala", position: "Instructora", startDate: "2026", description: ["Instructora del módulo de programación del Diplomado 'Mujeres Creando Videojuegos'"]},
            {company: "Cerial Killer Games - Student Project", position: "Programadora", startDate: "Nov 2025", endDate: "Feb 2026", description: ["Programadora de IA de enemigos"]},
            {company: "Estudio Faser", position: "Desarrolladora Full-stack", startDate: "2025", description: ["Desarrollo full-stack", "Desarrollo de API", "Manejo de bases de datos"]},
            {company: "Spring Bus", position: "Desarrolladora Front-end", startDate: "2024", description: ["Desarrollo Front-end"]},
            {company: "Universidad del Valle de Guatemala", position: "Maestra Auxiliar", startDate: "2023", endDate:"2025", description: ["Organización de Computadoras y Assembler", "Comunicación Efectiva", "Investigación y Pensamiento Científico", "Sistemas y Tecnologías Web", "Inteligencia Artificial", "Sistemas Operativos"]},
            {company: "Laudato Si' Movement", position: "Desarrolladora de Bases de Datos", startDate: "2023", description: ["Planificación de bases de datos", "Desarrollo de bases de datos"]},
        ],

		academicExperience: [
            {institution: "Vancouver Film School", degree: "Programación para Videojuegos, Aplicaciones Móviles y Aplicaciones Web", startDate: "Sep 2025", endDate: "Ago 2026"},
            {institution: "Universidad del Valle de Guatemala", degree: "Licenciatura en Ingeniería en Ciencias de la Computación y Tecnologías de la Información", startDate: "Ene 2021", endDate: "Nov 2025"},
            {institution: "Unity Learn", degree: "Junior Programmer", startDate: "2025"},
            {institution: "Instituto Tecnológico del Suroccidente", degree: "Bachillerato en Ciencias y Letras con Orientación en Computación", startDate: "2005", endDate: "2020"},
        ],

		tabTitles:[
            {shortTitle: "Resumen"},
            {shortTitle: "Retos"},
            {shortTitle: "Mi rol", title: "Mi rol en el projecto"},
            {shortTitle: "Objetivos"},
            {shortTitle: "Tecnologías", title: "Tecnologías usadas"},
            {shortTitle: "Integrantes", title: "Integrantes del equipo"},
        ],
	},
};