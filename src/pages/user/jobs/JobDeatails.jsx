import React from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { job } from './DummyJob'
import { CheckCircle2 } from 'lucide-react'
import { Bookmark } from 'lucide-react'
import { Users } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Briefcase } from 'lucide-react'
import { DollarSign } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Badge } from '../../../components/ui/badge'
import { Separator } from '../../../components/ui/separator'
import { Car } from 'lucide-react'

const JobDeatails = () => {
    const location = [job.city, job.state, job.country].filter(Boolean).join(", ");

    return (
        <div className='p-8'>
            <Button variant='ghost'>
                <ArrowLeft />
                Back to jobs
            </Button>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

                {/* Main Content  */}
                <div className='lg:col-span-2 space-y-6'>
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

                                    {/* Badges - Job Details  */}
                                    <div className='flex flex-wrap gap-2'>
                                        <Badge className={"bg-primary"}>{job.state}</Badge>
                                        <Badge variant='outline'>{job.experienceLevel}</Badge>
                                        <Badge variant='secondary'>{job.category?.name}</Badge>

                                        {job.skills.map((skill) => <Badge key={skill} variant='outline'>{skill.slug}</Badge>)}
                                    </div>

                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Description  */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                About the role
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-700 whitespace-pre-line leading-relaxed'>{job.description}</p>
                        </CardContent>
                    </Card>

                    {/* Responsibilities  */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Responsibilities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-700 whitespace-pre-line leading-relaxed'>{job.responsibilities}</p>
                        </CardContent>
                    </Card>
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
