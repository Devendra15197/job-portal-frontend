import React from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowLeft } from 'lucide-react'

const JobDeatails = () => {
    return (
        <div className='p-8'>
            <Button variant='ghost'>
                <ArrowLeft />
                Back to jobs
            </Button>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

                {/* Main Content  */}
                <div>
                    left side
                </div>

                {/* Apply Card  */}
                <div className='border'>
                    right side
                </div>
            </div>
        </div>
    )
}

export default JobDeatails
