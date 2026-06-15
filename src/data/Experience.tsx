const experience = [
    {
        company: "RSG Media Systems",
        role: "Software Engineer",
        date_from: "Mar 2025",
        date_to: "Jun 2026",
        location: "Noida, India",
        projects: [
            {
                title: "User Activity Audit System",
                techStack: ["React.js", "Node.js", "Express.js", "AG Grid", "Kafka", "Redis"],
                description: `Designed and implemented a configurable audit framework for the Mattel environment to provide end-to-end visibility into important business events and user actions. The solution enables automatic tracking of workflow changes and maintains a centralized history for improved traceability and compliance.`,
                bullets: [
                    <>Developed a <span className="text-foreground">configurable user activity audit framework</span> to track critical business events and workflow changes across the application.</>,
                    <>Built a <span className="text-foreground">metadata-driven trigger mechanism</span>, eliminating hardcoded conditions and improving maintainability and extensibility.</>,
                    <>Implemented support for <span className="text-foreground">automatic and manual audit event generation</span> across multiple modules.</>,
                    <>Leveraged <span className="text-foreground">Kafka producers and consumers</span> to process events asynchronously and capture user activities efficiently.</>,
                    <>Utilized <span className="text-foreground">Redis</span> to optimize event and trigger processing.</>,
                    <>Built interactive audit dashboards using <span className="text-foreground">React.js and AG Grid</span> to display user actions, event types, business status, and timestamps.</>,
                    <>Enabled tracking of <span className="text-foreground">record creation, status updates, document uploads, validations, approvals/rejections, and workflow transitions</span>.</>,
                    <>Delivered the solution for the Mattel environment, improving <span className="text-foreground">system transparency, traceability, and audit compliance</span>.</>
                ]
            },
            {
                title: "Bulk Data Import Module",
                techStack: ["React.js", "AG Grid", "Ant Design", "Node.js", "Child Processes"],
                description: `Designed and developed a scalable bulk data import module that enables users to upload and process large datasets directly into different sections of the application. The solution streamlined manual operations, minimized data entry errors, and supported the ingestion of hundreds of thousands of records efficiently.`,
                bullets: [
                    <>Developed a <span className="text-foreground">scalable bulk data import module</span> to upload datasets into multiple application sections through a unified workflow.</>,
                    <>Implemented <span className="text-foreground">Excel file validation</span> to ensure data quality and prevent invalid records from entering the system.</>,
                    <>Built an intuitive interface using <span className="text-foreground">React.js, Ant Design, and AG Grid</span> to provide data previews and import summaries.</>,
                    <>Created a <span className="text-foreground">record-level error reporting system</span> showing successful imports and validation failures for easier troubleshooting.</>,
                    <>Added downloadable <span className="text-foreground">Excel templates</span> to enforce supported data formats and reduce import errors.</>,
                    <>Leveraged <span className="text-foreground">Node.js child processes</span> to process large files asynchronously without blocking the main application thread.</>,
                    <>Optimized the system to handle <span className="text-foreground">hundreds of thousands of records</span> while maintaining performance, responsiveness, and reliability.</>,
                    <>Reduced manual effort and minimized <span className="text-foreground">data-entry errors through automated validation and bulk processing</span>.</>,
                ]
            },

        ],
        achievement: {
            title: "Star of the Month",
            mediaUrl: "star_of_month.jpg",
            description: <>Earned the <span className="text-foreground">Star of the Month Award</span> at RSG Media for consistently delivering impactful features, exhibiting strong ownership, and driving innovation that contributed to the team's overall success.
            </>,
        }
    },
    {
        company: "MountBlue Technologies",
        role: "Software Engineer",
        date_from: "Feb 2024",
        date_to: "Feb 2025",
        location: "Noida, India",
        projects: [
            {
                title: "Usage Import",
                techStack: ["React.js", "Node.js", "Express.js", "REST APIs", "Nodemailer"],
                description: 'Designed and developed a scalable usage data import module that streamlines the ingestion of large datasets while providing real-time email notifications, data validation, and an intermediate review process to minimize re-upload efforts and improve data accuracy.',
                bullets: [
                    <>Developed a <span className="text-foreground">usage data import module</span> to efficiently process large datasets and streamline data ingestion workflows.</>,
                    <>Implemented <span className="text-foreground">automated email notifications</span> using <span className="text-foreground">Nodemailer</span> to keep users informed about upload and processing status.</>,
                    <>Built a <span className="text-foreground">data validation and staging workflow</span>, storing records in a temporary database to improve data consistency before import.</>,
                    <>Developed an interactive <span className="text-foreground">preview and correction screen</span> with selective row-level import and discard capabilities, reducing the need for repeated Excel uploads.</>,
                    <>Exposed functionalities through <span className="text-foreground">REST APIs</span> and built responsive interfaces using <span className="text-foreground">React.js</span>, improving overall data quality and user experience.</>,


                ],
            },
            {
                title: "Trello Clone",
                techStack: ["React.js", "Redux", "Context API", "Trello API"],
                description: `Built a Trello-inspired task management application integrated with the Trello API to manage boards and cards while gaining hands-on experience with modern React state management.`,
                bullets: [
                    <> Developed a <span className="text-foreground">Trello-inspired task management application</span> with support for creating, updating, and deleting boards and cards. </>,
                    <> Integrated with the <span className="text-foreground">Trello API</span> to synchronize and manage task data. </>,
                    <> Utilized <span className="text-foreground">Redux and Context API</span> for efficient state management across the application. </>
                ]
            },
            {
                title: "Country Explorer",
                techStack: ["React.js", "CSS", "Context API", "Public API"],
                description:"Built a country information application that consumes public APIs to display country details and flags while implementing theming and error handling.",
                bullets:[
                    <> Developed a <span className="text-foreground">country explorer application</span> that displays country information and flags using public APIs. </>,
                    <> Implemented <span className="text-foreground">light and dark themes</span> using Context API for improved user experience. </>,
                    <> Added <span className="text-foreground">error handling and fallback pages</span> to provide a robust user interface. </>
                ]
            },
            {
                title: "Todoist Clone Backend",
                techStack: ["Node.js", "Express.js", "Sequelize", "PostgreSQL"],
                description:"Developed the backend for a Todoist-inspired application to understand RESTful APIs and relational database design.",
                bullets:[
                    <> Built <span className="text-foreground">RESTful APIs</span> for managing tasks and user operations. </>,
                    <> Utilized <span className="text-foreground">Sequelize ORM</span> to interact with a PostgreSQL database. </>,
                    <> Designed a <span className="text-foreground">relational database schema</span> to support scalable task management. </>
                ]
            },
            {
                title: "IPL Data Analytics",
                techStack: ["JavaScript", "Node.js", "CSV Parser"],
                description: `Built a data analytics project using Node.js to extract insights from IPL datasets while strengthening backend and asynchronous programming concepts.`,
                bullets: [
                    <> Processed IPL datasets using <span className="text-foreground">csv-parser</span> and JavaScript array methods to generate meaningful statistics. </>,
                    <> Leveraged <span className="text-foreground">Promises and async/await</span> to handle asynchronous file operations and data processing. </>,
                    <> Generated insights such as <span className="text-foreground">matches played per year, team-wise wins, and top economical bowlers</span>. </>,
                    <> Implemented <span className="text-foreground">centralized error handling</span> to ensure consistent and maintainable backend logic. </>
                ]
            },
        ],
    }
]

export default experience;