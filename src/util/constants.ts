const f1mania: projectData = {
  nameEN: 'F1Mania App',
  nameES: 'F1Mania App',
  stared: true,
  descriptionEN: 'F1mania App is an ongoing web application project about Formula 1. Here you can get historical information, current data, current schedule, current standing, and news. User interaction such as comments, and selection of preferred pilot or constructor team, is being implemented. It uses MongoDB, TailwindCSS, TypeScript, NextJS, and more.',
  descriptionES: 'La aplicación F1Mania es un projecto de aplicación web en continuo desarrollo sobre la Fórmula 1. Aquí puedes conseguir información histórica, data actualizada, calendario actualiza, tabla de posiciones actualizado, y noticias. Interacciones del usuario, como comentarios y selección de piloto favorito o escudaria favorita, está siendo implementado. La aplicación utiliza MongoDB, TailwindCSS, TypeScript, NextJS, y más.',
  url: ['https://f1-next-app.vercel.app/', 'https://github.com/lordksix/f1-next-app/'],
  snapshot: 'https://raw.githubusercontent.com/lordksix/portfolio-v2/main/assets/f1mania/snapshot.png',
  techtag: ['NextJS', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Framer-Montion', 'Radix-UI', 'MDX', 'BCRYPT', 'Vercel', 'REST API'],
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

export const mockData: projectData[] = [f1mania, spacetravelers, webtronicsairapp];
