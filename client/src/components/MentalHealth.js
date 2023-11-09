import React from 'react';
import { Link } from 'react-router-dom';

const MentalHealthResources = () => {
    const resources = [
        {
            name: "America’s Fund",
            description: "Financial, emotional, and tiered support for our injured/ill service members and their families through the following programs: Family Support, Adaptive Housing, Adaptive Transportation, Specialized Equipment, Education, and Career Transitioning, Rehabilitative Sports programs, and more.",
            website: "http://americasfund.org",
            address: "715 Broadway St, Quantico, VA 22134",
            phone: "(760) 725-3680"
        },
        {
            name: "The Anchor Clinic",
            description: "The Anchor Clinic, LLC, is a comprehensive mental health clinic with offices located in Downtown Pensacola and in Navarre, Florida.",
            website: "http://www.anchorclinic.com/",
            address: "890 South Palafox Street, Suite 300, Pensacola, FL 32502",
            phone: "(850) 433-1656"
        },

        {
            name : "Autism Pensacola",
            description : "Autism Pensacola began serving Escambia and Santa Rosa counties in Northwest Florida in 2002. The non-profit association of parents, professionals and concerned community members is dedicated to support, advocating, educating, networking and providing hope for people affected by autism and related disorders of communication and behavior along the Gulf Coast.",
            website: "http://www.autismpensacola.org/",
            address: "3916 N. 10th Ave., Pensacola, FL 32503",
            phone: "(850) 434-7171"
        },
        {
            name: "Banyon Treatment centers",
            description: "Banyan Treatment Centers is a Joint Commission Accredited and stands as a leader in the treatment industry by providing quality drug addiction, mental health, and eating disorder services across sixteen locations nationwide. Banyan offers all levels of care for adults 18 and over. Specific programming for First Responders, Veterans & Their Families, Active-Duty Personnel, Professionals program, LGBTQ+, and individuals interested in a Christ Centered program. Banyan is in network with all major insurances, Tricare certified, Community Partners with the VA, and accepts some Florida Medicaid policies. Banyan offers a robust alumni program and will follow our clients up to a year post treatment. They partner with Veteran Non-profits that will assist with transportation so there is no cost to the Veteran for travel.",
            website: "www.mvirbanyan.com",
            address: "225 N. Federal Highway, Pompano FL, 33062",
            phone: "855-687-3422"
        },
        {
            name: "Behavioral Health Acute Inpatient Unit (Biloxi)",
            description: "none",
            website: "https://www.biloxi.va.gov/",
            address: "400 Veterans Blvd, Biloxi, MS 39530",
            phone: "(228) 523-5727"
        },
        {
            name: "Behavioral Health Outpatient Clinic",
            description: "Pensacola: Call Primary Care first to set up an initial appointment. Eglin/Fort Walton Beach: Contact Mike Arena.",
            website: "n/a",
            address: "790 Veterans Way, Pensacola, FL 32507",
            phone: "(850) 912-2000 or (866) 927-1420"
        },
        {
            name: "Bradford Health Services",
            description: "Primary services are substance use disorder treatment (SUD). Provide specific programming for our Veteran and Military community to treat SUD. Also address mental health issues (MI) such as trauma, grief, PTSD, and chronic pain through several different modalities and pathways. They are in the VA CCN / Optum and Tricare networks. Work closely with the VA Community Care teams, VA hospitals and clinics. Discharge planning is provided, and link Veterans and Service Members back to resources in the community including the VA, Vet Centers, Local 501c3, education and job sources, VA HUDVASH, and their county VSO’S. They have residential treatment centers in Alabama, Tennessee, and Mississippi.",
            website: "https://bradfordhealth.com/services/veterans/",
            address: "2101 Magnolia Ave S., AL, 35205",
            phone: "516-350-4827"
        },
        {
            name: "Brain Injury Association of Florida, Inc.",
            description: "BIAF’s Traumatic Brain Injury Resource and Support Center (TBIRSC) serves as a critical lifeline for the thousands of Floridians. The Center provides one-stop access to information, education, advocacy and community-based support for survivors, their families and caregivers.",
            website: "http://biaf.org/thriving.html",
            address: "1637 Metropolitan Blvd # B, Tallahassee, FL32308",
            phone: "(850) 410-0103 (Office) / (850) 833-3710 (Military Liaison) / (800) 992-3442 (Help Line)"
        },
        {
            name: "Community Drug and Alcohol Council, Inc.",
            description: "CDAC is the primary community behavioral health resource for substance-abuse prevention and intervention for Escambia, Santa Rosa, Okaloosa and Walton counties. We holistically approach problems by engaging the entire community including schools, law enforcement, parents, advocates, students, and case managers.",
            website: "http://cdac.info/",
            address: "3804 North 9th Avenue, Pensacola, FL 32503",
            phone: "(850) 434-2724"
        },
        {
            name: "Compassionate Friends",
            description: "This self-help organization offers friendship and understanding to bereaved parents. The purposes are to support and aid parents in the positive resolution of grief from the death of their child and to foster the physical and emotional health of the bereaved family members. They also facilitate a sibling’s support group for children who have lost a brother or sister. Meetings are held at Cokesbury Methodist Church on 2nd Tuesday of each month at 6:30-8:00 PM.",
            website: "https://www.compassionatefriends.org/chapter/tcf-of-pensacola/",
            address: "5725 North 9th Avenue, Pensacola FL 32504-8920",
            phone: "Debbie @ (850) 516-0810"
        },
        {
            name: "Covenant Care (Bereavement Counseling)",
            description: "Covenant Care is offering a variety of services, at no cost, for bereaved individuals in the Ft. Walton Beach, Crestview, Niceville, and Pensacola areas.",
            website: "http://choosecovenant.org",
            address: "Various sites",
            phone: "(850) 202-0840 (Pensacola site - ask for Bereavement Counseling) / All other sites contact (850) 433-2155"
        },
        {
            name: "Emerald Coast Behavioral Hospital",
            description: "Emerald Coast Behavioral Hospital provides acute inpatient and outpatient psychiatric services in Panama City, Florida. ECBH specializes in child, adolescent, adult, active duty military/Veteran, and geriatric psychiatry.",
            website: "www.emeraldcoastbehavioral.com",
            address: "1940 Harrison Ave, Panama City, FL, 32405",
            phone: "(850) 763-0017"
        },
        {
            name: "Epilepsy Foundation of Florida",
            description: "EFOF serves as the lead advocate for the rights and needs of people with epilepsy and seizure disorders at the local, county and state level. EFOF provides many valuable services to individuals and their families, regardless of their financial situation, including advocacy, case management, information, referral and support, medical services, neuropsychological services, prevention and education, individual and family counseling, research, development and fundraising, resource materials, support groups and children’s camp.",
            website: "No Website Provided",
            address: "2401 Airport Executive Plaza, Suite 3B, Pensacola, FL32504",
            phone: "(850) 433-1395"

        },
        {
            name: "Escambia AIDS Services and Education Inc.",
            description: "",
            website: "http://escambia.floridahealth.gov/programs-and-services/clinical-and-nutrition-services/hiv-aids/index.html",
            address: "Fairfield Service Center, 1295 West Fairfield Drive, Pensacola, FL 32501",
            phone: "(850) 595-6345"
        },
        {
            name: "Emerald Coast Ministries",
            description: "",
            website: "Not Provided",
            address: "30 South 3rd Street, Pensacola, FL 32507",
            phone: "(850) 607-7011"
        },
        {
            name: "Healing Hoof Steps",
            description: "Healing Hoof Steps offers two distinct programs that help to improve the lives of our community through horses. Our clinical equine assisted mental health counseling uses licensed counselors, non-riding activities, an immersive outdoor setting and a working herd of horses. Veterans may qualify for counseling scholarships with no out of pocket costs or co-pays.",
            website: "www.healinghoofsteps.org",
            address: "3942 Jace Drive, Crestview, FL, 32539",
            phone: "(850) 764-1005"
        },
        {
            name: "Honor Vets",
            description: "Honoring Our Veterans offers programs that improve the mental and physical health of wounded warriors.",
            website: "http://www.honorvets.org",
            address: "P.O. Box 2468 Jackson, WY 83001",
            phone: "(307) 413-3951"
        },
        {
            name: "Kindred Spirit Therapy Minis, Inc.",
            description: "Nancy L. Lambert, President/Founder",
            website: "http://www.kindredspiritstherapyminis.com/",
            address: "5411 Hilton Rd N, Baker Fl. 32531",
            phone: "(850) 830-4199"
        },
        {
            name: "Lakeview Center",
            description: "Lakeview Center is a network of behavioral health, vocational and child protective services committed to a single mission: Helping People Overcome Life's Challenges.",
            website: "www.elakeviewcenter.org",
            address: "1221 West Lakeview Avenue, Pensacola, FL 32501",
            phone: "(850) 432-1222"
        },
        {
            name: "Leaning Post Ranch",
            description: "",
            website: "www.theleaningpostranch.org",
            address: "4150 Cedar Springs Rd, Molino, FL 32577",
            phone: "(850) 587-5940"
        },
        {
            name: "Marine Corps DSTRESS Line",
            description: "An anonymous Marine-to-Marine phone and chat support service that operates 24 hours a day, 7 days a week. The line is staffed by veteran Marines, former Fleet Marine Force Navy Corpsmen, Marine spouses and family members, and licensed behavioral health counselors. The goal of the DSTRESS Line is to help callers manage stress in all forms, ranging from relationship and career issues to deployment and financial problems, and develop the necessary skills required to cope with the widely varying challenges of life in the Corps.",
            website: "Not provided",
            address: "Not provided",
            phone: "1-877-476-7734"
        },
        {
            name: "Mental Health Associations of Okaloosa & Walton Counties",
            description: "Mental Health Association of Okaloosa/Walton (MHAOW) is the area's oldest non-profit organization addressing all aspects of mental health, mental illness, and substance abuse. The association educates the public, advocates for excellence and equality in treatment, and supports individuals and families living with mental health disabilities. All services are free of charge.",
            website: "www.mhaow.org/",
            address: "571 Mooney Road NE, Fort Walton Beach, FL32547",
            phone: "(850) 244-1040"
        },
        {
            name: "National Suicide Prevention Lifeline",
            description: "",
            website: "Not provided",
            address: "Not provided",
            phone: "800-273-8255 (TALK)"
        },
        {
            name: "Pathways for Change",
            description: "A faith based addiction program for men and women. Provides access to High School, Technical, and college courses.",
            website: "www.pathwaysforchange.org/",
            address: "1211 W. Fairfield Drive, Pensacola, FL 32501",
            phone: "(850) 202-0028"
        },
        {
            name: "Pavilion",
            description: "The Pavilion is a 73-bed, full service psychiatric hospital located on the West Florida Hospital campus. The physicians and staff of the Pavilion are focused specifically on the treatment of adults. Although physically adjoined to West Florida Hospital, The Pavilion is a separate facility, ensuring confidentiality and patient privacy.",
            website: "http://westfloridahospital.com/service/behavioral-health",
            address: "8383 North Davis Highway, Pensacola, FL 32514",
            phone: "(850) 494-4000"
        },
        {
            name: "Real Warriors",
            description: "The Real Warriors Campaign encourages help-seeking behavior among service members, veterans and military families coping with invisible wounds.",
            website: "https://www.realwarriors.net/",
            address: "Not provided",
            phone: "Psychological Health Resource: 866-966-1020; Military Crisis Line: 800-273-8255"
        },
        {
            name: "Reboot",
            description: "Our faith-based trauma healing course is designed to address the spiritual and moral wounds of war. At REBOOT locations across the country, military families are healing, divorce rates are dropping, medication abuse is decreasing, and suicide numbers are being reduced.",
            website: "https://rebootalliance.com/reboot",
            address: "Not provided",
            phone: "Not provided"
        },
        {
            name: "Steven A. Cohen Military Family Clinics at Centerstone",
            description: "Provides targeted behavioral health care for post 9/11 Veterans, National Guardsmen, Reservists, their families, and active-duty military families. All post-9/11 veterans and military family members are eligible for care, regardless of discharge status or combat experience.",
            website: "https://centerstone.org/cohen-military-family-clinic/jacksonville/",
            address: "7011 A.C. Skinner Parkway, Jacksonville, FL 32256",
            phone: "Clinic: (904) 431-3500; Mobile: (904) 525-3633"
        },
        {
            name: "Semper Fi Fund",
            description: "Financial, emotional, and tiered support for our injured/ill service members and their families.",
            website: "http://semperfifund.org",
            address: "715 Broadway St, Quantico, VA 22134",
            phone: "(760) 725-3680"
        },
        {
            name: "VA Coaching into Care",
            description: "Free telephone consultation to family members wishing to help a Veteran seek mental health care in a VA treatment facility or Vet Center.",
            website: "https://www.mirecc.va.gov/coaching",
            address: "Not provided",
            phone: "(888) 823-7458"
        },
        {
            name: "Vet Centers",
            description: "",
            website: "http://www.va.gov/directory/guide/facility.asp?ID=5182",
            address: "Various locations including Pensacola, Okaloosa County, Mobile, Biloxi, and Bay County",
            phone: "Various phone numbers based on location, e.g., Pensacola: (850) 456-6113"
        },
        {
            name: "Veterans Recovery Resources",
            description: "A community-based mental wellness program that is designed for the specific needs of veterans – regardless of their ability to pay.",
            website: "https://veteransrecoveryresources.org/",
            address: "Not provided",
            phone: "1-866-648-7334"
        },
        {
            name: "Veterans Student Support Services",
            description: "Services provide advising and counseling, learning lab peer tutoring, cultural field trips, and grant aid.",
            website: "http://www.pensacolastate.edu/current-students/student-services/trio/veterans-student-support-services/",
            address: "1000 College Blvd, Pensacola FL, 32504",
            phone: "(850) 484-1971"
        },
        {
            name: "Warrior to Soul Mate Program (W2SM)",
            description: "VA offers workshops and retreats to help Veterans and their spouses/partners strengthen their relationships. Workshops are free of charge and led by VA staff. Call for dates and info on upcoming workshops.",
            website: "Not provided",
            address: "Not provided",
            phone: "(228) 523-5730"
        },
        {
            name: "Wounded Warrior Project",
            description: "",
            website: "http://www.woundedwarriorproject.org/",
            address: "4899 Belfort Road, Suite 300, Jacksonville, FL",
            phone: "1-877-832-6997"
        },
    ];

    return (
        <div className="mentalHealthResourcesContainer">
            <h1>Mental Health Resources</h1>
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

export default MentalHealthResources;
