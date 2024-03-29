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
      address: 'Bangalore, Karnataka 560100'
    }
  },
  links: [
    { title: 'Portfolio', src: 'https://krsanu555.github.io/' },
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
      organization: 'Siemens Healthineers',
      title: `Software Engineer`,
      desc: `Software Engineer`,
      date: 'Apr 2021 - Present',
      details: [
        `Developed and incorporated new features in HealthCare Product.`,
        `Optimised product performance by reducing overall turn around time of case processing.`,
	`Worked on ML algorithm integration in the app.`,
	`Improved DICOM Structured Report and Result sent to PACS.`
       ]
    },
    {
      organization: 'Capgemini',
      title: `Sr Software Engineer`,
      desc: `Sr Software Engineer`,
      date: 'Nov 2018 - Mar 2021',
      details: [
        `Contributed in the development of an application of client in Manufacturing domain by using Angular and Django Rest Framework.`,
        `Converted MVC architecture web application into a client server application by creating RESTful ASP.NET Web APIs following industry-standard 
	design patterns and best coding practices and consuming these APIs endpoints in that web application.`,
	`Optimized one method for generating report in Excel format through database restructuring and some code changes for the associated application by 40%.`,
	`Worked in Agile environment and used Azure Devops CI/CD pipeline for deploying software.`
	      
      ]
    }
  ],
  events: [
    {
      title: 'certifications',
      body: [
	   {
          desc: `<strong>Microsoft Azure Data Fundamentals</strong>, certified by <strong>Microsoft</strong>. (View Certificate: <a target='_blank' href='https://www.credly.com/earner/earned/badge/49d49096-e5aa-4044-a165-1ff79057bf31'>https://goo.gl/ZSDFtR</a>)`,
          date: 'Jan 2022'
          },
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
    /*{
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
    }*/
  ]
};
