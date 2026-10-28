import React from 'react'
import { Card, CardContent } from '../../../components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Bookmark } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Briefcase } from 'lucide-react'
import { DollarSign } from 'lucide-react'
import { Clock } from 'lucide-react'
const JobCard = ({ job }) => {

    const location = [job.city, job.state, job.country].filter(Boolean).join(", ");

    return (
        <Card>
            <CardContent>
                <div className='flex items-start gap-4'>
                    {/* Company Logo  */}
                    <div>
                        <img className='h-16 w-16 object-fill rounded-xl' src={job.company?.logoUrl} alt="" />
                    </div>
                    <div className='flex-1 min-w-0'>
                        {/* Title Row + Bookmark  */}
                        <div className='flex items-start justify-between gap-4 mb-2'>
                            <div>
                                <h3 className='text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-1'>
                                    {job.title}</h3>
                                <div className='flex items-center gap-1.5 flex-wrap mt-0.5'>
                                    <span className='text-slate-700 font-medium text-sm'>
                                        {job.company?.name}
                                    </span>
                                    <CheckCircle2 className='h-4 w-4 fill-primary text-white shrink-0' />
                                    <span className='text-slate-400 text-sm'>.{job.company?.industryType}</span>
                                    <span className='text-slate-400 text-sm'>.{job.company?.companySize}</span>
                                </div>
                                <p className='text-slate-400 text-xs mt-0.5 italic'>
                                    {job.company?.tagline}
                                </p>
                            </div>
                            <Button variant='ghost'>
                                <Bookmark />
                            </Button>
                        </div>

                        {/* Job Details  */}
                        <div className='flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-slate-600 mb-4'>
                            <div className='flex items-center gap-1'>
                                <MapPin className='h-4 w-4 shrink-0' />
                                {location}
                            </div>
                            <div className='flex items-center gap-1'>
                                <Briefcase className='h-4 w-4 shrink-0' />
                                {job.jobType}
                            </div>
                            <div className='flex items-center gap-1'>
                                <DollarSign className='h-4 w-4 shrink-0' />
                                {job.minSalary}-{job.maxSalary}
                            </div>
                            <div className='flex items-center gap-1'>
                                <Clock className='h-4 w-4 shrink-0' />
                                Posted on {job.createdAt?.split("T")[0]}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default JobCard
