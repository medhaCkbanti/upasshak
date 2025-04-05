import React from 'react';


const Map = () => {
    return (
        <div>

     <div className="w-full relative  h-[450px]">
        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3694.1361387600023!2d92.217488!3d22.196932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad6a188414e62b%3A0xa4c3198f81ba90d0!2sBandarban%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1738515855164!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Address & Contact Info */}
   
      </div>
            
        </div>
    );
};

export default Map;