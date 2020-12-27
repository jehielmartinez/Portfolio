import becoLogo from './images/beco.png'
import cexLogo from './images/codeExitos.png'

const resume = {
  profile: {
    name: 'Fredys Jehiel Martinez Espinoza',
    label: 'Software Developer / Electrical Engineer',
    picture: 'profile-pic.jpg',
    location: 'San Pedro Sula, Honduras',
    email: 'jehielmartinez@gmail.com',
    phone: '',
    website: 'https://www.jehielmartinez.com',
    twitter: 'jehielhn',
    github: 'jehielmartinez',
    dev: 'jehielmartinez',
    linkedin: 'jehielmartinez',
    codepen: 'jehielmartinez'
  },
  skills: [
    'React',
    'Javascript',
    'React Native',
    'HTML',
    'CSS',
    'Bootstrap',
    'NodeJS',
    'Express',
    'Firebase',
    'MongoDB',
    'Arduino',
    'AVR',
    'Circuit Board Design',
    '3D Parts Design',
    'EAGLE CAD',
    'Fusion 360'

  ],
  about: ["My hobby has always been to create things, from small toys with Legos to real electronic gadgets for personal use. I'm always doing something; I always have a project in mind and a tireless intellectual curiosity. This penchant for creating and learning things has led me to teach myself to program electronics devices as well as web and mobile applications. My professional goal is to provide quality service, as a trustworthy leader who will do everything possible to keep production and innovation in optimal values. ", 'Always ready to solve problems using engineering, dedication and a lot of coffee.'],
  experience: [
    {
      company: 'CODE Exitos',
      logo: cexLogo,
      website: 'https://codexitos.com',
      position: 'Software Engineer',
      startDate: '1/11/2019',
      endDate: 'now',
      activities: []
    },
    {
      company: 'Bijao Electric Company S.A.',
      logo: becoLogo,
      website: 'https://beco.hn',
      position: 'Plant Operations Supervisor Engineer',
      startDate: '16/02/2016',
      endDate: '31/10/2019',
      activities: [
        'Ensure the correct operation of all equipments on plant.',
        'Supervise and asign tasks to field technician operators daily.',
        'Plan an execute daily equipment field inspections.',
        'Report and optimize production, consumption and performace values.',
        'Create the Operations Manual for every equipment in plant.'
      ]
    },
    {
      company: 'Bijao Electric Company S.A.',
      logo: becoLogo,
      website: 'https://beco.hn',
      position: 'Turbine Operation Engineer',
      startDate: '09/02/2016',
      endDate: '15/06/2016',
      activities: [
        'Ensure the reliable operation of a 35MW steam turbine and generator unit.',
        'Attend and control of emergencies like homeloads, blackouts or operation failures.',
        'Supervise the correct maintenace and operation of equipments during shutdowns.'
      ]
    }
  ],
  projects: [
    {
      name: 'Oversight',
      image: 'oversight.jpg',
      description: 'Oversight is a platform created to ease the administration of residential areas in Honduras thru a mobile-based app. I develop the app in React Native, Nodejs, Express and MongoDB. The web app was developed using ReactJS.',
      link: 'https://www.oversight.hn'
    },
    {
      name: 'Cryptos',
      image: 'cryptos.png',
      description: 'Quick check price of your favorite Cryptocurrency! React app exploring Styled Components and Hooks',
      link: 'http://jehielmartinez.github.io/cryptos'
    },
    {
      name: 'Stock Control App',
      image: 'stock-control.jpg',
      description: 'Stock Control is a web-based application to control the tool loans and material existence in the operations department local hardware store at Bijao Electric Company S.A. Created with ReactJS, MongoDB, Nodejs, Express, Bootstrap.',
      link: ''
    },
    {
      name: 'RTracker App',
      image: 'r-tracker.jpg',
      description: 'The R-Tracker stands for Responsibilities Tracker, is a simple personal tool to remember and keep track of all the pending bills every fifteen days. Created with React Native, Nodejs, Express, MongoDB.',
      link: ''
    },
    {
      name: 'Playground App',
      image: 'playground.jpg',
      description: 'Playground was a start-up project to create a platform for the reservation, rent and administration of mini soccer playing fields in Honduras. Created with Ionic4 and Firebase as backend. Web app developed in AngularJS',
      link: ''
    }
  ],
  education: [
    {
      institution: 'UNAH-VS',
      degree: 'Industrial Electrical Engineer',
      logo: 'https://i.pinimg.com/originals/d4/15/32/d415326370a671a45006fa4efe0bbac7.png',
      startDate: '1/02/2010',
      endDate: '6/12/2016',
      website: 'https://vallesula.unah.edu.hn'
    },
    {
      institution: 'Platzi',
      degree: 'ReactJS',
      logo: 'https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png',
      startDate: '01/10/2019',
      endDate: '07/10/2019',
      website: 'https://platzi.com/@jehielmartinez/curso/1651-react-ejs/diploma/detalle/'
    },
    {
      institution: 'Udemy',
      degree: 'Nodejs Developer',
      logo: 'https://cdn.freebiesupply.com/logos/large/2x/udemy-1-logo-png-transparent.png',
      startDate: '27/05/2019',
      endDate: '25/08/2019',
      website: 'https://www.udemy.com/certificate/UC-06GTFNFL/'
    },
    {
      institution: 'FreeCodeCamp',
      degree: 'Responsive Web Design',
      logo: 'https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg',
      startDate: '01/09/2019',
      endDate: '29/09/2019',
      website: 'https://www.freecodecamp.org/certification/jehielmartinez/responsive-web-design'
    },
    {
      institution: 'Platzi',
      degree: 'Angular 4',
      logo: 'https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png',
      startDate: '10/04/2018',
      endDate: '12/05/2018',
      website: 'https://platzi.com/@jehielmartinez/curso/1153-angular-4/diploma/detalle/'
    },
    {
      institution: 'Platzi',
      degree: 'Frontend Developer',
      logo: 'https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png',
      startDate: '01/09/2019',
      endDate: '26/09/2019',
      website: 'https://platzi.com/@jehielmartinez/curso/1640-frontend-developer/diploma/detalle/'
    }
  ]
}

export default resume
