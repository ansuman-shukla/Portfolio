import React from 'react';
import './Portfolio.css';
import chatbot from '../../assests/chatbot.png';
import shoping from '../../assests/shoping.jpg';

const projects = [
{ 
    id: 1,
    image: chatbot,
    title: 'Chat Bot',
    position: 'Hackathon',
    date: 'Aug 2024',
    description: 'Created a webUI chatbot using pyhton and streanlit to help people get entertained on the go. Built the UI and custom quick chat functionality based on response data from the bot\’s conversation API. Using GROQ that was ultra Fast'
},
{ 
    id: 2,
    image: shoping,
    title: 'Shoping Website',
    position: 'ProductService Dev',
    date: 'june 2024',
    description: 'Developed a Spring Boot-based product service system for an e-commerce platform. Implemented RESTful APIs for CRUD operations, inventory management, and product categorization. Utilized Spring Boots features for rapid development, including dependency injection and auto-configuration. The system ensures efficient data handling, validation, and seamless database interaction, providing a scalable solution for the e-commerce website..'
},
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
                <article key={project.id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={project.image} alt={project.title} />
                    </div> 
                    <h3>{project.title}</h3>
                    <h5>{project.position}</h5>
                    <h6>{project.date}</h6>
                    <small className='portfolio__desc'>
                        {project.description}
                    </small>
               </article>
            )
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;