import React from 'react'
// import './Satish.css';
import { Link, useNavigate  } from 'react-router-dom';
function Satish() {
  const navigate = useNavigate();
  const Satish1 = () => {
    navigate('/ViewAppointments'); // Redirect to home page
  };
  return (
    <div>
       <button onClick={Satish1}>View Appointment Status</button>
    <div className='OCDTest'>
      <h1>
      Dr. Satish S.Nagargoje
      </h1>
      <h5>MBBS, Diploma in Clinical Psychiatry
Psychiatrist,
Sexologist

</h5>
<h1>18 Years Experience Overall  (11 years as specialist)</h1>
<h5> Medical Registration Verified</h5>
<h6>99% (185 patients)</h6>
<h5>Dr. Satish S Nagargoje is an imminent consultant psychiatrist from Thane in Maharashtra. He specializes in Pediatric Psychiatry, Schizophrenia, Depression, Anxiety, OCD, Addiction, and Dementia.
After completing post graduation in Psychiatry from Sir J J Group of Hospitals & Grant Medical College in Mumbai, he started practicing at reputed Institute of Psychological Health (IPH) and Manas clinic in Thane. He is known for his academic and clinical interests since his post graduation days.
<h5>Dr. Nagargoje is an experienced counselor and conducts REBT sessions for marital issues, anger & stress management, and study skills. He is committed to social awareness and destigmatization of mental health. He tries to fulfill his commitment by conducting various social programs for students, teachers, parents and police force. Dr. Nagargoje is prolific writer and blogger with a creative vision and active on national and social media
</h5>
</h5>
    </div>
    </div>
  )
}

export default Satish