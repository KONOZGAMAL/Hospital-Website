import user1 from "../../../public/assets/Images/Users/user1.jpg";
import user2 from "../../../public/assets/Images/Users/user2.jpg";
import user3 from "../../../public/assets/Images/Users/user3.jpg";
import doctor1 from "../../../public/assets/Images/Doctors/doc1.png";
import doctor2 from "../../../public/assets/Images/Doctors/doc2.png";
import doctor3 from "../../../public/assets/Images/Doctors/doc3.png";
import doctor4 from "../../../public/assets/Images/Doctors/doc4.png";
import service1 from "../../../public/assets/Images/Icons/Neurology.png";
import service2 from "../../../public/assets/Images/Icons/Cardiology.png";
import service3 from "../../../public/assets/Images/Icons/Orthopoedics.png";
import service4 from "../../../public/assets/Images/Icons/Surgery.png";
import service5 from "../../../public/assets/Images/Icons/Dentistry.png";
import service6 from "../../../public/assets/Images/Icons/Radiology.png";
import service7 from "../../../public/assets/Images/Icons/Urology.png";
import service8 from "../../../public/assets/Images/Icons/Medicine.png";
import service9 from "../../../public/assets/Images/Icons/seeMoreImage.png";

const Banner1 = [
  {
    id: "1",
    name: "500+",
    dec: "Expert Doctors",
  },
  {
    id: "2",
    name: "20k+",
    dec: "Happy Patients",
  },
  {
    id: "3",
    name: "24/7",
    dec: "Emergency Service",
  },
  {
    id: "4",
    name: "100+",
    dec: "Operation Theatres",
  },
  {
    id: "5",
    name: "850+",
    dec: "Hospital Rooms",
  },
];

const list = [
  "Easy make appointment",
  "Top specialist doctors",
  "24/7 service",
  "Discount for all medical treatments",
  "Enrolment is quick and easy",
];

const Doctors = [
  {
    id: 1,
    image: doctor1,
    name: "Dr. John Smith",
    job: "Cardiologist",
  },
  {
    id: 2,
    image: doctor2,
    name: "Dr. Kristin Watson",
    job: "Dentist",
  },
  {
    id: 3,
    image: doctor3,
    name: "Dr. Robert Flores",
    job: "Surgeon",
  },
  {
    id: 4,
    image: doctor4,
    name: "Dr. Katherine Allen",
    job: "Neurologist",
  },
];

const users = [
  {
    id: 1,
    image: user1,
    name: "Ralph Edwards",
    job: "Businessman",
    ex: "My experience with this hospital has been great. I highly recommend their services to anyone in need of quility healthcare. they truly prioritize patients care!",
  },
  {
    id: 2,
    image: user2,
    name: "Eleanor Pena",
    job: "Teacher",
    ex: "One thing that stood out to me was the efficiency of the service, i didn't have to wait long for my appointment, and the entire process was hassle-free experience",
  },
  {
    id: 3,
    image: user3,
    name: "Josh Smith",
    job: "Engineer",
    ex: "The health care professionals were top-natch. they were knowledgeable, attentive, and took the time to answer all of my questions and address my concerns",
  },
];

const service = [
  {
    id: "Neurology",
    image: service1,
    name: "Neurology",
    heading: 'Neurology Department',
    texts: [
      'Expert neurological consultations',
      'Comprehensive brain and nerve care',
      'Advanced neuroimaging services',
      'Treatment for epilepsy and seizures',
      'Memory and cognitive assessments',
      'Pediatric neurology expertise',
      'Movement disorders management',
    ],
  },
  {
    id: "Cardiology",
    image: service2,
    name: "Cardiology",
    heading: 'Cardiology Department',
    texts: [
      'Electrocardiogram (ECG)',
      'Echocardiogram',
      'Color Doppler Echo',
      'Dobutamine Stress Echo (DSE)',
      'Transesophageal Echo (TEE)',
      'Exercise Tolerance Test (ETT/TMT)',
      'Halter monitor',
      '24 Hour Ambulatory BP monitor',
      'Tilt Test/Tilt Table Test',
    ],
  },
  {
    id: "Orthopedics",
    image: service3,
    name: "Orthopedics",
    heading: 'Orthopedics Department',
    texts: [
      'Orthopedic surgery and joint replacements',
      'Sports injury and trauma care',
      'Physical therapy and rehabilitation',
      'Spine and back pain solutions',
      'Arthritis and joint disorder treatment',
      'Orthopedic consultations',
      'Customized orthopedic care plans',
    ],
  },
  {
    id: "Surgery",
    image: service4,
    name: "Surgery",
    heading: 'Surgery Department',
    texts: [
      'Minimally invasive and laparoscopic surgery',
      'Gastrointestinal surgery and endoscopy',
      'Plastic and reconstructive surgery',
      'Cancer and tumor resection',
      'Post-operative care and recovery',
      'Surgical consultations',
      'Emergency surgical interventions',
    ],
  },
  {
    id:"Dentistry",
    image: service5,
    name: "Dentistry",
    heading: 'Dentistry Department',
    texts: [
      'Routine dental check-ups and cleanings',
      'Cosmetic dentistry and teeth whitening',
      'Oral surgery and extractions',
      'Dental implants and restorations',
      'Pediatric and family dentistry',
      'Gum disease treatment',
      'Orthodontic and braces options',
    ],
  },
  {
    id:"Radiology",
    image: service6,
    name: "Radiology",
    heading: 'Radiology Department',
    texts: [
      'Advanced diagnostic imaging services',
      'Mammography and breast health screening',
      'Interventional radiology procedures',
      'Virtual colonoscopy and body scans',
      'Radiology consultations',
      'Fast and accurate imaging results',
      'State-of-the-art radiology technology',
    ],
  },
  {
    id:"Urology",
    image: service7,
    name: "Urology",
    heading: 'Urology Department',
    texts: [
      'Urinary tract and kidney evaluations',
      'Urologic surgery and stone removal',
      "Men's and women's urological health",
      'Prostate and bladder care',
      'Incontinence and pelvic floor therapy',
      'Urological consultations',
      'Comprehensive urology solutions',
    ],
  },
  {
    id: "Medicine",
    image: service8,
    name: "Medicine",
    heading: 'Medicine Department',
    texts: [
      'Primary care and internal medicine',
      'Chronic disease management and prevention',
      'Immunizations and wellness checks',
      'Holistic and integrative medicine',
      'Geriatric and pediatric medicine',
      'Health education and lifestyle coaching',
      'Individualized medical treatment plans',
    ],
  },
  {
    id:"seemore",
    image: service9,
    name: "seemore",
    heading: 'Explore Our Services',
    texts: [
      'Explore additional healthcare options',
      'Specialized medical services for all needs',
      'Discover a world of medical solutions',
      'Find the right care for you',
      'Comprehensive healthcare offerings',
      'More than meets the eye',
      'Healthcare beyond expectations',
    ],
  },
];
export { Banner1, list, users, Doctors, service };
