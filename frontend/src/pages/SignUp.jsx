

const SignUp = () => {
  return (
    <div>SignUp</div>
  )
}

export default SignUp



/*
import { useState } from 'react';
export const SignUp = () => {
    const [step, setStep] = useState(1);
    const [userType, setUserType] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [location, setLocation] = useState('');
    const [results, setResults] = useState([]);
  
    const handleUserTypeSelect = (selectedType) => {
      setUserType(selectedType);
      setStep(step + 1);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const result = {
        userType,
        email,
        selectedService,
        location,
      };
      setResults([...results, result]);
      // You can reset the state or navigate to a different page at this point
    };
  
    return (
      <div className='flex justify-center'>
        {step === 1 && (
          <div>
            <h2 className='title'>Choose User Type:</h2>
            <div className='flex justify-around'>
                <button className='button' onClick={() => handleUserTypeSelect('farmer')}>Farmer</button>
                <button className='button' onClick={() => handleUserTypeSelect('serviceProvider')}>Service Provider</button>
            </div>
          </div>
        )}
  
        {step === 2 && (
        <div>
            <h2 className='title'>Enter Email and Password:</h2>
          <form 
          onSubmit={handleFormSubmit}
          className='flex flex-col'
          >
            <input
              type="email"
              value={email}
              className='input'
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit" className='button' > Next </button>
          </form>
        </div>
        )}
        {step === 3 && (
            <form onSubmit={handleFormSubmit}>
              <h2 className='title'>Enter Service and Location:</h2>
              <input
                type="text"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                placeholder="Service"
              />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
              <button type="submit">Next</button>
            </form>
          )}

      </div>
    );
}
*/
