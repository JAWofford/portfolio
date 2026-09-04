const projects = [
 
  {
  title: 'Park Planner',
  subheading: 'React Application Simplifying National Park Trip Planning',
  status: 'Live',
  description: 'National park trip planning information is scattered across the NPS site with no easy way to search by activity or build a personalized visit plan. Park Planner lets users search parks by name, location, or activity, browse categorized activity listings per park, and build a custom itinerary by adding and removing activities — plus enter personal trip details, all in one place.',
  techStack: ['React', 'JavaScript', 'React Router', 'CSS'],
  image: '/thumbnail.png',
  imageAlt: 'Park search results page showing a list of national parks',
   githubUrls: [
    { label: 'Repo', url: 'https://github.com/JAWofford/park-planner' },
  ],
  liveUrl: 'https://parkplanner26.netlify.app',
},

 {
  title: 'Adventure Log',
  subheading: 'Full-Stack Trip and Campground Journal for RV & Camper Owners',
  status: 'In Progress',
  description: 'RV and camper trips generate the kind of hard-won knowledge — the best site at a campground, a great stop along the route, where to get gas — that usually just lives in someone\u2019s head or a scattered notes app. Adventure Log gives RV and camper owners one place to log campground stays with notes on specific sites, keep a trip-by-trip travel scrapbook, and eventually browse public trips and reviews from other travelers. Built with a React frontend and a separate Spring Boot backend, with secure session-based authentication in place.',
  techStack: ['React', 'Spring Boot', 'Spring Security', 'MySQL', 'JavaScript'],
  image: '/adventure-log-thumbnail.png',
  imageAlt: 'Adventure Log landing page',
   githubUrls: [
    { label: 'Frontend', url: 'https://github.com/JAWofford/adventure-log-frontend' },
    { label: 'Backend', url: 'https://github.com/JAWofford/adventure-log-backend' },
  ],
},
  
];

export default projects;