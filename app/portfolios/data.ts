import cm1 from "../../public/images/calanderManagement/cm1.jpg";
import cm2 from "../../public/images/calanderManagement/cm2.jpg";
import cm3 from "../../public/images/calanderManagement/cm3.jpg";
import cm4 from "../../public/images/calanderManagement/cm4.jpg";
import cm5 from "../../public/images/calanderManagement/cm5.jpg";

import ako1 from "../../public/images/akole/ako1.png";
import ako2 from "../../public/images/akole/ako2.png";
import ako3 from "../../public/images/akole/ako3.png";
import cm6 from "../../public/images/calanderManagement/cm6.jpg";
import cm7 from "../../public/images/calanderManagement/cm7.jpg";
import cm8 from "../../public/images/calanderManagement/cm8.jpg";
import pdd1 from "../../public/images/plantDeaseaseDetection/pdd1.jpg";
import pdd2 from "../../public/images/plantDeaseaseDetection/pdd2.jpg";
import pdd3 from "../../public/images/plantDeaseaseDetection/pdd3.jpg";
import pdd4 from "../../public/images/plantDeaseaseDetection/pdd4.jpg";

import crm0 from "../../public/images/crm/ahf0.jpg";
import crm1 from "../../public/images/crm/ahf1.png";
import crm2 from "../../public/images/crm/ahf2.png";
import crm3 from "../../public/images/crm/ahf3.png";
import crm4 from "../../public/images/crm/ahf4.png";
import crm5 from "../../public/images/crm/ahf5.png";
import crm6 from "../../public/images/crm/ahf6.png";
import crm7 from "../../public/images/crm/ahf7.png";
import medfind1 from "../../public/images/medfind/medfind1.png";
import medfind2 from "../../public/images/medfind/medfind2.png";
import medfind3 from "../../public/images/medfind/medfind3.png";
import medfind4 from "../../public/images/medfind/medfind4.png";
import medfind5 from "../../public/images/medfind/medfind5.png";
import medfind6 from "../../public/images/medfind/medfind6.png";
import medfind7 from "../../public/images/medfind/medfind7.png";
import medfind8 from "../../public/images/medfind/medfind8.png";

export const portfolioData = [
  {
    id: 1,
    type: "mobile",
    data: [ako1, ako2, ako3],
    title: " Akolle Delivery",
    description: `Akolle Delivery is an innovative demo platform designed to transform 
    the delivery experience for perishable goods such as food, dairy products,
     and honey. With a strong emphasis on user satisfaction, it ensures the seamless
      integration between customers and delivery service providers, prioritizing the 
      careful transport of goods to guarantee they arrive fresh, on time, and in perfect condition. 
      From streamlined order placement to real-time tracking and optimized delivery routes, 
      the app showcases its potential to redefine perishable goods transportation, 
      offering a reliable and high-quality service model.

`,
  },
  {
    id: 2,
    type: "website",
    data: [crm0, crm1, crm2, crm3, crm4, crm5, crm6, crm7],
    title: "Real Estate CRM SaaS Development",
    description: `At Addis Finder PLC, we developed a Real Estate CRM SaaS 
    platform with three core modules: Supplier, Agency, and Service
     Provider. The Service Provider bridges Suppliers and Agencies, 
     enabling seamless collaboration. The Supplier module manages properties,
      buildings, floors, blocks, and sites with an integrated workspace for agency 
      interactions. The Agency module includes commission options, payment plans,
       event-based discounts, and a mobile app for agents. Built using React, TypeScript,
        Material-UI, PHP Symfony, and Flutter, this platform delivers a scalable, user-friendly 
        solution tailored to real estate needs.`,
  },
  {
    id: 3,
    type: "website",
    data: [pdd1, pdd2, pdd3, pdd4],
    title: " AI-Driven Plant Disease Detection",
    description: `This project develops an advanced AI-driven solution for plant disease detection using 
    a trained Convolutional Neural Network (CNN) model to accurately classify plant diseases. 
    The process involves training the AI model with a curated dataset of plant images, optimizing 
    it for high classification accuracy, and then deploying the trained model in a Flask-based application
     with a simple, user-friendly web interface. By combining robust AI techniques with practical 
     deployment strategies, the project demonstrates how cutting-edge technology can address
      critical agricultural challenges, offering scalable and efficient plant health diagnostics solutions.

`,
  },
  {
    id: 4,
    type: "mobile",
    data: [cm1, cm2, cm3, cm4, cm5, cm6, cm7, cm8],
    title: " Ethiopian Calendar Management System",
    description: `This project develops an Ethiopian Calendar Management System, 
      featuring the unique 13-month Ethiopian calendar, religious and public holidays, 
      and a conversion tool between the Ethiopian and Gregorian calendars. It integrates 
      daily prayers, Bible readings, and saint prayers specific to the Ethiopian Orthodox Church. 
      The system supports four languages, making it accessible to a wider audience. 
      The platform simplifies Ethiopian cultural and religious practices, enhancing
       accessibility to Orthodox teachings while bridging tradition with modern technology.`,
  },
  {
    id: 5,
    type: "website",
    data: [medfind1, medfind2, medfind3, medfind4, medfind5, medfind6, medfind7, medfind8],
    title: " MedFind: Medicine Availability",
    description: `MedFind is a web-based application that offers an interactive and
       responsive platform for users to access information about medicine availability 
       It provides a range of features, including listing pharmacies in a specific region 
       that have a particular medicine, identifying the closest pharmacies with the requested 
       medicine based on the user's location, ranking pharmacies based on their distance from a
        specified location, enabling users to create and manage a watchlist for tracking medicine
         availability and integrating Google Maps API to display pharmacy locations on a map view.`,
  },
];
