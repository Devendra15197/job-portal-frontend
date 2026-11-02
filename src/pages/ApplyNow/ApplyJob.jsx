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
    return (
        <div className='min-w-4xl max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

            <Button className={"py-5"} variant='ghost' onClick={() => navigate(-1)}>
                <ArrowLeft className='h-4 w-4 mr-2' />
                Back to job
            </Button>

            <JobInfoCard job={job} />
            <ApplySteps currentStep={currentStep} />

            <div>
                s
            </div>

        </div>
    )
}

export default ApplyJob
