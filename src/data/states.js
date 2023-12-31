let jammuAndKashmirCapital;
const d = new Date();
switch (d.getMonth()) {
    case 12:
    case 1:
    case 2:
    case 9:
    case 10:
    case 11:
        jammuAndKashmirCapital = "jammu";
        break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
        jammuAndKashmirCapital = "srinagar";
        break;
}

const states = [
    {
        state: "andaman_and_nicobar_islands",
        lat: 10,
        long: 92,
        neighbouring_states: [],
        capital_city: "port_blair",
    },
    {
        state: "andhra_pradesh",
        lat: 15,
        long: 80,
        neighbouring_states: [
            "tamil_nadu",
            "karnataka",
            "odisha",
            "telangana",
            "chhattisgarh",
            "puducherry",
        ],
        capital_city: "amaravati",
        longest_border: 'telangana'
    },
    {
        state: "arunachal_pradesh",
        lat: 28,
        long: 94,
        neighbouring_states: ["nagaland", "assam"],
        capital_city: "itanagar",
        longest_border: 'assam'
    },
    {
        state: "assam",
        lat: 26,
        long: 93,
        neighbouring_states: [
            "arunachal_pradesh",
            "tripura",
            "mizoram",
            "manipur",
            "nagaland",
            "meghalaya",
            "west_bengal",
        ],
        capital_city: "dispur",
        longest_border: 'arunachal_pradesh'
    },
    {
        state: "bihar",
        lat: 25,
        long: 85,
        neighbouring_states: ["jharkhand", "uttar_pradesh", "west_bengal"],
        capital_city: "patna",
        longest_border: 'uttar_pradesh'
    },
    {
        state: "chandigarh",
        lat: 33,
        long: 76,
        neighbouring_states: ["punjab", "haryana"],
        capital_city: "chandigarh",
        longest_border: "punjab"
    },
    {
        state: "chhattisgarh",
        lat: 21,
        long: 81,
        neighbouring_states: [
            "telangana",
            "andhra_pradesh",
            "odisha",
            "maharashtra",
            "madhya_pradesh",
            "jharkhand",
            "uttar_pradesh",
        ],
        capital_city: "raipur",
        longest_border: "odisha"
    },
    {
        state: "dadra_and_nagar_haveli_and_daman_and_diu",
        lat: 20,
        long: 73,
        neighbouring_states: ["gujarat", "maharashtra"],
        capital_city: "daman",
        longest_border: "gujarat"
    },
    {
        state: "delhi",
        lat: 28,
        long: 77,
        neighbouring_states: ["haryana", "uttar_pradesh"],
        capital_city: "new_delhi",
        longest_border: "haryana"
    },
    {
        state: "goa",
        lat: 15,
        long: 74,
        neighbouring_states: ["maharashtra", "karnataka"],
        capital_city: "panaji",
        longest_border: "karnataka"
    },
    {
        state: "gujarat",
        lat: 22,
        long: 71,
        neighbouring_states: [
            "maharashtra",
            "madhya_pradesh",
            "rajasthan",
            "dadra_and_nagar_haveli_and_daman_and_diu",
        ],
        capital_city: "gandhinagar",
        longest_border: "rajasthan"
    },
    {
        state: "haryana",
        lat: 28,
        long: 76,
        neighbouring_states: [
            "rajasthan",
            "delhi",
            "uttar_pradesh",
            "punjab",
            "himachal_pradesh",
        ],
        capital_city: "chandigarh",
        longest_border: "punjab"
    },
    {
        state: "himachal_pradesh",
        lat: 31,
        long: 77,
        neighbouring_states: [
            "uttar_pradesh",
            "haryana",
            "punjab",
            "ladakh",
            "jammu_and_kashmir",
            "uttarakhand",
        ],
        capital_city: "shimla",
        longest_border: "jammu_and_kashmir"
    },
    {
        state: "jammu_and_kashmir",
        lat: 33,
        long: 75,
        neighbouring_states: ["ladakh", "punjab", "himachal_pradesh"],
        capital_city: jammuAndKashmirCapital,
        longest_border: 'ladakh'
    },
    {
        state: "jharkhand",
        lat: 23,
        long: 85,
        neighbouring_states: [
            "bihar",
            "odisha",
            "chhattisgarh",
            "uttar_pradesh",
            "bihar",
            "west_bengal",
        ],
        capital_city: "ranchi",
        longest_border: "bihar"
    },
    {
        state: "karnataka",
        lat: 14,
        long: 75,
        neighbouring_states: [
            "goa",
            "maharashtra",
            "kerala",
            "tamil_nadu",
            "andhra_pradesh",
            "telangana",
        ],
        capital_city: "bengaluru",
        longest_border: "maharashtra"
    },
    {
        state: "kerala",
        lat: 10,
        long: 76,
        neighbouring_states: ["puducherry", "tamil_nadu", "karnataka"],
        capital_city: "thiruvananthapuram",
        longest_border: "tamil_nadu"
    },
    {
        state: "ladakh",
        lat: 33,
        long: 77,
        neighbouring_states: ["jammu_and_kashmir", "himachal_pradesh"],
        capital_city: "leh",
        longest_border: "himachal_pradesh"
    },
    {
        state: "lakshadweep",
        lat: 10,
        long: 72,
        neighbouring_states: [],
        capital_city: "kavaratti",
    },
    {
        state: "madhya_pradesh",
        lat: 23,
        long: 77,
        neighbouring_states: [
            "gujarat",
            "rajasthan",
            "maharashtra",
            "uttar_pradesh",
            "chhattisgarh",
        ],
        capital_city: "bhopal",
        longest_border: "uttar_pradesh"
    },
    {
        state: "maharashtra",
        lat: 18,
        long: 75,
        neighbouring_states: [
            "goa",
            "karnataka",
            "telangana",
            "chhattisgarh",
            "madhya_pradesh",
            "dadra_and_nagar_haveli_and_daman_and_diu",
            "gujarat",
        ],
        capital_city: "mumbai",
        longest_border: "madhya_pradesh"
    },
    {
        state: "manipur",
        lat: 24,
        long: 93,
        neighbouring_states: ["assam", "mizoram", "nagaland"],
        capital_city: "imphal",
        longest_border: "nagaland"
    },
    {
        state: "meghalaya",
        lat: 25,
        long: 91,
        neighbouring_states: ["assam"],
        capital_city: "shillong",
        longest_border: "assam"
    },
    {
        state: "mizoram",
        lat: 23,
        long: 92,
        neighbouring_states: ["assam", "tripura", "manipur"],
        capital_city: "aizawl",
        longest_border: "tripura"
    },
    {
        state: "nagaland",
        lat: 26,
        long: 94,
        neighbouring_states: ["assam", "arunachal_pradesh"],
        capital_city: "kohima",
        longest_border: "assam"
    },
    {
        state: "odisha",
        lat: 20,
        long: 84,
        neighbouring_states: [
            "jharkhand",
            "chhattisgarh",
            "andhra_pradesh",
            "west_bengal",
        ],
        capital_city: "bhubaneswar",
        longest_border: "chhattisgarh"
    },
    {
        state: "punjab",
        lat: 30,
        long: 75,
        neighbouring_states: [
            "haryana",
            "rajasthan",
            "jammu_and_kashmir",
            "chandigarh",
            "himachal_pradesh",
        ],
        capital_city: "chandigarh",
        longest_border: "jammu_and_kashmir"
    },
    {
        state: "rajasthan",
        lat: 26,
        long: 73,
        neighbouring_states: [
            "gujarat",
            "madhya_pradesh",
            "haryana",
            "punjab",
            "uttar_pradesh",
        ],
        capital_city: "jaipur",
        longest_border: "punjab"
    },
    {
        state: "sikkim",
        lat: 27,
        long: 88,
        neighbouring_states: ["west_bengal"],
        capital_city: "gangtok",
        longest_border: "west_bengal"
    },
    {
        state: "tamil_nadu",
        lat: 10,
        long: 78,
        neighbouring_states: [
            "puducherry",
            "karnataka",
            "kerala",
            "andhra_pradesh",
        ],
        capital_city: "chennai",
        longest_border: "kerala"
    },
    {
        state: "telangana",
        lat: 18,
        long: 79,
        neighbouring_states: [
            "andhra_pradesh",
            "karnataka",
            "maharashtra",
            "chhattisgarh",
        ],
        capital_city: "hyderabad",
        longest_border: 'andhra_pradesh'
    },
    {
        state: "tripura",
        lat: 23,
        long: 91,
        neighbouring_states: ["assam", "mizoram"],
        capital_city: "agartala",
        longest_border: 'mizoram'
    },
    {
        state: "uttarakhand",
        lat: 30,
        long: 79,
        neighbouring_states: ["himachal_pradesh", "uttar_pradesh"],
        capital_city: "dehradun",
        longest_border: 'himachal_pradesh'
    },
    {
        state: "uttar_pradesh",
        lat: 27,
        long: 80,
        neighbouring_states: [
            "madhya_pradesh",
            "rajasthan",
            "delhi",
            "uttarakhand",
            "haryana",
            "chhattisgarh",
            "jharkhand",
            "bihar",
            "himachal_pradesh",
        ],
        capital_city: "lucknow",
        longest_border: 'madhya_pradesh'
    },
    {
        state: "west_bengal",
        lat: 22,
        long: 87,
        neighbouring_states: [
            "odisha",
            "bihar",
            "jharkhand",
            "sikkim",
            "assam",
        ],
        capital_city: "kolkata",
        longest_border: 'jharkhand'
    },
    {
        state: "puducherry",
        lat: 11,
        long: 79,
        neighbouring_states: ["andhra_pradesh", "kerala", "tamil_nadu"],
        capital_city: "puducherry",
        longest_border: "tamil_nadu"
    },
];

export default states;
