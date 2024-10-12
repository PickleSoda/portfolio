import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Achi',
    lastName:  'Ugulava',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Developer',
    avatar:    '/images/avatar.jpg',  // Update the path if necessary
    location:  'Asia/Tbilisi',        // IANA time zone identifier for Georgia
    languages: ['English', 'Georgian', 'Russian']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about technology and share my thoughts on coding, software development, and personal projects.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/PickleSoda',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/achi-ugulava-38282a202/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:achiugulava@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Developer</>,
    subline: <>I'm {person.firstName}, a software developer with expertise in web development, machine learning, and data science. In my free time, I enjoy coding personal projects and exploring new technologies.</>
}

const about = {
    label: 'About',
    title: 'About Me',
    description: `I'm ${person.name}, a ${person.role} from Georgia`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,  // Set to true and provide a link if you want to display a calendar
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm a Georgia-based software developer with experience in web development, ML and data science. Proficient in multiple programming languages and frameworks, delivering high-performance, scalable applications. Working effectively both independently and collaboratively. Passionate about coding, often engaging in personal projects during free time, winner in multiple hackathons, and participated in many more. Experienced in writing code that follows solid principles and design patterns.
</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Vaya Studios',
                timeframe: 'Aug 2023 - Present',
                role: 'Software Developer',
                achievements: [
                    <>Created multiple startups in a team of 4 developers with over 50k users, involved in every step of the design, development, anddeployment process.</>,
                    <>Developed AI-driven projects, primarily chatbot-based widgets and dashboards to monitor company growth. Integrated analytics software and custom methods for effective user data capture and interpretation.</>,
                    <>Implemented generative AI solutions using LangChain and Neo4j, as well as custom ML models.</>,
                    <>Transformed critical data insights into actionable strategies, significantly improving marketing effectiveness and project performance.</>
                ],
                images: [ ]
            },
            {
                company: 'Developers Alliance',
                timeframe: 'Jun 2022 - Aug 2023',
                role: 'Software Developer',
                achievements: [
                    <>Integrated Vue Storefront with Magento and Shopware platforms to enhance the online shopping experience, resulting in a 15% increase in customer satisfaction.</>,
                    <>Created custom modules for both backend and frontend to meet clients' desires.</>,
                    <>Collaborated with cross-functional teams using Agile methodologies to ensure high performance and optimized user experiences.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'Ilia State University',
                description: <>Bachelor of Science in Computer Science.</>,
            },
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <>JavaScript, TypeScript, Python, PHP, C#</>,
                images: [ ]
            },
            {
                title: 'Frameworks and Libraries',
                description: <>Vue.js, React, React Native, Nuxt.js, Next.js, Laravel, Express.js, .NET, Flask.</>,
                images: [ ]
            },
            {
                title: 'AI and Machine Learning',
                description: <>LangChain, Neo4j, TensorFlow, PyTorch, SciPy</>,
                images: [ ]
            },
            {
                title: 'Tools & Platforms',
                description: <>AWS, Docker, Kubernetes, Git, Matomo Analytics, Magento, Shopware</>,
                images: [ ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about technology and coding...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding new .mdx files to your blog directory
}

const work = {
    label: 'Work',
    title: 'My Projects',
    description: `Software development projects by ${person.name}`
    // Include your projects here or in separate .mdx files
}

const gallery = {
    label: 'Gallery',
    title: 'My Photo Gallery',
    description: `A photo collection by ${person.name}`,
    images: [ ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
