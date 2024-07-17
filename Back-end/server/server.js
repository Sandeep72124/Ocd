// import express from 'express';
// import cors from 'cors';

// const app = express();
// const PORT = process.env.PORT || 3002; // Change the port number to 3002 or any other available port


// app.use(cors());
// app.use(express.json());

// // Serve static files (if any) from the 'public' directory
// app.use(express.static('public'));

// app.get('/suggest-doctors/:ocdType', (req, res) => {
//   const ocdType = req.params.ocdType;

//   // Implement your SVM logic to get doctor suggestions and probabilities based on ocdType
//   // Replace the following with your actual logic.
//   const { doctorSuggestions, probabilities } = getDoctorSuggestionsAndProbabilities(ocdType);

//   res.json({ doctorSuggestions, probabilities });
// });

// function getDoctorSuggestionsAndProbabilities(ocdType) {
//   // Convert input to lowercase for case-insensitive comparison
//   const normalizedOcdType = ocdType.toLowerCase();

//   // Define the psychologists mapping
//   const psychologists = {
//     'symmetry obsessions': 'Psychologist Dr. Sanket Mehta',
//     'cleaning obsessions': 'Psychologist Dr. Pooja Jain',
//     'washing obsessions': 'Psychologist Dr. Ritesh Shah',
//     'checking obsessions': 'Psychologist Dr. Satish S. Nagargoje',
//     'praying obsessions': 'Psychologist Dr. Swarupa Kulkarni',
//     'counting obsessions': 'Psychologist Dr. Rahul Sharma',
//     'other': 'General Psychologist'
//   };

//   // Get the suggested psychologist based on the input
//   const suggestedPsychologist = psychologists[normalizedOcdType] || 'Psychologist Dr. Sanket Mehta'; // Default to Psychologist Dr. Sanket Mehta

//   return { doctorSuggestions: [suggestedPsychologist], probabilities: [1.0] }; // Return only the suggested psychologist
// }

// app.listen(PORT, (err) => {
//   if (err) {
//     console.error('Error starting server:', err);
//   } else {
//     console.log(`Server is running on port ${PORT}`);
//   }
// });
