
import { Mail, Phone, Linkedin, Github, MapPin, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-wide">
            SARTHAK KANUNGO
          </h1>
          <p className="text-lg text-gray-600 mb-4">Bengaluru, India</p>
          
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+91-9731273286</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>skanungodgacm@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/sarthak3</span>
            </div>
            <div className="flex items-center gap-1">
              <Github className="w-4 h-4" />
              <span>github.com/sarthak1</span>
            </div>
          </div>
        </header>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Education
          </h2>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-gray-900">Biju Patnaik University of Technology</h3>
              <p className="text-gray-700 italic">Bachelor of Engineering in Information Technology</p>
            </div>
            <div className="text-right text-gray-700">
              <p className="font-semibold">July 2000 – July 2004</p>
              <p className="text-sm">Rourkela, Odisha</p>
            </div>
          </div>
        </section>

        {/* Profile Summary Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Profile Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            12+ Years of hands on work experience following by SDLC and Agile, Scum methodology in Java, Spring cloud, 
            Spring Boot, Microservices, Rest API, Kafka, SQL, Hibernate, jQuery, ReactJS, Node JS, Angular, Bootstrap, 
            Maven, MySQL, Jenkins, web technologies.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-300">
            Experience
          </h2>

          {/* Mphasis Experience */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Mphasis Pvt. Ltd.</h3>
                <p className="text-gray-700 italic">Delivery Module Lead</p>
              </div>
              <div className="text-right text-gray-700">
                <p className="font-semibold">30 August 2021 – 11 December 2023</p>
                <p className="text-sm">Bengaluru, Karnataka</p>
              </div>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Microservices & Java: Designed and developed scalable Spring Boot microservices REST API CICD pipelines and Java 8 applications; optimized performance; mentored teams.</li>
              <li>Containerization & Cloud: Implemented Docker and Kubernetes solutions; managed cloud deployments across AWS, Azure, PCF, and GCP. Developed and optimized large-scale ETL (Extract, Transform, Load) data pipelines using Google Cloud Platform DataFlow to process and transform terabytes of data daily from various sources, including Google Cloud Storage, BigQuery, and Pub/Sub.</li>
              <li>Architected and deployed cloud-native applications on <strong>AWS Cloud (PaaS)</strong> using <strong>ECS</strong> and <strong>Lambda</strong> with <strong>Java</strong>, ensuring high scalability and availability.</li>
              <li>Messaging & Caching: Designed high-throughput systems using Kafka and RabbitMQ; utilized Redis for caching and real-time analytics.</li>
              <li>Monitoring & Analytics: Configured ELK stack for log aggregation, search, and visualization; ensured robust data analysis.</li>
              <li>Leadership & Architecture: Led development teams; architected scalable Java systems; guided technical strategy and best practices.</li>
              <li>Web Technologies: Developed and optimized Angular and Node.js applications; ensured high performance and code quality.</li>
              <li>Generative AI Solutions: Designed and deployed generative AI features within web applications to create innovative content and enhance user capabilities, leveraging Python and Django for effective implementation.</li>
            </ul>
          </div>

          {/* ObjectWin Experience */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">ObjectWin Technology India Pvt. Ltd.</h3>
                <p className="text-gray-700 italic">Java Lead</p>
              </div>
              <div className="text-right text-gray-700">
                <p className="font-semibold">14 September 2020 – 18 January 2021</p>
                <p className="text-sm">Bengaluru, Karnataka</p>
              </div>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Java & Microservices: Architected and built scalable Spring Boot microservices and Java 8 applications, optimizing performance and leading team mentorship.</li>
              <li>Containerization & Orchestration: Deployed and managed applications using Docker and Kubernetes for streamlined scaling and efficient operations.</li>
              <li>Messaging & Caching: Engineered high-throughput messaging systems with Kafka and RabbitMQ; implemented Redis for advanced caching and real-time data processing.</li>
              <li>Developed microservices-based applications in <strong>Java</strong> and deployed them on <strong>AWS ECS</strong> (Elastic Container Service), utilizing containers to ensure seamless orchestration and scaling.</li>
              <li>Monitoring & Cloud: Utilized the ELK stack for comprehensive log analysis and deployed solutions across multiple cloud platforms, including AWS, Azure, and GCP. Integrated GCP Dataflow with other GCP services such as BigQuery, Cloud SQL, Cloud Spanner, and Google Cloud Storage to enable seamless data movement and storage solutions.</li>
              <li>Leadership & Architecture: Directed development teams, designed robust Java system architectures, and set technical direction and best practices.</li>
              <li>Web Technologies: Created and refined Angular and Node.js applications, ensuring optimal performance and code integrity.</li>
              <li>Machine Learning Integration: Implemented machine learning algorithms to drive predictive analytics and data insights, utilizing Python and Django for seamless integration and performance optimization.</li>
            </ul>
          </div>

          {/* Data Glove Experience */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Data Glove IT Solutions Pvt. Ltd.</h3>
                <p className="text-gray-700 italic">Senior Software Engineer</p>
              </div>
              <div className="text-right text-gray-700">
                <p className="font-semibold">17 September 2019 – 11 March 2020</p>
                <p className="text-sm">Bengaluru, Karnataka</p>
              </div>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Java and Microservices Development: Created and optimized scalable Spring Boot microservices and Java 8 applications, improving performance and mentoring development teams.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
