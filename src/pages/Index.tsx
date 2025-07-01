
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
              <li>Containerization & Orchestration: Utilized Docker and Kubernetes for effective application containerization, deployment, and orchestration.</li>
              <li>Built and maintained serverless applications using <strong>AWS Lambda</strong> and <strong>Java</strong>, leveraging event-driven models with AWS services such as API Gateway, DynamoDB, and S3.</li>
              <li>Messaging & Caching: Built robust messaging systems with Kafka and RabbitMQ, and implemented Redis for advanced caching and real-time data processing.</li>
              <li>Cloud Solutions & Monitoring: Deployed applications across AWS, Azure, PCF, and GCP, and set up ELK stack for comprehensive log monitoring and analysis. Designed efficient data pipelines and implemented real-time streaming and batch processing pipelines leveraging GCP Dataflow and Apache Beam SDK with Java and Python.</li>
              <li>Leadership & System Architecture: Directed development teams, designed scalable Java system architectures, and established technical strategy and best practices.</li>
              <li>Web Technologies: Developed high-performance web applications using Angular and Node.js, focusing on code quality and application efficiency. Developed and maintained scalable web applications using Python and Django, integrating machine learning models for generative AI to enhance functionality and user experience.</li>
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

          {/* IQVIA RDS Experience */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">IQVIA RDS (India) Pvt. Ltd.</h3>
                <p className="text-gray-700 italic">Senior Software Engineer</p>
              </div>
              <div className="text-right text-gray-700">
                <p className="font-semibold">28 September 2017 – 17 August 2018</p>
                <p className="text-sm">Bengaluru, Karnataka</p>
              </div>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Java & Microservices Engineering: Architected and built robust Spring Boot microservices and Java 8 applications, enhancing performance and guiding team development.</li>
              <li>Containerization & Orchestration: Deployed and managed containerized applications with Docker and Kubernetes, streamlining scalability and operational efficiency.</li>
              <li>Optimized the performance and scalability of <strong>Java-based</strong> applications deployed on <strong>AWS ECS</strong> and <strong>Lambda</strong>, using auto-scaling and load balancing to meet traffic demands.</li>
              <li>Messaging & Caching Solutions: Designed and implemented high-throughput messaging systems using Kafka and RabbitMQ, and employed Redis for effective caching and real-time analytics.</li>
              <li>Cloud Infrastructure & Monitoring: Managed cloud deployments across AWS, Azure, PCF, and GCP, and integrated ELK stack for advanced log aggregation and analysis. Automated GCP Dataflow pipeline deployments using Terraform and Google Cloud Deployment Manager, reducing manual intervention and improving deployment consistency.</li>
              <li>Technical Leadership & Architecture: Led engineering teams, crafted scalable system architectures, and directed technical strategies to ensure adherence to best practices.</li>
              <li>Front-End & Back-End Development: Engineered dynamic web applications using Angular and Node.js, emphasizing optimal performance and adherence to coding standards.</li>
              <li>API Development: Built and optimized RESTful APIs using Python and Django, facilitating the integration of machine learning and generative AI functionalities with front-end and back-end systems.</li>
            </ul>
          </div>

          {/* KPIT Technologies Experience */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">KPIT Technologies Pvt. Ltd.</h3>
                <p className="text-gray-700 italic">Technical Leader</p>
              </div>
              <div className="text-right text-gray-700">
                <p className="font-semibold">06 July 2016 – 21 July 2017</p>
                <p className="text-sm">Bengaluru, Karnataka</p>
              </div>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Microservices & Java Development: Created and refined scalable Spring Boot microservices and Java 8 applications, focusing on performance optimization and team mentoring.</li>
              <li>Containerization & Deployment: Utilized Docker and Kubernetes to deploy, scale, and manage containerized applications effectively.</li>
              <li>Implemented <strong>CI/CD pipelines</strong> for continuous integration and deployment of <strong>Java</strong> applications to <strong>AWS ECS</strong> and <strong>Lambda</strong>, using AWS CodePipeline, CodeBuild, and CodeDeploy.</li>
              <li>Messaging & Caching Systems: Built robust high-throughput systems with Kafka and RabbitMQ, and leveraged Redis for enhanced caching and real-time data processing.</li>
              <li>Cloud & Monitoring: Deployed solutions on AWS, Azure, PCF, and GCP, and set up ELK stack for comprehensive log management and monitoring.</li>
              <li>Leadership & System Architecture: Directed development teams, designed scalable architectures, and drove technical excellence and best practices.</li>
              <li>Web Development: Developed and optimized high-performance applications using Angular and Node.js, ensuring high standards of code quality and efficiency.</li>
              <li>Performance and Security: Ensured high performance and robust security of applications by applying Python and Django best practices, while incorporating machine learning and generative AI to improve system efficiency and resilience.</li>
            </ul>
          </div>

          {/* Virtusa Consulting Services Experience */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Virtusa Consulting Services Pvt. Ltd.</h3>
                <p className="text-gray-700 italic">Consultant-IT</p>
              </div>
              <div className="text-right text-gray-700">
                <p className="font-semibold">09 January 2013 – 08 June 2016</p>
                <p className="text-sm">Bengaluru, Karnataka</p>
              </div>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Java7 Expert: Developed, optimized, and maintained robust enterprise applications, leveraging advanced language features, multithreading, concurrency, and design patterns while ensuring code quality, performance, and adherence to best practices.</li>
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
