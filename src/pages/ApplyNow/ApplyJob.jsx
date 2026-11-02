import React from 'react'
import { Button } from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import JobInfoCard from './JobInfoCard'
import { job } from '../user/jobs/DummyJob'
import ApplySteps from './ApplySteps'

const ApplyJob = () => {
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = React.useState(1)

    const renderStep = () => {
        // switch (currentStep) {
        //     case 1:
        //         return <div>Step 1</div>
        //     case 2:
        //         return <div>Step 2</div>
        //     case 3:
        //         return <div>Step 3</div>
        //     default:
        //         return <div>Unknown Step</div>
        // }
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
                <Button>
                    <ArrowLeft className='h-4 w-4 mr-2' />
                    Previous
                </Button>
                <Button>
                    Next
                    <ArrowLeft className='h-4 w-4 ml-2 rotate-180' />
                </Button>
            </div>
        </div>
    )
}

export default ApplyJob;
