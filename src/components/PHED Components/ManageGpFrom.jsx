import React, { useState ,useEffect} from "react";


const states = [
  { value: 'delhi', label: 'Delhi' },
  { value: 'haryana', label: 'Haryana' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'tamilnadu', label: 'Tamil Nadu' },
  { value: 'telangana', label: 'Telangana' },
  { value: 'himachal', label: 'Himachal' },
];

const districts = {
  delhi: ['South Delhi', 'North Delhi', 'East Delhi', 'West Delhi', 'Central Delhi'],
  haryana: ['Faridabad', 'Gurugram', 'Ambala', 'Panipat', 'Sonipat'],

  // Add districts for other states here
};

const villages = {
  delhi: ['Same as Districts'], // Villages are the same as districts for Delhi
  // Villages are the same as districts for Delhi
  // Villages are the same as districts for Delhi
  // Add villages for other states here (optional)
};

// componenet start from here
const ManageGp = ({ onBack, onSubmit }) => {

  const [lgdCode, setLgdCode] = useState("");
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleStateChange = (event) => {

    setSelectedState(event.target.value)


    setSelectedDistrict('');
  }

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  const getDistricts = () => {
    return districts[selectedState] || []; // Return empty array if no districts for state
  };

  const getVillages = (event) => {


    // Check if villages are same as districts for selected state
    return selectedState === 'delhi' ? getDistricts() : villages[selectedState] || [];
  };

  // Separate state variables for each field
  const [state, setState] = useState("");
  const [district, setdistrict] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [village, setvillage] = useState("");
  const [sarpanchName, setSarpanchName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [email, setEmailId] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!gpName.trim()) newErrors.gpName = "Gram Panchayat Name is required";
    if (!sarpanchName.trim()) newErrors.sarpanchName = "Sarpanch Name is required";
    if (!mobileNumber.trim()) newErrors.mobileNumber = "Mobile Number is required";
    if (!lgdCode.trim()) newErrors.lgdCode = "LGD Code is required";
    if (!authId.trim()) newErrors.authId = "Auth ID is required";
    return newErrors;
  };
 // Replace with your actual state value



  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Create an object to pass the data to `onSubmit`
    const formData = { gpName, sarpanchName, mobileNumber, lgdCode, authId };
    console.log("Form Submitted with Data:", formData); // Debug log
    onSubmit(formData);
  };

// send data as json format

 const registergm = async (e) => {

  e.preventDefault(); // Prevent the form from refreshing the page
  setLoading(true);
  try {
    const token = localStorage.getItem("authToken"); // Retrieve the token
    // Dynamically set user input from form fields
    const userDetailsOfgp = {
      state: state,
      district:district,
      villageName:district,
      lgdCode:lgdCode,
      name:sarpanchName,
      aadhar:aadhar,
      contact:mobileNumber,
      
      email:email,
    };

    const response = await fetch("http://localhost:5000/api/v1/phed/gp-add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Send token in the Authorization header
      },
      body: JSON.stringify(userDetailsOfgp), // Send the user input dynamically as JSON
    });
    console.log(response);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setData(data); // Save the API response
    console.log('data: ', data);

    if (response.ok) {

      // If login is successful, navigate to the desired route
      alert("registration done")

    } else {
      // Handle unsuccessful login (optional)
      alert("Login failed! Please check your credentials.");
    }
  } catch (error) {
    setError(error.message); // Save the error message
  } finally {
    setLoading(false); // Stop the loading indicator
  }
};

useEffect(() => {
  if (selectedState === "delhi") {
    setLgdCode(32);
  } else if (selectedState !== "") { // Check for non-empty state (excluding default)
    const randomNum = Math.floor(Math.random() * 100);
    const formattedRandomNum = randomNum.toString().padStart(2, '0');
    setLgdCode(formattedRandomNum);
  } else {
    setLgdCode(""); // Clear lgdCode if state is empty (default)
  }
}, [selectedState]);



  return (
    <div className="w-full lg:w-[50%] shadow-md rounded-xl p-6 sm:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
        Add Gram Panchayat
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Gram Panchayat Name */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex flex-col w-full sm:w-1/3">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="state">
                State
              </label>
              <select
                id="state"
                value={selectedState}
                onChange={handleStateChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full sm:w-1/3">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="district">
                District
              </label>
              <select
                id="district"
                value={selectedDistrict}
                onChange={handleDistrictChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select District</option>
                {getDistricts().map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full sm:w-1/3">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="village">
                Village
              </label>
              <select
                id="village"
                value={selectedDistrict} // Only display selected district (same as Delhi)
                onChange={handleDistrictChange} // Update village state if needed for other states
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select Village</option>
                {getVillages().map((village) => (
                  <option key={village} value={village}>
                    {village}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Sarpanch Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="sarpanchName">
            Sarpanch Name
          </label>
          <input
            type="text"
            id="sarpanchName"
            placeholder="Enter Sarpanch Name"
            value={sarpanchName}
            onChange={(e) => setSarpanchName(e.target.value)}
            className={`w-full p-3 border ${errors.sarpanchName ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:outline-none ${errors.sarpanchName ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {errors.sarpanchName && <p className="text-red-500 text-sm mt-1">{errors.sarpanchName}</p>}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="mobileNumber">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className={`w-full p-3 border ${errors.mobileNumber ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:outline-none ${errors.mobileNumber ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
        </div>

        {/* LGD Code */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="lgdCode">
            LGD Code
          </label>
          <input
            type="text"
            id="lgdCode"
            placeholder="Enter LGD Code"
            value={lgdCode}
            readOnly

            className={`w-full p-3 border ${errors.lgdCode ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:outline-none ${errors.lgdCode ? "focus:ring-red-500" : ""}`}
          />
          {errors.lgdCode && <p className="text-red-500 text-sm mt-1">{errors.lgdCode}</p>}
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="authId">
            Email ID
          </label>
          <input
            type="email"
            id="authId"
            placeholder="Enter Email Id"
            value={email}
            onChange={(e) => setEmailId(e.target.value)}
            className={`w-full p-3 border ${errors.authId ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:outline-none ${errors.authId ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {errors.authId && <p className="text-red-500 text-sm mt-1">{errors.authId}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="authId">
            Aadhar Card
          </label>
          <input
            type="number"
            id="aadhar"
            placeholder="Enter AAdhar Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            className={`w-full p-3 border ${errors.aadhar ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:outline-none ${errors.authId ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {errors.authId && <p className="text-red-500 text-sm mt-1">{errors.authId}</p>}
        </div>

        <div className="flex justify-between items-center">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
          onClick={registergm}
          >
            Submit
          </button>
          <button type="button" onClick={onBack} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg">
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageGp;