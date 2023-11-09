import React from 'react';
import { Link } from 'react-router-dom';

const HousingResources = () => {
    const resources = [
        {
            name: "90 Works",
            description: "Assists individuals in a crisis to become self-sustaining. Assists in acquiring housing and employment and provides budget counseling.",
            website: "http://www.90works.org",
            address: "115 Gregory Sq., Pensacola, FL 32502",
            phone: "(855) 90-WORKS (96757)"
        },
        {
            name: "Air Force Enlisted Village",
            description: "Provide a safe, secure home for surviving spouses of retired enlisted USAF Airmen. The Air Force Enlisted Village (AFEV) provides life-long support for their residence.",
            website: "http://afev.us",
            address: "92 Sunset Lane, Shalimar, FL 32579",
            phone: "(850) 651-3766"
        },
        {
            name: "Alfred Washburn Center",
            description: "Food, Supplies, Showers, for the homeless.",
            website: "www.alfredwashburn.org",
            address: "31 Murphy Lane, Pensacola, FL 32505",
            phone: "(850) 435-7427"
        },
        {
            name: "America’s Fund",
            description: "Financial, emotional, and tiered support for our injured/ill service members and their families through the following programs: Family Support, Adaptive Housing, Adaptive Transportation, Specialized Equipment, Education, and Career Transitioning, Rehabilitative Sports programs, and more.",
            website: "http://americasfund.org",
            address: "715 Broadway St, Quantico, VA 22134",
            phone: "(760) 725-3680"
        },
        {
            name: "Building Homes for Heroes®",
            description: "Building Homes for Heroes® is strongly committed to rebuilding lives and supporting the brave men and women who were injured while serving the county during the time of the wars in Iraq or Afghanistan. The organization builds or modifies homes, and gifts them, mortgage-free, to Veterans and their families. It’s our honor to support the men and women who have loyally and courageously served our country.",
            website: "www.buildinghomesforheroes.org/panhandle",
            address: "3333 McCoy Rd. Orlando, FL 32812",
            phone: "(407) 803-5398"
        },

        {
            name: "Children’s Home Society M-Power Transitional Living Program",
            description: "M Power is a transitional living program that works with youth ages 16-21 who are homeless, at risk of homelessness, or aging out of foster care. Provides job training, educational support, life skills, and housing.",
            website: "www.chsfl.org",
            address: "1300 N. Palafox St, Suite 103, Pensacola, FL 32501",
            phone: "(850) 266-2700"
        },
        {
            name: "Community Action Program",
            description: "Provides services to individuals to help them become self-sufficient.",
            website: "http://capc-pensacola.org/",
            address: "1380 N. Palafox Street, Pensacola, FL 32501",
            phone: "(850) 438-4021"
        },
        {
            name: "Currie House",
            description: "Currie House is a short-term residential shelter for abused, neglected, truant, and runaway youth ages 10-17. They work with agencies, youth, and families in the community to bring about positive change.",
            website: "www.lsfnet.org",
            address: "4610 West Fairfield Dr, Pensacola, FL 32505",
            phone: "(850) 453-2772"
        },
        {
            name: "Escambia AIDS Services and Education Inc.",
            description: "N/A",
            website: "http://escambia.floridahealth.gov/programs-and-services/clinical-and-nutrition-services/hiv-aids/index.html",
            address: "Fairfield Service Center, 1295 West Fairfield Drive, Pensacola, FL 32501",
            phone: "(850) 595-6345"
        },
        {
            name: "Family Promise of Santa Rosa",
            description: "Family Promise of Santa Rosa, Inc. provides a shelter and comprehensive services to low-income and homeless children and families in Santa Rosa County.",
            website: "https://rightservicefl.org/node/19237",
            address: "6796 Alice St, Milton, FL 32570",
            phone: "(850) 623-5300"
        },
        {
            name: "Favor House of NWF, Inc.",
            description: "Provides shelter for female victims of domestic violence.",
            website: "http://www.favorhouse.org/",
            address: "2001 West Blount Street, Pensacola, FL 32501",
            phone: "(850) 434-1177"
        },

        {
            name: "Florida Panhandle Veterans Home",
            description: "N/A",
            website: "N/A",
            address: "141 NW Robinwood Dr, Fort Walton Beach, FL 32548",
            phone: "(850) 499-1490"
        },
        {
            name: "Gary Sinise Foundation",
            description: "At the Gary Sinise Foundation, we serve our nation by honoring our defenders, Veterans, first responders, their families, and those in need. We do this by creating and supporting unique programs designed to entertain, educate, inspire, strengthen, and build communities.",
            website: "https://garysinisefoundation.org/contact",
            address: "PO Box 368, Woodland Hills, CA 91365",
            phone: "N/A"
        },
        {
            name: "Heavenly Blessings Mission",
            description: "Accepts men and women. Christian-based shelter for anyone needing a place to stay.",
            website: "https://www.facebook.com/HeavenlyBlessingsMinistries/",
            address: "1614 N. T Street, Pensacola, FL 32505",
            phone: "(850) 469-9418"
        },
        {
            name: "HER Foundation",
            description: "Provides assistance for the female veteran, specifically in the homelessness population. HER provides housing for women veterans and ensures they have what they need as they transition back into the community.",
            website: "www.honorher.org",
            address: "N/A",
            phone: "(850) 444-8527"
        },
        {
            name: "HUD/VASH - Housing and Urban Development/ Veterans Affairs Supportive Housing",
            description: "N/A",
            website: "http://portal.hud.gov/hudportal/HUD?src=/program_offices/public_indian_housing/programs/hcv/vash",
            address: "N/A",
            phone: "1-877-4AID VET , (877) 424-3838"
        },
        {
            name: "Loaves and Fishes",
            description: "Soup kitchen and emergency shelter.",
            website: "http://www.loavesandfishessoupkitchen.com/",
            address: "257 E Lee St, #A, Pensacola, FL 32503",
            phone: "Rick Humphreys (850) 438-7616"
        },

        {
            name: "Mary’s Shelter",
            description: "N/A",
            website: "http://www.maryssheltergulfcoast.org/home.html",
            address: "14004 Boros Rd, Elberta, AL",
            phone: "(251) 986-6200"
        },
        {
            name: "Nothing Lost Outreach",
            description: "Showers, Haircuts, Dinner, and Transportation.",
            website: "N/A",
            address: "50 W. Johnson Ave, Pensacola, FL 32534",
            phone: "(850) 530-2429"
        },
        {
            name: "Opening Doors NWFL",
            description: "Assists homeless individuals in finding housing and other services from the community.",
            website: "https://openingdoorsnwfl.org/",
            address: "3702 N. Pace Blvd, Pensacola, FL 32505",
            phone: "(850) 439-3009"
        },
        {
            name: "Salvation Army Lodge",
            description: "Provides Shelter for men and women. Emergency and Transitional Shelter which houses and assists adult men and women who need a temporary place to stay.",
            website: "www.salvationarmyflorida.org",
            address: "1501 North Q Street, Pensacola, Florida 32505",
            phone: "(850) 432-1501"
        },
        {
            name: "Semper Fi Fund",
            description: "Financial, emotional, and tiered support for our injured/ill service members and their families through the following programs: Family Support, Adaptive Housing, Adaptive Transportation, Specialized Equipment, Education, and Career Transitioning, Rehabilitative Sports programs, and more.",
            website: "http://semperfifund.org",
            address: "715 Broadway St, Quantico, VA 22134",
            phone: "(760) 725-3680"
        },
        {
            name: "Shelter House",
            description: "N/A",
            website: "www.shelterhousenwfl.org/",
            address: "16 Furry Road SE, Fort Walton Beach, FL 32548",
            phone: "(850) 243-1201"
        },
        {
            name: "Supportive Service for Veteran Families (SSVF)",
            description: "VA-funded case management services that promote self-sufficiency and prevent homelessness.",
            website: "https://www.va.gov/homeless/ssvf/index.asp",
            address: "SSVF at 90 Works: 115 Gregory Square, Pensacola, FL 32502",
            phone: "SSVF at 90 Works: (855) 909-6757."
        },
        {
            name: "The Realty Medics",
            description: "N/A",
            website: "https://www.therealtymedics.com/helpful-resources/veterans-purchasing-a-home/",
            address: "N/A",
            phone: "N/A"
        },
        {
            name: "The Upside of Florida",
            description: "N/A",
            website: "http://www.ci.pensacola.fl.us/199/Veterans-Housing-Assistance",
            address: "222 West Main Street, Pensacola, FL 32502",
            phone: "Contact: 311 or (850) 435-1603"
        },
        {
            name: "Veterans Aid",
            description: "The Aid and Attendance benefit helps veterans and their spouses pay for senior care like assisted living, home care, or nursing home care",
            website: "https://www.veteranaid.org/",
            address: "N/A",
            phone: "N/A"
        },
        {
            name: "VA/Grant & Per Diem Coordinator",
            description: "N/A",
            website: "http://www.va.gov/homeless/GPD.asp",
            address: "N/A",
            phone: "N/A"
        },
        {
            name: "Visiting Nurse/Navy-Marine Corps",
            description: "N/A",
            website: "www.nmcrs.org",
            address: "91 Radford Blvd, Bldg. 191, Pensacola, FL 32508",
            phone: "850-452-2763"
        },
        {
            name: "Volunteers of America",
            description: "Transitional housing for homeless veterans in a beautiful complex of studio apartments. Clean, safe housing and mental health services are provided for veterans for the purpose of achieving permanent housing and independent living. Services include mental health counseling, substance abuse relapse prevention, assistance with job placement, and education/retraining. Participants must have an honorable discharge; meet homeless criteria and income guidelines. Vetting interviews are conducted every Wednesday 9-12, no appointment necessary. Veterans must be registered with the VA and provide a photo ID with a copy ofDD214.",
            website: "http://voaflorida.org/",
            address: "1617 Blackwell Lane, Pensacola FL 32514",
            phone: "(850) 479-3444 or (850) 471-1636"
        },
        {
            name: "Waterfront Rescue Mission",
            description: "Waterfront Rescue Mission provides food, clothing, and shelter to the homeless.",
            website: "www.waterfrontrescuemission.org",
            address: "N/A",
            phone: "(850) 478-4027"
        }
        
       
    ];

    return (
        <div className="educationalResourcesContainer">
            <h1>Housing Resources</h1>
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

export default HousingResources;
