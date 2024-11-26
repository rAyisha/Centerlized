export const columns = [
  { field: 'feestype', header: 'Fees Type', shortable: true },
  { field: 'duedate', header: 'Due Date', shortable: true },
  { field: 'amount', header: 'Amount ($)', shortable: true },
];
export const ageOptions = [
  { label: "Younger", value: "younger" },
  { label: "Elder", value: "elder" },
];
export const documentOptions = [
  { label: 'Aadhaar Card', value: 'aadhaar' },
  { label: 'PAN Card', value: 'pan' },
  { label: 'Voter ID', value: 'voter_id' },
  { label: 'Passport', value: 'passport' },
  { label: 'Driving License', value: 'driving_license' }
];
export const guardianOptions = [
  { label: 'Father', value: 'father' },
  { label: 'Mother', value: 'mother' },
  { label: 'Guardian', value: 'guardian' },
];
export const countryoption = [
  { label: 'India', value: 'India' },
  { label: 'USA', value: 'USA' },
  { label: 'China', value: 'China' },
];
export const stateoption = [
  { label: 'TamilNadu', value: 'India' },
  { label: 'Kerala', value: 'USA' },
  { label: 'Andra', value: 'China' },
];
export const cityoption = [
  { label: 'Chennai', value: 'India' },
  { label: 'Madurai', value: 'USA' },
  { label: 'covai', value: 'China' },
];
export const products = [
  {
    feestype: "Admission Fees (admission-fees)",
    duedate: "04/10/2024",
    amount: "2,000.00"
  }
]
export const classOptions = Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1}`,
  value: `${i + 1}`,
}));

export const sectionOptions = [
  { label: " A", value: "Section A" },
  { label: "B", value: "Section B" },
  { label: " C", value: "Section C" },
  { label: " D", value: "Section D" },
];

export const bloodGroupOptions = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];

export const categoryOptions = [
  { label: "General", value: "General" },
  { label: "OC", value: "OC" },
  { label: "SC", value: "SC" },
  { label: "ST", value: "ST" },
  { label: "BC", value: "BC" },
  { label: "MBC", value: "MBC" },
  { label: "OBC", value: "OBC" },
  { label: "DNT", value: "DNT" },
];

export const religionOptions = [
  { label: "Hinduism", value: "Hinduism" },
  { label: "Islam", value: "Islam" },
  { label: "Christianity", value: "Christianity" },
  { label: "Sikhism", value: "Sikhism" },
  { label: "Buddhism", value: "Buddhism" },
  { label: "Jainism", value: "Jainism" },
];

export const houseOptions = [
  { label: "Red", value: "Red" },
  { label: "Blue", value: "Blue" },
  { label: "Green", value: "Green" },
  { label: "Yellow", value: "Yellow" },
];

export const routeListOptions = [
  { label: "Anna Salai (Mount Road)", value: "Anna Salai (Mount Road)" },
  { label: "Poonamallee High Road", value: "Poonamallee High Road" },
  { label: "Jawaharlal Nehru Road", value: "Jawaharlal Nehru Road" },
  { label: "Arcot Road", value: "Arcot Road" },
  { label: "Velachery Main Road", value: "Velachery Main Road" },
  { label: "OMR", value: "OMR" },
];

export const pickupPointOptions = [
  { label: "T. Nagar Bus Terminus", value: "T. Nagar Bus Terminus" },
  { label: "Tambaram Railway Station", value: "Tambaram Railway Station" },
  { label: "Velachery Railway Station", value: "Velachery Railway Station" },
  { label: "Adyar Bus Depot", value: "Adyar Bus Depot" },
  { label: "Guindy Railway Station", value: "Guindy Railway Station" },
  { label: "Anna Nagar Roundtana", value: "Anna Nagar Roundtana" },
  { label: "Thiruvanmiyur Bus Depot", value: "Thiruvanmiyur Bus Depot" },
];

export const feesMonthOptions = [
  { label: "January", value: "January" },
  { label: "February", value: "February" },
  { label: "March", value: "March" },
  { label: "April", value: "April" },
  { label: "May", value: "May" },
  { label: "June", value: "June" },
  { label: "July", value: "July" },
  { label: "August", value: "August" },
  { label: "September", value: "September" },
  { label: "October", value: "October" },
  { label: "November", value: "November" },
  { label: "December", value: "December" },
];

export const GenderOption =
  [{ label: "MALE", value: "male" },
  { label: "FEMALE", value: "female" },
  { label: "OTHERS", value: "others" },
  ]

export const AccordionTabData = [
  {
    header: "Class 1",
    checkbox: true,
    totalamount:400
  },
  {
    header: "Class 2",
    checkbox: true,
    totalamount:230
  },
  {
    header: "Class 3",
    checkbox: true,
    totalamount:530
  },


]
export const SiblingsData = [

]

export const options = ["Father", "Mother", "Other"];
export const RTEOptions = ["Yes", "No"];