import React, { useState } from 'react';

const CarromRegistration = () => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxpFmXEB6tJ9O87PyHcvz7v1epd32vVuvM92cGzQnqVPYm52wvZgILacge9Fi3xCCShnQ/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await fetch(scriptURL, { method: 'POST', body: new FormData(e.target) });
            setMessage('Your Response has been sent successfully!');
            setTimeout(() => {
                setMessage('');
            }, 4000);
            e.target.reset();
        } catch (error) {
            console.error('Error!', error.message);
        }
        finally {
            setIsLoading(false);
          }
    };

    return (
        <>
            <div className='main-container'>
                <div className="section">
                    <div className="registration-form-heading">
                        <h1>Carrom Registration</h1>
                    </div>
                    <form name="submit-to-google-sheet" className="registration-form" data-form onSubmit={handleSubmit}>

                    <input type="text" placeholder="Team Name" className="form-control" name="Team Name" required />
                    <input type="number" placeholder="Number of Team Members" className="form-control" name="Number of Team Members" required />
                    <input type="text" placeholder="Team Leader Name" className="form-control" name="Team Leader Name" required />
                    <input type="text" placeholder="Team Leader Email ID" className="form-control" name="Team Leader Email ID" required />
                    <input type="text" placeholder="Team Leader Roll Number" className="form-control" name="Team Leader Roll Number" required /> 
                    <input type="text" placeholder="Team Leader Contact Number" className="form-control" name="Team Leader Contact Number" required /> 
                    <input type="text" placeholder="Team Member 2 Name" className="form-control" name="Team Member 2 Name" required /> 
                    <input type="text" placeholder="Team Member 2 Roll Number" className="form-control" name="Team Member 2 Roll Number" required /> 

                    <button className="submit-btn" type="submit" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : ' Submit'}
                          
                        </button>
                    </form>
                    <span id="message" className="success-message">{message}</span>

                </div>
            </div>
        </>
    )
}

export default CarromRegistration