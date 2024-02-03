import React, { useState } from 'react';

const ThrowballRegistration = () => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzx8Ufh2KrhF4bIu5KaDVA8FxB-9W39Is-W7IBQBtGdtqkiNjP27QdVihTR2nE1GOqAkQ/exec';

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
                        <h1>Throwball Registration</h1>
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
                    <input type="text" placeholder="Team Member 3 Name" className="form-control" name="Team Member 3 Name" required /> 
                    <input type="text" placeholder="Team Member 3 Roll Number" className="form-control" name="Team Member 3 Roll Number" required /> 
                    <input type="text" placeholder="Team Member 4 Name" className="form-control" name="Team Member 4 Name" required /> 
                    <input type="text" placeholder="Team Member 4 Roll Number" className="form-control" name="Team Member 4 Roll Number" required /> 
                    <input type="text" placeholder="Team Member 5 Name" className="form-control" name="Team Member 5 Name" /> 
                    <input type="text" placeholder="Team Member 5 Roll Number" className="form-control" name="Team Member 5 Roll Number"  />
                    <input type="text" placeholder="Team Member 6 Name" className="form-control" name="Team Member 6 Name" /> 
                    <input type="text" placeholder="Team Member 6 Roll Number" className="form-control" name="Team Member 6 Roll Number"  />

                       
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

export default ThrowballRegistration