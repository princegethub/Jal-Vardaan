import React, { useState, useEffect } from 'react';
import Button from '../ui/Button'; // Assuming the Button component is imported
import Illustration from '../../assets/GPS/illustrator.svg';

const ConsumerDetails = ({ consumer, mode, onBack, onSubmit }) => {
  const [consumerData, setConsumerData] = useState(consumer || {});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setConsumerData(consumer || {});
  }, [consumer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConsumerData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    onBack(); // Call the parent callback to handle the back action
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(consumerData); // Pass the form data to the parent API call handler
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
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
          {['name', 'consumerId', 'mobile', 'aadhar', 'address'].map((field, index) => (
            <div key={index}>
              <label className="block font-bold">{`${field.charAt(0).toUpperCase() + field.slice(1)}:`}</label>
              <input
                type="text"
                name={field}
                value={consumerData[field] || ''}
                onChange={handleInputChange}
                readOnly={mode === 'view'}
                className={`w-full border border-gray-300 rounded p-2 ${
                  mode === 'view' ? 'cursor-not-allowed focus:outline-none' : ''
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
