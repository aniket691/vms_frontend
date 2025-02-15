import React from "react";

const messages = [
  "आम्ही फक्त कागदपत्रांची देवाण-घेवाण करतो आणि जे कागदपत्र देवाण-घेवाण करतो त्याची मा. अधिकाऱ्याकडून पूर्तता झालेली असते याची सर्व वेलींनी व रहिवासी नोंद घ्यावी.",
  "माझे दाखले या सेवा केंद्रांच्या माध्यमातून विविध प्रकारचे प्रमाणपत्रे परवाने अनुज्ञप्ती आणि इतर सेवा प्रदान केल्या जात आहेत केंद्र चालक नागरिकाला आवश्यक असणारे सेवांचा अर्ज ऑनलाईन भरून देतो आणि नागरिक आवश्यकता सेवा कोणत्याही अडथळ्याशिवाय प्राप्त करू शकतो.",
  "रहिवासी प्रमाणपत्र, जात प्रमाणपत्र, अशी अनेक उपयुक्त कागदपत्रे या माझे दाखले केंद्रांच्या माध्यमातून नागरिक प्राप्त करीत आहेत यासाठी त्यांना लांबच लांब रांगा लावायची गरज नाहीत. आणि प्रमाणपत्र प्राप्त करण्यासाठी कार्यालयात असंख्य फेराही मारावा लागत नाहीत ही संपूर्ण प्रक्रिया वेळेची बचत करते.",
  "माझे दाखले या केंद्रामार्फत रहिवासी यांना त्यांच्या गावाला जाण्याचे आवश्यकता नाही ऑनलाइन सेवामार्फत त्यांना जातीचे प्रमाणपत्र ऑनलाइन प्रमाणपत्र शालेय प्रमाणपत्र त्यांना हवे त्या ठिकाणी मिळण्याची मदत होते यामुळे वेळेची बचत होत असते."
];

const MarqueeComponent = () => {
  return (
    <div className="overflow-hidden bg-gray-100 py-3 shadow-md">
      <div className="flex space-x-10 animate-marquee">
        {/* Duplicate messages to prevent resetting */}
        {[...messages, ...messages].map((msg, index) => (
          <div key={index} className="text-lg text-gray-900 font-semibold px-6 whitespace-nowrap">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeComponent;
