import { CheckCircle2 } from 'lucide-react'
import React from 'react'

const steps = [
    { id: 1, name: 'Resume', description: 'Upload your resume' },
    { id: 2, name: 'Cover Letter', description: 'Write your cover letter' },
    { id: 3, name: 'Additional Details', description: 'Salary & Availability' },
    { id: 4, name: 'Review & Submit', description: 'Review and submit your application' }
]

const ApplySteps = ({ currentStep }) => {
    return (
        <div className='w-full py-6'>
            <div className='flex items-center justify-between'>
                {steps.map((step) => (
                    <div className='flex items-center flex-1' key={step.id}>
                        <div className='flex flex-col items-center relative'>
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${currentStep > step.id
                                ? 'bg-green-600 border-green-300 text-white'
                                : currentStep === step.id
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-white border-slate-300'
                                }`}>
                                {currentStep > step.id ? (
                                    <CheckCircle2 className='h-6 w-6' />
                                ) : currentStep === step.id ? (
                                    <span className='font-semibold'>{step.id}</span>
                                ) : (
                                    <span className='font-semibold'>{step.id}</span>
                                )}
                            </div>
                            <div className='mt-2 text-center'>
                                <p className={`text-sm font-medium ${currentStep === step.id ? 'text-slate-900' : 'text-slate-500'}`}>
                                    {step.name}
                                </p>
                                <p className='text-xs text-slate-500 hidden sm:block mt-1'>{step.description}</p>
                            </div>
                        </div>
                        <div className={`flex-1 h-0.5 mx-1 transition-colors ${currentStep > step.id ? 'bg-green-600' : 'bg-slate-300'}`}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ApplySteps
