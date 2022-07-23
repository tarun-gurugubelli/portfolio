import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Fake news detection using several ML algorithms',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/faizanalam1620/Fake-news-detection.git',
      mediumlink: '',
      imgUrl: 'assets/images/fake-news.webp',
      tech: 'Python, Machine learning and Deep Learning'
    },

    {
      id: 2,
      title: 'Sentiment Analysis for tweets of twitter',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/faizanalam1620/Project1/tree/main/Sentiment%20Analysis%20Project',
      mediumlink: '',
      imgUrl: 'assets/images/tweet-sentiment.jpeg',
      tech: 'Python, Machine learning and Deep Learning'
    },


    {
      id: 3,
      title: 'CRUD operation using PEAN stack',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: '',
      tech: 'Angular 10, Node, PostgreSQL, Express'
    },

    // {
    //   id: 4,
    //   title: 'Multiroom Chat Application in Node JS',
    //   desc: '',
    //   livedemo: 'https://chatapp-using-node.herokuapp.com/',
    //   githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
    //   mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
    //   imgUrl: 'assets/images/z23.png',
    //   tech: 'Node JS,Socket IO'
    // },


    // {
    //   id: 5,
    //   title: 'Integrate Medium Blogs on your React App',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
    //   githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
    //   mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
    //   imgUrl: 'assets/images/z4.png',
    //   tech: 'React JS'
    // },



    // {
    //   id: 6,
    //   title: 'News App using ReactJS (Parsing XML to JSON)',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
    //   githurl: 'https://github.com/mehulk05/NewsApp-using-React',
    //   mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
    //   imgUrl: 'assets/images/z24.png',
    //   tech: 'React JS, XMl to JSON'
    // },



    // {
    //   id: 7,
    //   title: 'Medium-Like Blog App Using Angular 9 and Firebase',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-Book/',
    //   githurl: 'https://github.com/mehulk05/Blog-Book',
    //   mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
    //   imgUrl: 'assets/images/z21.png',
    //   tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    // },



    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript'
    // },


    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api'
    // },


    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate'
    // },


    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap'
    // },


    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django'
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.'
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // },

  ]
  about2 = `Software Developer with 1+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Python, Artificial Intelligence/Machine Learning and various NLP technologies . 
  Also worked with Javascript, Angular, Node JS, Express JS and UI with Responsive Designs .
  Have good understanding of programming languages like Python, Java, JavaScript and worked on databases like Postgresql, MySQL, MongoDB etc .
  Good problem solving skills and having expertise in Data Structure and Algorithms .
  Knowledge of various software design principles and patterns .
  Have used various cloud computing services with AWS .
  Used various tools like Docker, Github, Jenkins etc.`

  about = " My strengths include building clean and efficient code with good attention to detail and my experience ranges from developing web apps to complex back end database management systems using Python, JavaScript and Java. With the wide knowledge of software engineering, I can apply different technology stacks to solve challenging problems as well. Always eager to learn new tools and technologies."
  resumeurl = "https://drive.google.com/file/d/1uCBDRF1KG9d7PxAPnyU38DZ-lyQTcPfR/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Python',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Artificial Intelligence/Machine Learning',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT, Angular, Node JS, Express JS',
      'progress': '60%'
    },
    {
      'id': '4',
      'skill': 'PostgreSQL , MYSQL, MONOGO',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'FastAPI(Python Framework)',
      'progress': '85%'
    },
    {
      'id': '6',
      'skill': 'Data Structure & Algorithms',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'AWS cloud services',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'Java, C++',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.  
Won the Best Student Award 3 times for excellent Academic records at College. 
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Sourcefuse Technologies',
      location: 'Noida, India',
      timeline: 'May 2021 to Present',
      role: 'Junior Engineer- AI/ML',
      work: 'Working as a full stack developer .Responsible for handling and Managing the api calls in python FastAPI along with AI/ML and NLP technologies.'

    },
    {
      id: 3,
      company: 'Internship at Softnika solutions',
      location: 'Remote',
      timeline: 'May 18, 2020 to June 30, 2020',
      role: 'Web Developer',
      work: `Technologies : HTML, CSS, Javascript, PHP, MySQL .  
      Developed a multipage web application on online food ordering system using PHP as backend with MySQL and HTML, CSS and JS for frontend`
    },

    {
      id: 2,
      company: 'Internship at Bihar State Electronic Development Corporation (BSEDC) Ltd. Patna',
      location: 'Patna',
      timeline: '',
      role: 'Project Trainee',
      work: `Technologies : HTML, CSS and JavaScript . 
      Developed BSWAN website for BSEDC using HTML, CSS and JS.
  `
    }

  ]

  skills(): Observable<any> {
    
    return this.skillsData;
  }

  getProjects(): Observable<any> {
  
    return this.projects;
  }
  education(): Observable<any> {
    
    return this.educationData;
  }

  exprience(): Observable<any> {

    return this.exprienceData;
  }
}
