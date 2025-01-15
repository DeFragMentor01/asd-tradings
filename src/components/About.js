import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLightBulb, HiGlobe, HiCube, HiUsers } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: HiLightBulb,
      title: 'Innovation',
      description: 'Pioneering solutions in surplus inventory management with cutting-edge approaches.',
    },
    {
      icon: HiGlobe,
      title: 'Global Reach',
      description: 'Connected network spanning continents, bringing opportunities worldwide.',
    },
    {
      icon: HiCube,
      title: 'Efficiency',
      description: 'Streamlined processes that maximize value and minimize waste.',
    },
    {
      icon: HiUsers,
      title: 'Partnership',
      description: 'Building lasting relationships with clients through trust and reliability.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                About ASD Tradings
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                ASD Tradings is a leading global surplus inventory solutions provider, 
                dedicated to creating value through efficient distribution and strategic 
                asset management. Our expertise lies in connecting businesses worldwide 
                with premium surplus inventory opportunities.
              </p>

              <dl className="mt-10 space-y-10">
                {values.map((value, index) => (
                  <div key={index} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <value.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{value.title}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{value.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative space-y-6"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                    <div className="text-4xl font-bold">15+</div>
                    <div className="text-sm mt-2">Years of Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
                    <div className="text-4xl font-bold">50+</div>
                    <div className="text-sm mt-2">Global Partners</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg p-6 text-white">
                    <div className="text-4xl font-bold">25+</div>
                    <div className="text-sm mt-2">Countries Served</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-6 text-white">
                    <div className="text-4xl font-bold">1000+</div>
                    <div className="text-sm mt-2">Successful Deals</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24"
          >
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
              <div className="relative sm:py-16 lg:py-0">
                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                  {/* Testimonial Card */}
                  <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-blue-600 opacity-90" />
                    <div className="relative px-8">
                      <blockquote className="mt-8">
                        <div className="relative text-lg font-medium text-white md:flex-grow">
                          <p className="relative">
                            "ASD Tradings has revolutionized how we manage our surplus inventory. 
                            Their global network and efficient processes have helped us maximize 
                            value while minimizing waste."
                          </p>
                        </div>
                        <footer className="mt-4">
                          <p className="text-base font-semibold text-blue-200">CEO of a Fortune 500 Company</p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
