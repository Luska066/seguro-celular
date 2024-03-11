import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import React from "react"
import Colors from "../../../../common/Colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons"
// import './index.css'

export default function SectionHomeFive(){
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return(
        <section className={`w-full flex flex-col justify-center items-center bg-[${Colors().lightBlue}] p-6 sectionAccordion`}>
                <h1 className={`flex justify-center text-[44px] mb-[30px] pb-3 text-center text-[${Colors().navyBlue}] relative title-accordion`}>Principais Dúvidas</h1>
                <article className='border-t pt-2 w-[860px] rounded-none  border-blue-400 articleAccordion'>
                    <Accordion className='border-b border-blue-400' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={`text-[26px] rounded-none shadow-none`}
                        >
                        <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>O seguro possui franquia?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='border-b border-blue-400' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={`text-[26px] rounded-none shadow-none`}
                        >
                        <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'} className="questionAccordion">O seguro possui carência? O que isso significa?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='border-b border-blue-400' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={`text-[26px] rounded-none shadow-none`}
                        >
                        <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'} className="questionAccordion">Quais são as opções de cobertura?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='border-b border-blue-400' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={`text-[26px] rounded-none shadow-none`}
                        >
                        <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'} className="questionAccordion">Como faço para acionar o seguro?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                </article>
                <div className={`
                    flex items-center justify-center gap-2
                    px-8 py-[12px] mt-6
                    rounded-full
                    font-normal text-[18px] text-white 
                    bg-[${Colors().blue}]
                    `}>
                    <FontAwesomeIcon
                        className='text-[16px]'
                        color={'white'}
                        icon={faChevronRight}
                    />
                    <span>Mais dúvidas</span>
                </div>
            </section>
    )
}