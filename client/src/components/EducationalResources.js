//client/src/components/EducationalResources
import React from 'react';
import { Link } from 'react-router-dom';


const EducationalResources = () => {

const educationalResources = [
  {
    name: "America’s Fund",
    description: "Financial, emotional, and tiered support for our injured/ill service members and their families through various programs.",
    website: "http://americasfund.org",
    address: "715 Broadway St, Quantico, VA 22134",
    phone: "(760) 725-3680"
  },
  {
    name: "Army Continuing Education System",
    description: "Provides programs and services to promote lifelong learning opportunities for Soldiers.",
    website: "https://home.army.mil/imcom/index.php/professionals/human-services/aces",
    address: "Eglin AFB",
    phone: "N/A"
  },
  {
    name: "Army Credentialing Program (COOL)",
    description: "Provides Credentialing services for Army Veterans.",
    website: "https://militarybenefits.info/army-cool/",
    address: "N/A",
    phone: "N/A"
  },
  {
    name: "Autism Pensacola",
    description: "A non-profit association dedicated to support, advocating, educating, networking, and providing hope for people affected by autism and related disorders.",
    website: "http://www.autismpensacola.org/",
    address: "3916 N. 10th Ave., Pensacola, FL 32503",
    phone: "(850) 434-7171"
  },
  {
    name: "The Best Schools",
    description: "The Best Schools has helpful tips, links, and additional resources to help you navigate your college career.",
    website: "https://thebestschools.org/resources/military-education/",
    address: "N/A",
    phone: "N/A"
},
{
    name: "Campus Toolkit",
    description: "Provides faculty, staff, and administrators resources to support student Veterans.",
    website: "http://www.mentalhealth.va.gov/studentveteran/index.asp#sthash.xcknUWAN.dpbs",
    address: "N/A",
    phone: "N/A"
},
{
    name: "Columbia Southern University Department of Veteran Initiatives",
    description: "N/A",
    website: "http://www.columbiasouthern.edu/military/veterans",
    address: "21982 University Lane, Orange Beach, AL 36561",
    phone: "1-800-977-8449 Ext 6533"
},
{
    name: "Community Action Program",
    description: "Provides services to individuals to help them become self-sufficient.",
    website: "http://capc-pensacola.org/",
    address: "1380 N. Palafox Street, Pensacola, FL 32501",
    phone: "(850) 438-4021"
},
{
    name: "Complete Florida Military",
    description: "Provides scholarships to Veterans to complete degrees in the field of technology or business.",
    website: "http://completeflorida.org/programs-military.aspx",
    address: "11000 University Parkway, Pensacola, Florida 32514",
    phone: "(855) 814-8240"
},

{
    name: "DANTES",
    description: "Assists Veterans in preparing for college and completing their education.",
    website: "http://www.dantes.doded.mil/",
    address: "6490 Saufley Field Road, Pensacola, FL 32509",
    phone: "N/A",
    email: "dantes_outreach@navy.mil"
},
{
    name: "Escambia AIDS Services and Education Inc.",
    description: "N/A",
    website: "http://escambia.floridahealth.gov/programs-and-services/clinical-and-nutrition-services/hiv-aids/index.html",
    address: "Fairfield Service Center, 1295 West Fairfield Drive, Pensacola, FL 32501",
    phone: "(850) 595-6345"
},
{
    name: "Bunker Labs",
    description: "Provides fully sponsored workspaces to 10 tribes of 10 veterans across 10 cities every six months.",
    website: "https://bunkerlabs.org/veterans-in-residence/",
    address: "222 W. Merchandise Mart Plaza, Suite 1212, Chicago, IL 60654",
    phone: "N/A"
},
{
    name: "Florida A&M University",
    description: "N/A",
    website: "www.famu.edu/",
    address: "1601 S. Martin L. King Jr. Blvd, Tallahassee, FL 32307",
    phone: "(850) 599-3000"
},
{
    name: "Florida Institute of Technology",
    description: "N/A",
    website: "www.fit.edu/eglin",
    address: "502 West D Ave., Bldg. 251, Room 108, Eglin AFB, FL 32542",
    phone: "(850) 398-5958"
},
{
    name: "Florida Institute of Ultrasound, Inc.",
    description: "N/A",
    website: "http://www.fiuonline.net/",
    address: "8800 University Pkwy, Suite A-4, Pensacola, FL 32514",
    phone: "(850) 478-7300"
},
{
    name: "Florida SBDC",
    description: "Provides access to robust databases and resources to help in the navigation of building a business.",
    website: "http://www.floridasbdc.org",
    address: [
        "UWF Location: 9999 University Parkway, Pensacola, Florida 32514",
        "Downtown Pensacola Location: 890 S. Palafox St #202, Pensacola, FL 32502"
    ],
    phone: [
        "UWF Location: (850) 474-2528",
        "Downtown Pensacola Location: (850) 912-4434"
    ],
    email: "sbdc@uwf.edu"
},

    

    {
        name: "Fortis Institute",
        description: "N/A",
        website: "http://www.fortis.edu/",
        address: "4081 E. Olive Road, Suite B, Pensacola, FL 32514",
        phone: "(850) 476-7607"
    },
    {
        name: "G. I. Bill",
        description: "N/A",
        website: "www.gibill.va.gov",
        address: "N/A",
        phone: "1-888-442-4551"
    },
    {
        name: "George Stone Technical Center",
        description: "N/A",
        website: "www.georgestonecenter.com",
        address: "2400 Longleaf Dr, Pensacola, FL, 32526",
        phone: "(850) 941-6200"
    },
    {
        name: "Home Builders Institute",
        description: "Free training program that serves transitioning US military members within 180 days of separation, military spouses and dependents over 17 years old, Florida resident veterans, Florida resident spouses of a veteran and a Florida resident child of a veteran over 17 years of age. The program offers CPR/First Aid/AED, OSHA10 National Safety certification and an introduction to the building trades certificate called a PACT.",
        website: "N/A",
        address: "100 College Blvd, Building 520, Niceville, FL, 32578",
        phone: "(850) 517-6542",
        email: "Brenda.Smith@hbi.org"
    },
    {
        name: "Locklin Tech Center",
        description: "N/A",
        website: "http://www.locklintech.com/",
        address: "5330 Berryhill Rd, Milton, FL 32570",
        phone: "(850) 983-5700"
    },
    {
        name: "Marine Corps Credentialing Program (COOL)",
        description: "Online Credentialing Opportunities",
        website: "https://www.cool.navy.mil/usmc/",
        address: "Center for Information Dominance, 640 Roberts Ave, Corry Station, Bldg. 502 Rm 104E, Pensacola, FL 32508",
        phone: "(850) 452-6337",
        email: "usmccool@navy.mil"
    },
    {
        name: "National Veterans Entrepreneurship Program",
        description: "Provides entrepreneurial learning and development opportunities for veterans with service-connected disabilities and those who have uniquely distinguished themselves in the military.",
        website: "https://warrington.ufl.edu/entrepreneurship-and-innovation-center/community-outreach/veterans-entrepreneurship-program/",
        address: "UF Entrepreneurship & Innovation Center",
        phone: "(352) 273-0329",
        email: "vep@warrington.ufl.edu"
    },

    {
        name: "Navy Credentialing Program (COOL)",
        description: "N/A",
        website: "https://www.cool.navy.mil/",
        address: "Center for Information Warfare Training, 640 Roberts Ave, Corry Station, Pensacola, FL 32511",
        phone: "(850) 452-6683, 6664",
        email: "navycool@navy.mil"
    },
    {
        name: "Northwest Florida State College",
        description: "N/A",
        website: "http://www.nwfsc.edu/",
        address: "100 College Blvd, Niceville, FL 32578",
        phone: "(850) 678-5111"
    },
    {
        name: "Patriot Boot Camp",
        description: "A non-profit agency that provides active-duty members, veterans, and their spouses with access to mentors, educational programming, and a robust community of experts and peers to help them innovate and build impactful businesses.",
        website: "http://patriotbootcamp.org",
        address: "c/o Tech stars, 1050 Walnut Street, Ste. 202, Boulder, CO 80302",
        phone: "N/A",
        email: "info@patriotbootcamp.org"
    },
    {
        name: "Pensacola Christian College",
        description: "N/A",
        website: "http://www.pcci.edu/",
        address: "250 Brent Lane, Pensacola, FL 32503",
        phone: "(850) 478-8496"
    },
    {
        name: "Pensacola School of Massage",
        description: "N/A",
        website: "http://psmthc.com/",
        address: "2409 Creighton Road, Pensacola, FL 32504",
        phone: "(850) 474-1330"
    },
    {
        name: "Pensacola State College",
        description: "N/A",
        website: "http://www.pensacolastate.edu/",
        address: "1000 College Blvd, Pensacola, FL 32504",
        phone: "(850) 484-1000"
    },
    {
        name: "Reserve Educational Assistance Program (REAP)",
        description: "REAP provides educational assistance to members of the Reserve components called or ordered to active duty in response to a war or national emergency declared by the president or Congress.",
        website: "https://www.benefits.va.gov/gibill/reap.asp",
        address: "N/A",
        phone: "N/A"
    },
    {
        name: "Re-Entry Alliance Pensacola, Inc.",
        description: "N/A",
        website: "https://www.reapreentry.org",
        address: "2615 West Strong St, Pensacola, FL 32505",
        phone: "850-332-6677",
        email: "Jason.futral@gmail.com"
    },

    {
        name: "Service members Opportunity Colleges (SOC)",
        description: "A consortium of colleges and universities dedicated to helping service members and their families get college degrees.",
        website: "http://www.soc.aascu.org/",
        address: "1307 New York Avenue, N.W., Fifth Floor, Washington, DC 20005",
        phone: "(800) 368-5622",
        email: "socmail@aascu.org"
    },
    {
        name: "Student Veterans of America (SVA)",
        description: "Provides military veterans with the resources, support, and advocacy needed to succeed in higher education and following graduation.",
        website: "https://studentveterans.org/",
        address: "1012 14th Street NW, Suite 1200, Washington, DC 20005",
        phone: "(202) 223-4710",
        email: "contact@studentveterans.org"
    },
    {
        name: "Troops to Teachers",
        description: "Helps eligible military personnel begin a new career as teachers in public schools where their skills, knowledge and experience are most needed.",
        website: "https://proudtoserveagain.com/",
        address: "N/A",
        phone: "1-800-231-6242",
        email: "t3@navy.mil"
    },
    {
        name: "U.S. Department of Veterans Affairs (VA)",
        description: "Provides vital services and benefits to veterans, their dependents, and survivors through offices and facilities throughout the country.",
        website: "https://www.va.gov/",
        address: "810 Vermont Avenue, NW, Washington, DC 20420",
        phone: "1-800-827-1000",
        email: "N/A"
    },
    {
        name: "Veterans Upward Bound",
        description: "Designed to motivate and assist veterans in the development of academic and other requisite skills necessary for acceptance and success in a program of postsecondary education.",
        website: "http://navub.org/",
        address: "N/A",
        phone: "N/A",
        email: "N/A"
    },

    {
        name: "Veterans Educational Assistance Program (VEAP)",
        description: "Provides post-secondary education assistance to veterans and servicemembers.",
        website: "https://www.benefits.va.gov/gibill/veap.asp",
        address: "N/A",
        phone: "1-888-442-4551",
        email: "N/A"
    },
    {
        name: "Veterans Entrepreneurship Program (VEP)",
        description: "Offers cutting edge, experiential training in entrepreneurship and small business management to soldiers, sailors, airmen, members of the coast guard, and marines disabled as a result of their service.",
        website: "https://veterans.ou.edu/",
        address: "N/A",
        phone: "N/A",
        email: "vep@ou.edu"
    },
    {
        name: "Veterans of Foreign Wars (VFW)",
        description: "Assists veterans, their dependents, and survivors in obtaining benefits from the U.S. Department of Veterans Affairs (VA).",
        website: "https://www.vfw.org/",
        address: "406 W. 34th Street, Kansas City, Missouri 64111",
        phone: "1-816-756-3390",
        email: "info@vfw.org"
    },
    {
        name: "Vocational Rehabilitation and Employment (VR&E)",
        description: "Assists veterans with service-connected disabilities to prepare for, find, and keep suitable jobs.",
        website: "https://www.benefits.va.gov/vocrehab/",
        address: "N/A",
        phone: "1-800-827-1000",
        email: "N/A"
    },
    {
        name: "Warrior-Scholar Project",
        description: "Provides free humanities and STEM-based, academic boot camps to current and former enlisted service members.",
        website: "https://www.warrior-scholar.org/",
        address: "N/A",
        phone: "202-796-8777",
        email: "info@warrior-scholar.org"
    },
    {
        name: "Women Veterans Interactive",
        description: "Dedicated to meeting the needs of women veterans by providing Advocacy, Empowerment, Interaction, Outreach, and Unification (AEIOU).",
        website: "https://womenveteransinteractive.org/",
        address: "N/A",
        phone: "N/A",
        email: "N/A"
    },
    {
        name: "Wounded Warrior Project",
        description: "Provides free services in mental health, career counseling, and long-term rehabilitative care to those who incurred physical or mental injuries during their military service.",
        website: "https://www.woundedwarriorproject.org/",
        address: "4899 Belfort Road, Suite 300, Jacksonville, FL 32256",
        phone: "904.296.7350",
        email: "N/A"
    },
    {
        name: "Yellow Ribbon Program",
        description: "The program allows approved institutions of higher learning and the VA to partially or fully fund tuition and fee expenses that exceed the established thresholds.",
        website: "https://www.benefits.va.gov/gibill/yellow_ribbon.asp",
        address: "N/A",
        phone: "1-888-442-4551",
        email: "N/A"
    },
    {
        name: "Zero to Three",
        description: "Provides resources to help parents and other caregivers support young children’s healthy development.",
        website: "https://www.zerotothree.org/",
        address: "1255 23rd Street, NW Suite 350, Washington, DC 20037",
        phone: "(202) 638-1144",
        email: "N/A"
    },
    {
        name: "Vet Tix",
        description: "Provides tickets to events which reduce stress, strengthen family bonds, build life-long memories and encourage service members and veterans to stay engaged with local communities and American life.",
        website: "https://www.vettix.org/",
        address: "P.O. Box 14398, Phoenix, AZ 85063",
        phone: "602-296-7888",
        email: "support@vettix.org"
    }
];    

    
return (
    <div className="educationalResourcesContainer">
        <h1>Educational Resources</h1>
        {educationalResources.map((resource, index) => (
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

export default EducationalResources;
      
