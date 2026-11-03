import React from 'react'
import { Button } from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import JobInfoCard from './JobInfoCard'
import { job } from '../user/jobs/DummyJob'
import ApplySteps from './ApplySteps'
import SelectResume from './SelectResume'
import CoverLetterEditor from './CoverLetterEditor'
import AdditionalDetails from './AdditionalDetails'
import ReviewSubmit from './ReviewSubmit'

const ApplyJob = () => {
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = React.useState(1)
    const [selectedResume, setSelectedResume] = React.useState(null)
    const [coverLetter, setCoverLetter] = React.useState('')
    const [expectedSalary, setExpectedSalary] = React.useState('')
    const [availableFrom, setAvailableFrom] = React.useState(null)

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <SelectResume selectedResume={selectedResume} setSelectedResume={setSelectedResume} />
            case 2:
                return <CoverLetterEditor coverLetter={coverLetter} setCoverLetter={setCoverLetter} />
            case 3:
                return <AdditionalDetails expectedSalary={expectedSalary} setExpectedSalary={setExpectedSalary} availableFrom={availableFrom} setAvailableFrom={setAvailableFrom} />
            case 4:
                return <ReviewSubmit selectedResume={selectedResume} coverLetter={coverLetter} expectedSalary={expectedSalary} availableFrom={availableFrom} />
            default:
                return <div>Unknown Step</div>
        }
    }

    return (
        <div className='min-w-4xl max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

            <Button className={"py-5"} variant='ghost' onClick={() => navigate(-1)}>
                <ArrowLeft className='h-4 w-4 mr-2' />
                Back to job
            </Button>

            <JobInfoCard job={job} />
            <ApplySteps currentStep={currentStep} />

            <div className='my-8'>{renderStep()}</div>
            <div className='flex items-center justify-between mr-2'>
                <Button disabled={currentStep === 1} variant='outline' onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}>
                    <ArrowLeft className='h-4 w-4 mr-2' />
                    Previous
                </Button>
                <Button disabled={currentStep === 4} onClick={() => setCurrentStep(prev => Math.min(prev + 1, 4))}>
                    Next
                    <ArrowLeft className='h-4 w-4 ml-2 rotate-180' />
                </Button>
            </div>
        </div>
    )
}

export default ApplyJob;
