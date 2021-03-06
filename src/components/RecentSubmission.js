import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types' 

const RecentSubmission = ({recentSentence}) => {
  
  // console.log(recentSentence)
  const recentSubmission = 
    "The " + recentSentence.adjOne + " " + recentSentence.nounOne + " " + recentSentence.nounOne + " " + recentSentence.adverb + " " + recentSentence.verb + " the "+ recentSentence.adjTwo + " " + recentSentence.nounTwo + "."
  


  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ recentSubmission }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  recentSentence:PropTypes.object.isRequired,
}


export default RecentSubmission;
