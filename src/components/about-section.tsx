import { OBJECTIVES } from "../lib/constants";
import { Card, CardContent } from "./ui/card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const missionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Background color animation
    gsap.fromTo(sectionRef.current, 
      {
        backgroundColor: "#0d5752"
      },
      {
        backgroundColor: "#fed7aa",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",  
          end: "top 20%",    
          scrub: 1,         
          toggleActions: "play none none reverse"
        },
        duration: 1
      }
    );

    // Header animation
    gsap.fromTo(headerRef.current.children, 
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation with parallax effect
    gsap.fromTo(imageRef.current, 
      {
        x: -100,
        opacity: 0,
        scale: 0.8,
        rotation: -5
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parallax effect for image
    gsap.to(imageRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Mission content animation
    gsap.fromTo(missionRef.current.children, 
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    
    gsap.fromTo(cardsRef.current.children, 
      {
        y: 80,
        opacity: 0,
        scale: 0.8,
        rotationY: 15
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    
    gsap.to(cardsRef.current.children, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play pause resume pause"
      }
    });
      

  }, []);


  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 sm:py-16 lg:py-20 scroll-mt-20 overflow-hidden"
      style={{ backgroundColor: "#0d5752" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black mb-4">
            About NSS BITS Pilani
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 gradient-bg mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg font-arial text-gray-600 max-w-3xl mx-auto px-4">
            The National Service Scheme at BITS Pilani is dedicated to
            developing social consciousness and community service spirit among
            students through meaningful engagement with society.
          </p>
        </div>

        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16">
          <div className="order-2 lg:order-1">
            <div ref={imageRef} className="relative">
              <img
                style={{ 
                  borderRadius: "1rem", 
                  boxShadow: "0 40px 60px rgba(0, 0, 0, 0.3)",
                  filter: "brightness(1.1) contrast(1.1)"
                }}
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Students participating in tree planting environmental initiative"
                className="rounded-xl sm:rounded-2xl w-full h-auto transform transition-transform duration-300 hover:scale-105"
              />
              
            </div>
          </div>

          <div ref={missionRef} className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black mb-4 sm:mb-6">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              To develop among students a sense of social and civic
              responsibility, and to utilize their knowledge in finding
              practical solutions to individual and community problems.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Understand the community in which they work",
                "Understand themselves in relation to their community",
                "Identify the needs and problems of the community",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 sm:w-2 sm:h-2 bg-orange-300 rounded-full flex items-center justify-center flex-shrink-0 mt-2 transition-all duration-300 group-hover:scale-150 group-hover:bg-orange-400">
                  </div>
                  <p className="text-sm sm:text-base text-gray-500 transition-colors duration-300 group-hover:text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>



{/*objectives section*/}
        
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> 
          {OBJECTIVES.map((objective, index) => (
            <div key={index} className="card-container">
              <Card className="bg-[#e2c19aff] border-0 h-full relative overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
               
                
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 bg-white/20 backdrop-blur-sm group-hover:bg-white/40 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <i className={`${objective.icon} text-black text-xl sm:text-3xl transition-all duration-300 group-hover:scale-110`}></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-serif font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {objective.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  }
