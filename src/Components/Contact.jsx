import React, { useState } from "react";

const Contact = () => {

    const [formData,setFormData] = useState({
          fname : "",
          email : "",
          phone : "",
          msg : ""
    });

    const inputEvent = (event) => {
        const {name,value} = event.target;

        setFormData( (preValue) => {
            
            return{
                ...preValue,
                [name] : value
            };

        });
    }

    const submitData = () => {
        alert(

            formData.fname + " " +
            formData.email + " " +
            formData.phone + " " +
            formData.msg
        );
    }


    return(
     <>
        <section>
            <div className="my-5">
              <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container-fluid w-50">
                <div className="row">
                    <div className="col-10 mx-auto ">

                       <form onSubmit={submitData}>

                        <div className="mb-3">
                           <label for="name" className="form-label">Name</label>
                           <input type="text" className="form-control" id="name" 
                           name="fname" 
                           value={formData.fname}
                           onChange={inputEvent}/>
                        </div>

                        <div className="mb-3">
                           <label for="email" className="form-label">Email</label>
                           <input type="text" className="form-control" id="email" 
                           name="email"
                           value={formData.email}
                           onChange={inputEvent}
                            />
                        </div>

                        <div className="mb-3">
                           <label for="Phone" className="form-label">Phone</label>
                           <input type="text" className="form-control" id="Phone" 
                           name="phone" 
                           value={formData.phone}
                           onChange={inputEvent}
                           />
                        </div>

                        <div className="mb-3">
                          <label for="textarea" className="form-label">Message</label>
                          <textarea className="form-control" id="textarea" rows="3" 
                          name="msg"
                          value={formData.msg}
                          onChange={inputEvent}
                          ></textarea>
                        </div>

                        <div className="mb-3">
                           <button type="submit" className="btn btn-primary mb-3">Submit Form</button>
                        </div>

                       </form>

                    </div>
                </div>
            </div>
        </section>
     </>
    );
}

export default Contact;