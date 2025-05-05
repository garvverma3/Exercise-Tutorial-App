
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About FitFlex</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-6">
            FitFlex is a comprehensive fitness platform designed to help you achieve your health and fitness goals. 
            We offer a wide range of workout routines tailored to different fitness levels and body focus areas.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to make fitness accessible to everyone, regardless of their experience level or available equipment. 
            We believe that everyone deserves the opportunity to improve their health and wellbeing through regular physical activity.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Team</h2>
          <p className="text-gray-700 mb-6">
            FitFlex was founded by a team of certified fitness instructors, nutritionists, and health enthusiasts who are passionate
            about helping others achieve their fitness goals.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose FitFlex</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Personalized workout plans for all fitness levels</li>
            <li>Expert-designed routines targeting specific body areas</li>
            <li>Flexible scheduling to fit your busy lifestyle</li>
            <li>Progress tracking to keep you motivated</li>
            <li>Community support to help you stay accountable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
