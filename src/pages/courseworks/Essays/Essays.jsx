import styled from "styled-components";

import SingleEssays from "./SingleEssays.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <SingleEssays
                question={`Difference between HTML, CSS and JavaScript.`}
            >
                • HTML (Hypertext Markup Language) Used to structure the content
                and create the basic building blocks of a webpage. • CSS
                (Cascading Style Sheets) Styles the visual presentation of HTML
                content, including colours, fonts, layouts, and responsive
                design for different screen sizes. • JavaScript Is used to add
                interactivity, dynamic behaviour, and client-side functionality
                to web pages, such as form validation, animations, and real-time
                updates.
            </SingleEssays>
            <SingleEssays
                question={`What is the difference between Git and Github?`}
            >
                Difference Between Git and GitHub Git: Git is a distributed
                version control system for tracking changes in source code
                during software development. It is designed for coordinating
                work among programmers, but it can be used to track changes in
                any set of files. Its goals include speed, data integrity, and
                support for distributed, non-linear workflows. GitHub: GitHub is
                a web-based Git repository hosting service, which offers all of
                the distributed revision control and source code management
                (SCM) functionality of Git as well as adding its own features.
                S.No. Git GitHub 1. Git is a software. GitHub is a service. 2.
                Git is a command-line tool GitHub is a graphical user interface
                3. Git is installed locally on the system GitHub is hosted on
                the web 4. Git is maintained by linux. GitHub is maintained by
                Microsoft. 5. Git is focused on version control and code
                sharing. GitHub is focused on centralized source code hosting.
                6. Git is a version control system to manage source code
                history. GitHub is a hosting service for Git repositories. 7.
                Git was first released in 2005. GitHub was launched in 2008. 8.
                Git has no user management feature. GitHub has a built-in user
                management feature. 9. Git is open-source licensed. GitHub
                includes a free-tier and pay-for-use tier. 10. Git has minimal
                external tool configuration. GitHub has an active marketplace
                for tool integration. 11. Git provides a Desktop interface named
                Git Gui. GitHub provides a Desktop interface named GitHub
                Desktop. 12. Git competes with CVS, Azure DevOps Server,
                Subversion, Mercurial, etc. GitHub competes with GitLab, Bit
                Bucket, AWS Code Commit, etc.
            </SingleEssays>
            <SingleEssays
                question={`What is the difference between JQuery and React?`}
            >
                Jquery vs React: Difference between jQuery and React [2024]
                jQuery vs React jQuery React jQuery directly interacts with the
                DOM which results in a slightly lower performance than React.
                Traditional DOM amis also slower at providing updates. React
                uses virtual DOM for better speed, performance and user
                experience. jQuery is not suitable for large size applications.
                It leads to the generation of spaghetti code and traditional DOM
                doesn’t support complex codes either. The components-oriented
                architecture and virtual DOM implementation in React makes it
                suitable for building large-sized applications. jQuery and React
                are relatively alike when it comes to ease of use, however,
                their objectives are different. jQuery gets the job done
                extremely effortlessly, for certain kinds of projects, like
                building a simple website with animated navigation menus,
                triggering events with a button and like. React, being a
                UI-specific library, specializes in building web apps with
                complicated functions and a variety of views. jQuery has been
                around for 7 years longer than React. But the number of NPM
                packages for jQuery is significantly low. This might be because
                NPM came out in 2019, when a large chunk of developers had
                already started shifting from jQuery to other platforms. React
                is loaded with NPM packages, which are significantly higher than
                jQuery. Hence, React developers get a head start when working
                with third-party libraries. The size of the library has the most
                effect on user end experience, as no one likes to sit and wait
                for loading a page. The jQuery library is just 75KB, which is
                almost 18% lower than React. The React library is somewhere
                about 95KB in size, which becomes the reason for frequent
                protest from React developers. It loads almost 20% less in terms
                of speed on a mobile device. Although jQuery is one of the most
                used JavaScript libraries till date, it is limited in certain
                aspects. Lately, React has been growing exponentially, and over
                the years, web developers have been shifting from jQuery to
                React or Angular. Loads of companies have also been adapting to
                the React ecosystem to reap its benefits.
            </SingleEssays>
            <SingleEssays
                question={`What is the difference between a Front-End and Back-End Developer?`}
            >
                Front-End Developer Education and Skills It’s a good time to be
                a web developer—the skills are in demand, and the work pays
                well. Front-end developers make an average annual salary of
                around $81,000, according to Payscale. This earning potential
                increases as you get more experience, too. Education While you
                don’t need a degree in web development to get started as a
                front-end developer, you must prove your ability through a
                portfolio and project experience. Take advantage of online
                resources to learn the skills you need, and consider finding a
                study group to keep you accountable. Earning an online web
                developer certificate can be a helpful first step. Look into web
                development bootcamps: short-term, intensive programs often
                providing online classes, mentorship and portfolio help. Beyond
                technical skills, you’ll learn how to manage your time, handle
                stress and work with a team. You can find an online program for
                almost any learning style, with part-time, full-time, self-paced
                and live classes available. If you decide to pursue a bootcamp,
                research provider reviews to ensure your chosen program is
                legitimate. If you prefer a traditional educational route, you
                can earn a web development associate degree, a bachelor’s degree
                in web development or even a master’s in web development. Skills
                Front-end developers should have a strong understanding of: •
                HTML • CSS • JavaScript • Node.js • AJAX • Design frameworks
                like Foundation and Bootstrap • Libraries like AngularJS,
                jQuery, React • APIs What Does a Back-End Developer Do? Back-end
                developers create the structure that allows a website to
                function. They make sure all of a website’s components work
                together behind the scenes, handling architecture, back-end
                logic, data storage and security. When you submit a “contact us”
                form, for example, you expect your data, contact information and
                request to be stored and directed to the right person so the
                company will receive your request. Back-end developers are
                responsible for making this server-side function happen—and many
                other website services, too. The work environments of front-end
                vs. back-end developers are usually similar. Back-end developers
                complete their work in collaboration with designers, back-end
                engineers and front-end developers. Back-end developers
                constantly troubleshoot and debug, but they may have quality
                assurance specialists to help. Back-End Developer Education and
                Skills Payscale reports that back-end developers and engineers
                earn an average annual salary of approximately $90,700. As long
                as you have a solid understanding of the technology and can
                demonstrate your understanding through proven experience, you
                can break into this career. Education Becoming a web developer
                is more about your portfolio than your academic accomplishments.
                Like front-end developers, aspiring back-end developers might
                benefit from earning a degree related to back-end development,
                but most employers don’t require a degree. Similarly to
                front-end development, you can find many free online resources
                to learn these skills. Back-end development concepts can be
                complicated, so it helps to have a mentor or peers to work with.
                Consider taking an online course or completing a bootcamp to
                cement your knowledge. Skills Required skills for back-end
                developers include: • PHP • Ruby • Python • Java • SQL • Git •
                JavaScript • HTML • CSS
            </SingleEssays>
            <SingleEssays question={` Root Relative vs Document Relative`}>
                Relative Hyperlinks Relative hyperlinks are addresses that are
                relative to the current domain or location. They only contain
                the name of the target page prefixed with any necessary folder
                moves (for example, default.html). The browser sees that this is
                a relative hyperlink and adds the domain and folder location of
                the current page to the beginning of the link to complete it. If
                you use relative hyperlinks and you want to navigate from a page
                stored in one folder to a page stored in a different folder you
                add the folder prefixes to the hyperlink. For instance, a
                relative link from a page in Folder 1 to a page in Folder 2
                would be ../Folder 2/page.html, where the ../ tells the browser
                you want to go out of the current folder and into a new one.
                When you create hyperlinks between pages in Expression Web 3,
                they are always inserted as relative links so that the
                application can easily update them if you choose to move files
                around. However, if you move the files around on your computer
                outside of the Expression Web program, the hyperlinks break.
                Root-relative Hyperlinks Root-relative hyperlinks are a subset
                of relative hyperlinks in which all the links are assumed to
                start from the root folder (domain name) of the site. They
                differ from the relative hyperlinks in that the address is
                prefixed by a forward slash (for example, /default.html). The
                browser applies only the domain to the beginning of this link.
                Root-relative hyperlinks are used in place of relative ones in
                large sites in which there is a chance the files will be moved
                around without using an application such as Expression Web 3 to
                update them. Because they refer to the root of the site rather
                than the current location of the page they are placed in, they
                work regardless of where the file is placed as long as they
                remain under the right domain.
            </SingleEssays>
            <SingleEssays
                question={`What is the difference between jpg, gif, png and svg images?`}
            >
                There’s a lot of confusion about which kind of image file to use
                when and why. What’s the difference between jpg and png? Which
                file format will give me better image quality in any given
                situation? And will certain file formats slow down my website?
                In this guide, I’m going to answer all your questions about the
                four main file formats you’re likely to encounter when building
                your website. Disclosure: This post contains affiliate links.
                When you click on an affiliate link and make a purchase, I
                receive a small commission (at no additional cost to you).
                Affiliate links are marked with an asterisk (*). Jpg Images Jpg
                (or jpeg–an alternate spelling of the file extension) stands for
                Joint Photographic Experts Group. That’s kind of a mouthful but
                it does vaguely communicate what jpg files are best used
                for–photographs. If you have a photo you want to upload to your
                website, it’s best to save it as a jpg. In RAW format, photos
                are large and ungainly–loaded down with lots of data. Jpgs are
                amazing because they take all that information and compress it
                into smaller file sizes without degrading image quality–at least
                to the naked eye. You can make jpg files even smaller by
                compressing them. There are two types of jpg compression–lossy
                and lossless. Like the name implies, lossy compression can
                degrade the image quality slightly while you can losslessly
                compress a jpg without losing quality. I use TinyJPG to compress
                jpg files before uploading them to my website. You should not
                save and re-save the same jpg file multiple times because the
                quality of the image will degrade more and more each time you
                save it. If you’re working with an Adobe Photoshop* or
                Illustrator file that has a transparent background and you
                export it as a jpg, a white background will automatically be
                applied. Png Images Png stands for Portable Networks Graphics
                (Who comes up with these names?!) and like the name implies,
                it’s ideal for web graphics. If you have a logo, social media
                graphic, illustration, etc., the png format is a good bet for
                retaining maximum image quality. Png files are inherently
                lossless, which means if you were to save the exact same file as
                a jpg and png, the png file would be larger. If you were to
                upload a photo to your website as a png file, it would slow your
                website loading speed. But you need that larger file size to
                retain the quality of graphics, so it’s worth the larger file
                size. You can compress png files further by running them through
                TinyPNG. TinyPNG uses something called smart lossy compression,
                which dramatically reduces the file size without any noticeable
                changes to the image. Unlike a jpg, you can re-save a png file
                over and over again without any degradation of the image. Png
                files also support transparent backgrounds, so if you have a
                graphic or logo you want to overlay on top of a colored
                background on your website, you’ll need to save it as a png. Gif
                Images Gif stands for Graphics Interchange Format and it’s best
                known for supporting animation. Like png files, gifs are
                inherently lossless but they actually take up a lot more space
                than png images. In fact, png is basically just an updated
                version of gif with some key differentiating characteristics. I
                don’t recommend using the gif format on your website for
                anything except animations. They have weak support for
                transparency, only have 256 colors, and will slow your website
                down. Animation is the one area in which they are truly useful.
                Svg Images Svg stands for Scalable Vector Graphics. All the
                other file formats we’ve covered are raster-based, meaning they
                look blurry if enlarged beyond their original size. Svg files
                are vector-based, meaning you can scale them to any size without
                any loss in quality. No other file type looks as sharp as an
                svg. Svg files are actually code–a series of mathematical
                equations that define shapes, colors, and size. This is why they
                retain their high quality no matter how much you scale them. But
                it also means you can’t upload them to Squarespace the same way
                you would upload a jpg, png, or gif. You have to copy and paste
                the svg code into a code block instead. You also need a special
                program to create svg files. Raster-based programs like
                Photoshop won’t cut it; you need Illustrator, Sketch or another
                vector-based program. Svg files are ideal for logos, icons, and
                simple graphics. They’ll look sharper than a png file and
                they’re significantly smaller, so they won’t slow down your
                website at all. The only downside is that there’s a bit more of
                a learning curve to generating and installing them properly.
            </SingleEssays>
            <SingleEssays
                question={`Difference between HTML, CSS and JavaScript.`}
            >
                Product owner A product owner is a person who has the vision of
                the final product and is considered a key stakeholder throughout
                the development phase. The product owner’s main responsibility
                is to communicate this vision to the development team. It is up
                to the product owner to decide how the final product will
                function and he has the final say in making any decisions,
                especially the ones related to the product’s functionality.
                Naturally, a product owner joins the project from the very
                beginning and closely monitors it throughout the development
                process. Software Development Team Roles and Responsibilities:
                an Overview A product owner also closely collaborates with UX/UI
                designers and is the one who approves their ideas and
                suggestions. It is worth mentioning that a product owner can
                efficiently work by any project management model. Main
                responsibilities of a product owner: Establishing efficient
                communication between the other stakeholders and the development
                team; Creating a list of project requirements Doing market
                research; Prioritizing project requirements; Defining user
                stories with the help of a business analyst; Iteration planning;
                Participating in team demo and retrospectives; Ensuring the
                final product meets their vision. Project manager and/or scrum
                master Another role critical to the project’s success is project
                manager. In projects by scrum, this role is called a scrum
                master – we will discuss it in more detail later. A project
                manager takes a massive amount of responsibility for project
                planning and the organization of the workflow. A manager usually
                keeps an eye on the timely delivery of results, wise allocation
                of resources, assignment of the right people to the right tasks,
                and overall project execution. As well, a project manager
                communicates closely with the stakeholders to ensure the
                development process remains within the set requirements and the
                deadline. Main responsibilities of a project manager: Working
                with a budget and its allocation; Resources allocation;
                Communication with stakeholders and further translation of their
                requirements to the development team; Management of the project
                workflow; Managing project timeline and deadlines; Change and
                risk management. As the name suggests, a scrum master is a
                specialist who works in a scrum team only. This person teaches
                all team members a scrum methodology, makes sure that everyone
                understands scrum principles, and stays on the same page. While
                this role is, in a way, similar to the one of a project manager,
                there is a big difference between the two. A scrum master
                focuses on scrum only while a PM focuses on the whole project
                and all related business processes. You can read about the roles
                of a scrum master and a PM here. Main responsibilities of a
                scrum master: Assistance in working by the scrum methodology;
                Monitoring the development process so it adheres to scrum
                principles; Communication with the development team;
                Facilitating and speeding up the work process. Business analyst
                In the IT industry, a business analyst acts as a liaison between
                a client and a development team whose main responsibility is
                working with the requirements and ensuring the development team
                understands the product owner’s vision and needs. A business
                analyst constantly communicates with stakeholders, collects
                their opinions, and then forms and prioritizes a list of
                requirements for the team. Such an approach allows everyone to
                stay on the same page, adds transparency to the development
                process, and helps avoid extra costs by eliminating vague and
                unclear requirements and tasks. You can read more about the role
                of a business analyst in this article. Main responsibilities of
                a business analyst: Project analysis; Requirements management
                (collection and prioritization); Communication with stakeholders
                and the development team; Project estimation and monitoring.
                UX/UI designer A UX/UI designer in the development team is a
                person who is responsible for the look and feel of the
                application. While some clients can overlook the importance of
                good design, numerous studies confirm that even the smallest
                details can play a significant role in the number of conversions
                and user engagement. Therefore, it is important to pay due
                attention to the app’s design as other aspects of the
                development process. What’s great about working with a UX/UI
                designer is that you don’t have to have a 100% clarified list of
                requirements – it will be enough to describe your overall idea,
                target audience, and your goal to achieve. It will then be up to
                the designer to do market research and come up with the most
                suitable solution that will stand out from the competition. Main
                responsibilities of a UX/UI designer: Creating user-friendly and
                smooth user interface; Providing superior user experience;
                Making the product converting and appealing; Ensuring the user
                understands how to interact with the product and how to achieve
                their goals; Collecting client’s requirements and feedback and
                conducting market research. Architect A software architect is a
                person who makes high-level decisions about product design and
                introduces coding and technical standards. In the development
                team, a software architect not only defines the high-level
                structure of the whole system but also the way components will
                interact with each other. This role is somewhat a combination of
                a software engineer, designer, and negotiator and requires a
                great amount of responsibility. Depending on the project size
                and complexity, a software architect may be a separate role or
                it can be performed by a senior developer. There are also
                different types of software architects: Enterprise architect:
                the role is similar to a tech leader; Solution architect:
                focuses on the business value of the solution; Technical
                architect: focuses on the technical aspects of a project (its
                implementation, maintenance, support). Main responsibilities of
                an architect: Gathering and evaluating requirements; Making
                high-level decisions on the product architecture and design;
                Researching and introducing technical standards; Making
                decisions about the tech stack and deployment. Software
                engineers Software engineers are the backbone of any software
                project. They are the people who do all work related to actual
                project creation past the design stage: from implementing its
                business logic to adding UX/UI elements. There are two main
                types of software engineers needed: Backend-side developers:
                responsible for the server-side of the project, work with data
                (its collection, management, processing, and storage), and
                business logic of an app. Client-side developers: responsible
                for the implementation of the user interface and user experience
                and provide efficient communication between users and the
                product. And obviously, there are dozens of programming
                languages and tools available and every project will require a
                specific set of tools, depending on the project size and
                complexity. When assembling a development team, a company first
                evaluates your project idea and then suggests corresponding
                specialists based on the needed skills and experience. Main
                responsibilities of software developers: Turning client’s ideas
                into a working product; Creating and implementing product
                features; Ensuring users can easily communicate and interact
                with the product; Ensuring the product functions and looks as
                intended. DevOps engineer The role of a DevOps engineer is
                becoming increasingly popular these days among companies that
                work by the agile methodology. In simple words, a DevOps
                engineer connects a software development team with an IT
                operations team and significantly simplifies and speeds up the
                development process. The main responsibility of a DevOps
                engineer is building a project infrastructure and setting up
                CI/CD (continuous integration/continuous delivery) pipelines.
                This specialist focuses on automation and maintenance and can
                perform a variety of different tasks, such as performance
                testing, optimization of release cycles, processes automation,
                and project management to a certain extent. A DevOps engineer
                usually joins the project at the beginning (to set up the
                infrastructure) and in the end but he can be present throughout
                the whole development process. Main responsibilities of a DevOps
                engineer: Building a project infrastructure; Testing the
                performance of the product; Automation of processes; Project
                monitoring and reporting; Working on project security. QA
                engineers Quality Assurance is another must-have for any
                development team. QA specialists are responsible for the proper
                functioning of the product as they make sure there are no errors
                and bugs that cause product malfunctioning. As well, the QA team
                is responsible for product security which is crucial for any
                software product. Here are the main aspects of the QA process:
                Functional testing: testing the app’s behaviour; Security
                testing: ensuring the app is protected from possible threats;
                Performance testing: evaluating the performance of the app and
                detecting any bottlenecks; Network connectivity testing: testing
                the app’s behaviour under different connectivity conditions;
                Usability testing: ensuring the app is user-friendly and
                engaging; Load testing: checking how the app behaves under
                different load conditions. Also, note that there are manual
                testing and automatic testing options available – learn more
                about each in our article. Contrary to common misconceptions, QA
                specialists often join the development team from the very
                beginning and work closely with business analysts during the
                preparatory stage of the project. QA specialists create a test
                plan and help define a list of requirements and tasks for
                software developers to work on. As well, it is highly
                recommended to do continuous testing. This allows testing your
                app throughout the development process and implementing any
                needed changes right after finding any bug or error. Such an
                approach allows saving up both the development and testing time
                and ensures the final product has a minimal number of errors.
                Main responsibilities of QA engineers: Ensuring app’s security;
                Ensuring app’s error-free performance and UX; Detecting any
                flaws and errors and eliminating them. Summary The roles listed
                above are the most common that you’ll meet in a software project
                team. Note though that the composition of the development team
                will depend heavily on the development methodology (agile or
                waterfall), the project size, and complexity. In order to have
                the most efficient and skilled team, we advise you to first
                consult with the development company and discuss what kind of
                project you have in mind and what you hope to achieve. By
                knowing your business needs, a company will be able to compose a
                suitable development team that will 100% deliver the expected
                results. We also recommend checking out this article where we
                discuss different pricing models – it might happen that you will
                need extra talent during the development process (in addition to
                the composed team).
            </SingleEssays>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
