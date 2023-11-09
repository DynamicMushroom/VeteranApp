import React from 'react';
import { Link } from 'react-router-dom';

const VeteransClaimsResources = () => {
    const resources = [
        {
            name: "American Veterans (AmVets)",
            description: "National Service Officer",
            website: "http://www.amvets.org/",
            address: "4647 Forbes Blvd., Landham, MD. 20706",
            phone: "(877) 726-8387"
        },
        {
            name: "Claims Examiner Supervisor (VA)",
            description: "Assistance with questions regarding benefits.",
            website: "Not provided",
            address: "790 Veterans Way FDVA Rooms 1a-102/3/114, Pensacola, FL 32507",
            phone: "(850) 912-2051",
        },
        {
            name: "Gulf Coast Veterans Advocacy Council, Inc.",
            description: "Advocates for Veterans to get the services that they need from the community.",
            website: "http://gcvacflalms.org/",
            email: "gulfcoastvac@gmail.com",
            address: "1000 S. Fairfield Drive, Pensacola, FL 32506",
            phone: "(888) 838-6694, then press 709"
        },
        {
            name: "Marine Corps League Det. 066",
            description: "Members of the Marine Corps League join in camaraderie and fellowship for the purpose of preserving the traditions and promoting the interests of the United States Marine Corps. Detachment 066 meets the second Tuesday of each month at 7 p.m. at the Escambia County Road Department Facility in Cantonment at 601 Highway 297A. Dues are ($50) per year.",
            website: "http://www.pensacolamcleague.com/",
            address: "Physical Address: 6825 Oak Street, Milton, FL 32570. Mailing Address: Marine Corps League, P.O. Box 3491, Milton FL 32572",
            phone: "(850) 712-0210"
        },
        {
            name: "Steven A. Cohen Military Family Clinics at Centerstone",
            description: "Provides targeted behavioral health care for post 9/11 Veterans, National Guardsmen, Reservists, their families, and active duty military families. Our clinic provides care for anxiety, depression, PTSD, trauma, grief, transitional issues, family/relationship challenges, child behavioral issues and local resource referrals. All post-9/11 veterans and military family members are eligible for care, regardless of discharge status or combat experience. Clients also have access to case management services to help with other stresses like unemployment, finances, housing, and legal issues. Staff members fully understand the military experience, as many of them are veterans or military family members themselves.",
            website: "https://centerstone.org/cohen-military-family-clinic/jacksonville/",
            email: "michael.fleming@centerstone.org",
            address: "7011 A.C. Skinner Parkway | Jacksonville, FL 32256",
            phone: "Clinic: (904) 431-3500 | Fax: (904) 431-3501 / Mobile: (904) 525-3633"
        },
        {
            name: "United States Submarine Veterans, Inc.",
            description: "Not provided",
            website: "https://www.ussi.org/",
            address: "3855 Windsor Castle Blvd, Milton, FL 32583",
            phone: "(850) 529-8366"
        }
    ];

    return (
        <div className="veteransClaimsResourcesContainer">
            <h1>Veteran’s Claims Resources</h1>
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

export default VeteransClaimsResources;