export const portfolioData = {
  personalInfo: {
    name: "Deepika S",
    titles: [
      "Python Full Stack Developer",
      "Python Django Developer",
      "Associate Software Engineer Python",
      "AI ML Engineer"
    ],
    summary: "AI & Data Science graduate with practical experience in Python, Django, DRF, React.js, and SQL. Knowledge of AI, Machine Learning, and Deep Learning. Experienced in developing LMS and institutional ERP applications. Skilled in full-stack development, database management, and REST API integration. Seeking an entry-level Full Stack Developer role.",
    about: "AI & Data Science graduate from Dhanalakshmi Srinivasan Engineering College (Autonomous) with a CGPA of 9.0. Experienced in developing full-stack LMS and institutional ERP applications using Python, Django, DRF, React.js, MySQL, and Tailwind CSS. Skilled in REST API integration, database management, and deep learning model development.",
    location: "Vriddhachalam, Tamil Nadu",
    education: {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Artificial Intelligence and Data Science",
      institution: "Dhanalakshmi Srinivasan Engineering College",
      location: "Perambalur",
      duration: "Sep 2022 – Apr 2026",
      cgpa: "9.0"
    },
    contact: {
      email: "deepikasampathh@gmail.com",
      phone: "+91 9360321472",
      github: "https://github.com/deepika-sampath02",
      linkedin: "https://www.linkedin.com/in/deepika-sampathkumarr196",
      resumeUrl: "/Deepika_S_Resume.pdf"
    }
  },
  skills: [
    {
      category: "AI & Machine Learning",
      items: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Matplotlib"]
    },
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "React.js"]
    },
    {
      category: "Backend",
      items: ["Django", "Django REST Framework (DRF)", "FastAPI", "SQL", "C", "C++"]
    },
    {
      category: "Database",
      items: ["MySQL", "MongoDB", "Database Design"]
    },
    {
      category: "Tools",
      items: ["Oracle Cloud", "Git", "GitHub", "VS Code"]
    }
  ],
  experiences: [
    {
      id: "valari-technologies",
      role: "Full Stack Intern",
      company: "Valari Technologies",
      location: "Vriddhachalam",
      duration: "Apr 2026 – Present",
      type: "Internship",
      responsibilities: [
        "Contributed to full-stack web application development using React.js, Python, Django, Django REST Framework, and SQL.",
        "Developed responsive frontend components, integrated backend services and REST APIs, and worked on database-driven application features and debugging."
      ]
    },
    {
      id: "codebind-technologies",
      role: "Web Development Intern",
      company: "Codebind Technologies",
      location: "Trichy",
      duration: "July 2024 – Aug 2024",
      type: "Internship",
      responsibilities: [
        "Developed a Business Management System using JavaScript, PHP, MySQL, HTML, and CSS, implementing database-driven business workflows and core management functionalities.",
        "Gained hands-on experience in website hosting, debugging, database integration, client-server architecture, teamwork, and real-time project development."
      ]
    }
  ],
  projects: [
    {
      id: "erp-management",
      title: "ERP Management System — Institutional Project",
      date: "July 2026",
      category: "Full Stack ERP System",
      description: "Developed a centralized ERP system for an educational institution using Python, Django, MySQL, MongoDB, HTML, CSS, and JavaScript to manage student and administrative workflows. Implemented modules for student records, admissions, attendance, and staff operations, with database integration and role-based functionality.",
      technologies: ["Python", "Django", "MySQL", "MongoDB", "HTML5", "CSS3", "JavaScript"],
      highlights: [
        "Role-based access control for Students, Faculty, and Administrators.",
        "Integrated modules for attendance, course admissions, and academic grading.",
        "Dual-database architecture utilizing MySQL for relational records and MongoDB for documents."
      ]
    },
    {
      id: "lingua-lab",
      title: "Lingua Lab – Learning Management System",
      date: "Apr 2026",
      category: "Full Stack LMS Platform",
      description: "Developed a full-stack Learning Management System using React.js, Django, MySQL, and Tailwind CSS, designed to support interactive language learning and structured academic workflows. Implemented student, teacher, and administrator workflows with responsive UI components, backend integration, and database-driven functionality.",
      technologies: ["React.js", "Django", "MySQL", "Tailwind CSS"],
      highlights: [
        "Interactive course delivery and student progress tracking.",
        "REST API endpoints with secure authentication.",
        "Responsive, modern UI designed for language learning."
      ]
    },
    {
      id: "pneumonia-diagnosis",
      title: "AI Automated Diagnosis System for Pneumonia Using Xception CNN",
      date: "Dec 2025",
      category: "AI & Deep Learning",
      description: "Developed a CNN-based deep learning model to detect pneumonia from chest X-ray images using image preprocessing and classification techniques. Implemented and compared transfer learning models including Xception, MobileNetV2, ResNet, DenseNet, and VGGNet, evaluating performance using recall and F1-score.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
      algorithms: ["Xception CNN", "MobileNetV2", "ResNet", "DenseNet", "VGGNet", "Transfer Learning"],
      metrics: {
        accuracy: "98.4%",
        precision: "98.1%",
        recall: "98.7%",
        f1Score: "98.4%"
      }
    }
  ],
  certifications: [
    {
      id: "ict-azure-ai",
      title: "Azure AI Certification",
      issuer: "ICT Academy",
      description: "Certified in Microsoft Azure Artificial Intelligence foundations, computer vision workflows, and cloud AI deployment."
    },
    {
      id: "aws-workshop",
      title: "AWS Workshop",
      issuer: "Amazon Web Services (AWS)",
      description: "Hands-on experience in cloud architectures, serverless computing, database deployment, and Data Science on AWS."
    },
    {
      id: "nptel-hci",
      title: "Human Computer Interaction Certification",
      issuer: "NPTEL",
      description: "Professional certification covering UI/UX principles, human-centered design methodology, and interactive system evaluation."
    }
  ]
};
