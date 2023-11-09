import React from 'react';
import { Link } from 'react-router-dom';


const HealthResources = () => {
    const resources = [
        {
            name: "Agency for Persons with Disability",
            phone: "(850) 595-8351",
            address: "160 W Government St #410, Pensacola, FL 32502",
            website: "http://apd.myflorida.com/",
        },
        {
            name: "Amedisys Home Health of the Panhandle",
            phone: "(850) 477-1082",
            fax: "(850) 477-9713",
            address: "4900 Bayou Blvd, Suite 201, Pensacola, FL32503",
            website: "https://www.amedisys.com",
        },
        {
            name: "Area 1 HIV/AIDS Program",
            description: "The Florida Department of Health’s Area 1 HIV/AIDS Program provides services to persons living with HIV and AIDS in Escambia, Santa Rosa, Okaloosa and Walton counties in Northwest Florida.",
            phone: "(850) 595-6345",
            address: "Fairfield Service Center, 1295 West Fairfield Drive, Pensacola, FL 32501",
            website: "http://escambia.floridahealth.gov/programs-and-services/clinical-and-nutrition-services/hiv-aids/index.html",
        },
        {
            name: "Brain Injury Association of Florida, Inc.",
            description: "BIAF’s Traumatic Brain Injury Resource and Support Center (TBIRSC) serves as a critical lifeline for the thousands of Floridians. The Center provides one-stop access to information, education, advocacy, and community-based support for survivors, their families, and caregivers.",
            phone: "(850) 410-0103 (Office) / (850) 833-3710 (Military Liaison) / (800) 992-3442 (Help Line)",
            address: "1637 Metropolitan Blvd # B, Tallahassee, FL32308",
            website: "https://www.biaf.org/",
        },
        {
            name: "Center for Independent Living",
            description: "The Center for Independent Living Disability Resource Center is a consumer-controlled, community-based, cross- disability, nonresidential private nonprofit agency that is designed and operated within a local community by individuals with disabilities and provides an array of independent living services.",
            phone: "(850) 595-5566",
            address: "3600 N. Pace Blvd., Pensacola, FL 32505",
            website: "http://www.cil-drc.org/",
        },
        {
            name: "Steven A. Cohen Military Family Clinics at Centerstone",
            description: "Provides targeted behavioral health care for post 9/11 Veterans, National Guardsmen, Reservists, their families, and active duty military families. Our clinic provides care for anxiety, depression, PTSD, trauma, grief, transitional issues, family/relationship challenges, child behavioral issues and local resource referrals. Clients also have access to case management services to help with other stresses like unemployment, finances, housing, and legal issues.",
            phone: "(904) 431-3500",
            fax: "(904) 431-3501",
            mobile: "(904) 525-3633",
            email: "michael.fleming@centerstone.org",
            address: "7011 A.C. Skinner Parkway | Jacksonville, FL 32256",
            website: "https://centerstone.org/cohen-military-family-clinic/jacksonville/",
        },
        {
            name: "Clear Captions",
            description: "Provides caption telephones at no cost to veterans with any form of hearing loss.",
            phone: "(866) 246-7850",
            contact: "Patrick McGraw – Caption Phone Specialist",
            email: "Patrick.mcgraw@clearcaptions.com",
            mobile: "(850) 490-4621",
            address: "3001 Lava Ridge Court, Roseville, CA 95661",
            website: "https://clearcaptions.com/",
        },
        {
            name: "Council on Aging",
            phone: "(850) 432-1475",
            address: "875 Royce St, Pensacola, FL 32503",
            website: "http://www.coawfla.org",
        },
        {
            name: "Crestview Health Center",
            phone: "(850) 682-1164",
            address: "800 Hospital Drive, Crestview, Florida 32539",
            website: "http://www.northfloridamedicalcenters.org/locations/crestview-health-center/",
        },
        {
            name: "Disabled American Veterans Chapter 57",
            phone: "(850) 682-0982",
            address: "5296 Hare St, Crestview, FL 32539",
            website: "https://www.facebook.com/DAVChapter57",
        },
        {
            name: "Emerald Coast Behavioral Hospital",
            phone: "Main Phone: (850) 763-0017",
            additionalInfo: "Military Liaison (Mike) (850) 819-5333",
            address: "2004 Lewis Turner Blvd, Fort Walton Beach, FL 32547",
            website: "http://emeraldcoastbehavioral.com/",
        },
        {
            name: "Grand Boulevard Health & Rehab Center",
            phone: "(850) 267-2887",
            address: "138 Sandestin Ln, Miramar Beach, FL 32550",
            website: "https://gchc.com/location-page/grand-blvd-health-rehabilitation-center/",
        },
        {
            name: "Gulf Coast Veterans Health Care System",
            phone: "228-523-4533 or 800-929-7690",
            address: "400 Veterans Avenue, Biloxi, MS 39531",
            website: "www.biloxi.va.gov",
        },
        {
            name: "Health & Hope Clinic",
            description: "Serves uninsured individuals and the medically underserved. Clinic Hours: M/W/F 8:30-12:00, T/R 5:00-8:00pm. Downtown clinic hours are Thursdays 5:00 PM – 8:00 PM.",
            phone: "(850) 479-4456 / Downtown (850) 607-7775",
            address: "1718 E. Olive Road, Pensacola, FL 32514 (Downtown) 1000 W Blount St., Pensacola, FL 32501",
            website: "http://www.healthandhopeclinic.org/",
        },
        {
            name: "Health Benefits Office Naval Hospital Pensacola",
            phone: "850-505-6601",
            address: "6000 West Highway 98, Pensacola, FL 32512",
            website: "Health.mil Navy Hospital Pensacola",
        },
        {
            name: "Health Care for Reentry Veterans",
            phone: "(601)362-4471",
            address: "1500 E Woodrow Wilson Drive, Jackson, MS 39216-5199",
            contacts: ["Email: taylor.savage@va.gov", "Tomiko.daffin@va.gov"],
            website: "https://www.va.gov/homeless/reentry.asp",
        },
        {
            name: "Leaning Post Ranch",
            phone: "(850) 587-5940",
            address: "4150 Cedar Springs Rd, Molino, FL 32577",
            url: "www.theleaningpostranch.org/",
        },
        {
            name: "Medi Home Health Agency",
            phone: "(850) 475-5392",
            address: "2590 N. 12th Avenue, Suite A, Pensacola, FL 32503",
            website: "http://www.msa-corp.com/companies/medihomehealth.aspx",
        },
        {
            name: "Mission Continues, The - Pensacola Platoon",
            description: "The Pensacola Platoon of The Mission Continues connects veterans with under-resourced communities. Our programs deploy veteran volunteers to work alongside nonprofit partners and community leaders to address issues such as improving educational resources, tackling food insecurity, and fostering neighborhood identity.",
            phone: "(850) 375-0051",
            contact: "Contact: Charles Bare, Platoon Leader - cbare@missioncontinues.org",
            address: "6021 Otter Point Road, Pensacola, FL 32504",
            website: "https://www.missioncontinues.org/",
        },
        {
            name: "National Center for PTSD",
            phone: "PTSD information Voice Mail: (802) 296-6300",
            email: "ncptsd@va.gov",
            url: "https://www.ptsd.va.gov/",
        },
        {
            name: "NWF Area Agency on Aging, Inc.",
            phone: "Aging and Disability Resource Center @ (866) 531-8011",
            additionalInfo: "Want to Volunteer or donate? Call (850) 494-7100",
            address: "5090 Commerce Park Cir, Pensacola, FL 32505",
            website: "www.nwflaaa.org/",
        },
        {
            name: "PATH International",
            description: "Provides equine assisted therapies for individuals with special needs.",
            phone: "1-800-369-RIDE (7433)",
            website: "pathintl.org",
        },
        {
            name: "Sacred Heart Health System",
            description: "The Military Patient Navigator at this organization is responsible for helping with the active-duty and veteran population.",
            address: "5151 N. 9th Avenue, Pensacola, FL 32504",
            website: "http://www.sacred-heart.org",
        },
        {
            name: "St. Joseph's Clinic",
            phone: "(850) 434-8162",
            fax: "(850) 434-8996",
            address: "131 W Intendencia St, Pensacola, FL 32502",
            website: "https://www.facebook.com/pages/St-Joseph-Medical-Clinic/115712398451961",
        },
        {
            name: "VA Medical Center",
            description: "The VA main campus in Biloxi, MS, offers medical and mental health hospitalization, specialty outpatient care, extended care for older Veterans, and short-term residential treatment for PTSD and/or Substance Use.",
            phone: "(228) 523-5000",
            website: "https://www.va.gov/health/vamc/",
        },
        {
            name: "VA Outpatient Clinics",
            locations: [
                { address: "1504 Springhill Avenue, Mobile, AL 36604", phone: "(251) 219-3900" },
                { address: "790 Veterans Way, Pensacola, FL 32507", phone: "(850) 912-2000" },
                { address: "400 Veterans Way, Biloxi, MS 39531", phone: "(228) 523-5000" },
                { address: "100 Veterans Way, Eglin Air Force Base, 32542", phone: "(850) 609-2600" },
                { address: "2600 Veterans Way, Panama City Beach, FL 32408", phone: "(850) 636-7000" }
            ]
        },
        {
            name: "Veterans Health Administration",
            phone: "1-877-222-VETS (8387), press 1 when prompted for enrollment",
            website: "http://www.va.gov/health/",
        },
        {
            name: "Veterans Justice Outreach Program",
            description: "Veterans Justice Outreach Specialists are responsible for direct outreach, assessment, and case management for justice-involved Veterans in local courts and jails, and liaison with local justice system partners.",
            phone: "(850) 912-2067",
            contacts: [
                { email: "mark.ballou@va.gov" },
                { email: "raymond.mitchell@va.gov" }
            ],
            address: "790 Veterans Way, Pensacola, FL 32507",
            url: "http://www.va.gov/HOMELESS/VJO.asp",
        },
        {
            name: "Women Veterans Program Gulf Coast VA",
            description: "As the Women Veterans Program Manager for the Gulf Coast Veterans Health Care System, I make sure all women Veterans enrolled for care at any facility from Biloxi to Panama City are receiving the care they need and that the care is timely and equal to care that male Veterans receive.",
            phone: "850.912.2219",
            fax: "850.912.2437",
            email: "Donna.Maxwell@va.gov",
            website: [
                "https://www.biloxi.va.gov/services/womenvet/womvetjacc.pdf",
                "https://www.biloxi.va.gov/locations/JACC.asp"
            ]
        }
    
        ];
        
        return (
            <div className="healthResourcesContainer">
                <h1>Health Resources</h1>
                {resources.map((resource) => (
                    <div className="resourceCard" key={resource.name}>
                        <h2>{resource.name}</h2>
                        <p><strong>Description:</strong> {resource.description}</p>
                        <p><strong>Address:</strong> {resource.address}</p>
                        <p><strong>Phone:</strong> {resource.phone}</p>
                        <p><strong>Website:</strong> <a href={resource.website} target="_blank" rel="noopener noreferrer">{resource.website}</a></p>
                    </div>
                ))}
                <Link to="/dashboard" className="returnLink">Return to Dashboard</Link>
            </div>
        );
    }
    
    export default HealthResources;





