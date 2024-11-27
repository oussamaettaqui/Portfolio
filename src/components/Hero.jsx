


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../assets/style/Hero.css";

export default function Hero() {
  // Create a ref for the entire text container
  const textRef = useRef(null);
  
  useEffect(() => {
    // Ensure GSAP animation only runs after component mounts
    if (textRef.current) {
      // Select all span elements within the text container
      const letters = textRef.current.querySelectorAll('span');
      
      // GSAP Timeline for sequential animations
      const tl = gsap.timeline();
      
      // Animate letters with staggered effect
      tl.fromTo(letters, 
        {
          // Initial state
          opacity: 0,
          y: 50,
          rotate: 20
        },
        {
          // Target state
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 0.5, // Animation duration
          stagger: 0.1,  // Delay between each letter's animation
          ease: 'back.out(1.7)' // Elastic bounce-back effect
        }
      );
      
      // Optional: Add a hover effect to letters
      letters.forEach(letter => {
        letter.addEventListener('mouseenter', () => {
          gsap.to(letter, {
            scale: 1.2,
            color: '#1abc9c', // Highlight color
            duration: 0.2,
            ease: 'power1.inOut'
          });
        });
        
        letter.addEventListener('mouseleave', () => {
          gsap.to(letter, {
            scale: 1,
            color: 'inherit',
            duration: 0.2,
            ease: 'power1.inOut'
          });
        });
      });
    }
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <div className="w-[60%] m-auto z-10 relative mt-10 rounded-lg loader font-orbitron">
      <h1 
        ref={textRef} 
        className="text-[100px] flex flex-wrap justify-center font-bold"
      >
        <span>O</span>
        <span>U</span>
        <span>S</span>
        <span>S</span>
        <span>A</span>
        <span>M</span>
        <span>A</span>
        <span> <pre> </pre> </span>
        <span>E</span>
        <span>T</span>
        <span>T</span>
        <span>A</span>
        <span>Q</span>
        <span>U</span>
        <span>I</span>
      </h1>
    </div>
  );
}




// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// // Ensure you've installed these dependencies:
// // npm install gsap tailwindcss @emotion/react

// export default function Hero() {
//   // Create refs for animation control
//   const heroRef = useRef(null);
//   const lettersRef = useRef([]);

//   // Prepare the text to animate
//   const text = "OUSSAMA QUETTI";

//   useEffect(() => {
//     // Ensure GSAP animation only runs after component mounts
//     const letters = lettersRef.current;

//     // Check if we have letters to animate
//     if (letters && letters.length > 0) {
//       // Create a GSAP timeline for sequenced animations
//       const tl = gsap.timeline();

//       // Animate letters with complex entrance effect
//       tl.fromTo(
//         letters, 
//         {
//           opacity: 0,
//           y: 100,
//           scale: 0.5,
//           rotationX: -90,
//         }, 
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           rotationX: 0,
//           duration: 0.8,
//           stagger: 0.05,
//           ease: "back.out(1.7)"
//         }
//       );

//       // Add hover interactions
//       letters.forEach((letter) => {
//         letter.addEventListener('mouseenter', () => {
//           gsap.to(letter, {
//             scale: 1.2,
//             color: '#6A5ACD', // Vibrant accent color
//             rotation: 10,
//             duration: 0.3,
//             ease: "power1.inOut"
//           });
//         });

//         letter.addEventListener('mouseleave', () => {
//           gsap.to(letter, {
//             scale: 1,
//             color: 'inherit',
//             rotation: 0,
//             duration: 0.3,
//             ease: "power1.inOut"
//           });
//         });
//       });
//     }

//     // Cleanup function to remove event listeners
//     return () => {
//       letters.forEach((letter) => {
//         // Remove event listeners to prevent memory leaks
//         letter.removeEventListener('mouseenter', () => {});
//         letter.removeEventListener('mouseleave', () => {});
//       });
//     };
//   }, []); // Empty dependency array ensures this runs once on mount

//   return (
//     <div 
//       ref={heroRef}
//       className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center"
//     >
//       <div className="text-center flex flex-wrap justify-center gap-4 p-8">
//         {text.split('').map((char, index) => (
//           <span
//             key={index}
//             ref={(el) => {
//               // Collect refs for each letter
//               if (el) lettersRef.current[index] = el;
//             }}
//             className="text-8xl font-bold text-white 
//                        inline-block 
//                        transition-all duration-300 
//                        hover:text-purple-400 
//                        cursor-pointer 
//                        select-none"
//           >
//             {char === ' ' ? '\u00A0' : char}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }