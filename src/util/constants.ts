const f1mania: projectData = {
  nameEN: 'F1Mania App',
  nameES: 'F1Mania App',
  stared: true,
  descriptionEN: 'F1mania App is an ongoing web application project about Formula 1. Here you can get historical information, current data, current schedule, current standing, and news. User interaction such as comments, and selection of preferred pilot or constructor team, is being implemented. It uses MongoDB, TailwindCSS, TypeScript, NextJS, and more.',
  descriptionES: 'La aplicación F1Mania es un projecto de aplicación web en continuo desarrollo sobre la Fórmula 1. Aquí puedes conseguir información histórica, data actualizada, calendario actualiza, tabla de posiciones actualizado, y noticias. Interacciones del usuario, como comentarios y selección de piloto favorito o escudaria favorita, está siendo implementado. La aplicación utiliza MongoDB, TailwindCSS, TypeScript, NextJS, y más.',
  url: ['https://f1-next-app.vercel.app/', 'https://github.com/lordksix/f1-next-app/'],
  snapshot: 'https://raw.githubusercontent.com/lordksix/portfolio-v2/main/assets/f1mania/snapshot.png',
  techtag: ['NextJS', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Framer-Montion', 'Radix-UI', 'MDX', 'BCRYPT', 'Vercel', 'REST API', 'react-hook-form'],
}

const spacetravelers: projectData = {
  nameEN: "Space Travelers' Hub",
  nameES: 'Centro de los viajeros del espacio',
  stared: true,
  descriptionEN: 'Awesome React-based web application that allow users to reserve rockets and join selected space missions. It uses real live data from SpaceX Rest API. Joined missions and reserved rockets are showned in the profile page.',
  descriptionES: 'Increíble aplicación web basado en react que permite usuarios reservar cohetes y unirse a las misiones del espacio seleccionadas. Utiliza data real y actuzaliada del REST API de SpaceX. Misiones selecionadas y cohetes reservadas son mostradas en la página de perfil.',
  url: ['https://space-travelers-hub-kappa.vercel.app/', 'https://github.com/lordksix/space-travelers-hub/'],
  snapshot: 'https://raw.githubusercontent.com/lordksix/portfolio-v2/main/assets/spacetravelers/snapshot.png',
  techtag: ['ReactJS', 'JavaScript', 'SASS', 'Axios', 'React-Bootstrap', 'Jest', 'MSW', 'Redux', 'React-Router', 'Testing-Library'],
}

const webtronicsairapp: projectData = {
  nameEN: 'Air Quality App',
  nameES: 'Calidad del Aire App',
  stared: true,
  descriptionEN: 'Web application to check air quality (current, forecast, or historical) in the location you prefer or your current location. It uses React, Redux, and REST APIs to get location information and air quality information. To ensure the correct components and data are rendered, APIs and Redux stores are mocked during testing. It also utilizes Jest, Testing Library, and MSW for the testing.',
  descriptionES: 'Aplicación web para revisar la calidad del aire (actual, pronóstico, o histórico) del lugar que prefieras o de tu ubicación. Utiliza React, Redux, y REST APIs para conseguir la información del lugar deseado y su información sobre calidad del aire. Para asegurar que los componentes e información correcta sea mostrada, APIs y stores de Redux son simulados para pruebas. También utiliza Jest, Testing Library, y MSW para las pruebas.',
  url: ['https://webmetrics-webapp-cra.vercel.app/', 'https://github.com/lordksix/webmetrics-webapp-cra/'],
  snapshot: 'https://raw.githubusercontent.com/lordksix/portfolio-v2/main/assets/webtronicsAirApp/snapshot.png',
  techtag: ['ReactJS', 'JavaScript', 'Axios', 'Jest', 'MSW', 'Redux', 'React-Router', 'Testing-Library'],
}

const portfoliov2: projectData = {
  nameEN: 'Personal Portfolio',
  nameES: 'Portafolio Personal',
  stared: true,
  descriptionEN: 'An amazing interactive and responsive web application that can be used as a personal portfolio. It helps to showcase your skills, the technologies you utilize, and the languages you know. It uses a slider to showcase your projects and to guide the user to a live demo and GitHub Repo. It utilizes next-intl to help with internationalization, live demo has versions in English and Spanish. The project also has a light and a dark version that can be switched depending on user preference using next-theme. Project information is saved in a MongoDB Collection. It is also integrated into FormSpree to handle form submission and react-hook-form to handle contact form state. It utilizes farmer-motion and radix-ui to handle events for modal, tooltip, leaftip, and Swiper to create sliders.',
  descriptionES: 'Increíble aplicación web interactiva y receptivo que puede ser utilizado como portafolio personal. Ayuda a mostrar tus habilidades, tecnologías que utilizas, y lenguajes que conoces. Utiliza un slider para poner en visitra tus projectos y guiar al usuario a la demostración en vivo y a tu GitHub Repo. Utiliza next-intl para ayudar con la internacionación, demostración en vivo tiene inglés y español. El project también tiene versiones light y dark que puede ser cambiado según preferencia, utilizando next-theme. Información de projectos está guardado en una colleción de MongoDB. Está integrando a FormSpree para manejar la presentación del formulación y react-hook-form para manejar los estados del formulario. Utiliza farmer-motion y raxix-ui para manejar los eventos de los modales, tooltip, leaftip, y utliza Swiper para crear sliders',
  url: ['https://lordksix-portfolio.vercel.app/', 'https://github.com/lordksix/portfolio-v2'],
  snapshot: 'https://raw.githubusercontent.com/lordksix/portfolio-v2/main/assets/portfoliov2/snapshot.png',
  techtag: ['NextJS', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Framer-Montion', 'Radix-UI', 'MDX', 'FormSpree', 'Vercel', 'Next-Intl', 'Next-Theme', 'Swiper', 'react-hook-form'],
}

export const mockData: projectData[] = [f1mania, portfoliov2, spacetravelers, webtronicsairapp];
