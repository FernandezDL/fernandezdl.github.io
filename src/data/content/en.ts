import type { LocalizedPortfolioContent } from "@/types/types";

export const enContent: LocalizedPortfolioContent = {
    navigation: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
    },

    web: {
        navigation: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
        },

        navbarSwitches: {
            area: {
                leftLabel: "Web",
                rightLabel: "Games",
                ariaLabel: "Switch development area",
            },
            theme: {
                leftLabel: "Light",
                rightLabel: "Dark",
                ariaLabel: "Switch color theme",
            },
            language: {
                leftLabel: "En",
                rightLabel: "Es",
                ariaLabel: "Switch language",
            },
        },

        nameSection: {
            role: "Full-Stack Developer",
            statement: "I'm a full-stack developer passionate about creating and bringing designs to life as faithfully as possible. I focus on visual detail, efficient implementation, and creating polished digital experiences that work as well as they look.",
            contactButton: "Contact",
            viewWorkButton: "View Work",
        },

        sections: [
			{header: "About", title: "A bit about me",},
			{header: "Skills", title: "Technical Toolkit",},
			{header: "Projects", title: "Selected Work",},
			{header: "Experience", title: "Work History",},
			{header: "Education", title: "Academic Background",},
			{header: "Contact", title: "Get in touch",},
		],


        about: {
            index: "About",
            title: "A bit about me",
            introduction:
                "I'm a Computer Science Engineering graduate and full-stack developer with a strong focus on front-end development. I enjoy translating visual concepts into polished, responsive interfaces that stay faithful to the original design.",
            approach:
                "My background in development and digital design allows me to approach projects from both a technical and creative perspective. I care about clean implementation, performance, usability, scalability, and the small details that make a product feel complete.",
            basedIn: "Based in",
            availability: "Available for",
            oportunities: "Open to opportunities",
            languages: "Languages",
        },

        contactSection: {
			text: "Open to full-time opportunities, freelance projects, and consulting work.",
			phone: "Phone",
			name: "Name",
			message: "Message",
            button: "Send Message",
		},

        footerSection: {
			madeBy: "Made with",
			button: "I also do games",
		},

        skills: [
            {number: 1, title: "Front-end", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap"]},
            {number: 2, title: "Back-end", skills: ["Node.js", "Express", "Python", "C#"]},
            {number: 3, title: "Design", skills: ["Adobe Photoshop", "Canva", "Figma"]},
            {number: 4, title: "Tools & Workflow", skills: ["GitHub", "Postman", "Microsoft 365", "Google Workspace"]}
        ],
        projects: [
            {
                number: 2,
                title: "Minesweeper Remake",
                description: "Windows XP's Minesweeper remake",
                image: "/Img/Minesweeper.png",
                tags: ["Angular", "TypeScript", "CSS3"],
                year: 2023,
                overview: "",
                problems: [],
                goals: {
                    description: "",
                    objectives: []
                },
                myRole: [],
                technologies: [],
                hostedLink: "",
                videos: [],
                githubLink: null
            },
            {
                number: 1,
                title: "Cloning Duolingo",
                description: "Cloning a web page",
                image: "/Img/Duolingo.png",
                tags: ["CSS3", "HTML5", "Photoshop", "Babel"],
                year: 2023,
                overview: "",
                problems: [],
                goals: {
                    description: "",
                    objectives: []
                },
                myRole: [],
                technologies: [],
                hostedLink: "",
                videos: [],
                githubLink: null
            },
            {
                number: 3,
                title: "Hamilmemory",
                description: "Hamilton-themed memory game",
                image: "/Img/Hamilmemory.png",
                tags: ["HTML5", "JavaScript", "CSS3"],
                year: 2023,
                overview: "",
                problems: [],
                goals: {
                    description: "",
                    objectives: []
                },
                myRole: [],
                technologies: [],
                hostedLink: "",
                videos: [],
                githubLink: null
            }
        ],
        workExperience: [
            {company: "Papercut Studios - Student Project", position: "UI Artist - Technical Artist - 3D Prop Modeler", startDate: "2026", description: ["Responsible for 2D asset and graphic element creation", "Menu and UI implementation", "Creation and implementation of shaders and graphic elements", "3D prop modeling"]},
            {company: "Universidad del Valle de Guatemala", position: "Instructor", startDate: "2026", description: ["Instructor for the programming module of the “Women Creating Video Games” Certificate Program"]},
            {company: "Cerial Killer Games - Student Project", position: "Game Developer", startDate: "Nov 2025", endDate: "Feb 2026", description: ["Enemy AI Programmer"]},
            {company: "Estudio Faser", position: "Full-stack developer", startDate: "2025", description: ["Full-stack development", "API Development", "Database management"]},
            {company: "Spring Bus", position: "Front-end Developer", startDate: "2024", description: ["Front-end development"]},
            {company: "Universidad del Valle de Guatemala", position: "Teaching Assistant", startDate: "2024", description: ["Computer Organization and Assembler", "Effective Communication", "Research and Scientific Thinking", "Web Systems and Technologies", "Artificial Intelligence", "Operative Systems"]},
            {company: "Laudato Si' Movement", position: "Database Developer", startDate: "2023", description: ["Database planning", "Database development"]},
        ],
        academicExperience: [
            {institution: "Vancouver Film School", degree: "Programming for Games, Mobile, and Web Development", startDate: "Sep 2025", endDate: "Aug 2026"},
            {institution: "Universidad del Valle de Guatemala", degree: "Bachelor's Degree in Computer Science", startDate: "Jan 2021", endDate: "Dec 2021"},
            {institution: "Unity Learn", degree: "Junior Programmer", startDate: "2025"},
            {institution: "Instituto Tecnológico del Suroccidente", degree: "High School Diploma in Science and Humanities with a Focus on Computer Science", startDate: "2005", endDate: "2020"},
        ],
    }, 

    games: {
        navigation: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
        },

        navbarSwitches: {
            area: {
                leftLabel: "Web",
                rightLabel: "Games",
                ariaLabel: "Switch development area",
            },
            theme: {
                leftLabel: "Light",
                rightLabel: "Dark",
                ariaLabel: "Switch color theme",
            },
            language: {
                leftLabel: "En",
                rightLabel: "Es",
                ariaLabel: "Switch language",
            },
        },
        
        nameSection: {
            role: "Game Developer",
            statement: "I'm a full-stack developer passionate about creating and bringing designs to life as faithfully as possible. I focus on visual detail, efficient implementation, and creating polished digital experiences that work as well as they look.",
            contactButton: "Contact",
            viewWorkButton: "View Work",
        },

        sections: [
			{header: "About", title: "A bit about me",},
			{header: "Skills", title: "Technical Toolkit",},
			{header: "Projects", title: "Selected Work",},
			{header: "Experience", title: "Work History",},
			{header: "Education", title: "Academic Background",},
			{header: "Contact", title: "Get in touch",},
		],

        about: {
            index: "About",
            title: "A bit about me",
            introduction:
                "I'm a Computer Science Engineering graduate, game developer, and technical artist with experience creating interactive projects in Unity.",
            approach:
                "I enjoy working at the intersection of art and programming, developing interfaces, shaders, visual effects, gameplay systems, and optimized assets that contribute to cohesive game experiences.",
            basedIn: "Based in",
            availability: "Available for",
            oportunities: "Open to opportunities",
            languages: "Languages",
        },

        contactSection: {
			text: "Open to full-time opportunities, freelance projects, and consulting work.",
			phone: "Phone",
			name: "Name",
			message: "Message",
            button: "Send Message",
		},

        footerSection: {
			madeBy: "Made with",
			button: "I also do web development",
		},

        skills: [
            {number: 1, title: "Front-end", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap"]},
            {number: 2, title: "Back-end", skills: ["Node.js", "Express", "Python", "C#"]},
            {number: 3, title: "Design", skills: ["Adobe Photoshop", "Canva", "Figma"]},
            {number: 4, title: "Tools & Workflow", skills: ["GitHub", "Postman", "Microsoft 365", "Google Workspace"]}
        ],
        projects: [
            {
                number: 1,
                title: "Papercut",
                description: "3D Bullet Hell Game",
                image: "/Img/papercut2.png",
                tags: ["Unity", "C#", "Photoshop", "GitHub", "Blender"],
                year: 2026,
                overview: "PaperCut is a 3D over-the-shoulder slash-and-dash bullet hell game developed in Unity. Created as the final project for the Programming for Games, Web & Mobile program at Vancouver Film School, it offers a fast-paced experience of approximately 10 minutes.\n" +
                    "The game follows Susie, a seven-year-old who is pulled into a demonic realm made entirely of origami paper. Armed with a pair of giant magical scissors, she must fight her way through the realm to rescue Mr. Business - her stuffed teddy bear and best friend - and find her way back home.\n" +
                    "The project was developed by a six-person team over the course of six months. The first two months were dedicated to the pre-production phase, followed by four months of active development. My primary role in the project was UI & 2D artist, technical artist, and 3D prop modeler.\n",
                problems: [
                    {
                        title: "Maintain Gameplay Visibility",
                        description: "As a bullet hell game, PaperCut often presents the player with numerous enemies, projectiles, effects and environmental elements moving on screen simultaneously. One of the main UI challenges was providing all the information required during gameplay without obstructing the player’s view or distracting them from incoming threats.\n" +
                            "To address this challenge, we made the decision to minimize the number of traditional HUD elements and incorporated diegetic and gameplay-integrated indicators whenever possible. This allowed the interface to communicate essential information while preserving visibility and keeping the player focused on the action.\n" +
                            "In the first versions, the HUD had a crosshair that was made from a few different images that were configured to show where the player was shooting and to represented the boost they had left. This design was remade and the original crosshair was replaced with a shader-based solution which, unlike a static image, could be adjusted through parameters in the Inspector and controlled dynamically through code. Having this possibility and liberty allowed the crosshair to change its shape, behaviour, and even become animated according to different gameplay states while avoiding the need for multiple separate assets.\n",
                        id: "gameplay-visibility"
                    },
                    {
                        title: "Visual Identity",
                        description: "The game contains several scenes, menus, interface elements, and gameplay systems that need to feel as though they belong to the same world. The main challenge was maintaining visual consistency throughout the entire experience while reinforcing the demonic paper-realm setting.\n" +
                            "To achieve this, I leaned into the game’s book and paper themes and applied them consistently across the interface. HUD elements, menus, typography, and other graphical assets were designed to feel like parts of the same handmade storybook world.\n" +
                            "I also established a consistent color palette and typography throughout the different scenes. The interface primarily uses the same two shades of blue and two shades of pink associated with Little Susie. This visually connects the UI to her personality, tates, and imagination while giving the overall experience a recognizable identity.\n",
                        id: "visual-identity"
                    },
                    {
                        title: "Making Susie Stand Out from the World",
                        description: "From the beginning of the project, one of our main artistic goals was to make Little Susie visually distinct from the demonic paper realm. However, this contrast needed to remain consistent across the character, UI, effects, and surrounding environment.\n" +
                            "In addition to carrying Susie’s color palette into the interface, I incorporated small animated details to make the presentation feel more expressive and visually appealing. Colorful effects such as rainbows and glitter were used to emphasize her presence and reinforce the contrast between her playful personality and the muted, papery world around her.\n",
                        id: "susie-visibility"
                    }
                ],
                goals: {description:"The main goal of PaperCut was to create an engaging, responsive, and polished 10-minute gameplay experience. To accomplish this, the project focused on three key objectives:", 
                    objectives:["Deliver smooth and satisfying combat and movement.", "Maintain stable performance throughout the experience, targeting an average of 60 FPS.", "Support Xbox controllers, PlayStation controllers, and keyboard-and-mouse input with consistent and responsive controls."]},
                myRole: [
                    {title:"UI & 2D artist", tasks:["Draw all assets used in the game", "Set up all menus in the game", "Set up UI in the main level", "Code a few UI elements", "Do tags and physical elements for the team"]},
                    {title:"Technical artist", tasks: ["Code and create shaders", "Implement the shaders in the game", "Code elements for the UI", "Write scripts to implement functionalities for some graphic elements"]},
                    {title:"3D prop modeler", tasks:["Search for references", "Model 3D props", "Set dress"]}
                ],
                technologies: ["Unity", "C#", "Shader graph and HLSL", "Git & Github", "Blender", "Maya", "Photoshop"],
                hostedLink: "https://vfs-gdpg.itch.io/papercut",
                githubLink: null,
                videos: ["https://www.youtube.com/watch?v=2lFxIiGFCng"]
            },

            {
                number: 2,
                title: "The Last Course",
                description: "Top-Down Combat-Cooking Game",
                image: "/Img/TheLastCourse.png",
                tags: ["Unity", "C#", "GitHub"],
                year: 2026,
                overview: "",
                problems: [{
                    title: "", description: "",
                    id: "0"
                }],
                goals: {description:"", objectives: [""]},
                myRole: [],
                technologies: [],
                hostedLink: "",
                githubLink: null,
                videos: []
            },
            {
                number: 3,
                title: "Card-Jitsu Remake",
                description: "Club Penguin's Game Remake",
                image: "/Img/Cardjitsu.png",
                tags: ["Python", "Photoshop", "Kivy"],
                year: 2023,
                overview: "This project is a 2D remake of Card-Jitsu,  the card-based minigame originally featured in the popular game Club Penguin. The game was created as the final project for the Artificial Intelligence class at Universidad del Valle de Guatemala. It offers an approximately two-minute gameplay experience that allows the player to compete against an AI-controlled opponent designed to provide a fair challenge that continuously improves its strategy through repeated matches.\n" +
                    "The project was planned to be developed over the course of two weeks by a five-person team. My primary roles were Front-End developer and Project Manager, which involved implementing the player-facing experience while coordinating the team’s tasks and development progress.\n",
                problems: [
                    {
                        title: "A fair but challenging opponent",
                        description: "One of the mian problems identified in the original game was that the NPC opponent was impossible to defeat until the player would reach a certain level of game experience. For our remake, the main challenge was creating an AI agent capable of providing a difficult yet fair match, in which the player wouldn’t feel that the outcome was predetermined.\n" +
                            "To achieve this balance, we implemented a Q-Learning algorithm that allowed the agent to improve its strategy through trial and error. Rather than following a fixed set of predefined steps, the agent learned to evaluate different actions based on the game rules and their results during previous matches.\n" +
                            "The agent was initially trained through more than 40,000 simulated matches, and then with more than over 100 matches against real players, which helped the model adapt to decisions and patterns that were not necessarily represented during the simulations.\n",
                        id: "fair-opponent"
                    },
                    {
                        title: "The Agent's Strategy",
                        description: "Another important challenge was determining what behaviour the AI should prioritize. We considered two primary approaches: selecting actions that maximized its chances of winning or selecting safer actions that minimized its chances of losing.\n" +
                            "We ultimately decided to prioritize winning. This produced a more proactive opponent that actively worked toward a victory condition instead of repeatedly choosing defensive actions. It also made matches feel more dynamic and engaging for the player.\n",
                        id: "strategy"
                    },
                    {
                        title: "Managing Real-Time Graphics",
                        description: "This game contains multiple animated and interactive graphical elements that must be updated frequently during each match. Managing these continuous updates efficiently in Python was therefore an important technical consideration, particularly because poor rendering performance could negatively affect input responsiveness and the overall experience.\n" +
                            "After evaluating the available frameworks, we selected the Kivy library instead of PyGame. Kivy provided the performance and interface-management capabilities required to handle the game’s frequently updating visual elements while supporting the structure of the Front-End experience.\n",
                        id: "graphics"
                    }
                ],
                goals: {description:"The main goal of the project was to recreate the nostalgic appeal of Card-Jitsu while delivering a fun, fair, and engaging experience for former Club Penguin players. To accomplish this, the project focused on three key objectives:", 
                    objectives: ["Create a challenging AI opponent without making matches feel unfair or predetermined.", "Implement a Q-learning algorithm that allows the agent to continuously refine its strategy as more matches are played.", "Enable the agent to evaluate the current state of a match and select the action most likely to lead to victory."]},
                myRole: [
                    {title:"Front-End developer", tasks:["Set up the whole interface","Set the characters animation", "Set up the moving parts", "Get and set up the images and visual effects", "Set up music"]},
                    {title:"Project manager", tasks:["Set up tasks for the whole team", "Ensure good communication of all members", "Ensure the tasks are completed and submitted on time", "Write and check all the documentation", "Check the slides to ensure good quality", "Maintain good communication with the teacher throughout the project"]}],
                technologies: ["Python", "Kivy", "Photoshop"],
                hostedLink: "",
                githubLink: "https://github.com/FernandezDL/Card-Jitsu_Remake",
                videos: []
            }
        ],
        workExperience: [
            {company: "Papercut Studios - Student Project", position: "UI Artist - Technical Artist - 3D Prop Modeler", startDate: "2026", description: ["Responsible for 2D asset and graphic element creation", "Menu and UI implementation", "Creation and implementation of shaders and graphic elements", "3D prop modeling"]},
            {company: "Universidad del Valle de Guatemala", position: "Instructor", startDate: "2026", description: ["Instructor for the programming module of the “Women Creating Video Games” Certificate Program"]},
            {company: "Cerial Killer Games - Student Project", position: "Game Developer", startDate: "Nov 2025", endDate: "Feb 2026", description: ["Enemy AI Programmer"]},
            {company: "Estudio Faser", position: "Full-stack developer", startDate: "2025", description: ["Full-stack development", "API Development", "Database management"]},
            {company: "Spring Bus", position: "Front-end Developer", startDate: "2024", description: ["Front-end development"]},
            {company: "Universidad del Valle de Guatemala", position: "Teaching Assistant", startDate: "2024", description: ["Computer Organization and Assembler", "Effective Communication", "Research and Scientific Thinking", "Web Systems and Technologies", "Artificial Intelligence", "Operative Systems"]},
            {company: "Laudato Si' Movement", position: "Database Developer", startDate: "2023", description: ["Database planning", "Database development"]},
        ],
        academicExperience: [
            {institution: "Vancouver Film School", degree: "Programming for Games, Mobile, and Web Development", startDate: "Sep 2025", endDate: "Aug 2026"},
            {institution: "Universidad del Valle de Guatemala", degree: "Bachelor's Degree in Computer Science", startDate: "Jan 2021", endDate: "Dec 2021"},
            {institution: "Unity Learn", degree: "Junior Programmer", startDate: "2025"},
            {institution: "Instituto Tecnológico del Suroccidente", degree: "High School Diploma in Science and Humanities with a Focus on Computer Science", startDate: "2005", endDate: "2020"},
        ],
    },
};