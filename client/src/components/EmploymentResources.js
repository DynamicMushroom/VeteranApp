import React from 'react';
import { Link } from 'react-router-dom';

const EmploymentResources = () => {
  const resources = [
    {
      name: "90 Works",
      description: "Assists individuals in a crisis to become self-sustaining. Assists in acquiring housing and employment and provides budget counseling.",
      phone: "(855) 90-WORKS (96757)",
      website: "http://www.90works.org",
      address: "115 Gregory Sq., Pensacola, FL 32502"
    },
    {
      name: "Bunker Labs",
      description: "Provides fully sponsored workspaces to 10 tribes of 10 veterans across 10 cities every six months.",
      website: "https://bunkerlabs.org/veterans-in-residence/",
      address: "222 W. Merchandise Mart Plaza, Suite 1212, Chicago, IL 60654"
    },
    {
    name: "CareerSource EscaRosa",
    description: "Online marketplace for job opportunities in the EscaRosa area. Also provides employment counseling if needed.",
    website: "https://careersourceescarosa.com/",
    phone: "Pensacola: (850) 607-8700, Milton: (850) 983-5325, Century: (850) 256-6259",
    address: "Pensacola: 6913 N.9th Ave. Pensacola, Fl. 32504, Milton: 5725 Highway 90, Milton, FL 32583, Century: 8120 North Century Blvd, Century, FL 32535"
},
{
    name: "Co:Lab",
    description: "Provide entrepreneurs with various services in the incubator program including full-service facility space, education, mentoring, and connectivity to Co:Lab’s entrepreneurship support ecosystem.",
    website: "www.colabpensacola.com",
    phone: "850-696-1314",
    address: "418 W Garden St., Pensacola, FL 32502"
},
{
    name: "Community Action Program Committee, INC.",
    description: "Employment and Education support available to residents of Northwest Florida",
    website: "www.capc-pensacola.org",
    phone: "(850) 438-4021, Fax: (850) 437-0237",
    address: "1380 North Palafox Street, Pensacola, FL 32501"
},
{
    name: "Employ Florida Marketplace",
    description: "Online marketplace for job opportunities in the state of Florida.",
    website: "https://employflorida.com/",
    phone: "",
    address: ""
},
{
    name: "Feds Hire Vets",
    description: "Resource for military Veterans and their families to help them find a job with the federal government.",
    website: "www.fedshirevets.gov",
    phone: "(202) 606-7304",
    address: "1900 E. Street, NW, Rm 7439-AF, Washington, DC 20415"
},
{
    name: "Go Vets Foundation",
    description: "Created to improve Veterans’ quality of life. Assists Veterans in finding employment.",
    website: "www.govetsfoundation.org",
    phone: "(480) 499-5390",
    address: ""
},
{
    name: "Helmets to Hardhats",
    description: "Connects Veterans with building and construction careers.",
    website: "www.helmetstohardhats.org",
    phone: "(866) 741-6210",
    address: ""
},
{
    name: "Hire A Hero",
    description: "",
    website: "http://hireahero.org/",
    phone: "",
    address: ""
},
{
    name: "Hire Our Heroes",
    description: "Wal-Mart Foundation Military Family Promise Program: job listings for Veterans; help for employees with active duty spouses who are being transferred.",
    website: "www.walmartcareerswithamission.com",
    phone: "",
    address: ""
},
{
    name: "Hiring Our Heroes",
    description: "Hiring Our Heroes is a nationwide initiative to help Veterans, transitioning service members, and military spouses to find meaningful employment opportunities.",
    website: "www.uschamberfoundation.org/hiring-our-heroes",
    phone: "(202) 463-5807",
    address: "Email: hiringourheroes@uschamber.com"
},
{
    name: "Hire Patriots",
    description: "Free job board connects Veterans through local job postings by individuals and businesses, Transitional Training, and Veterans Entrepreneur Mentoring.",
    website: "www.hirepatriots.com",
    phone: "(760) 730-3734",
    address: "Email: ceo@hirepatriots.com"
},
{
    name: "Hire Veterans",
    description: "",
    website: "www.hireveterans.com",
    phone: "",
    address: ""
},
{
    name: "Military to Civilian",
    description: "Connecting Veterans and their families with civilian career opportunities.",
    website: "www.military-civilian.com",
    phone: "(310) 455-2002",
    address: "Email: lucy@military-civilian.com"
},
{
    name: "NextOp",
    description: "NextOp was founded in 2014 by veteran and industry leaders who sought to build a strong military talent pipeline to industries. Our founders identified a gap between E-3 and E-7 military members and companies looking to hire military talent.",
    website: "www.nextopvets.org",
    phone: "(310) 455-2002",
    address: "Email: patrick@nextopvets.org"
},
{
    name: "Patriot Boot Camp",
    description: "A non-profit agency that provides active duty members, veterans, and their spouses with access to mentors, educational programming, and a robust community of experts and peers to help them innovate and build impactful businesses.",
    website: "http://patriotbootcamp.org",
    phone: "",
    address: "c/o Techstars, 1050 Walnut Street, Ste. 202, Boulder, CO 80302",
    email: "info@patriotbootcamp.org"
},
{
    name: "Recruit Military",
    description: "Info on upcoming job fairs; database of job openings.",
    website: "www.recruitmilitary.com",
    phone: "(513) 683-5020, (800) 226-0841",
    address: ""
},
{
    name: "Shift",
    description: "Shift analyzes military career paths and intelligently matches soon-to-be post-service veterans with their next careers.",
    website: "https://www.shift.org",
    phone: "",
    email: "hello@shift.org",
    address: ""
},
{
    name: "Still Serving Veterans",
    description: "Free job searches, benefits assistance, case management for severely wounded Veterans with service-connected disabilities requiring discharge from active duty.",
    website: "https://ssv.org/",
    phone: "1-866-SSV-4MIL (778-7645)",
    address: ""
},
{
    name: "Value of a Veteran",
    description: "Woman veteran and minority-owned small business that provides human resources consulting and training for organizations that are seeking to improve support, recruitment and retention of military veterans.",
    website: "http://thevalueofaveteran.com",
    phone: "(877) 681-9960",
    address: "2465 Centreville Rd. #J17-252, Herndon, VA 20171"
},
{
    name: "Veterans Employment Center",
    description: "Helps Veterans translate their military experiences into civilian skills, write resumes, and offers tips for successful interviews.",
    website: "https://www.va.gov/careers-employment/",
    phone: "(855) 574-7286",
    address: ""
},
{
    name: "Veterans Florida",
    description: "Veterans Florida is developing new job training grant programs in the state of Florida to help businesses hire and prepare Veterans for their positions, spearheading exciting entrepreneurship programs for Veterans who want to own a business, and assembling a robust network of Veterans’ organizations, service providers, businesses and individuals to support and mentor Veterans at every stage of their transition.",
    website: "www.veteransflorida.org",
    phone: "(850) 898-1444",
    address: "930 Thomasville Road, Suite 100 Tallahassee, FL 32503",
    email: "info@veteransflorida.org"
},
{
    name: "Wounded Warrior Project",
    description: "Wounded Warrior Project (WWP) takes a holistic approach when serving warriors and their families to nurture the mind and body, and encourage economic empowerment and engagement.",
    website: "http://www.woundedwarriorproject.org/",
    phone: "1-877-832-6997",
    address: "4899 Belfort Road, Suite 300, Jacksonville, FL 32256"
}
    
  ];

  return (
        <div className="mentalHealthResourcesContainer">
            <h1>Employment Resources</h1>
            {resources.map((resource, index) => (
                <div key={index} className="resourceCard">
                    <h2>{resource.name}</h2>
                    <p><strong>Description:</strong> {resource.description}</p>
                    <p><strong>Address:</strong> {resource.address}</p>
                    <p><strong>Phone:</strong> {resource.phone}</p>
                    <p><strong>Website:</strong> <a href={resource.website} target="_blank" rel="noopener noreferrer">{resource.website}</a></p>
                </div>
            ))}
            <Link to="/dashboard" className="returnLink">Back to Dashboard</Link>
        </div>
    );
}

export default EmploymentResources;
