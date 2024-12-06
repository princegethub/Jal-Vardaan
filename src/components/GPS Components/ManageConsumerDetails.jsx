import React, { useState, useEffect } from 'react';
import Button from '../ui/Button'; // Assuming the Button component is imported
import Illustration from '../../assets/GPS/illustrator.svg';
import { useAddConsumerMutation } from '../../features/api/gpApi';
import { toast } from "sonner";
const ConsumerDetails = ({ consumer, mode, onBack, onSubmit }) => {
  const [consumerData, setConsumerData] = useState(consumer || {});
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    setConsumerData(consumer || {});
  }, [consumer]);
  const [consumerInputData, setConsumerInputData] = useState({
    consumerName: '',
    email: '', // Replacing 'consumerId' with 'email'
    contact: '',
    aadhar: '',
    address: ''
  });
  useEffect(() => {
    if (mode === 'edit') {
      setConsumerInputData(consumerData);
    }
  }, [mode, consumerData]);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the new value
    setConsumerInputData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    // Log the field data while typing
    console.log(`Field: ${name}, Value: ${value}`);
  };
  const handleBack = () => {
    onBack(); // Call the parent callback to handle the back action
  };
  const [addConsumer, { isSuccess, isLoading, isError }] = useAddConsumerMutation();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
    setIsSubmitting(true); // Optionally manage submitting state
    console.log(consumerInputData);
    
    try {
      // Make API call and unwrap response
      const response = await addConsumer(consumerInputData).unwrap();
      toast.success(response.message || 'Consumer added successfully!');
      // Reset the form after successful submission
      setConsumerInputData({
        consumerName: '',
        email: '',
        contact: '',
        aadhar: '',
        address: ''
      });
    } catch (error) {
      toast.error(error.data.message || 'Error adding consumer!');
      console.error("Error adding consumer:", error);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };
  return (
    <div className="flex">
      {/* Render illustration if mode is 'illustrator' */}
      {mode === 'illustrator' ? (
        <div className="w-full flex justify-center items-center">
          <img
            src={Illustration}
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 w-full lg:w-[100%]">
          <h2 className="text-xl font-bold text-blue-600">
            {mode === 'add' ? 'Add Consumer' : mode === 'edit' ? 'Edit Consumer' : 'Consumer Details'}
          </h2>
          {/* Input Fields */}
          {['consumerName', 'email', 'contact', 'aadhar', 'address'].map((field, index) => (
            <div key={index}>
              <label className="block font-bold">
                {`${field.charAt(0).toUpperCase() + field.slice(1)}:`}
              </label>
              <input
                type="text"
                name={field}
                value={consumerInputData[field]}
                onChange={handleInputChange}
                readOnly={mode === 'view'}
                required={field !== 'email'} // Make all fields required except email
                className={`w-full border border-gray-300 rounded p-2 ${mode === 'view' ? 'cursor-not-allowed focus:outline-none' : ''
                  }`}
              />
            </div>
          ))}
          {/* Action Buttons */}
          <div className="flex justify-between">
            {mode === 'add' || mode === 'edit' ? (
              <>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-transparent text-black border border-black py-2 px-4 rounded shadow hover:bg-black hover:text-white"
                >
                  {isSubmitting ? 'Submitting...' : mode === 'add' ? 'Add Consumer' : 'Update'}
                </button>
                <Button
                  variant="outline"
                  color="black"
                  onClick={handleBack}
                  className="text-black border-black py-2 px-4 rounded shadow hover:bg-black hover:text-white"
                >
                  Back
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                color="black"
                onClick={handleBack}
                className="text-black border-black py-2 px-4 rounded shadow hover:bg-black hover:text-white"
              >
                Back
              </Button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};
export default ConsumerDetails;

