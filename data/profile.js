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
      topics: ['.Net', 'Angular','Django','Scikit-learn','Pytorch','Keras','Numpy','Pandas','Matplotlib']
    },
    /*{
      graph: 'false',
      category: 'Machine Learning',
      topics: ['SVM', 'Decision Tree','Logistic Regression','Random Forest','Linear Regression','KNN','Clustering']
    },
    {
      graph: 'false',
      category: 'Deep Learning',
      topics: ['Neural Networks', 'Computer Vision','Object Detection']
    }*/
  ],
  projects: [
    {
      title: 'Drug Prescription',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/drug-prescription',
      desc: `The objective of this project is to help doctors to find out which drug might be appropriate for a future patient with the same illness based on factors such as Age, Sex, Blood Pressure, and Cholesterol of patients.`
    },
   {
      title: 'House Price Prediction',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/house-price-predictor',
      desc: `The aim of this project is to determine the price of the house based on housing conditions.`
    },
   {
      title: 'Predicting Loan Status',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/analyzing-and-predicting-loan-case',
      desc: `This project will help bankers to predict the loan status of customers of a bank on the basis of previous data of the customers who have already taken loan from that bank.`
    },
   {
      title: 'Cancer Detection',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/cancer-detection',
      desc: `The objective of this project is to detect whether the specified person has cancer or not on the basis of human cells record.`
    },
   {
      title: 'Predicting Customer Churn',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/predicting_customer_churn',
      desc: `This project will help telecommunication company to predict when its customers will leave for a competitor, so that they can take some action to retain the customers.`
    },
    {
      title: 'Recommendation Engine',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/movie-recommendation-engine',
      desc: `The objective of this project is to recommend movies to the user based on favourite aspects of an item drawn from the previously watched movies and similarity of the other users that have similar preferences and opinions to this user.`
    },
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
        `Contributed in the development of an application of client in <strong>Health Care domain</strong> by converting the existing .Net mvc architecture web 
         application into separate front-end client and back-end servers by using <strong>Angular</strong> and <strong>Django Rest Framework.</strong>`,        
        `Worked on Enhancement tasks for many old .Net applications includes creating and securing build & config profiles for different environments 
         i.e. Development,QA and Production.`,
	`Secured APIs using AD Groups and made it accessible only through Client Network.`,
	`Optimised method for generating report in Excel format through database restructuring and some code changes for the associated application by 80%.`,
	`Worked on making one existing application more user friendly.`
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
          desc: `<strong>IBM Data Science Professional Certificate</strong>, certified by <strong>Coursera</strong>. (View Certificate: <a target='_blank' href='https://www.coursera.org/account/accomplishments/specialization/certificate/SLENGR7SW2NC'>https://goo.gl/RZXcVr</a>)`,
          date: 'Sep 2020'
        },
	  {
          desc: `<strong>Applied Data Science Specialization</strong>, certified by <strong>Coursera</strong>. (View Certificate: <a target='_blank' href='https://www.coursera.org/account/accomplishments/specialization/certificate/WREG2ZJBGW2D'>https://goo.gl/DSRcVr</a>)`,
          date: 'Aug 2020'
        },	 
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
          desc: `<strong>Data Engineering on Google Cloud Platform</strong> by <strong> Google</strong>`,
          date: 'Aug 2020'
        },
	{
          desc: `<strong>AWS Builders Online Series</strong>by <strong>AWS</strong>. (<a target='_blank' href='https://tinyurl.com/y3spk6mx'>https://goo.gl/ZDVyTr</a>)`,
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
