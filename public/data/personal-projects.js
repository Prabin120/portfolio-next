const projects = [
    {
        title: "AptiCode",
        overview: "A platform for coding and MCQ/MAQ practice",
        duration: "Oct, 2024",
        workDetail: [
            "Developed a highly scalable platform for coding and MCQ/MAQ practice, allowing users to compete in live tests.",
            "Deployed using a microservices architecture on AWS (ECS, ECR, Load Balancer).",
            "Features include admin login, Google OAuth, progress tracking, AI help, AI feedback and more."
        ],
        // projectLink: "https://github.com/Prabin120/codeEditor2"
        website: "https://apticode.in"
    },
    {
        title: "Real-Time Chat",
        overview: "Chatting application using web-sockets for realtime",
        duration: "Aug 15, 2023",
        workDetail: [
            "Developed a real-time chat application using Django Channels and WebSockets for instant communication.",
            "Enabled user-friendly message management with features like message deletion, liking, delivery, and read status.",
            "Implemented Cassandra for message storage and PostgreSQL for user data to increase throughput by 50%, and integrated Redis for tracking user online status, enhancing the overall chat experience."
        ],
        // projectLink: "https://github.com/Prabin120/codeEditor2"
    }
]

export default projects