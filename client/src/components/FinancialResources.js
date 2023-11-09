import React from 'react';
import { Link } from 'react-router-dom'; //Add search bar, american flag background, button changes

const FinancialResources = () => {
    const resources = [
        {
            name: "America’s Fund",
            description: "Financial, emotional, and tiered support for our injured/ill service members and their families through the following programs: Family Support, Adaptive Housing, Adaptive Transportation, Specialized Equipment, Education, and Career Transitioning, Rehabilitative Sports programs, and more.",
            website: "http://americasfund.org",
            address: "715 Broadway St, Quantico, VA 22134",
            phone: "(760) 725-3680"
        },

        {
            name: "Army of Hope",
            description: "Provides aid assistance to the families of deceased, disabled, and deployed members of the military. (i.e. school lunches, medical and dental emergencies not covered by insurance, minor home repairs).",
            website: "http://floridaelks.org/army-of-hope",
            address: "727 S. 72nd Avenue, Pensacola, FL 32506",
            phone: "(800) 523-1673"
        },
        {
            name: "C & G Vocational Services and Payees Inc.",
            description: "Manages Social Security Benefits when individuals are unable to do so themselves.",
            website: "http://web.pensacolachamber.com/Employment,-Staffing-Human-Resources/C-G-Vocational-Services-and-Payees-Inc-16452",
            address: "600 University Office Blvd. Ste. 12, Pensacola, FL 32504",
            phone: "(850) 982-9953 / (850) 244-2825 (Fort Walton Beach)"
        },
        {
            name: "Catholic Charities",
            description: "Provides financial assistance for rent and utilities for qualifying individuals.",
            website: "http://www.ccnwfl.org",
            address: "1815 N. 6th Avenue, Pensacola, Florida 32503 / 11 First St SE, Fort Walton Beach, FL 32548",
            phone: "Main Phone: (850) 436-8754, Pensacola: (850) 435-3516, Fort Walton: (850) 244-2825"
        },
        {
            name: "Fleet and Family Support Program",
            description: "Provides courses on financial management for Veterans and their families.",
            website: "https://www.cnic.navy.mil/ffr/family_readiness/fleet_and_family_support_program.html",
            address: "151 Ellyson Avenue, Bldg. 625, Pensacola, FL 32508 / 7551 USS Enterprise Street, Building 3025, Milton, FL 32570 (Naval Air Station Whiting Field)",
            phone: "(850) 623-7177 [Whiting Field] / (850) 452-5990 [NAS Pensacola]"
        },
        {
            name: "Florida Veterans",
            description: "Emergency Financial assistance for Veterans.",
            website: "http://www.floridaveteransfoundation.org/",
            address: "The Capitol, Suite 2107, 400 South Monroe Street, Tallahassee, Florida 32399",
            phone: "(850) 488-4181"
        },
        
        //Food bank
        {
            name: "Bay Area Food Bank",
            description: "Provides food to other agencies who distribute it to people in need.",
            website: "www.bayareafoodbank.org",
            address: "5709 Industrial Blvd., Milton, FL 32583",
            phone: "(850) 626-1332"
        },
        {
            name: "Escambia Chapel AME Zion ESC Food Pantry",
            description: "Food pantry serving individuals the 4th Friday of every month 9:00AM – 11:00 AM.",
            website: "http://escambia.communityos.org/zf/profile/service/id/1453171",
            address: "2901 East Johnson Avenue, Pensacola, FL 32514",
            phone: "Contact Mr. Uther Gardner at (850) 473-1166"
        },
        {
            name: "Ever ‘man Food Voucher",
            description: "Based on your household income, you may be eligible for an Ever ‘man Food Voucher. Some requirements to obtain a voucher are as follows: must be 55 years of age or older, or receiving disability payments may qualify you based on your combined household income. If you qualify, you must attend a two-hour nutrition class.",
            website: "N/A",  // No website provided
            address: "N/A",  // No address provided for this
            phone: "Schedule appointment by calling (850) 438-4021 Ext#104"
        },
        {
            name: "First United Methodist Church",
            description: "First United Methodist Church of Pensacola hosts a hot lunch each Monday and Thursday beginning at 11:00am.",
            website: "www.fumcpensacola.com",
            address: "6 East Wright Street, Pensacola, FL 32501",
            phone: "(850) 432-1434"
        },
        {
            name: "Food for Veterans Inc.",
            description: "Food Pantry is open the 3rd consecutive Friday & Saturday of each month from 9am-2pm. Donations are also accepted during that time, or by appointment.",
            website: "N/A",  // No website provided
            address: "300 Mary Esther Blvd #41J, Mary Esther, FL 32569",
            phone: "850-420-0170"
        },

        {
            name: "Harvest House",
            description: "The mission of Harvest House is to provide food, clothing, and shelter to those who are less fortunate, and at a point of need in their life.",
            website: "http://www.harvesthousedestin.com/",
            address: "300 Mountain Drive, Destin, FL 32540",
            phone: "(850) 837-2277"
        },
        {
            name: "Little Flower Catholic Church",
            description: "Little Flower offers a walk-in food pantry with clothing and pre-packaged food every Wednesday & Friday, 9:00-11:30am. Those in need should bring a photo ID, proof of residence and Social Security number for all members in the house requesting help. Those receiving food assistance may return every 30 days. Patrons must complete an application for food via the Mother Theresa of Calcutta Outreach Mission. Please call prior to arrival for special instructions on what to bring.",
            website: "https://www.ptlittleflower.org/church/the-mission",
            address: "6495 Lillian Highway, Pensacola, FL 32506",
            phone: "(850) 455-5641"
        },
        {
            name: "Loaves and Fishes Food Pantry",
            description: "Food assistance for the homeless. Breakfast is served at 7am Monday through Friday, Lunch is served on Saturday at 11:30am, and dinner is served on Sunday, Monday, and Wednesday evenings at 5pm.",
            website: "http://loavesandfishessoupkitchen.com",
            address: "257 E Lee Street, Pensacola, FL 32503",
            phone: "(850) 438-7616"
        },
        {
            name: "Manna Food Pantry",
            description: "The organization is now scheduling appointments. If eligible, clients may receive Manna distribution up to four times a year.",
            website: "https://www.mannahelps.org",
            address: "3030 N. E Street, Pensacola, FL (by appointment only) / Community of Christ, 6656 Raymond Hobbs Rd., Milton, FL / First Baptist Church, 214 South Alabama Street, Jay, FL",
            phone: "(850) 432-2053"
        },
        {
            name: "Myrtle Grove Baptist Church",
            description: "Food pantry is walk-in on Tuesdays from 9-11am, must bring a photo id.",
            website: "https://myrtlegrovebaptistchurch.org/",
            address: "N/A",  // No specific address was provided
            phone: "(850) 455-7389"
        },
       
        
    ];

    return (
        <div className="educationalResourcesContainer">
            <h1>Financial and Food Resources</h1>
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

export default FinancialResources;






