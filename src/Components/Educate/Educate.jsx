import './educate.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Hunflag from '../../assets/img/hu.svg';
import Enflag from '../../assets/img/gb.svg';
import { makeStyles } from '@mui/material/styles';


const steps = [
  {
    label: 'Self-taught learning has begun',
    labelH: 'Önképzés kezdetei',
    description: `Initially, I started familiarizing myself with the basics of Java and C#, but at that time,
                I thought I could express myself by developing desktop applications.
                  Later, I realized that there are far more opportunities for growth in the web development field.
                  Thus, I began practicing with demo tasks to learn how to program a website.
                I acquainted myself with the fundamentals of HTML, CSS, and JavaScript.`,
    descriptionH: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Got job as a Programmer',
    labelH: 'Önképzés kezdetei',
    description:
      `In 2019, I secured a position as a developer at the National Directorate General for Disaster Management (NDGDM). My prior knowledge of C# proved advantageous in my work, as I developed on the .NET 4.5 framework and acquainted myself with new technologies like Bootstrap, jQuery, and MS SQL.
       While my primary task was web development, familiarity with ARCGIS 10.5.1 was also necessary to handle geoinformatics tasks.`,
       descriptionH: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
      
  },
    {
    label: '2019-2022',  //covid, corporate training(Masterfield trainingcenter)
    labelH: 'Önképzés kezdetei',
    description: `Completed courses:
                  2018: Basics of C#;
                  2019: Basics of Javascript;
                  2020: Advanced Javascript;
                  2021: Basics of SQL.`,
               descriptionH: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
              
  },
    {
    label: 'Director General`s Recognition',
    labelH: 'Főigazgatói kitüntetés',
    description: `On May 4th, 2022, on the occasion of Firefighter's Day, the Director General of OKF recognizes employees 
    who provide outstanding performance within the Fire Department.
     I received recognition for my work as a geoinformatics and front-end developer,
     which aids the firefighters' more effective fieldwork.
      (I cannot provide further details about the project).`,
              
  },
    {
    label: 'Future plans and development',  //became a fullstack proggramer, angular typescript, js high level skills -> nodeJS / .netcore
    labelH: 'Jővőbeli tervek',
    description: `In the future, I aim to delve even deeper into the realms of JavaScript and TypeScript,
     which are essential for front-end development. I intend to learn the Angular framework, as it's more complex than mastering React.
      Additionally, it aligns closely with MVC architecture, which also aids in expanding my knowledge of C#.
     I'm documenting all of this to showcase my long-term goal of becoming a full-stack developer.`,
    descriptionH: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
              
  },
];


export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const getCV =(event)=>{
    if(event.target.id === "hunCV"){
    const link = document.createElement('a');
    link.href = '../src/assets/CV/Bacsó-Ferenc_CV-HUN.pdf'; // Az elérési út a PDF fájlhoz
    link.download = 'Bacso-Ferenc_CV-HUN.pdf'; // A letöltött fájl neve
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
    if(event.target.id === "engCV"){
      const link = document.createElement('a');
      link.href = '../src/assets/CV/Bacsó-Ferenc_CV-ENG.pdf'; // Az elérési út a PDF fájlhoz
      link.download = 'Bacso-Ferenc_CV-ENG.pdf'; // A letöltött fájl neve
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  return (
    <>
    <h1 className='eduTitle container-fluid'>Education steps</h1>
    <section className='eduStep container-fluid'>
    <Box  sx={{ maxWidth: 800 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step id='stepLbl' key={step.label}>
            <StepLabel  >
              {step.label}
            </StepLabel>
            <StepContent >              
                <Typography id="engStep" className='descript'>{step.description}</Typography>                                         
              <Box id="box" sx={{ mb: 2 }}>
                <div>
                  <Button 
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button className='backBtns'
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper className='row' square elevation={0} sx={{ p: 3 }}>
          <Typography>This is my journey - but every day writing my history.</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
          <Typography>If you would like to read more about me, click the button below for my resume</Typography>
          <Button id='hunCV' onClick={getCV} sx={{ mt: 1, mr: 1 }}>
            Download my CV <img className='cvFlag' alt='hunflag' src={Hunflag}></img> version
          </Button>          
          <Button id='engCV' onClick={getCV} sx={{ mt: 1, mr: 1 }}>
            Download my CV <img className='cvFlag' alt='engflag' src={Enflag}></img> version
          </Button>
        </Paper>
      )}
    </Box>
    </section>
   
</>
  );
}
