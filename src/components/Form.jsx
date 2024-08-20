import React, { useState } from 'react';

const Form = () => {
  // State to keep track of the current step
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Function to handle the visibility of steps
  const updateStepVisibility = (step) => {
    setCurrentStep(step);
  };

  // Function to handle the next button click
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to handle the previous button click
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form data submission logic here
    console.log('Form submitted');
  };

  return (
    <div id="multistep-form" className="max-w-lg mx-auto">
      {/* Step 1: General Information */}
      <div id="step-1" className={currentStep === 1 ? "block" : "hidden"}>
        <h2 className="text-lg font-semibold">Step 1: General Information</h2>
        {/* Form Fields for Step 1 */}
        <div class="mt-4">
          <label class="block mb-2 text-sm">Name:</label>
          <input type="text" class="w-full px-4 py-2 border rounded-lg" />
      </div>
      <div class="mt-4">
      <label class="block mb-2 text-sm">Date:</label>
      <input type="date" class="w-full px-4 py-2 border rounded-lg" />
    </div>

    <div class="mt-4">
      <label class="block mb-2 text-sm">Address:</label>
      <input type="text" class="w-full px-4 py-2 border rounded-lg" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">Phone:</label>
      <input type="tel" class="w-full px-4 py-2 border rounded-lg" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">City:</label>
      <input type="text" class="w-full px-4 py-2 border rounded-lg" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">E-mail:</label>
      <input type="email" class="w-full px-4 py-2 border rounded-lg" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">Date of Birth:</label>
      <input type="date" class="w-full px-4 py-2 border rounded-lg" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">Mobile Phone:</label>
      <input type="tel" class="w-full px-4 py-2 border rounded-lg" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">Current Weight (Kgs):</label>
      <input type="number" class="w-full px-4 py-2 border rounded-lg" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">Recent weight changes?</label>
      <div class="flex items-center">
        <input type="radio" name="weight_change" class="mr-2" /> Yes
        <input type="radio" name="weight_change" class="ml-4 mr-2" /> No
      </div>
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">If yes, how much:</label>
      <input type="number" class="w-full px-4 py-2 border rounded-lg" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">Current Height (CM):</label>
      <input type="number" class="w-full px-4 py-2 border rounded-lg" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">Marital Status:</label>
      <input type="text" class="w-full px-4 py-2 border rounded-lg" />
    </div>

      </div>

      {/* Step 2: Medical History */}
      <div id="step-2" className={currentStep === 2 ? "block" : "hidden"}>
        <h2 className="text-lg font-semibold">Step 2: Medical History</h2>
        {/* Form Fields for Step 2 */}
        {/* ... */}
        <div class="mt-4">
      <label class="block mb-2 text-sm">Have you ever had any of the following conditions?</label>
      <div class="grid grid-cols-2 gap-4">
        <label><input type="checkbox" /> Cardiovascular Disease</label>
        <label><input type="checkbox" /> Cancer</label>
        <label><input type="checkbox" /> Sleep Apnea</label>
        <label><input type="checkbox" /> Thyroid Problems</label>
        <label><input type="checkbox" /> Stroke</label>
        <label><input type="checkbox" /> Kidney Disease</label>
        <label><input type="checkbox" /> Respiratory</label>
        <label><input type="checkbox" /> High Blood Pressure</label>
        <label><input type="checkbox" /> High Cholesterol</label>
        <label><input type="checkbox" /> Foot Problems</label>
        <label><input type="checkbox" /> Cataracts/Glaucoma</label>
        <label><input type="checkbox" /> Depression</label>
        <label><input type="checkbox" /> Diabetes</label>
        <label><input type="checkbox" /> Other: <input type="text" class="ml-2 border rounded-lg px-2 py-1" /></label>
      </div>
    </div>
    
      </div>

      {/* Step 3: Food & Exercise History */}
      <div id="step-3" className={currentStep === 3 ? "block" : "hidden"}>
        <h2 className="text-lg font-semibold">Step 3: Food & Exercise History</h2>
        {/* Form Fields for Step 3 */}
        {/* ... */}
        <div class="mt-4">
      <label class="block mb-2 text-sm">Do you have any food allergies?</label>
      <div class="flex items-center">
        <input type="radio" name="food_allergies" class="mr-2" /> Yes
        <input type="radio" name="food_allergies" class="ml-4 mr-2" /> No
      </div>
      <input type="text" class="w-full px-4 py-2 border rounded-lg mt-2" placeholder="If yes, what:" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">Do you have any food intolerances?</label>
      <div class="flex items-center">
        <input type="radio" name="food_intolerances" class="mr-2" /> Yes
        <input type="radio" name="food_intolerances" class="ml-4 mr-2" /> No
      </div>
      <input type="text" class="w-full px-4 py-2 border rounded-lg mt-2" placeholder="If yes, what:" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm">What meals do you typically eat?</label>
      <textarea class="w-full px-4 py-2 border rounded-lg" rows="4"></textarea>
    </div>

    <div class="mt-4">
      <label class="block mb-2 text-sm">Do you excersice now?</label>
      <div class="flex items-center">
        <input type="radio" name="food_intolerances" class="mr-2" /> Yes
        <input type="radio" name="food_intolerances" class="ml-4 mr-2" /> No
      </div>
      <input type="text" class="w-full px-4 py-2 border rounded-lg mt-2" placeholder="If yes, what do you do and how often?" />
    </div>

    <div class="mt-4">
      <label class="block mb-2 text-sm">Do you have any physical limitations?</label>
      <textarea class="w-full px-4 py-2 border rounded-lg" rows="4"></textarea>
    </div>
    
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={handlePrev}
          className={`bg-gray-500 text-white px-4 py-2 rounded-lg ${currentStep === 1 ? "invisible" : ""}`}
        >
          Previous
        </button>
        {/* Show "Next" or "Submit" based on the current step */}
        {currentStep < totalSteps ? (
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
