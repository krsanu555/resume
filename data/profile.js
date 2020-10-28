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
    { title: 'Medium', src: 'https://medium.com/@krsanu555' }
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
      duration: '2012-2014',
      std: 'XI-XII (PCM)',
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
      topics: ['Python','C#','JavaScript']
    },
    {
      graph: 'false',
      category: 'Databases',
      topics: ['ElasticSearch', 'MySQL', 'SQL']
    },
    {
      graph: 'false',
      category: 'Frameworks / Libraries',
      topics: ['.Net', 'Angular','Django']
    },
   {
      graph: 'false',
      category: 'DEV Tools',
      topics: ['Visual Studio', 'VS Code','Pycharm','Git','Postman']
    }
  ],
  projects: [
    {
      title: 'Authentication and Authorization Using JWT in Angular and .Net Web API',
      duration: 'Aug 2019',
      link: 'https://github.com/krsanu555/authentication-and-authorization-in-angular',
      desc: `In this Project I have done authentication and authorization using JWT where I have used Angular 8 in front end and Asp.Net Web API in backend. Here Server 
           will create JWT token after authenticating users for the first time and send this token back to client side as response which will be stored in local storage of the 
          browser.After then in each request from client,this token will be send automatically in header of that request which will be verified at the server before processing request.`
    }
  ],
  experiences: [
    {
      organization: 'Capgemini',
      title: `Sr Software Engineer`,
      desc: `Sr Software Engineer`,
      date: 'Nov 2018 - Present',
      details: [
        `Contributed in the development of an application where we have used <strong>Angular</strong> in the front-end,
         <strong>Django Rest Framework</strong> in the backend and <strong>MySQL</strong> for database.`,
	`Created <strong> ASP.NET Web APIs </strong> from scratch and incorporated Data Access layers removed from Web Application.Hence we have converted that
         web application into a client server application.`,
	`Secured <strong>ASP.NET Web APIs</strong> using AD Groups and made it accessible only through Client Network.`,
        `Worked on Enhancement tasks for many old .Net applications includes <strong>creating</strong> and <strong>securing</strong> build & config profiles for 
         different application <strong>environments<strong> i.e. Development,QA and Production.`,		
	`Worked on <strong>report generation</strong> from database in Excel Format.`,
	`<strong>Optimized</strong> one method for generating report in Excel format through database restructuring and some code changes for the associated application by <strong>40%</strong>.`,
	`Worked on making one existing .Net <strong>mobile responsive</strong> application more <strong>user friendly</strong>.`,
	`Resolved more than <strong>50 bugs/issues</strong> in old .Net applications of client.`,
	`Worked on multiple applications of same client that uses <strong>C#</strong> as programming language,<strong>ASP.NET,ASP.NET MVC, ASP.NET WEB API</strong> as web 
         technology and <strong>SQL Server</strong> as database.`,
	`Worked on both <strong>ADO.Net</strong> And <strong>Entity Framework</strong> approach of .Net Framework.`,
	`Worked in <strong>Agile environment</strong> and used <strong>Azure Devops</strong> for deploying software.`
      ]
    },
    {
      organization: 'Wildnet Technologies',
      title: 'Full-Stack Developer Intern',
      desc: `<strong>Full-Stack Developer intern</strong> at  <a target='_blank' href='https://www.wildnettechnologies.com/'> <strong>Wildnet Technology </strong> </a> (<a target='_blank' href='http://ep3dev.azurewebsites.net/'>Project Link</a>)`,
      date: 'Jun 2018 - Oct 2018',
      details: [
        `Designed and developed a <strong>E-Commerce Web Application</strong> using <strong>ASP.Net MVC </strong>.
         This application includes functionality related to different roles i.e. Supplier,Producer, Admin and End User.`,

        `Modified the <strong>Multi-level Menu</strong> for different category of products using <strong>Jquery</strong>, <strong>Ajax</strong> and 
        <strong>Asp.net MVC</strong>.`,
	`Worked on Payment Gateway Integration for this app.`
      ]
    }
  ],
  events: [
    {
      title: 'certifications',
      body: [	 	 
        {
          desc: `<strong>Python</strong>, certified by <strong>Hackerrank</strong>. (View Certificate: <a target='_blank' href='https://www.hackerrank.com/certificates/324ec622f4d7'>https://goo.gl/X3HEdR</a>)`,
          date: 'July 2020'
        },
        {
          desc: `<strong>JavaScript Algorithms and Data Structures</strong> by <strong>freeCodeCamp</strong> (View Certificate: <a target='_blank' href='https://www.freecodecamp.org/certification/krsanu555/javascript-algorithms-and-data-structures'>: https://goo.gl/ZRTvCU</a>)`,
          date: 'June 2019'
        }
      ]
    },
    {
      title: 'Workshops',
      body: [      
       {
          desc: `<strong>AWS Builders Online Series</strong> by <strong>AWS</strong>. (<a target='_blank' href='https://tinyurl.com/y3spk6mx'>https://goo.gl/ZDVyTr</a>)`,
          date: 'Aug 2020'
        },
	{
          desc: `<strong>AWS Modern Application Online Series</strong> by <strong>AWS</strong>. (<a target='_blank' href='https://tinyurl.com/y552bamh'>https://goo.gl/XTvYu</a>)`,
          date: 'Oct 2020'
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
