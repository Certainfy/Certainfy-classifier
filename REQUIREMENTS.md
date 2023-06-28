# Requirements

## Project Architecture Diagram
To create a project architecture diagram, follow the steps below:

1. Identify the components of the system:
   - User Interface
   - AI System
   - Data Source
   - Feedback System

2. Determine the relationships between components:
   - Identify how the components interact with each other and any external systems or APIs used.

3. Choose a diagramming tool:
   - Select a diagramming tool such as Lucidchart or Visio.

4. Create the diagram:
   - Use the chosen tool to visually represent the system, including components and their relationships.
   - Utilize shapes to represent different components and lines/arrows to indicate data flow.

5. Add annotations:
   - Include necessary annotations or explanations to provide additional context or information.

6. Review and refine:
   - Ensure the diagram accurately represents the system and make necessary changes.

## Drawing Project Architecture

Follow these steps to draw the project architecture:

1. Define the system architecture:
   - Determine how the different components of the system will work together.
   - Components include the AI model (Google Vertex AI), FDA's drug classification data (DICE), and the user interface.

2. Choose the programming language:
   - Confirm Python as the chosen language for system development.

3. Identify functionalities:
   - Identify core functionalities, including data input and processing, machine learning model training, and user feedback generation.
   - Consider user interface design aspects such as inputs, outputs, and error messages.

4. Develop data processing pipelines:
   - Build data processing pipelines to process FDA's drug classification data and train the AI model.

5. Develop AI model workflows:
   - Create AI model workflows to generate feedback based on learned patterns.

6. Develop the user interface (UI):
   - Design and develop a user interface that allows users to input data and receive personalized feedback.

7. Test and deploy:
   - Thoroughly test the system for correctness and meeting requirements.
   - Deploy the system on the target device/environment and bring it to production.

Ensure the project architecture meets objectives, and is scalable, maintainable, and optimized for performance.

## AI-Enabled Drug and Packaged Goods Classification and Personalized Feedback System

### Components:

1. Data Collection:
   - Set up an automated system to scrape data from FDA's DICE dataset for training the AI model.

2. Pre-processing:
   - Preprocess collected data to remove irrelevant information and potential errors.

3. AI Model:
   - Utilize Google Vertex AI as the AI model to classify drugs and packaged goods.

4. API:
   - Develop an API for communication between the user interface and the AI model.

5. Front-end:
   - Design and develop a user-facing interface allowing users to input information about drugs or packaged goods.

6. Back-end:
   - Set up web servers, databases, and required services to support the front-end and the AI model.

7. Personalized Feedback:
   - Based on user input, the AI model provides personalized feedback on potentially harmful ingredients or possible side effects associated with the drug or packaged good.

These components will work together to create an AI-Enabled Drug and Packaged Goods Classification and Personalized Feedback System.

Note: Further details regarding specific functionalities, technical specifications, and user requirements should be documented in separate files as needed.
