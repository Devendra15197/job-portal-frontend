import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import { SlidersHorizontal } from 'lucide-react'
import { Badge } from '../../../components/ui/badge'
import { Checkbox } from '../../../components/ui/checkbox'
import { Seperator } from '../../../components/ui/separator'
import { X } from 'lucide-react'

const JOB_TYPE = [
    { value: "FULL_TIME", label: "Full-time" },
    { value: "PART_TIME", label: "Part-time" },
    { value: "CONTRACT", label: "Contract" },
    { value: "INTERNSHIP", label: "Internship" },
    { value: "FREELANCE", label: "Freelance" },
    { value: "REMOTE", label: "Remote" }
]

const JobFilter = () => {
    return (

        <Card className='sticky top-20 border-slate-200'>
            <CardHeader className={"pb-3"}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <SlidersHorizontal className='h-4 w-4 text-slate-500' />
                        <CardTitle className='text-base'>Filters</CardTitle>
                        <Badge className='bg-brand text-white text-xs px-1.5 py-0.5 h-5'>4</Badge>
                    </div>

                    <div>
                        <Button variant='ghost' size='sm' className='h-7 text-xs text-slate-500 hover:text-red-600'>
                            <X className='h-3.5 w-3.5 mr-1' />
                            Clear All
                        </Button>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                {/* Job Type  */}
                <div>
                    <h4 className='text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2.5'>Job Type</h4>
                    <div className='space-y-2'>
                        {JOB_TYPE.map(({ value, label }) => (
                            <div className='flex items-center gap-2.5 cursor-pointer group' key={value}>
                                <Checkbox />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>

                </div>

                <Seperator />
                {/* work mode */}
                <div>
                    <h4 className='text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2.5'>Job Type</h4>
                    <div className='space-y-2'>
                        {JOB_TYPE.map(({ value, label }) => (
                            <div className='flex items-center gap-2.5 cursor-pointer group' key={value}>
                                <Checkbox />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </CardContent>
        </Card >

    )
}

export default JobFilter
