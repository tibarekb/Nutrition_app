import React from 'react';

const Form = () => {
  return (
    <div>
      <h1>Form</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;