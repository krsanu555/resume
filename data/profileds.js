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
   // { title: 'Portfolio', src: 'https://krsanu555.github.io/' },
    { title: 'Github', src: 'https://github.com/krsanu555' },
    { title: 'LinkedIn', src: 'https://www.linkedin.com/in/krsanu555' },
    { title: 'Medium', src: 'https://medium.com/@krsanu555' },
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
      category: '',
      topics: ['Python','Pandas','Numpy','Data Analysis','Data Visualization','Machine Learning','Git','SQL','MySQL','Deep Learning']
    },
   /* {
      graph: 'false',
      category: 'Databases',
      topics: ['ElasticSearch', 'MySQL', 'SQL']
    },
    {
      graph: 'false',
      category: 'Frameworks / Libraries',
      topics: ['Scikit-learn','Pytorch','Keras','Tensorflow','Numpy','Pandas','Matplotlib']
    },
    {
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
      title: 'Face Recognition using OpenCV and Deep Learning',
      duration: 'Oct 2020',
      link: 'https://github.com/krsanu555/face-recognition',
      desc: `In this project,We have used OpenCV for face detection and Deep Learning FaceNet model for face recognition. We have implemented
            this system for identifying faces in images as well as in live video stream.`
    },
    {
      title: 'Drug Prescription',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/drug-prescription',
      desc: `The objective of this project is to help doctors to find out which drug might be appropriate for a future patient with the same illness based on patient data
             such as Age, Sex, Blood Pressure, and Cholesterol of patients. Used Decision Tree Classifier to achieve this.`
    },
   {
      title: 'House Price Prediction',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/house-price-predictor',
      desc: `The dataset contains house sale prices for King County,USA which includes Seattle. It includes homes sold between May 2014 and May 2015. Prepared a Linear 
             Regression model to predict the price of house based on the data related to housing conditions. Also used GradientBoostingRegressor for better accuracy of the model.`
    },
   /*{
      title: 'Predicting Loan Status',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/analyzing-and-predicting-loan-case',
      desc: `This project will help bankers to predict the loan status of customers of a bank on the basis of previous data of the customers who have already taken loan from that bank.`
    },*/
   {
      title: 'Cancer Detection',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/cancer-detection',
      desc: `The objective of this project is to detect whether the specified person has cancer or not on the basis of human cells record.We have used SVM machine learning
            classification algorithm to classify cells to whether the samples are benign or malignant.`
    },
  /* {
      title: 'Predicting Customer Churn',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/predicting_customer_churn',
      desc: `This project will help telecommunication company to predict when its customers will leave for a competitor, so that they can take some action to retain the customers.`
    },*/
    {
      title: 'Recommendation Engine',
      duration: 'Sep 2020',
      link: 'https://github.com/krsanu555/movie-recommendation-engine',
      desc: `The objective of this project is to recommend movies to the user based on favourite aspects of an item drawn from the previously watched movies and similarity of the 
             other users that have similar preferences and opinions to this user. In this project we have used Content Based and Collaborative Filtering approach.`
    },
    {
      title: 'Opening New Bar in Delhi,India',
      duration: 'July- Aug 2020',
      link: 'https://github.com/krsanu555/Coursera_Capstone',
      desc: `The objective of this project is to help project developers in selecting the best locations in Delhi to open a new bar. In this project, we have used Web scraping 
             techniques to extract neighborhoods data from Wikipedia,geopy package to get geographical co-ordinates, foursquare api to get venues data, folium library to 
             visualize on map,K-means Clustering to cluster those neighborhoods and find the best cluster.`
    },
   {
      title: 'POI Identifier of Enron Dataset',
      duration: 'June 2020',
      link: 'https://github.com/krsanu555/Intro-to-MachineLearning-Udacity-FinalProject',
      desc: `In this project,We played detective, and put our machine learning skills to use by building an algorithm to identify Enron Employees who may have committed fraud based on the public Enron financial and email dataset.`
    }
  ],
  experiences: [
    {
      organization: 'Capgemini',
      title: `Sr Software Engineer`,
      desc: `Sr Software Engineer`,
      date: 'Nov 2018 - Present',
      details: [
        `Contributed in the development of an application of client in Manufacturing domain by using Angular and Django Rest Framework.`,
        `Removed Data Access Layers from .NET MVC Web Application and incorporated those layers into ASP.Net Web APIs.`
      ]
    },
    {
      organization: 'Wildnet Technologies',
      title: 'Full-Stack Developer Intern',
      desc: `<strong>Full-Stack Developer intern</strong> at  <a target='_blank' href='https://www.wildnettechnologies.com/'> <strong>Wildnet Technology </strong> </a> (<a target='_blank' href='http://ep3dev.azurewebsites.net/'>Project Link</a>)`,
      date: 'Jun 2018 - Oct 2018',
      details: [
        `Designed and developed a E-Commerce Web Application using ASP.Net MVC </strong>.
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
          desc: `<strong>AWS Builders Online Series</strong> by <strong>AWS</strong>. (<a target='_blank' href='https://tinyurl.com/y3spk6mx'>https://goo.gl/ZDVyTr</a>)`,
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
