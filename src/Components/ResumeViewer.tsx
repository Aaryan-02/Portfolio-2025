import { ActionIcon, Modal, ScrollArea, Tooltip, useMatches } from "@mantine/core";
import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { Info } from "../User";

const ResumeViewer = (props: any) => {
    const [pdfHeight, setPdfHeight] = useState("80vh");
    
    useEffect(() => {
        // Adjust iframe height based on window size
        const handleResize = () => {
            const windowHeight = window.innerHeight;
            const newHeight = Math.min(windowHeight * 0.8, 800);
            setPdfHeight(`${newHeight}px`);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
    });
    
    return (
        <Modal.Root 
            scrollAreaComponent={ScrollArea.Autosize} 
            size="auto" 
            centered 
            className="font-mono" 
            opened={props.opened} 
            onClose={props.close}
        >
            <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
            <Modal.Content className="!rounded-3xl" style={{ maxWidth: "95vw" }}>
                <Modal.Header className="!bg-bgColor xs-mx:!p-2 !border-primaryColor xs-mx:!border !border-2 xs-mx:!border-b-0 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
                    <Modal.Title data-autofocus className="!text-4xl xs-mx:!text-2xl text-white flex gap-3 items-center !font-bold">
                        Resume
                        <Tooltip label="Download" className="!text-bgColor" color="#64FFDA" position="right" offset={5}>
                            <ActionIcon 
                                className="!text-primaryColor" 
                                component="a" 
                                href="/Resume.pdf" 
                                size={btn} 
                                download={Info.name} 
                                variant="outline" 
                                color="#64FFDA"
                            >
                                <IconArrowBigDownLineFilled className="xs-mx:!w-[16px]" />
                            </ActionIcon>
                        </Tooltip>
                    </Modal.Title>
                    <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
                </Modal.Header>
                <Modal.Body className="!bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor !border-2 xs-mx:!border xs-mx:!border-t-0 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
                    <div className="w-full h-full flex flex-col">
                        <iframe 
                            src="/Resume.pdf" 
                            className="w-full rounded-xl border-2 border-primaryColor"
                            style={{ 
                                height: pdfHeight,
                                width: "100%",
                                minWidth: "300px",
                                maxWidth: "90vw"
                            }}
                            title="Resume PDF"
                        ></iframe>
                        
                        {/* Fallback message if iframe doesn't load properly */}
                        <div className="text-center mt-4 text-textColor text-sm">
                            If the PDF doesn't display correctly, you can 
                            <a 
                                href="/Resume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primaryColor mx-1 hover:underline"
                            >
                                open it in a new tab
                            </a> 
                            or 
                            <a 
                                href="/Resume.pdf" 
                                download={Info.name}
                                className="text-primaryColor mx-1 hover:underline"
                            >
                                download it
                            </a>
                            instead.
                        </div>
                    </div>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
};

export default ResumeViewer;
