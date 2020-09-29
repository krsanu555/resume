const profileData = {
  title: 'Resume',
  name: 'Kumar Sanu',
  sub_title: 'Software Engineer',
  logoURL: 'assets/images/dp.jpg',
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>Python</strong>
     and it's applications. Experienced in web applications development working in agile environment. Having good knowledge of software development life cycle`,
    contact: {
      email: 'krsanurajput@outlook.com',
      phone: '+91-7017448771',
      address: 'Mumbai, Maharashtra 400708'
    }
  },
  links: [
    { title: 'Portfolio', src: 'https://krsanu555.github.io/' },
    { title: 'Github', src: 'https://github.com/krsanu555' },
    { title: 'LinkedIn', src: 'https://www.linkedin.com/in/krsanu555' },
    { title: 'Twitter', src: 'https://twitter.com/krsanu555' },
  ],
  education: [
    {
      alma: 'FET, GKV, Haridwar',
      duration: '2014 - 2018',
      std: 'Bachelor of Technology',
      score: '74.42%'
    },
    {
      alma: 'Anugrah Inter School,Aurangabad',
      duration: '2014',
      std: 'XII (PCM)',
      score: '76.60%'
    },
    {
      alma: 'RJS International School,Wazirganj',
      duration: '2012',
      std: 'X',
      score: '8.6 CGPA'
    }
  ],
  skills: [
    {
      graph: 'false',
      category: 'Programming Languages',
      topics: ['JavaScript','C#', 'Python']
    },
    {
      graph: 'false',
      category: 'Databases',
      topics: ['ElasticSearch', 'MySQL', 'SQL']
    },
    {
      graph: 'false',
      category: 'Frameworks / Libraries',
      topics: ['.Net', 'Angular','Django','Scikit-learn','Pytorch']
    }
  ],
  projects: [
    {
      title: 'Opening New Bar in Delhi,India',
      duration: 'July- Aug 2020',
      link: 'https://github.com/krsanu555/Coursera_Capstone',
      desc: `A Data Science Project which aims at helping project developers in recommending the best place to open bar in Delhi,India.`
    },
  ],
  experiences: [
    {
      organization: 'Capgemini',
      title: `Sr Software Engineer`,
      desc: `Sr Software Engineer`,
      date: 'Nov 2018 - Present',
      details: [
        `Contributed in the development of multiple projects of client in <strong>Health Care domain</strong> by converting the existing .Net mvc architecture web applications into separate front-end client and back-end servers
        by using <strong>Angular</strong> and <strong>Django Rest Framework.</strong>`,
        
        `Worked on Enhancement tasks for many old applications includes creation of different environment build and config profiles,securing configuration files`
      ]
    },
    {
      organization: 'Wildnet Technologies',
      title: 'Full-Stack Developer Intern',
      desc: `<strong>Full-Stack Developer intern</strong> at  <a target='_blank' href='https://www.wildnettechnologies.com/'> <strong>Wildnet Technology </strong> </a> (<a target='_blank' href='http://ep3dev.azurewebsites.net/'>Project Link</a>)`,
      date: 'Jun 2018 - Oct 2018',
      details: [
        `Designed and developed a <strong>E-Commerce Web Application</strong> using <strong>ASP.Net MVC </strong>.This application includes functionality related to different roles i.e. Supplier,Producer, Admin and End User.`,

        `Modified the <strong>Multi-level Menu</strong> for different category of products using <strong>Jquery</strong>, <strong>Ajax</strong> and 
        <strong>Asp.net</strong>.`,
		`Worked on Payment Gateway Integration for this app.`
      ]
    }
  ],
  events: [
    {
      title: 'certifications',
      body: [
	  {
          desc: `<strong>Applied Data Science Specialization</strong>, certified by <strong>Coursera</strong>. (View Certificate: <a target='_blank' href='https://www.coursera.org/account/accomplishments/specialization/certificate/WREG2ZJBGW2D'>link</a>)`,
          date: 'July 2020'
        },
	  {
          desc: `<strong>Python for Data Science and AI</strong>, certified by <strong>Coursera</strong>. (View Certificate: <a target='_blank' href='https://www.coursera.org/account/accomplishments/certificate/PQY9FMQY2P8P'>link</a>)`,
          date: 'July 2020'
        },
        {
          desc: `<strong>Python</strong>, certified by <strong>Hackerrank</strong>. (View Certificate: <a target='_blank' href='https://www.hackerrank.com/certificates/324ec622f4d7'>link</a>)`,
          date: 'July 2020'
        },
        {
          desc: `<strong>JavaScript Algorithms and Data Structures</strong> by <strong>freeCodeCamp</strong> (View Certificate: <a target='_blank' href='https://www.freecodecamp.org/certification/krsanu555/javascript-algorithms-and-data-structures'>link</a>)`,
          date: 'June 2019'
        }
      ]
    },
    {
      title: 'Workshops',
      body: [        
        {
          desc: `<strong>Data Engineering on Google Cloud Platform</strong> by <strong> Google</strong>`,
          date: 'Aug 2020'
        }
      ]
    },
    {
      title: 'Extracurricular Activities',
      body: [
	  {
          desc:'Conducted Seminar as <strong>Internshala Student Partner</strong> on trainings and internship opportunities provided by <strong>Internshala</strong> ',
          date: 'Feb 2018'
        },
	  {
          desc:
            'Conducted workshops for 1<sup>st</sup> and 2<sup>nd</sup> year students on <strong>Web Development</strong> and <strong>Github Technical Essentials</strong>',
          date: 'Oct 2017'
        },
        {
          desc: `Event Organizer in <strong>Jnanagni'17</strong> (Annual Techno-Cultural fest of FET, GKV)`,
          date: 'Mar 2017'
        }        
      ]
    }
  ]
};
