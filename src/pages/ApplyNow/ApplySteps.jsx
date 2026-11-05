import { CheckCircle2 } from 'lucide-react'
import React from 'react'

const steps = [{ id: 1, name: "Resume", description: "Upload your resume" },
{ id: 2, name: "Cover Letter", description: "Write your cover letter" },
{ id: 3, name: "Additional Details", description: "Salary & Availability" },
{ id: 4, name: "Review & Submit", description: "Review and submit your application" }
]
const ApplySteps = ({ currentStep }) => {
    return (
        <div className='w-full py-6'>
            <div className='flex items-center justify-between'>
                {steps.map((step, index) => (
                    <div key={step.id}>
                        <div className='flex flex-col items-center relative'>
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${currentStep > step.id
                                ? "bg-green-600 border-green-300"
                                : currentStep === step.id
                                    ? "bg-brand border-brand"
                                    : "bg-white border-slate-300"
                                }`}>
                                {currentStep > step.id ? (
                                    <CheckCircle2 />
                                ) : currentStep === step.id ? (
                                    <span>{step.id}</span>
                                ) : (
                                    <span>{step.id}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ApplySteps
