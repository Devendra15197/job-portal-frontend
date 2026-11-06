import { FileText } from 'lucide-react'
import React from 'react'
import { RadioGroup } from '../../components/ui/radio-group'
const resume = [1]

const SelectResume = ({ SelectedResume, setSelectedResume }) => {
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-slate-900 mb-2'>Select Resume</h2>
                <p className='text-slate-600'>Choose a resume to submit with your application.</p>
            </div>

            {resume.length === 0 ? (
                <div className='text-center py-12 text-slate-500'>
                    <FileText className='h-10 w-10 mx-auto mb-3 text-slate-300' />
                    <p className='font-medium'>No Resumes Found</p>
                    <p className='text-sm mt-1'>
                        <button >Create Resume</button>

                        Before Applying</p>

                </div>
            ) : (
                <RadioGroup value={SelectedResume} onValueChange={setSelectedResume}>
                    <div>
                        {resume.map((res) => (
                    </div>
                </RadioGroup>
            )}
        </div>
    )
}

export default SelectResume
