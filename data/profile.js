const profileData = {
  title: 'Resume',
  name: 'Kumar Sanu',
  sub_title: 'Software Engineer',
  logoURL: 'assets/images/dp.jpg',
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>Python</strong>
     and it's applications. Experienced in web applications development working in agile environment. Having good knowledge of software development life cycle`,
    contact: {
      email: 'krsanu555@gmail.com',
      phone: '+91-7017448771',
      address: 'Bangalore, Karnataka 560100'
    }
  },
  links: [
    //{ title: 'Portfolio', src: 'https://krsanu555.github.io/' },
    { title: 'Github', src: 'https://github.com/krsanu555' },
    { title: 'LinkedIn', src: 'https://www.linkedin.com/in/krsanu555' },
   // { title: 'Twitter', src: 'https://twitter.com/krsanu555' },
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
      topics: ['C#','Python','JavaScript']
    },
    {
      graph: 'false',
      category: 'Databases',
      topics: ['MS SQL','MySQL']
    },
    {
      graph: 'false',
      category: 'Frameworks / Libraries',
      topics: ['.Net','.Net Core', 'Angular','Django']
    },
   {
      graph: 'false',
      category: 'Tools/Technologies',
      topics: ["Microsoft Azure","Git","SQL",'Data Science(ML/BigData)']
    }
  ],
  projects: [
   /*{
      title: 'Neural Style Transfer: Deep Learning Applications',
      duration: 'Nov 2020',
      link: 'https://github.com/krsanu555/neural-style-transfer',
      desc: `In this project, we have implemented neural style transfer Algorithm using <strong>VGG-19</strong>, a 19-layer version of the VGG network and <strong>TensorFlow</strong> Deep Learning Framework.`
    },*/
    {
      title: 'Face Recognition using OpenCV and Deep Learning',
      duration: 'Oct 2020',
      link: 'https://github.com/krsanu555/face-recognition',
      desc: `In this project,We have used <strong>OpenCV</strong> for face detection and Deep Learning <strong>FaceNet</strong> model for face recognition. We have implemented
            this system for identifying faces in images as well as in live video stream.`
    },
    {
      title: 'Cancer Detection',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/cancer-detection',
      desc: `The objective of this project is to detect whether the specified person has cancer or not on the basis of human cells record.We have used <strong>SVM machine learning
            classification</strong> algorithm to classify cells to whether the samples are benign or malignant.`
    },
    {
      title: 'House Price Prediction',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/house-price-predictor',
      desc: `The dataset contains house sale prices for King County,USA which includes Seattle. It includes homes sold between May 2014 and May 2015. Prepared a <strong>Linear 
             Regression</strong> model to predict the price of house based on the data related to housing conditions. Also used <strong>GradientBoostingRegressor</strong> for better accuracy of the model.`
    },
    {
      title: 'Opening New Bar in Delhi,India',
      duration: 'July- Aug 2020',
      link: 'https://github.com/krsanu555/Coursera_Capstone',
      desc: `The objective of this project is to help project developers in selecting the best locations in Delhi to open a new bar. In this project, we have used <strong>Web scraping </strong>
             techniques to extract neighborhoods data from Wikipedia, <strong>geopy</strong> package to get geographical co-ordinates, foursquare api to get venues data, <strong>folium</strong> library to 
             visualize on map, <strong>K-means Clustering</strong> to cluster those neighborhoods and find the best cluster.`
    }
    /*,{
      title: 'Authentication and Authorization Using JWT in Angular and .Net Web API',
      duration: 'Aug 2019',
      link: 'https://github.com/krsanu555/authentication-and-authorization-in-angular',
      desc: `In this Project I have done authentication and authorization in client application using JWT where I have used Angular 8 in front end and Asp.Net Web API in backend.`
    }*/
  
  ],
  experiences: [
   {
      organization: 'Siemens Healthineers',
      title: `Software Engineer`,
      desc: `Software Engineer`,
      date: 'Apr 2021 - Present',
      details: [
        `Developed and incorporated <strong>new features</strong> in HealthCare Product.`,
        `Optimised <strong>product performance</strong> by reducing overall turn around time of <strong>case processing</strong>.`,
	`Worked on <strong>ML algorithm</strong> integration in the app.`,
	`Improved <strong>DICOM Structured Report</strong> and <strong>Result</strong> sent to PACS.`,
	`Writing <strong>UTs</strong> along the way in projects maintaining approx <strong>90% code coverage</strong>.`,
	`Technologies Used: <strong>C++,C#,.Net Core,Angular,Docker,Kubernetes,Azure</strong>.`
       ]
    },  
    {
      organization: 'Capgemini',
      title: `Sr Software Engineer`,
      desc: `Sr Software Engineer`,
      date: 'Nov 2018 - Mar 2021',
      details: [
	/*`Contributed in the development of a HealthCare domain application using <strong>Angular</strong> in the front-end, <strong>ASP.NET Core Web API</strong> in the backend and <strong>SQL Server</strong> for database following industry-standard design patterns and best coding practices.`,*/
	`Worked on multiple applications for US largest HealthCare Provider to manage their 30+ hospitals and several specialized facilities across 6 states.`,  
        `<strong>Optimized</strong>report generation task in Excel format through database restructuring and some code changes for the associated application by <strong>40%</strong>.`,	
	`Contributed in the development of an application where we have used <strong>Angular</strong> in the front-end,<strong>Python</strong> with <strong>Django Rest Framework</strong> in the backend and <strong>MySQL</strong> for database.`,
	`Worked in <strong>Agile environment</strong> and used <strong>Azure Devops</strong> CI/CD pipeline for deploying software.`,
	`Technologies Used: <strong>C#,Python, Angular,Django,ASP.NET, ASP.NET MVC, ASP.NET WEB API, ASP.NET Core WEB API, ADO.Net, Entity Framework and MS SQL Server </strong>.`
      ]
    }
  ],
  events: [
    {
      title: 'certifications',
      body: [
	   {
          desc: `<strong>Microsoft Azure Fundamentals</strong>, certified by <strong>Microsoft</strong>. (View Certificate: <a target='_blank' href='https://www.credly.com/badges/16ded3db-8318-427c-b3a2-89f3a2d1eb30/public_url'>https://goo.gl/QRTyGv</a>)`,
          date: 'Jan 2022'
          },
	  {
          desc: `<strong>Microsoft Azure Data Fundamentals</strong>, certified by <strong>Microsoft</strong>. (View Certificate: <a target='_blank' href='https://www.credly.com/badges/49d49096-e5aa-4044-a165-1ff79057bf31/public_url'>https://goo.gl/ZSDFtR</a>)`,
          date: 'Jan 2022'
          },
	/*{
          desc: `<strong>AI For Everyone</strong>, certified by <strong>Coursera</strong>. (View Certificate: <a target='_blank' href='https://www.coursera.org/account/accomplishments/certificate/QS9VBRGBVC7Y'>https://goo.gl/XuvT3I</a>)`,
          date: 'Nov 2020'
        },*/
	     {
          desc: `<strong>IBM Data Science Professional Certificate</strong>, certified by <strong>Coursera</strong>. (View Certificate: <a target='_blank' href='https://www.coursera.org/account/accomplishments/specialization/certificate/SLENGR7SW2NC'>https://goo.gl/RZXcVr</a>)`,
          date: 'Sep 2020'
        },
	/*{
          desc: `<strong>Applied Data Science Specialization</strong>, certified by <strong>Coursera</strong>. (View Certificate: <a target='_blank' href='https://www.coursera.org/account/accomplishments/specialization/certificate/WREG2ZJBGW2D'>https://goo.gl/DSRcVr</a>)`,
          date: 'Aug 2020'
        },*/
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
    /*{
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
    /*{
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
    }*/
  ]
};
